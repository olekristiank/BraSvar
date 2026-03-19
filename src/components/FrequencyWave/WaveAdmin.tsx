"use client";

import React, { useState, useEffect } from "react";
import FrequencyWave, { WaveConfig, defaultWaveConfig } from "./FrequencyWave";
import { wavePresets } from "./wavePresets";

export default function WaveAdmin() {
  const [activePreset, setActivePreset] = useState<string>("Soft Original");
  const [config, setConfig] = useState<WaveConfig>(wavePresets["Soft Original"] || defaultWaveConfig);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [debouncedSpeed, setDebouncedSpeed] = useState(1);
  const [copyText, setCopyText] = useState("Kopier Innstillinger");

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSpeed(speedMultiplier), 300);
    return () => clearTimeout(handler);
  }, [speedMultiplier]);

  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setActivePreset(val);
    if (wavePresets[val]) {
      setConfig({ ...wavePresets[val] });
      setSpeedMultiplier(1);
    }
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
      {/* Background Component */}
      <FrequencyWave config={currentConfig} key={JSON.stringify(currentConfig.durations)} />

      {/* Floating Control Panel */}
      <div 
        className="fixed bottom-4 right-4 z-50 bg-black/90 text-white p-6 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20 flex flex-col gap-4 w-80 font-sans"
      >
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
          </select>
        </div>

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
          className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-xl transition-colors active:scale-95"
        >
          {copyText}
        </button>
      </div>
    </>
  );
}
