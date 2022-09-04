export type OptionQuestion = {
  text: string;
};

export type Question = {
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

export type SurveyContextType = {
  title: string;
  image: string;
  startQuiz: () => void;
  step: STEP_SURVEY_ENUM,
  questions: Question[];
};
