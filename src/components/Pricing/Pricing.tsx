"use client";

import React from 'react';

export default function Pricing() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 flex justify-center">
      <div className="max-w-5xl w-full flex flex-col items-center">
        
        <div className="text-center mb-20 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>
            Velg pakken for dine behov.
          </h2>
          <p className="text-lg md:text-xl text-neutral-500 font-medium">
            Begge pakker inkluderer alltid <strong className="text-neutral-900">2x samtidige norske assistenter</strong> slik at telefonen &quot;aldri&quot; blir opptatt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-4xl px-4 md:px-0">
          
          {/* Basis Card */}
          <div className="flex flex-col relative bg-white rounded-3xl border border-neutral-200 shadow-md hover:shadow-xl transition-all duration-300 p-8 md:p-10 z-10 w-full">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-neutral-900">Basis</h3>
              <div className="mt-4 flex items-baseline text-5xl font-extrabold text-neutral-900 tracking-tight">
                2 990,-
                <span className="ml-2 text-xl font-medium text-neutral-500 tracking-normal">/ mnd</span>
              </div>
            </div>
            
            <ul className="flex-1 flex flex-col gap-5 text-neutral-700 mb-10">
              <li className="flex gap-3 items-center">
                <CheckIcon /> <span className="font-medium text-lg">1000 ringeminutter</span>
              </li>
              <li className="flex gap-3 items-center">
                <CheckIcon /> <span className="font-medium text-lg">Kunnskapsbase for din bedrift</span>
              </li>
              <li className="flex gap-3 items-center">
                <CheckIcon /> <span className="font-medium text-lg">Enkel kalenderbooking</span>
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl font-bold text-lg bg-neutral-900 text-white hover:bg-neutral-800 transition-colors shadow-md">
              Dette passer oss
            </button>
          </div>

          {/* Pro Card */}
          <div className="flex flex-col relative bg-white rounded-3xl border-2 border-pink-500 shadow-2xl p-8 md:p-10 z-20 transform md:scale-105 w-full">
            {/* Centered Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="bg-pink-500 text-white text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
                Mest Populær
              </span>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-pink-600">Pro</h3>
              <div className="mt-4 flex items-baseline text-5xl font-extrabold text-neutral-900 tracking-tight">
                Spør oss
              </div>
              <p className="mt-2 text-sm font-medium text-neutral-500">For større volumer og spesialbehov.</p>
            </div>
            
            <ul className="flex-1 flex flex-col gap-5 text-neutral-700 mb-10">
              <li className="flex gap-3 items-center">
                <CheckIcon /> <span className="font-medium text-lg">Utvidet antall ringeminutter</span>
              </li>
              <li className="flex gap-3 items-center">
                <CheckIcon /> <span className="font-medium text-lg">Avanserte integrasjoner</span>
              </li>
              <li className="flex gap-3 items-center">
                <CheckIcon /> <span className="font-medium text-lg">Skreddersydd for din bedrift</span>
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl font-bold text-lg bg-pink-500 text-white hover:bg-pink-600 transition-colors shadow-lg shadow-pink-500/30">
              Få et skreddersydd tilbud
            </button>
          </div>
          
        </div>

        {/* Tilleggsmoduler */}
        <div className="mt-16 w-full max-w-4xl bg-white border border-dashed border-neutral-300 rounded-2xl shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-neutral-900 mb-2">Tilleggsmoduler</h4>
              <p className="text-neutral-600 font-medium text-lg">
                <strong className="text-neutral-900">Chat til nettside</strong> – et genialt tillegg for økt konvertering.
              </p>
            </div>
            <button className="shrink-0 text-base py-3 px-8 font-bold border-2 border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors text-neutral-900">
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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500 shrink-0">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
