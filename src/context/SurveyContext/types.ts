export type OptionQuestion = {
  text: string;
};

export type Question = {
  id: number;
  text: string;
  image: string;
  lifetimeSeconds: number;
  options: OptionQuestion[];
};

export enum STEP_SURVEY_ENUM {
  INIT,
  ANSWERING,
  END_ANSWERING,
  FINISH,
}

export type Answer = {
  question: string;
  questionId: number;
  image: string;
  answer: string;
  answerId: number;
};

export type Quiz = {
  id: number;
  title: string;
  image: string;
  questions: Question[];
};

export type SurveyContextType = {
  answers: Answer[];
  startQuiz: () => void;
  step: STEP_SURVEY_ENUM;
  survey: Quiz | null;
  isLoading: boolean;
  onCompletedSurvey: (answers: Answer[]) => void;
  onSubmitSurvey: () => Promise<{ data: any | null; error: null | string }>;
};
