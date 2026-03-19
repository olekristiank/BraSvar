"use client";

import React from 'react';

export default function Pricing() {
  return (
    <section className="w-full py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 flex justify-center border-t border-slate-200/50">
      <div className="max-w-6xl w-full flex flex-col items-center">
        
        <div className="text-center mb-24 max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-slate-900" style={{ fontFamily: 'var(--font-outfit)' }}>
            Velg pakken for dine behov
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
            Begge pakker inkluderer alltid <strong className="text-slate-900 font-bold px-1">2x samtidige norske assistenter</strong> slik at telefonen &quot;aldri&quot; blir opptatt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-5xl items-stretch">
          
          {/* Basis Card */}
          <div className="flex flex-col bg-white rounded-[2rem] border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 p-8 sm:p-12 w-full mt-4 lg:mt-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Basis</h3>
            <p className="text-slate-500 mb-8 font-medium">Perfekt for små bedrifter som vil komme i gang.</p>
            
            <div className="mb-10 pb-10 border-b border-slate-100">
              <div className="flex items-baseline text-5xl font-extrabold text-slate-900 tracking-tight">
                2 990,-
                <span className="ml-2 text-xl font-medium text-slate-500 tracking-normal">/ mnd</span>
              </div>
            </div>
            
            <ul className="flex-1 flex flex-col gap-6 text-slate-700 mb-12">
              <li className="flex gap-4 items-start">
                <div className="mt-1 bg-green-100 p-1 rounded-full"><CheckIcon className="text-green-600 w-4 h-4" /></div>
                <span className="text-lg font-medium">1000 ringeminutter</span>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 bg-green-100 p-1 rounded-full"><CheckIcon className="text-green-600 w-4 h-4" /></div>
                <span className="text-lg font-medium">Kunnskapsbase for din bedrift</span>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 bg-green-100 p-1 rounded-full"><CheckIcon className="text-green-600 w-4 h-4" /></div>
                <span className="text-lg font-medium">Enkel kalenderbooking</span>
              </li>
            </ul>

            <button className="w-full py-4 rounded-2xl font-bold text-lg bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors">
              Dette passer oss
            </button>
          </div>

          {/* Pro Card */}
          <div className="flex flex-col bg-slate-900 text-white rounded-[2rem] border border-slate-800 shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 p-8 sm:p-12 relative overflow-hidden w-full lg:scale-105 z-10">
            {/* Top gradient highlight */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500"></div>
            
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold text-white">Pro</h3>
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-pink-500/30">
                Mest Populær
              </span>
            </div>
            <p className="text-slate-400 mb-8 font-medium">For større volumer og spesialbehov.</p>
            
            <div className="mb-10 pb-10 border-b border-slate-800">
              <div className="flex items-baseline text-5xl font-extrabold text-white tracking-tight">
                Spør oss
              </div>
            </div>
            
            <ul className="flex-1 flex flex-col gap-6 text-slate-300 mb-12">
              <li className="flex gap-4 items-start">
                <div className="mt-1 bg-pink-500/20 p-1 rounded-full"><CheckIcon className="text-pink-400 w-4 h-4" /></div>
                <span className="text-lg font-medium">Utvidet antall ringeminutter</span>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 bg-pink-500/20 p-1 rounded-full"><CheckIcon className="text-pink-400 w-4 h-4" /></div>
                <span className="text-lg font-medium">Avanserte integrasjoner</span>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 bg-pink-500/20 p-1 rounded-full"><CheckIcon className="text-pink-400 w-4 h-4" /></div>
                <span className="text-lg font-medium">Skreddersydd for din bedrift</span>
              </li>
            </ul>

            <button className="w-full py-4 rounded-2xl font-bold text-lg bg-pink-500 text-white hover:bg-pink-600 transition-colors shadow-lg shadow-pink-500/25">
              Få et skreddersydd tilbud
            </button>
          </div>
          
        </div>

        {/* Tilleggsmoduler */}
        <div className="mt-20 w-full max-w-5xl bg-white border border-slate-200 rounded-[2rem] shadow-sm p-8 sm:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Tilleggsmoduler</h4>
              <p className="text-slate-600 text-lg">
                <strong className="text-slate-900 font-bold">Chat til nettside</strong> – et genialt tillegg for økt konvertering. Vår AI-assistent kan også svare kundene dine skriftlig.
              </p>
            </div>
            <button className="shrink-0 text-lg py-3.5 px-8 font-bold bg-white border-2 border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors text-slate-900 whitespace-nowrap">
              Spør om pris
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

function CheckIcon({ className = "w-5 h-5 text-current" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
