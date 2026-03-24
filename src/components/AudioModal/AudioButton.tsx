"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import AudioModal from './AudioModal';

export default function AudioButton({ children, className, style }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <button className={className} style={style} onClick={() => setOpen(true)}>
        {children}
      </button>
      {mounted && createPortal(<AudioModal open={open} onClose={() => setOpen(false)} />, document.body)}
    </>
  );
}
