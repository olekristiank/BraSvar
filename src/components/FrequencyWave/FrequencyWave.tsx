"use client";

import React, { useEffect, useState } from "react";
import styles from "./FrequencyWave.module.css";

export default function FrequencyWave() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className={styles.waveContainer}>
      <svg
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        className={styles.waveSvg}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="meshGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(253, 224, 211, 0.5)" />   /* Peach */
            <stop offset="30%" stopColor="rgba(244, 162, 216, 0.5)" />  /* Pink */
            <stop offset="70%" stopColor="rgba(244, 162, 216, 0.4)" />
            <stop offset="100%" stopColor="rgba(191, 219, 254, 0.6)" /> /* Blue */
          </linearGradient>
          <linearGradient id="meshGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(254, 205, 211, 0.6)" />   /* Rose */
            <stop offset="50%" stopColor="rgba(200, 150, 200, 0.4)" />  /* Purple tint */
            <stop offset="100%" stopColor="rgba(147, 197, 253, 0.7)" /> /* Blue tint */
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
            dur="16s"
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
            dur="22s"
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
            dur="13s"
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
            dur="17s"
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
