import React, { ChangeEvent, useCallback } from "react";
import { Box } from "../Box";
import {
  BunnySlider,
  BarBackground,
  BarProgress,
  BunnyButt,
  StyledInput,
  SliderLabel,
  SliderLabelContainer,
} from "./styles";
import SliderProps from "./types";
import { Bar } from "../Progress/StyledProgress";

const generateTickMarks = () => {
  const tickMarks = [];
  for (let i = 0; i <= 100; i += 25) {
    tickMarks.push(
      <div key={i} style={{ position: "absolute", left: `${i}%`, height: "10px", width: "2px", backgroundColor: "black" }} />
    );
  }
  return tickMarks;
};

const Slider: React.FC<React.PropsWithChildren<SliderProps>> = ({
  name,
  min,
  max,
  value,
  onValueChanged,
  valueLabel,
  step = "any",
  disabled = false,
  ...props
}) => {
  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      onValueChanged(parseFloat(target.value));
    },
    [onValueChanged]
  );

  const progressPercentage = (value / max) * 100;
  const isMax = value === max;
  let progressWidth: string;
  if (progressPercentage <= 10) {
    progressWidth = `${progressPercentage }%`;
  } else if (progressPercentage >= 90) {
    progressWidth = `${progressPercentage}%`;
  } else if (progressPercentage >= 60) {
    progressWidth = `${progressPercentage}%`;
  } else {
    progressWidth = `${progressPercentage}%`;
  }
  const labelProgress = isMax ? "calc(100% - 12px)" : `${progressPercentage}%`;
  const displayValueLabel = isMax ? "MAX" : valueLabel;
  return (
    <Box position="relative" height="48px" {...props}>
      <BunnyButt disabled={disabled} />
      <BunnySlider>
      <BarBackground disabled={disabled}>
          {/* 구간별 세로 모양 작대기 추가 */}
          {generateTickMarks()}
        </BarBackground>
        <BarProgress style={{ width: progressWidth }} disabled={disabled} >
          </BarProgress>
        <StyledInput
          name={name}
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={handleChange}
          isMax={isMax}
          disabled={disabled}
        />
      </BunnySlider>
      {valueLabel && (
        <SliderLabelContainer>
          <SliderLabel progress={labelProgress}>{displayValueLabel}</SliderLabel>
        </SliderLabelContainer>
      )}
    </Box>
  );
};

export default Slider;
