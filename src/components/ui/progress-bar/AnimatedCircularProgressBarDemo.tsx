"use client";
import { useEffect, useState } from "react";
import { AnimatedCircularProgressBar } from "./AnimatedCircularProgressBar";

export function AnimatedCircularProgressBarDemo({
  className,
}: {
  className: string;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev === 100) {
        return 0;
      }
      return prev + 10;
    };
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedCircularProgressBar
      max={100}
      min={0}
      value={value}
      gaugePrimaryColor="#80eeb4"
      gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
      className={className}
    />
  );
}