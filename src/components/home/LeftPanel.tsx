"use client";

import React from 'react';
import { UploadCloud, FileSpreadsheet, User, ArrowRight } from 'lucide-react';
import Image from "next/image";

export function LeftPanel() {
  return (
    <section className="flex h-full w-full lg:w-4/12 flex-col rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden animate-in slide-in-from-left-10 duration-700">
      
      {/* Header */}
      <div className="flex items-center justify-between p-8 border-b border-white/5">
        <div className="h-10 w-32  flex items-center justify-center ">
                <Image
                    src={"/Layer 2.png"}
                    alt="Company Logo"
                    width={150}
                    height={120}
                    priority
                    />
            </div>
        <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
          Système Prêt
        </div>
      </div>

      {/* Corps : Les Uploads */}
      <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">Ingestion des Données</h2>
          <p className="text-zinc-400 text-sm">Veuillez charger les fichiers sources pour initialiser le traitement Agentique.</p>
        </div>

        {/* Espace Olfa */}
        <div className="group relative rounded-2xl bg-zinc-900/50 border border-white/5 p-6 transition-all hover:bg-zinc-800/50 hover:border-blue-500/30">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-blue-500/20 text-blue-400">
                <User size={20} />
              </div>
              <div>
                <h3 className="font-medium text-zinc-100">Espace Olfa</h3>
                <p className="text-xs text-zinc-500">Flux Tickets Restaurant & Jours Travaillés</p>
              </div>
            </div>
            <span className="h-2 w-2 rounded-full bg-zinc-600 group-hover:bg-blue-500 transition-colors"></span>
          </div>
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-zinc-700 rounded-xl cursor-pointer hover:border-blue-500/50 hover:bg-blue-500/5 transition-all">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <UploadCloud className="w-8 h-8 mb-3 text-zinc-500 group-hover:text-blue-400 transition-colors" />
              <p className="mb-1 text-sm text-zinc-400"><span className="font-semibold text-zinc-200">Cliquez</span> ou glissez le fichier</p>
              <p className="text-xs text-zinc-600">Excel (.xlsx) ou CSV</p>
            </div>
            <input type="file" className="hidden" accept=".xlsx,.csv" />
          </label>
        </div>

        {/* Espace Mahdi */}
        <div className="group relative rounded-2xl bg-zinc-900/50 border border-white/5 p-6 transition-all hover:bg-zinc-800/50 hover:border-purple-500/30">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-400">
                <User size={20} />
              </div>
              <div>
                <h3 className="font-medium text-zinc-100">Espace Mahdi</h3>
                <p className="text-xs text-zinc-500">Flux Absences & Congés Annuels</p>
              </div>
            </div>
            <span className="h-2 w-2 rounded-full bg-zinc-600 group-hover:bg-purple-500 transition-colors"></span>
          </div>
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-zinc-700 rounded-xl cursor-pointer hover:border-purple-500/50 hover:bg-purple-500/5 transition-all">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <FileSpreadsheet className="w-8 h-8 mb-3 text-zinc-500 group-hover:text-purple-400 transition-colors" />
              <p className="mb-1 text-sm text-zinc-400"><span className="font-semibold text-zinc-200">Cliquez</span> ou glissez le fichier</p>
              <p className="text-xs text-zinc-600">Excel (.xlsx) uniquement</p>
            </div>
            <input type="file" className="hidden" accept=".xlsx" />
          </label>
        </div>
      </div>

      {/* Footer */}
      <div className="p-8 border-t border-white/5 bg-zinc-900/30">
         <button className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-zinc-100 to-zinc-300 text-black font-bold text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
            Lancer la consolidation Python
            <ArrowRight size={18} />
         </button>
      </div>
    </section>
  );
}