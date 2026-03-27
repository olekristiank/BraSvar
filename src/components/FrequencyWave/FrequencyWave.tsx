"use client";

import React from "react";
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
  // New dynamic thread controls
  threadCount?: number;       // 1-10, how many threads to render
  threadOpacity?: number;     // 0-1, overall thread visibility
  threadColor?: string;       // hex color for thread strokes
  phaseSpread?: number;       // 0-100, how offset phases are from each other
  auraIntensity?: number;     // 0-100, how strong the gradient blob auras are
  maskWidth?: number;         // 20-100, how wide the radial mask extends
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
  brightness: 100,
  threadCount: 7,
  threadOpacity: 1,
  threadColor: "#ec4899",
  phaseSpread: 50,
  auraIntensity: 70,
  maskWidth: 60,
};

/** Convert hex to {r,g,b} */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : { r: 236, g: 72, b: 153 };
}

/**
 * Thread config: each thread has a unique speed multiplier, amplitude, frequency, 
 * phase offset, stroke width, and opacity. Up to 10 threads.
 */
const THREAD_DEFS = [
  { speedMul: 1.0,  amp: 100, freq: 1, phaseY: 0,   sw: 2.5, op: 1.0 },
  { speedMul: 1.3,  amp: 110, freq: 1, phaseY: -10,  sw: 2.0, op: 0.9 },
  { speedMul: 0.75, amp: 80,  freq: 1.5, phaseY: -5,  sw: 1.8, op: 0.8 },
  { speedMul: 1.5,  amp: 90,  freq: 1, phaseY: 5,   sw: 1.5, op: 0.7 },
  { speedMul: 0.6,  amp: 60,  freq: 2, phaseY: 0,   sw: 1.2, op: 0.65 },
  { speedMul: 0.85, amp: 70,  freq: 1, phaseY: -2,  sw: 1.5, op: 0.5 },
  { speedMul: 0.5,  amp: 40,  freq: 3, phaseY: 0,   sw: 0.8, op: 0.5 },
  { speedMul: 1.1,  amp: 95,  freq: 1, phaseY: 8,   sw: 1.0, op: 0.45 },
  { speedMul: 0.7,  amp: 50,  freq: 2.5, phaseY: -3, sw: 0.9, op: 0.4 },
  { speedMul: 0.4,  amp: 35,  freq: 4, phaseY: 2,   sw: 0.7, op: 0.35 },
];

/** Generate animated SVG path `values` for a thread based on its params */
function generateWaveValues(
  amp: number,
  freq: number,
  phaseY: number,
  phaseSpread: number,
): string {
  const cy = 200 + phaseY;
  const spread = (phaseSpread / 50); // 0-2 multiplier
  const a = amp * spread;
  
  if (freq >= 3) {
    // High frequency: 6 control points
    const seg = 1440 / 6;
    const p1 = `M0,${cy} C${seg * 0.5},${cy - a} ${seg * 1},${cy + a} ${seg * 1.5},${cy} C${seg * 2},${cy - a} ${seg * 2.5},${cy + a} ${seg * 3},${cy} C${seg * 3.5},${cy - a} ${seg * 4},${cy + a} ${seg * 4.5},${cy} C${seg * 5},${cy - a} ${seg * 5.5},${cy + a} ${seg * 6},${cy}`;
    const p2 = `M0,${cy} C${seg * 0.5},${cy + a} ${seg * 1},${cy - a} ${seg * 1.5},${cy} C${seg * 2},${cy + a} ${seg * 2.5},${cy - a} ${seg * 3},${cy} C${seg * 3.5},${cy + a} ${seg * 4},${cy - a} ${seg * 4.5},${cy} C${seg * 5},${cy + a} ${seg * 5.5},${cy - a} ${seg * 6},${cy}`;
    return `${p1};${p2};${p1}`;
  } else if (freq >= 2) {
    // Medium frequency: 4 control points
    const p1 = `M0,${cy} C180,${cy - a} 360,${cy + a} 540,${cy} C720,${cy - a} 900,${cy + a} 1080,${cy} C1260,${cy - a} 1350,${cy + a} 1440,${cy}`;
    const p2 = `M0,${cy} C180,${cy + a} 360,${cy - a} 540,${cy} C720,${cy + a} 900,${cy - a} 1080,${cy} C1260,${cy + a} 1350,${cy - a} 1440,${cy}`;
    return `${p1};${p2};${p1}`;
  } else {
    // Low frequency: standard 2 humps
    const p1 = `M0,${cy} C240,${cy - a} 480,${cy + a} 720,${cy} C960,${cy - a} 1200,${cy + a} 1440,${cy}`;
    const p2 = `M0,${cy} C240,${cy + a} 480,${cy - a} 720,${cy} C960,${cy + a} 1200,${cy - a} 1440,${cy}`;
    return `${p1};${p2};${p1}`;
  }
}

export default function FrequencyWave({ config = defaultWaveConfig }: { config?: WaveConfig }) {
  const filterString = `hue-rotate(${config.hueRotate || 0}deg) saturate(${config.saturate === undefined ? 100 : config.saturate}%) brightness(${config.brightness === undefined ? 100 : config.brightness}%)`;

  const d = config.durations;
  const threadCount = Math.min(10, Math.max(1, config.threadCount ?? 7));
  const threadOpacity = config.threadOpacity ?? 1;
  const threadColor = config.threadColor ?? "#ec4899";
  const phaseSpread = config.phaseSpread ?? 50;
  const auraIntensity = (config.auraIntensity ?? 70) / 100;

  const maskWidth = config.maskWidth ?? 60;
  const { r, g, b } = hexToRgb(threadColor);
  
  // Derive a lighter shade for variety
  const lr = Math.min(255, r + 40);
  const lg = Math.min(255, g + 40);
  const lb = Math.min(255, b + 40);

  // Dynamic mask – solid core at 30% of maskWidth, fade to transparent at maskWidth
  const maskCore = Math.round(maskWidth * 0.4);
  const maskStyle = `radial-gradient(ellipse 90% 80% at center, black ${maskCore}%, transparent ${maskWidth}%)`;

  return (
    <div 
      className={styles.waveContainer} 
      style={{ 
        opacity: config.opacity, 
        transform: `translate(-50%, calc(-50% + ${config.translateY || 0}px)) scaleY(${config.scaleY}) translateZ(0)`,
        filter: filterString,
        WebkitMaskImage: maskStyle,
        maskImage: maskStyle,
      }}
    >
      <svg
        key={`svg-${d.path1}-${d.line1}-${threadCount}-${phaseSpread}`}
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        className={styles.waveSvg}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Aura blob gradients */}
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

          {/* Dynamic thread gradient – derived from threadColor */}
          <linearGradient id="threadGradA" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={`rgba(${r},${g},${b}, 0)`} />
            <stop offset="20%" stopColor={`rgba(${r},${g},${b}, 0.35)`} />
            <stop offset="50%" stopColor={`rgba(${r},${g},${b}, 0.55)`} />
            <stop offset="80%" stopColor={`rgba(${r},${g},${b}, 0.35)`} />
            <stop offset="100%" stopColor={`rgba(${r},${g},${b}, 0)`} />
          </linearGradient>
          <linearGradient id="threadGradB" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={`rgba(${lr},${lg},${lb}, 0)`} />
            <stop offset="25%" stopColor={`rgba(${lr},${lg},${lb}, 0.25)`} />
            <stop offset="50%" stopColor={`rgba(${lr},${lg},${lb}, 0.4)`} />
            <stop offset="75%" stopColor={`rgba(${lr},${lg},${lb}, 0.25)`} />
            <stop offset="100%" stopColor={`rgba(${lr},${lg},${lb}, 0)`} />
          </linearGradient>
          <linearGradient id="threadGradW" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255, 0)" />
            <stop offset="30%" stopColor="rgba(255,255,255, 0.35)" />
            <stop offset="50%" stopColor="rgba(255,255,255, 0.6)" />
            <stop offset="70%" stopColor="rgba(255,255,255, 0.35)" />
            <stop offset="100%" stopColor="rgba(255,255,255, 0)" />
          </linearGradient>
        </defs>

        {/* ═══ AURA BLOBS ═══ */}
        <g opacity={auraIntensity}>
          <path fill="url(#meshGrad1)">
            <animate
              attributeName="d"
              dur={`${d.path1}s`}
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
              dur={`${d.path2}s`}
              repeatCount="indefinite"
              values="
                M0,200 C300,100 500,350 720,200 C940,50 1140,300 1440,200 L1440,400 L0,400 Z;
                M0,200 C300,300 500,50 720,200 C940,350 1140,100 1440,200 L1440,400 L0,400 Z;
                M0,200 C300,100 500,350 720,200 C940,50 1140,300 1440,200 L1440,400 L0,400 Z
              "
            />
          </path>
        </g>

        {/* ═══ DYNAMIC THREADS ═══ */}
        <g opacity={threadOpacity}>
          {THREAD_DEFS.slice(0, threadCount).map((td, i) => {
            const gradId = i % 3 === 0 ? 'threadGradA' : i % 3 === 1 ? 'threadGradB' : 'threadGradW';
            const dur = d.line1 * td.speedMul;
            const waveValues = generateWaveValues(td.amp, td.freq, td.phaseY * (phaseSpread / 50), phaseSpread);
            
            return (
              <path
                key={i}
                fill="none"
                stroke={`url(#${gradId})`}
                strokeWidth={td.sw}
                opacity={td.op}
              >
                <animate
                  attributeName="d"
                  dur={`${dur}s`}
                  repeatCount="indefinite"
                  values={waveValues}
                />
              </path>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
