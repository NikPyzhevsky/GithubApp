import { useState, useEffect, useRef } from "react";

type TimerProps = {
  initialSeconds: number;
  onTimerEnd: () => void;
};

type useTimerT = (params: TimerProps) => { seconds: number, pause: () => void, continueTimer: () => void, restart: () => void }

export const useTimer: useTimerT = ({
                                      initialSeconds, onTimerEnd = () => {
  }
                                    }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const timerRef = useRef<number | null>();

  const pause = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = undefined;
    }
  };

  const restart = () => {
    pause();
    setSeconds(initialSeconds);
    continueTimer()
  };


  const continueTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds - 1;
          if (newSeconds <= 0) {
            clearInterval(timerRef.current!);
            timerRef.current = undefined;
            onTimerEnd();
            restart();
            return 0;
          }
          return newSeconds;
        });
      }, 1000);
    }
  };


  useEffect(() => {
    continueTimer();
    return pause;
  }, []);

  return { seconds, pause, continueTimer, restart };
};
