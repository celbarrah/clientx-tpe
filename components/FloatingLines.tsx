/**
 * FloatingLines — ReactBits WebGL background (Three.js)
 * Source: https://www.reactbits.dev/backgrounds/floating-lines
 */
"use client";

/* eslint-disable @typescript-eslint/no-require-imports */
import React from "react";

export interface FloatingLinesProps {
  linesGradient?: string[];
  enabledWaves?: ("top" | "middle" | "bottom")[];
  lineCount?: number | number[];
  lineDistance?: number | number[];
  topWavePosition?: { x?: number; y?: number; rotate?: number };
  middleWavePosition?: { x?: number; y?: number; rotate?: number };
  bottomWavePosition?: { x?: number; y?: number; rotate?: number };
  animationSpeed?: number;
  className?: string;
}

const _FloatingLines = require("./FloatingLines.jsx").default as React.ComponentType<FloatingLinesProps>;

export default function FloatingLines(props: FloatingLinesProps) {
  return <_FloatingLines {...props} />;
}
