import { useCallback, useEffect, useState } from 'react';

const ONE_SECOND = 1000;

let ref: any;

type Time = [
  () => void,
  {
    time: number;
    finishedTime: boolean;
    stopTime: () => void;
  },
];

export default function useTime(initialTime: number, startInit = false): Time {
  const [time, setTime] = useState<number>(initialTime ?? 0);

  const startTime = useCallback(() => {
    const onNext = () => {
      setTime((prev) => {
        const newTime = prev - 1;
        if (newTime === 0) return prev;
        startTime();
        return newTime;
      });
      onNext();
    };

    ref = setTimeout(() => {
      onNext();
    }, ONE_SECOND);
  }, []);

  const stopTime = useCallback(() => {
    clearTimeout(ref);
  }, []);

  useEffect(() => {
    if (startInit) {
      startTime();
    }
  }, [startInit, startTime]);

  useEffect(() => {
    setTime(initialTime);
  }, [initialTime]);

  return [startTime, { stopTime, time, finishedTime: time === 0 }];
}
