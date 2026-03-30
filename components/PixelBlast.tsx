"use client";
/* eslint-disable @typescript-eslint/no-require-imports */
import React from "react";

export interface PixelBlastProps {
  variant?: "square" | "circle" | "triangle" | "diamond";
  pixelSize?: number;
  color?: string;
  patternScale?: number;
  patternDensity?: number;
  liquid?: boolean;
  rippleIntensityScale?: number;
  rippleThickness?: number;
  rippleSpeed?: number;
  speed?: number;
  transparent?: boolean;
  edgeFade?: number;
  noiseAmount?: number;
  className?: string;
  style?: React.CSSProperties;
}

const _PB = require("./PixelBlast.jsx").default as React.ComponentType<PixelBlastProps>;

export default function PixelBlast(props: PixelBlastProps) {
  return <_PB {...props} />;
}
