"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';
import ContactModal from './ContactModal';

const ContactContext = createContext<() => void>(() => {});

export function useContactModal() {
  return useContext(ContactContext);
}

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);

  return (
    <ContactContext.Provider value={openModal}>
      {children}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </ContactContext.Provider>
  );
}
