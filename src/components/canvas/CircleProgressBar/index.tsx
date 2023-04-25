import type { SkiaValue } from "@shopify/react-native-skia";
import {
  BoxShadow,
  rect,
  rrect,
  Group,
  LinearGradient,
  translate,
  Circle,
  Skia,
  vec,
  Path,
  SweepGradient,
  useFont,
  Text,
  useComputedValue,
  Box, Canvas
} from "@shopify/react-native-skia";
import React, { memo } from "react";
import { useWindowDimensions } from "react-native";

const r1 = 85;
const path = Skia.Path.Make();
path.addCircle(12 + r1, 12 + r1, r1);
const c = vec(12 + r1, 12 + r1);

const fromCircle = (cx: number, cy: number, r: number) =>
  rrect(rect(cx - r, cy - r, 2 * r, 2 * r), r, r);

interface ProgressBarProps {
  progress: SkiaValue<{ value: number, seconds: number }>;
}

const colors = ["#2FB8FF", "#9EECD9"];

export const ProgressBar = memo(({ progress }: ProgressBarProps) => {
  const { width } = useWindowDimensions();
  const font = useFont(require("../../../../assets/SF-Mono-Semibold.otf"), 32);
  const text = useComputedValue(
    () => `${Math.round(progress.current.seconds)}c`,
    [progress]
  );
  if (font === null) {
    return null;
  }
  const textWidth = font.getTextWidth("10c");
  return (
    <Canvas style={{ width, height: 320 }}>
      <Group transform={translate({ x: width / 2 - 100, y: 60 })}>
        <Group>
          <LinearGradient
            start={vec(12, 12)}
            end={vec(200, 200)}
            colors={["#101113", "#2B2F33"]}
          />
          <Box box={fromCircle(12 + 85, 12 + 85, 85)}>
            <BoxShadow blur={65} color="#141415" />
            <BoxShadow blur={65} color="#485057" />
          </Box>
        </Group>
        <Box box={fromCircle(37 + 60, 37 + 60, 60)} color="#32363B">
          <BoxShadow
            blur={60}
            color="rgba(59, 68, 81, 0.5)"
            inner
          />
          <BoxShadow
            blur={80}
            color="rgba(0, 0, 0, 0.55)"
            inner
          />
        </Box>
        <Text
          x={c.x - textWidth / 2}
          y={c.y + font.getSize() / 2}
          font={font}
          text={text}
          color="white"
        />
        <Group>
          <SweepGradient c={vec(12 + r1, 12 + r1)} colors={colors} />
          <Path
            path={path}
            style="stroke"
            strokeWidth={15}
            end={progress.current.value}
            strokeCap="round"
          />
          <Circle cx={12 + 2 * r1} cy={12 + r1} r={15 / 2} color={colors[0]} />
        </Group>
      </Group>
    </Canvas>
  );
});
