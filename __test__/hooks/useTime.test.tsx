import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useTime from '@/hooks/useTime';

const ONE_SECOND = 1000;

describe('useTime hook', () => {
  let hook: any;

  beforeEach(() => {
    const { result } = renderHook(() => useTime(3));
    hook = result;
  });

  it('Start Time', () => {
    const [startTime, { time }] = hook.current;
    expect(time).toBe('3s');

    act(() => {
      startTime();
    });

    setTimeout(() => {
      expect(time).toBe('0s');
    }, ONE_SECOND * 3);
  });

  it('Restart time and Stop Time', () => {
    const [startTime, { time, stopTime }] = hook.current;

    act(() => {
      startTime();
    });

    expect(time).toBe('3s');

    setTimeout(() => {
      stopTime();
      expect(time).toBe('2s');
    }, ONE_SECOND);
  });

  it('Initial counter automatically', () => {
    const { result } = renderHook(() => useTime(3, true));
    const [_, { finishedTime }] = result.current;

    setTimeout(() => {
      expect(finishedTime).toBe(true);
    }, ONE_SECOND * 3);
  });
});
