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
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        className={styles.waveSvg}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="freqGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.45)" />  {/* #3b82f6 */}
            <stop offset="30%" stopColor="rgba(168, 85, 247, 0.35)" /> {/* #a855f7 */}
            <stop offset="70%" stopColor="rgba(236, 72, 153, 0.4)" />  {/* #ec4899 */}
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.45)" />
          </linearGradient>
          <linearGradient id="freqGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(244, 63, 94, 0.3)" />    {/* #f43f5e */}
            <stop offset="50%" stopColor="rgba(249, 115, 22, 0.4)" />  {/* #f97316 */}
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
          </linearGradient>
          
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Deep, slow thick wave */}
        <path fill="url(#freqGrad1)" style={{ mixBlendMode: 'multiply' }}>
          <animate
            attributeName="d"
            dur="14s"
            repeatCount="indefinite"
            values="
              M0,300 C240,480 480,120 720,300 C960,480 1200,120 1440,300 L1440,600 L0,600 Z;
              M0,300 C240,120 480,480 720,300 C960,120 1200,480 1440,300 L1440,600 L0,600 Z;
              M0,300 C240,480 480,120 720,300 C960,480 1200,120 1440,300 L1440,600 L0,600 Z
            "
          />
        </path>

        {/* Thinner, vivid high-frequency wave */}
        <path fill="none" stroke="url(#freqGrad2)" strokeWidth="4" filter="url(#glow)">
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,300 Q180,150 360,300 T720,300 T1080,300 T1440,300;
              M0,300 Q180,450 360,300 T720,300 T1080,300 T1440,300;
              M0,300 Q180,150 360,300 T720,300 T1080,300 T1440,300
            "
          />
        </path>

        {/* Middle sweeping wave */}
        <path fill="url(#freqGrad2)" style={{ mixBlendMode: 'multiply' }}>
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,300 C200,180 400,420 720,300 C1040,180 1240,420 1440,300 L1440,600 L0,600 Z;
              M0,300 C200,420 400,180 720,300 C1040,420 1240,180 1440,300 L1440,600 L0,600 Z;
              M0,300 C200,180 400,420 720,300 C1040,180 1240,420 1440,300 L1440,600 L0,600 Z
            "
          />
        </path>
        
        {/* Core frequency line (thin sharp white/cyan core) */}
        <path fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2">
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,300 Q120,200 240,300 T480,300 T720,300 T960,300 T1200,300 T1440,300;
              M0,300 Q120,400 240,300 T480,300 T720,300 T960,300 T1200,300 T1440,300;
              M0,300 Q120,200 240,300 T480,300 T720,300 T960,300 T1200,300 T1440,300
            "
          />
        </path>
      </svg>
    </div>
  );
}
