import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Contract } from 'ethers';
import { useRouter } from 'next/router';

import ROUTES from '@/routes';
import { useWeb3 } from '@/context/Web3Context';
import { ETH_ROPSTEN_NETWORK_ID, surveyToken } from '@/config';
import { Answer, Quiz, STEP_SURVEY_ENUM, SurveyContextType } from './types';
import abi from '@/config/abi.json';

const defaultContext: SurveyContextType = {
  answers: [],
  startQuiz() {},
  isLoading: true,
  async onSubmitSurvey() {
    return { data: null, error: null };
  },
  onCompletedSurvey() {},
  step: STEP_SURVEY_ENUM.INIT,
  survey: null,
};

const SurveyContext = createContext<SurveyContextType>(defaultContext);

export const SurveyProvider = ({ children }: { children: ReactNode }) => {
  // hooks
  const router = useRouter();
  const { network, account, provider } = useWeb3();

  // states
  const [answers, setAnswer] = useState<Answer[]>([]);
  const [data, setData] = useState<Quiz | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [step, setStep] = useState<STEP_SURVEY_ENUM>(STEP_SURVEY_ENUM.INIT);

  // callbacks
  const startQuiz = useCallback(() => {
    setStep(STEP_SURVEY_ENUM.ANSWERING);
  }, []);

  const onCompletedSurvey = useCallback((answers: Answer[]) => {
    setAnswer(answers);
    setStep(STEP_SURVEY_ENUM.END_ANSWERING);
  }, []);

  const onSubmitSurvey = useCallback(async () => {
    const signer = provider?.getSigner();
    const contract = new Contract(surveyToken, abi, signer);
    try {
      const res = await contract.submit(
        data?.id,
        answers.map((answer) => answer.answerId),
      );
      return {
        data: res,
        error: null,
      };
    } catch (e) {
      console.log(e);
      return {
        data: null,
        // @ts-ignore
        error: e?.reason || e?.message,
      };
    }
  }, [answers, data?.id, provider]);

  const fetchDailyTrivia = useCallback(async () => {
    try {
      const response = await fetch('/api/daily-trivia');
      return await response.json();
    } catch (e) {
      console.log(e);
      return null;
    }
  }, []);

  // effects
  useEffect(() => {
    const ref = setTimeout(() => {
      if (
        !!account &&
        network?.chainId &&
        network?.chainId !== ETH_ROPSTEN_NETWORK_ID
      ) {
        router.push(ROUTES.DASHBOARD.path);
      }
    }, 1000);

    return () => clearTimeout(ref);
  }, [account, network, network?.chainId, router]);

  useEffect(() => {
    fetchDailyTrivia().then((trivia) => {
      trivia && setData(trivia);
      setLoading(false);
    });
  }, [fetchDailyTrivia]);

  // outputs
  const output = useMemo(() => {
    return {
      survey: data,
      startQuiz,
      answers,
      step,
      isLoading,
      onSubmitSurvey,
      onCompletedSurvey,
    };
  }, [
    data,
    startQuiz,
    answers,
    step,
    onCompletedSurvey,
    isLoading,
    onSubmitSurvey,
  ]);

  return (
    <SurveyContext.Provider value={output}>{children}</SurveyContext.Provider>
  );
};

export const useSurvey = () => useContext(SurveyContext);
