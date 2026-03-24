"use client";

import React from 'react';
import { useContactModal } from './ContactContext';

export default function ContactButton({ children, className, style }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const openModal = useContactModal();
  return (
    <button className={className} style={style} onClick={openModal}>
      {children}
    </button>
  );
}
