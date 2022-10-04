import { NextApiRequest, NextApiResponse } from 'next';

import * as surveys from '@/shared/data';

function getRandomNumberBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomTrivia = () => {
  const surveysKeys = Object.keys(surveys);
  const randomTrivia = getRandomNumberBetween(1, surveysKeys.length);
  return surveysKeys.find((quiz) => quiz === `survey${randomTrivia}`) ?? '';
};

export default function dailyTrivia(req: NextApiRequest, res: NextApiResponse) {
  const surveyName = getRandomTrivia();

  // @ts-ignore
  return res.status(200).json(surveys[surveyName]);
}
