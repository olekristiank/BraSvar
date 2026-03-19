"use client";

import React from 'react';

export default function Pricing() {
  return (
    <section className="w-full py-24 px-4 bg-white text-black flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16 max-w-3xl">
          {/* We use our custom font variable from the hero */}
          <h2 
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6" 
            style={{ fontFamily: 'var(--font-inter)', letterSpacing: '-0.04em' }}
          >
            Velg pakken for <br/> dine behov.
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 font-medium">
            Begge pakker inkluderer alltid <span className="text-black font-bold">2x samtidige norske assistenter</span> slik at telefonen &quot;aldri&quot; blir opptatt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          
          {/* Basis Card */}
          <div className="flex flex-col p-10 rounded-[2rem] border border-neutral-200 bg-white hover:border-blue-500 transition-colors shadow-sm hover:shadow-xl relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-2">Basis</h3>
            <div className="flex items-baseline gap-2 mb-6 mt-4">
              <span className="text-5xl font-extrabold tracking-tight">2 990,-</span>
              <span className="text-neutral-500 font-medium">/ mnd</span>
            </div>
            
            <ul className="flex flex-col gap-4 mb-10 flex-grow">
              <li className="flex items-center gap-3">
                <CheckIcon /> <span className="font-medium text-lg">1000 ringeminutter</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon /> <span className="font-medium text-lg">Kunnskapsbase</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon /> <span className="font-medium text-lg">Enkel kalenderbooking</span>
              </li>
            </ul>
            
            <button className="w-full py-4 px-6 bg-black text-white rounded-full font-bold text-lg hover:opacity-80 transition-opacity">
              Dette passer oss
            </button>
          </div>

          {/* Pro Card */}
          <div className="flex flex-col p-10 rounded-[2rem] border-[3px] border-black bg-neutral-50 shadow-xl relative overflow-hidden">
             {/* Badge */}
             <div className="absolute top-0 right-0 bg-pink-500 text-white px-5 py-2 rounded-bl-2xl font-bold text-sm tracking-wide">
                MEST POPULÆR
             </div>
            
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <div className="text-5xl font-extrabold mb-6 mt-4 tracking-tight">Spør oss</div>
            
            <ul className="flex flex-col gap-4 mb-10 flex-grow">
              <li className="flex items-center gap-3">
                <CheckIcon /> <span className="font-medium text-lg">Utvidet antall ringeminutter</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon /> <span className="font-medium text-lg">Avanserte integrasjoner</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon /> <span className="font-medium text-lg">Skreddersydd for din bedrift</span>
              </li>
            </ul>
            
            <button className="w-full py-4 px-6 bg-pink-600 text-white rounded-full font-bold text-lg hover:bg-pink-700 transition-colors">
              Få et skreddersydd tilbud
            </button>
          </div>
          
        </div>

        {/* Tilleggsmoduler */}
        <div className="mt-16 w-full max-w-5xl p-8 rounded-3xl bg-neutral-100 border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold mb-2">Tilleggsmoduler</h4>
            <p className="text-neutral-600 font-medium text-lg">
              <span className="text-black font-semibold">Chat til nettside</span> – spør om pris.
            </p>
          </div>
          <button className="whitespace-nowrap py-3 px-8 bg-white border border-neutral-300 rounded-full font-bold hover:bg-neutral-50 transition-colors">
            Spør om pris
          </button>
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
