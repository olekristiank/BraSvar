"use client";

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Pricing() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white flex justify-center">
      <div className="max-w-5xl w-full flex flex-col items-center">
        
        <div className="text-center mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>
            Velg pakken for dine behov.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Begge pakker inkluderer alltid <strong className="text-foreground">2x samtidige norske assistenter</strong> slik at telefonen &quot;aldri&quot; blir opptatt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          {/* Basis Card */}
          <Card className="flex flex-col relative shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl font-bold">Basis</CardTitle>
              <div className="flex items-baseline gap-2 mt-4 text-5xl font-extrabold tracking-tight">
                2 990,- <span className="text-xl font-medium text-muted-foreground">/ mnd</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <CheckIcon /> <span className="font-medium">1000 ringeminutter</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon /> <span className="font-medium">Kunnskapsbase for din bedrift</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon /> <span className="font-medium">Enkel kalenderbooking</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-lg py-6" variant="default">
                Dette passer oss
              </Button>
            </CardFooter>
          </Card>

          {/* Pro Card */}
          <Card className="flex flex-col relative border-2 border-primary shadow-xl">
             <div className="absolute top-0 right-0 transform translate-x-[1px] -translate-y-[1px]">
               <Badge className="rounded-bl-xl rounded-tr-xl rounded-tl-none rounded-br-none px-4 py-1.5 text-sm bg-pink-500 hover:bg-pink-600 text-white border-none shadow-none">
                  MEST POPULÆR
               </Badge>
             </div>
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl font-bold">Pro</CardTitle>
              <div className="flex items-baseline mt-4 text-5xl font-extrabold tracking-tight">
                Spør oss
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <CheckIcon /> <span className="font-medium">Utvidet antall ringeminutter</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon /> <span className="font-medium">Avanserte integrasjoner</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon /> <span className="font-medium">Skreddersydd for din bedrift</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-lg py-6 bg-pink-600 hover:bg-pink-700 text-white border-none">
                Få et skreddersydd tilbud
              </Button>
            </CardFooter>
          </Card>
          
        </div>

        {/* Tilleggsmoduler */}
        <Card className="mt-12 w-full bg-muted/50 border-dashed">
          <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 p-6">
            <div>
              <h4 className="text-xl font-bold mb-1">Tilleggsmoduler</h4>
              <p className="text-muted-foreground font-medium">
                <strong className="text-foreground">Chat til nettside</strong> – spør om pris.
              </p>
            </div>
            <Button variant="outline" className="shrink-0 text-base py-5 px-8">
              Spør om pris
            </Button>
          </CardContent>
        </Card>

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
