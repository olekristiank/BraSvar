"use client";

import React from 'react';

export default function Pricing() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 flex justify-center">
      <div className="max-w-5xl w-full flex flex-col items-center">
        
        <div className="text-center mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>
            Velg pakken for dine behov.
          </h2>
          <p className="text-lg md:text-xl text-neutral-500 font-medium">
            Begge pakker inkluderer alltid <strong className="text-neutral-900">2x samtidige norske assistenter</strong> slik at telefonen &quot;aldri&quot; blir opptatt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          
          {/* Basis Card */}
          <div className="flex flex-col bg-white rounded-2xl border border-neutral-200/70 shadow-sm hover:shadow-md transition-shadow p-8 md:p-10 w-full">
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">Basis</h3>
            
            <div className="mb-8">
              <div className="flex items-baseline text-4xl font-extrabold text-neutral-900 tracking-tight">
                2 990,-
                <span className="ml-2 text-lg font-medium text-neutral-500 tracking-normal">/ mnd</span>
              </div>
              <p className="mt-2 text-sm text-neutral-500">&nbsp;</p> {/* Spacer to align with Pro subtitle */}
            </div>
            
            <ul className="flex-1 flex flex-col gap-4 text-neutral-600 mb-10">
              <li className="flex gap-3 items-center">
                <CheckIcon /> <span>1000 ringeminutter</span>
              </li>
              <li className="flex gap-3 items-center">
                <CheckIcon /> <span>Kunnskapsbase for din bedrift</span>
              </li>
              <li className="flex gap-3 items-center">
                <CheckIcon /> <span>Enkel kalenderbooking</span>
              </li>
            </ul>

            <button className="w-full py-3.5 rounded-xl font-semibold text-base bg-white border border-neutral-300 text-neutral-900 hover:bg-neutral-50 transition-colors">
              Dette passer oss
            </button>
          </div>

          {/* Pro Card */}
          <div className="flex flex-col bg-white rounded-2xl border border-neutral-200 shadow-xl hover:shadow-2xl transition-shadow p-8 md:p-10 relative overflow-hidden w-full">
            {/* Subtle top highlight replacing the thick border */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-400 to-pink-600"></div>
            
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-neutral-900">Pro</h3>
              <span className="bg-pink-50 text-pink-600 border border-pink-100/50 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Mest Populær
              </span>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline text-4xl font-extrabold text-neutral-900 tracking-tight">
                Spør oss
              </div>
              <p className="mt-2 text-sm text-neutral-500">For større volumer og spesialbehov.</p>
            </div>
            
            <ul className="flex-1 flex flex-col gap-4 text-neutral-600 mb-10">
              <li className="flex gap-3 items-center">
                <CheckIcon /> <span>Utvidet antall ringeminutter</span>
              </li>
              <li className="flex gap-3 items-center">
                <CheckIcon /> <span>Avanserte integrasjoner</span>
              </li>
              <li className="flex gap-3 items-center">
                <CheckIcon /> <span>Skreddersydd for din bedrift</span>
              </li>
            </ul>

            <button className="w-full py-3.5 rounded-xl font-semibold text-base bg-neutral-900 text-white hover:bg-neutral-800 transition-colors shadow-md">
              Få et skreddersydd tilbud
            </button>
          </div>
          
        </div>

        {/* Tilleggsmoduler */}
        <div className="mt-12 w-full max-w-4xl bg-neutral-100/50 border border-neutral-200 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 px-8">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-neutral-900 mb-1">Tilleggsmoduler</h4>
              <p className="text-neutral-600 text-sm md:text-base">
                <strong className="text-neutral-900 font-medium">Chat til nettside</strong> – et genialt tillegg for økt konvertering.
              </p>
            </div>
            <button className="shrink-0 text-sm py-2.5 px-6 font-semibold bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors text-neutral-900">
              Spør om pris
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500 shrink-0">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
