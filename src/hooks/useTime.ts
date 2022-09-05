import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type Time = [
  () => void,
  {
    time: string;
    finishedTime: boolean;
    stopTime: () => void;
  },
];

const ONE_SECOND_IN_MS = 1000;
const ONE_MINUS = 60;
const ONE_HOUR = ONE_MINUS * 60;

export default function useTime(initialTime: number, startInit = false): Time {
  let intervalRef = useRef<Time>(null);
  const [time, setTime] = useState<number>(initialTime ?? 0);

  const stopTime = useCallback(() => {
    clearInterval(intervalRef.current as unknown as number);
  }, []);

  const startTime = useCallback(() => {
    stopTime();
    setTime(initialTime);
    const onNext = () => {
      setTime((prev) => {
        const newTime = prev - 1;
        if (newTime < 0) {
          return prev;
        }
        return newTime;
      });
    };

    // @ts-ignore
    intervalRef.current = setInterval(() => {
      onNext();
    }, ONE_SECOND_IN_MS);
  }, [initialTime, stopTime]);

  useEffect(() => {
    if (startInit) {
      startTime();
    }
  }, [startInit, startTime]);

  useEffect(() => {
    setTime(initialTime);
    return stopTime;
  }, [initialTime, stopTime]);

  const formatTime = useMemo<string>(() => {
    if (time <= ONE_MINUS) return `${time}s`;
    if (time <= ONE_HOUR) {
      const timeInDecimals = time / ONE_MINUS;
      const [minus, seconds] = timeInDecimals.toFixed(2).toString().split('.');
      return `${minus}:${seconds}s`;
    }

    const timeInDecimals = time / ONE_HOUR;
    const [hours, minus] = timeInDecimals.toFixed(2).toString().split('.');
    return `${hours}:${minus}m`;
  }, [time]);

  return [startTime, { stopTime, time: formatTime, finishedTime: time === 0 }];
}
