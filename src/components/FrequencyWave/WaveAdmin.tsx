"use client";

import React, { useState, useEffect } from "react";
import FrequencyWave, { WaveConfig, defaultWaveConfig } from "./FrequencyWave";
import { wavePresets } from "./wavePresets";

// Simple hex to RGB string helper for dynamic color generation
function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : "255, 255, 255";
}

export default function WaveAdmin() {
  const [activePreset, setActivePreset] = useState<string>("Soft Original");
  const [config, setConfig] = useState<WaveConfig>(wavePresets["Soft Original"] || defaultWaveConfig);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [debouncedSpeed, setDebouncedSpeed] = useState(1);
  const [copyText, setCopyText] = useState("Kopier Innstillinger");
  const [customColor, setCustomColor] = useState("#ec4899");

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSpeed(speedMultiplier), 300);
    return () => clearTimeout(handler);
  }, [speedMultiplier]);

  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setActivePreset(val);
    if (val === "Custom") {
      applyCustomColor(customColor);
    } else if (wavePresets[val]) {
      setConfig({ ...wavePresets[val] });
      setSpeedMultiplier(1);
    }
  };

  const applyCustomColor = (hex: string) => {
    setActivePreset("Custom");
    setCustomColor(hex);
    const rgb = hexToRgb(hex);
    setConfig({
      ...config,
      colors: {
        grad1: [
          `rgba(${rgb}, 0.8)`,
          `rgba(${rgb}, 0.5)`,
          `rgba(${rgb}, 0.7)`,
          `rgba(${rgb}, 0.4)`,
        ],
        grad2: [
          `rgba(${rgb}, 0.6)`,
          `rgba(${rgb}, 0.4)`,
          `rgba(${rgb}, 0.5)`,
        ]
      }
    });
  };

  const currentConfig: WaveConfig = {
    ...config,
    durations: {
      path1: config.durations.path1 / debouncedSpeed,
      path2: config.durations.path2 / debouncedSpeed,
      line1: config.durations.line1 / debouncedSpeed,
      line2: config.durations.line2 / debouncedSpeed,
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(currentConfig, null, 2));
    setCopyText("Kopiert!");
    setTimeout(() => setCopyText("Kopier Innstillinger"), 2000);
  };

  return (
    <>
      <FrequencyWave config={currentConfig} key={JSON.stringify(currentConfig.durations)} />

      <div className="fixed bottom-4 right-4 z-50 bg-black/90 text-white p-6 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20 flex flex-col gap-4 w-80 font-sans">
        <h3 className="font-bold text-lg mb-2">🌊 Bølgekontrollpanel</h3>
        
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-neutral-300 uppercase">Forhåndsinnstillinger / Presets</label>
          <select 
            value={activePreset} 
            onChange={handlePresetChange}
            className="bg-neutral-800 border border-neutral-700 rounded-md p-2 text-sm text-white focus:outline-none focus:border-pink-500"
          >
            {Object.keys(wavePresets).map(key => (
              <option key={key} value={key}>{key}</option>
            ))}
            <option value="Custom">Custom (Skreddersydd)</option>
          </select>
        </div>

        {activePreset === "Custom" && (
          <div className="flex flex-col gap-1 py-1">
            <label className="text-xs font-semibold text-neutral-300 uppercase flex justify-between items-center">
              <span>Velg Basisfarge (Hex)</span>
              <span className="font-mono text-[10px]">{customColor}</span>
            </label>
            <div className="flex gap-2 items-center">
              <input 
                type="color" 
                value={customColor} 
                onChange={(e) => applyCustomColor(e.target.value)}
                className="w-10 h-10 p-1 bg-neutral-800 border border-neutral-700 rounded cursor-pointer"
              />
              <span className="text-xs text-neutral-400 leading-tight">Paletten genereres automatisk fra denne fargen.</span>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-neutral-300 uppercase flex justify-between">
            <span>Hastighet (Speed)</span>
            <span>{speedMultiplier.toFixed(1)}x</span>
          </label>
          <input 
            type="range" min="0.1" max="5" step="0.1" 
            value={speedMultiplier} 
            onChange={e => setSpeedMultiplier(parseFloat(e.target.value))}
            className="w-full accent-pink-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-neutral-300 uppercase flex justify-between">
            <span>Gjennomsiktighet (Opacity)</span>
            <span>{config.opacity.toFixed(2)}</span>
          </label>
          <input 
            type="range" min="0" max="1" step="0.05" 
            value={config.opacity} 
            onChange={e => setConfig({ ...config, opacity: parseFloat(e.target.value) })}
            className="w-full accent-pink-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-neutral-300 uppercase flex justify-between">
            <span>Størrelse (Scale Y)</span>
            <span>{config.scaleY.toFixed(2)}</span>
          </label>
          <input 
            type="range" min="0.5" max="3" step="0.1" 
            value={config.scaleY} 
            onChange={e => setConfig({ ...config, scaleY: parseFloat(e.target.value) })}
            className="w-full accent-pink-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-neutral-300 uppercase flex justify-between">
            <span>Y-posisjon (Translate Y)</span>
            <span>{config.translateY || 0}px</span>
          </label>
          <input 
            type="range" min="-300" max="300" step="5" 
            value={config.translateY || 0} 
            onChange={e => setConfig({ ...config, translateY: parseInt(e.target.value) })}
            className="w-full accent-pink-500"
          />
        </div>

        <button 
          onClick={handleCopy}
          className="mt-2 w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-xl transition-colors active:scale-95 text-sm"
        >
          {copyText}
        </button>
      </div>
    </>
  );
}
