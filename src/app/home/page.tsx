import { LeftPanel } from '@/src/components/home/LeftPanel';
import { RightPanel } from '@/src/components/home/RightPanel';
import React from 'react';


export default function HomePage() {
  const BACKGROUND_IMAGE_URL = "/acc.jpg";

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-sans text-white">
      
      {/* --- ARRIÈRE-PLAN GLOBAL --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={BACKGROUND_IMAGE_URL}
          alt="Background Financial Network"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* --- CONTENU PRINCIPAL --- */}
      <main className="relative z-10 flex h-screen w-full items-center justify-center p-6 lg:p-12 gap-8">
        
        {/* Panneau Gauche : Uploads */}
        <LeftPanel />

        {/* Panneau Droit : Chat & Visualisation */}
        <RightPanel />

      </main>
    </div>
  );
}