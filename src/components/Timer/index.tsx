import React, { FC, memo, useCallback, useEffect } from "react";
import { Button } from "react-native";
import { useTimer } from "../../hooks";
import { useFocusEffect } from "@react-navigation/native";
import { ProgressBar } from "../canvas";
import { useComputedValue } from "@shopify/react-native-skia";
import { COUNTDOWN } from "./constants";

type TimerProps = {
  onTimerEnd: () => void;
  isLoading: boolean;
}


const TimerComponent: FC<TimerProps> = ({ onTimerEnd, isLoading }) => {
  const { seconds, pause, continueTimer, restart } = useTimer({
    initialSeconds: COUNTDOWN,
    onTimerEnd
  });

  useFocusEffect(
    useCallback(() => {
      continueTimer();

      return () => pause();
    }, [])
  );

  useEffect(() => {
    if (isLoading) pause();
    else restart();
  }, [isLoading]);

  const progress = useComputedValue(() => ({
    value: seconds / COUNTDOWN, seconds
  }), [seconds]);


  return (
    <>
      <ProgressBar progress={progress} />
      <Button title="Restart Timer" onPress={restart} />
      <Button title="Pause Timer" onPress={pause} />
      <Button title="Continue Timer" onPress={continueTimer} />
    </>
  );
};

export const Timer = memo(TimerComponent);

