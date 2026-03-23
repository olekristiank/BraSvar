"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import FrequencyWave, { WaveConfig, defaultWaveConfig } from "./FrequencyWave";
import { wavePresets } from "./wavePresets";

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : "255, 255, 255";
}

export default function WaveAdmin() {
  const [mounted, setMounted] = useState(false);
  const [activePreset, setActivePreset] = useState<string>("OKK2");
  const [config, setConfig] = useState<WaveConfig>(wavePresets["OKK2"] || defaultWaveConfig);
  const [showPanel, setShowPanel] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [debouncedSpeed, setDebouncedSpeed] = useState(1);
  const [copyText, setCopyText] = useState("📋 Kopier");
  const [customColor, setCustomColor] = useState("#ec4899");

  // Thread controls (synced from config or separate state)
  const [threadCount, setThreadCount] = useState(config.threadCount ?? 7);
  const [threadOpacity, setThreadOpacity] = useState(config.threadOpacity ?? 1);
  const [threadColor, setThreadColor] = useState(config.threadColor ?? "#ec4899");
  const [phaseSpread, setPhaseSpread] = useState(config.phaseSpread ?? 50);
  const [auraIntensity, setAuraIntensity] = useState(config.auraIntensity ?? 70);
  const [maskWidth, setMaskWidth] = useState(config.maskWidth ?? 60);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      const p = wavePresets[val];
      setConfig({ ...p });
      setSpeedMultiplier(1);
      // Sync thread controls from preset
      setThreadCount(p.threadCount ?? 7);
      setThreadOpacity(p.threadOpacity ?? 1);
      setThreadColor(p.threadColor ?? "#ec4899");
      setPhaseSpread(p.phaseSpread ?? 50);
      setAuraIntensity(p.auraIntensity ?? 70);
      setMaskWidth(p.maskWidth ?? 60);
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

  // Build the final config merging base config + speed + thread controls
  const currentConfig: WaveConfig = {
    ...config,
    durations: {
      path1: config.durations.path1 / debouncedSpeed,
      path2: config.durations.path2 / debouncedSpeed,
      line1: config.durations.line1 / debouncedSpeed,
      line2: config.durations.line2 / debouncedSpeed,
    },
    threadCount,
    threadOpacity,
    threadColor,
    phaseSpread,
    auraIntensity,
    maskWidth,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(currentConfig, null, 2));
    setCopyText("✅ Kopiert!");
    setTimeout(() => setCopyText("📋 Kopier"), 2000);
  };

  // Shared slider style
  const sliderRow: React.CSSProperties = {
    display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#cbd5e1',
  };
  const label: React.CSSProperties = {
    width: '80px', flexShrink: 0, fontWeight: 600, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94a3b8',
  };
  const sliderInput: React.CSSProperties = {
    flex: 1, accentColor: '#ec4899', height: '3px', cursor: 'pointer',
  };
  const valueDisplay: React.CSSProperties = {
    width: '36px', textAlign: 'right', fontFamily: 'monospace', fontSize: '11px', fontWeight: 600, color: '#e2e8f0',
  };
  const sectionTitle: React.CSSProperties = {
    fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#64748b',
    marginTop: '10px', marginBottom: '6px', paddingBottom: '4px', borderBottom: '1px solid rgba(100,116,139,0.2)',
  };

  const panelUI = (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setShowPanel(!showPanel)}
        style={{
          position: 'fixed', top: '90px', right: '24px', zIndex: 9999,
          background: 'rgba(15,23,42,0.85)', color: '#fff',
          border: '1px solid rgba(100,116,139,0.3)', borderRadius: '12px',
          padding: '8px 14px', fontSize: '20px', cursor: 'pointer',
          backdropFilter: 'blur(8px)', transition: 'all 0.2s',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
      >
        {showPanel ? '✕' : '⚙️ Wave'}
      </button>

      {showPanel && (
        <div
          style={{
            position: 'fixed', top: '144px', right: '24px', zIndex: 9998,
            width: '300px', maxHeight: 'calc(100vh - 160px)', overflowY: 'auto',
            background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(100,116,139,0.25)', borderRadius: '14px',
            padding: '16px', boxShadow: '0 20px 50px rgba(0,0,0,.4)',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {/* ── PRESETS ── */}
          <div style={sectionTitle}>Preset</div>
          <select
            value={activePreset}
            onChange={handlePresetChange}
            style={{
              width: '100%', padding: '6px 8px', fontSize: '12px', fontWeight: 600,
              background: 'rgba(30,41,59,0.8)', color: '#f1f5f9',
              border: '1px solid rgba(100,116,139,0.3)', borderRadius: '8px',
              cursor: 'pointer', marginBottom: '4px',
            }}
          >
            {Object.keys(wavePresets).map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
            <option value="Custom">Custom Color</option>
          </select>

          {activePreset === "Custom" && (
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '6px' }}>
              <input
                type="color"
                value={customColor}
                onChange={(e) => applyCustomColor(e.target.value)}
                style={{ width: '32px', height: '24px', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
              />
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>Aura Color</span>
            </div>
          )}

          {/* ── THREADS ── */}
          <div style={sectionTitle}>Threads</div>

          <div style={sliderRow}>
            <span style={label}>Count</span>
            <input type="range" min={1} max={10} step={1} value={threadCount}
              onChange={(e) => setThreadCount(Number(e.target.value))}
              style={sliderInput} />
            <span style={valueDisplay}>{threadCount}</span>
          </div>

          <div style={sliderRow}>
            <span style={label}>Opacity</span>
            <input type="range" min={0} max={100} step={1} value={Math.round(threadOpacity * 100)}
              onChange={(e) => setThreadOpacity(Number(e.target.value) / 100)}
              style={sliderInput} />
            <span style={valueDisplay}>{Math.round(threadOpacity * 100)}%</span>
          </div>

          <div style={sliderRow}>
            <span style={label}>Phase</span>
            <input type="range" min={0} max={100} step={1} value={phaseSpread}
              onChange={(e) => setPhaseSpread(Number(e.target.value))}
              style={sliderInput} />
            <span style={valueDisplay}>{phaseSpread}</span>
          </div>

          <div style={{ ...sliderRow, marginTop: '2px' }}>
            <span style={label}>Color</span>
            <input
              type="color"
              value={threadColor}
              onChange={(e) => setThreadColor(e.target.value)}
              style={{ width: '28px', height: '20px', border: 'none', cursor: 'pointer', borderRadius: '4px', background: 'transparent' }}
            />
            <span style={{ fontSize: '10px', color: '#64748b', fontFamily: 'monospace' }}>{threadColor}</span>
          </div>

          {/* ── AURA ── */}
          <div style={sectionTitle}>Aura</div>

          <div style={sliderRow}>
            <span style={label}>Intensity</span>
            <input type="range" min={0} max={100} step={1} value={auraIntensity}
              onChange={(e) => setAuraIntensity(Number(e.target.value))}
              style={sliderInput} />
            <span style={valueDisplay}>{auraIntensity}%</span>
          </div>

          {/* ── MASK ── */}
          <div style={sectionTitle}>Mask</div>

          <div style={sliderRow}>
            <span style={label}>Width</span>
            <input type="range" min={20} max={100} step={1} value={maskWidth}
              onChange={(e) => setMaskWidth(Number(e.target.value))}
              style={sliderInput} />
            <span style={valueDisplay}>{maskWidth}%</span>
          </div>

          {/* ── SPEED & SCALE ── */}
          <div style={sectionTitle}>Motion</div>

          <div style={sliderRow}>
            <span style={label}>Speed</span>
            <input type="range" min={0.1} max={3} step={0.1} value={speedMultiplier}
              onChange={(e) => setSpeedMultiplier(Number(e.target.value))}
              style={sliderInput} />
            <span style={valueDisplay}>{speedMultiplier.toFixed(1)}×</span>
          </div>

          <div style={sliderRow}>
            <span style={label}>Scale Y</span>
            <input type="range" min={0.2} max={2} step={0.05} value={config.scaleY}
              onChange={(e) => setConfig({ ...config, scaleY: Number(e.target.value) })}
              style={sliderInput} />
            <span style={valueDisplay}>{config.scaleY.toFixed(2)}</span>
          </div>

          <div style={sliderRow}>
            <span style={label}>Opacity</span>
            <input type="range" min={0} max={1} step={0.05} value={config.opacity}
              onChange={(e) => setConfig({ ...config, opacity: Number(e.target.value) })}
              style={sliderInput} />
            <span style={valueDisplay}>{config.opacity.toFixed(2)}</span>
          </div>

          <div style={sliderRow}>
            <span style={label}>Offset Y</span>
            <input type="range" min={-500} max={500} step={5} value={config.translateY ?? 0}
              onChange={(e) => setConfig({ ...config, translateY: Number(e.target.value) })}
              style={sliderInput} />
            <span style={valueDisplay}>{config.translateY ?? 0}px</span>
          </div>

          {/* ── FILTERS ── */}
          <div style={sectionTitle}>Filters</div>

          <div style={sliderRow}>
            <span style={label}>Hue</span>
            <input type="range" min={0} max={360} step={1} value={config.hueRotate ?? 0}
              onChange={(e) => setConfig({ ...config, hueRotate: Number(e.target.value) })}
              style={sliderInput} />
            <span style={valueDisplay}>{config.hueRotate ?? 0}°</span>
          </div>

          <div style={sliderRow}>
            <span style={label}>Saturate</span>
            <input type="range" min={0} max={300} step={5} value={config.saturate ?? 100}
              onChange={(e) => setConfig({ ...config, saturate: Number(e.target.value) })}
              style={sliderInput} />
            <span style={valueDisplay}>{config.saturate ?? 100}%</span>
          </div>

          <div style={sliderRow}>
            <span style={label}>Bright</span>
            <input type="range" min={0} max={200} step={5} value={config.brightness ?? 100}
              onChange={(e) => setConfig({ ...config, brightness: Number(e.target.value) })}
              style={sliderInput} />
            <span style={valueDisplay}>{config.brightness ?? 100}%</span>
          </div>

          {/* ── COPY SETTINGS ── */}
          <button
            onClick={handleCopy}
            style={{
              width: '100%', marginTop: '14px', padding: '8px',
              background: 'rgba(236,72,153,0.15)', color: '#f472b6',
              border: '1px solid rgba(236,72,153,0.3)', borderRadius: '8px',
              fontSize: '11px', fontWeight: 700, cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {copyText}
          </button>
        </div>
      )}
    </>
  );

  return (
    <>
      <FrequencyWave config={currentConfig} key={JSON.stringify(currentConfig.durations) + threadCount + phaseSpread} />
      {mounted && createPortal(panelUI, document.body)}
    </>
  );
}
