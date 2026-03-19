"use client";

import React, { useEffect, useState } from "react";
import styles from "./FrequencyWave.module.css";

export type WaveColors = {
  grad1: string[];
  grad2: string[];
};

export type WaveConfig = {
  colors: WaveColors;
  durations: {
    path1: number;
    path2: number;
    line1: number;
    line2: number;
  };
  opacity: number;
  scaleY: number;
  translateY?: number;
  hueRotate?: number;
  saturate?: number;
  brightness?: number;
};

export const defaultWaveConfig: WaveConfig = {
  colors: {
    grad1: [
      "rgba(253, 224, 211, 0.4)",
      "rgba(219, 39, 119, 0.4)",
      "rgba(244, 114, 182, 0.4)",
      "rgba(251, 146, 60, 0.5)"
    ],
    grad2: [
      "rgba(254, 205, 211, 0.6)",
      "rgba(200, 150, 200, 0.4)",
      "rgba(244, 63, 94, 0.5)"
    ]
  },
  durations: {
    path1: 16,
    path2: 22,
    line1: 13,
    line2: 17
  },
  opacity: 1,
  scaleY: 1,
  hueRotate: 0,
  saturate: 100,
  brightness: 100
};

export default function FrequencyWave({ config = defaultWaveConfig }: { config?: WaveConfig }) {
  const filterString = `hue-rotate(${config.hueRotate || 0}deg) saturate(${config.saturate === undefined ? 100 : config.saturate}%) brightness(${config.brightness === undefined ? 100 : config.brightness}%)`;

  return (
    <div 
      className={styles.waveContainer} 
      style={{ 
        opacity: config.opacity, 
        // Restore the -50% -50% translation so it sits perfectly in the middle of the logo
        transform: `translate(-50%, calc(-50% + ${config.translateY || 0}px)) scaleY(${config.scaleY}) translateZ(0)`,
        filter: filterString
      }}
    >
      <svg
        key={`svg-dur-${config.durations.path1}`} // Force SVG to perfectly restart when speed changes
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        className={styles.waveSvg}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="meshGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            {config.colors.grad1.map((color, i) => (
              <stop key={i} offset={`${(i / (config.colors.grad1.length - 1)) * 100}%`} stopColor={color} />
            ))}
          </linearGradient>
          <linearGradient id="meshGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            {config.colors.grad2.map((color, i) => (
              <stop key={i} offset={`${(i / (config.colors.grad2.length - 1)) * 100}%`} stopColor={color} />
            ))}
          </linearGradient>
          <linearGradient id="meshLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
          </linearGradient>
          <linearGradient id="meshLineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.9)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>
        </defs>

        {/* Soft thick gradient fills representing the mesh aura */}
        <path fill="url(#meshGrad1)">
          <animate
            attributeName="d"
            dur={`${config.durations.path1}s`}
            repeatCount="indefinite"
            values="
              M0,200 C240,320 480,80 720,200 C960,320 1200,80 1440,200 L1440,400 L0,400 Z;
              M0,200 C240,80 480,320 720,200 C960,80 1200,320 1440,200 L1440,400 L0,400 Z;
              M0,200 C240,320 480,80 720,200 C960,320 1200,80 1440,200 L1440,400 L0,400 Z
            "
          />
        </path>

        <path fill="url(#meshGrad2)" style={{ mixBlendMode: 'multiply' }}>
          <animate
            attributeName="d"
            dur={`${config.durations.path2}s`}
            repeatCount="indefinite"
            values="
              M0,200 C300,100 500,350 720,200 C940,50 1140,300 1440,200 L1440,400 L0,400 Z;
              M0,200 C300,300 500,50 720,200 C940,350 1140,100 1440,200 L1440,400 L0,400 Z;
              M0,200 C300,100 500,350 720,200 C940,50 1140,300 1440,200 L1440,400 L0,400 Z
            "
          />
        </path>

        {/* The delicate thin intersecting sine waves on top mimicking the mockups thin sweeping lines */}
        <path fill="none" stroke="url(#meshLineGrad)" strokeWidth="1.5">
          <animate
            attributeName="d"
            dur={`${config.durations.line1}s`}
            repeatCount="indefinite"
            values="
              M0,200 C250,50 450,350 720,200 C990,50 1190,350 1440,200;
              M0,200 C250,350 450,50 720,200 C990,350 1190,50 1440,200;
              M0,200 C250,50 450,350 720,200 C990,50 1190,350 1440,200
            "
          />
        </path>
        <path fill="none" stroke="url(#meshLineGrad2)" strokeWidth="2">
          <animate
            attributeName="d"
            dur={`${config.durations.line2}s`}
            repeatCount="indefinite"
            values="
              M0,200 C300,350 420,50 720,200 C1020,350 1140,50 1440,200;
              M0,200 C300,50 420,350 720,200 C1020,50 1140,350 1440,200;
              M0,200 C300,350 420,50 720,200 C1020,350 1140,50 1440,200
            "
          />
        </path>
      </svg>
    </div>
  );
}
