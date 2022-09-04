import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import config from '@/shared/config';
import { useWeb3 } from '@/context/Web3Context';
import data from '@/shared/data/survey-sample.json';
import { STEP_SURVEY_ENUM, SurveyContextType } from './types';
import { useRouter } from 'next/router';
import ROUTES from '@/routes';

const { ETH_ROPSTEN_NETWORK_ID } = config;

const defaultContext: SurveyContextType = {
  title: '',
  image: '',
  startQuiz() {},
  step: STEP_SURVEY_ENUM.INIT,
  questions: [],
};

const SurveyContext = createContext<SurveyContextType>(defaultContext);

export const SurveyProvider = ({ children }: { children: ReactNode }) => {
  const { network, account } = useWeb3();
  const router = useRouter();
  const [step, setState] = useState<STEP_SURVEY_ENUM>(STEP_SURVEY_ENUM.INIT);

  const startQuiz = useCallback(() => {
    setState(STEP_SURVEY_ENUM.ANSWERING);
  }, []);

  useEffect(() => {
    if (
      !!account &&
      network?.chainId &&
      network?.chainId !== ETH_ROPSTEN_NETWORK_ID
    ) {
      router.push(ROUTES.DASHBOARD.path);
    }
  }, [account, network, network?.chainId, router]);

  const output = useMemo(() => {
    return {
      ...data,
      startQuiz,
      step,
    };
  }, [step, startQuiz]);

  return (
    <SurveyContext.Provider value={output}>{children}</SurveyContext.Provider>
  );
};

export const useSurvey = () => useContext(SurveyContext);
