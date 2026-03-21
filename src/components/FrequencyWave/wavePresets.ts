import { WaveConfig } from "./FrequencyWave";

export const wavePresets: Record<string, WaveConfig> = {
  "Soft Original": {
    colors: {
      grad1: [
        "rgba(253, 224, 211, 0.4)",
        "rgba(219, 39, 119, 0.4)",
        "rgba(244, 114, 182, 0.4)",
        "rgba(251, 146, 60, 0.5)",
      ],
      grad2: [
        "rgba(254, 205, 211, 0.6)",
        "rgba(200, 150, 200, 0.4)",
        "rgba(244, 63, 94, 0.5)",
      ],
    },
    durations: { path1: 16, path2: 22, line1: 13, line2: 17 },
    opacity: 1,
    scaleY: 1,
  },
  "Intense Sunset": {
    colors: {
      grad1: [
        "rgba(244, 63, 94, 0.85)",
        "rgba(219, 39, 119, 0.9)",
        "rgba(236, 72, 153, 0.9)",
        "rgba(249, 115, 22, 0.85)",
      ],
      grad2: [
        "rgba(251, 113, 133, 0.85)",
        "rgba(225, 29, 72, 0.8)",
        "rgba(251, 146, 60, 0.9)",
      ],
    },
    durations: { path1: 16, path2: 22, line1: 13, line2: 17 },
    opacity: 1,
    scaleY: 1,
  },
  "Ocean Blue": {
    colors: {
      grad1: [
        "rgba(14, 165, 233, 0.6)",
        "rgba(56, 189, 248, 0.5)",
        "rgba(96, 165, 250, 0.6)",
        "rgba(59, 130, 246, 0.5)",
      ],
      grad2: [
        "rgba(2, 132, 199, 0.6)",
        "rgba(125, 211, 252, 0.5)",
        "rgba(37, 99, 235, 0.6)",
      ],
    },
    durations: { path1: 18, path2: 24, line1: 15, line2: 18 },
    opacity: 1,
    scaleY: 1,
  },
  "Cyberpunk": {
    colors: {
      grad1: [
        "rgba(168, 85, 247, 0.8)",
        "rgba(217, 70, 239, 0.8)",
        "rgba(236, 72, 153, 0.8)",
        "rgba(34, 211, 238, 0.8)",
      ],
      grad2: [
        "rgba(147, 51, 234, 0.9)",
        "rgba(192, 38, 211, 0.8)",
        "rgba(6, 182, 212, 0.9)",
      ],
    },
    durations: { path1: 12, path2: 16, line1: 10, line2: 13 },
    opacity: 1,
    scaleY: 1.2,
  },
  "Midnight Aura": {
    colors: {
      grad1: [
        "rgba(30, 58, 138, 0.7)",
        "rgba(49, 46, 129, 0.8)",
        "rgba(88, 28, 135, 0.7)",
        "rgba(76, 29, 149, 0.8)",
      ],
      grad2: [
        "rgba(23, 37, 84, 0.8)",
        "rgba(59, 7, 100, 0.7)",
        "rgba(15, 23, 42, 0.8)",
      ],
    },
    durations: { path1: 25, path2: 30, line1: 20, line2: 25 },
    opacity: 0.9,
    scaleY: 1,
  },
  "Neon Forest": {
    colors: {
      grad1: [
        "rgba(34, 197, 94, 0.7)",
        "rgba(20, 184, 166, 0.7)",
        "rgba(16, 185, 129, 0.7)",
        "rgba(132, 204, 22, 0.7)",
      ],
      grad2: [
        "rgba(21, 128, 61, 0.8)",
        "rgba(15, 118, 110, 0.7)",
        "rgba(101, 163, 13, 0.8)",
      ],
    },
    durations: { path1: 16, path2: 22, line1: 13, line2: 17 },
    opacity: 1,
    scaleY: 1,
  },
  "Ethereal Ghost": {
    colors: {
      grad1: [
        "rgba(255, 255, 255, 0.3)",
        "rgba(241, 245, 249, 0.2)",
        "rgba(226, 232, 240, 0.3)",
        "rgba(248, 250, 252, 0.2)",
      ],
      grad2: [
        "rgba(203, 213, 225, 0.3)",
        "rgba(255, 255, 255, 0.2)",
        "rgba(226, 232, 240, 0.3)",
      ],
    },
    durations: { path1: 30, path2: 40, line1: 25, line2: 35 },
    opacity: 0.6,
    scaleY: 0.8,
  },
  "Molten Core": {
    colors: {
      grad1: [
        "rgba(220, 38, 38, 0.9)",
        "rgba(239, 68, 68, 0.8)",
        "rgba(249, 115, 22, 0.9)",
        "rgba(234, 179, 8, 0.8)",
      ],
      grad2: [
        "rgba(185, 28, 28, 0.9)",
        "rgba(194, 65, 12, 0.8)",
        "rgba(202, 138, 4, 0.9)",
      ],
    },
    durations: { path1: 10, path2: 14, line1: 8, line2: 11 },
    opacity: 1,
    scaleY: 1.1,
  },
  "Liquid Gold": {
    colors: {
      grad1: [
        "rgba(250, 204, 21, 0.7)",
        "rgba(253, 224, 71, 0.6)",
        "rgba(252, 211, 77, 0.7)",
        "rgba(251, 191, 36, 0.6)",
      ],
      grad2: [
        "rgba(234, 179, 8, 0.7)",
        "rgba(250, 204, 21, 0.6)",
        "rgba(245, 158, 11, 0.7)",
      ],
    },
    durations: { path1: 20, path2: 25, line1: 18, line2: 22 },
    opacity: 1,
    scaleY: 1,
  },
  "High Speed Glitch": {
    colors: {
      grad1: [
        "rgba(239, 68, 68, 0.9)",
        "rgba(59, 130, 246, 0.9)",
        "rgba(16, 185, 129, 0.9)",
        "rgba(236, 72, 153, 0.9)",
      ],
      grad2: [
        "rgba(220, 38, 38, 0.9)",
        "rgba(37, 99, 235, 0.9)",
        "rgba(5, 150, 105, 0.9)",
      ],
    },
    durations: { path1: 3, path2: 4, line1: 2, line2: 3 },
    opacity: 1,
    scaleY: 1.3,
  },
  "Silver Mist": {
    colors: {
      grad1: [
        "rgba(241, 245, 249, 0.7)",
        "rgba(203, 213, 225, 0.6)",
        "rgba(148, 163, 184, 0.7)",
        "rgba(226, 232, 240, 0.6)",
      ],
      grad2: [
        "rgba(100, 116, 139, 0.6)",
        "rgba(148, 163, 184, 0.5)",
        "rgba(203, 213, 225, 0.6)",
      ],
    },
    durations: { path1: 20, path2: 26, line1: 18, line2: 24 },
    opacity: 0.8,
    scaleY: 1,
  },
  "Graphite Dark": {
    colors: {
      grad1: [
        "rgba(71, 85, 105, 0.8)",
        "rgba(51, 65, 85, 0.7)",
        "rgba(30, 41, 59, 0.8)",
        "rgba(15, 23, 42, 0.7)",
      ],
      grad2: [
        "rgba(30, 41, 59, 0.7)",
        "rgba(71, 85, 105, 0.6)",
        "rgba(100, 116, 139, 0.8)",
      ],
    },
    durations: { path1: 15, path2: 20, line1: 12, line2: 16 },
    opacity: 0.9,
    scaleY: 1,
  },
  "Monochrome Tech": {
    colors: {
      grad1: [
        "rgba(229, 231, 235, 0.5)",
        "rgba(156, 163, 175, 0.6)",
        "rgba(75, 85, 99, 0.5)",
        "rgba(31, 41, 55, 0.6)",
      ],
      grad2: [
        "rgba(107, 114, 128, 0.6)",
        "rgba(209, 213, 219, 0.5)",
        "rgba(243, 244, 246, 0.7)",
      ],
    },
    durations: { path1: 18, path2: 22, line1: 15, line2: 19 },
    opacity: 1,
    scaleY: 1.1,
  },
  "OKK1": {
    colors: {
      grad1: [
        "rgba(253, 224, 211, 0.55)",
        "rgba(219, 39, 119, 0.5)",
        "rgba(244, 114, 182, 0.5)",
        "rgba(251, 146, 60, 0.6)"
      ],
      grad2: [
        "rgba(254, 205, 211, 0.7)",
        "rgba(200, 150, 200, 0.5)",
        "rgba(244, 63, 94, 0.6)"
      ]
    },
    durations: { path1: 12, path2: 16, line1: 9, line2: 12 },
    opacity: 1,
    scaleY: 0.9,
    translateY: -15,
    threadCount: 7,
    threadOpacity: 1,
    threadColor: "#ec4899",
    phaseSpread: 50,
    auraIntensity: 70,
    maskWidth: 60,
  },
  "OKK2": {
    colors: {
      grad1: [
        "rgba(253, 224, 211, 0.55)",
        "rgba(219, 39, 119, 0.5)",
        "rgba(244, 114, 182, 0.5)",
        "rgba(251, 146, 60, 0.6)"
      ],
      grad2: [
        "rgba(254, 205, 211, 0.7)",
        "rgba(200, 150, 200, 0.5)",
        "rgba(244, 63, 94, 0.6)"
      ]
    },
    durations: { path1: 12, path2: 16, line1: 9, line2: 12 },
    opacity: 1,
    scaleY: 0.9,
    translateY: -15,
    threadCount: 7,
    threadOpacity: 1,
    threadColor: "#ec4899",
    phaseSpread: 50,
    auraIntensity: 70,
    maskWidth: 28,
  },
};
