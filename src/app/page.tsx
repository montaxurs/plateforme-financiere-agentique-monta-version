import React from 'react';

export default function Home() {
  // Image spécifique Devoteam demandée par l'utilisateur
  // Note: Dans un environnement réel, placez cette image dans le dossier public/
  const BACKGROUND_IMAGE_URL = "/acc.jpg"; 

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black font-sans">
      
      {/* --- ARRIÈRE-PLAN (Background) --- */}
      {/* MODIFICATION: Image plus claire, moins de flou, pleine visibilité */}
      <div className="absolute inset-0 z-0">
        <img
          src={BACKGROUND_IMAGE_URL}
          alt="Background Financial Network"
          className="absolute inset-0 w-full  object-cover opacity-60" // Opacité augmentée, flou retiré pour voir les détails
        />
        {/* Dégradé léger uniquement pour la lisibilité du texte blanc, mais préservant l'image */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* --- CONTENU PRINCIPAL --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-10">
        
        {/* Badge / Pilule supérieure */}
        <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-black/40 px-3 py-1 text-sm text-white backdrop-blur-md shadow-lg">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
          Système Multi-Agents Actif
        </div>

        {/* Titre Principal */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-2xl">
          Plateforme Financière <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Agentique
          </span>
        </h1>
        
        {/* Sous-titre / Accroche */}
        <p className="max-w-2xl text-lg md:text-xl text-zinc-100 mb-10 leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          Lintelligence artificielle au service de la performance financière.
          <span className="block mt-2 text-zinc-300 text-base">
            Automatisation complète du flux de travail & Orchestration Python
          </span>
        </p>

        {/* Bouton d'action */}
        <a 
          href="/home"
          className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-white px-8 font-medium text-black transition-all duration-300 hover:bg-zinc-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black shadow-lg shadow-blue-500/20"
        >
          <span className="mr-2">Accéder à lespace de travail</span>
          {/* Icône flèche */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 transition-transform group-hover:translate-x-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      {/* --- PIED DE PAGE (Footer) --- */}
      <div className="absolute bottom-8 w-full text-center z-10">
        <p className="text-zinc-400 text-sm font-medium drop-shadow-md">
          Présenté par l’Équipe Ingénierie IA – 2026
        </p>
      </div>
    </main>
  );
}