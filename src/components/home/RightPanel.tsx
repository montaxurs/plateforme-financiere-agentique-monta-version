"use client";

import React, { useState } from 'react';
// On renomme Table en TableIcon pour éviter les conflits avec les tableaux HTML ou shadcn
import { MessageSquare, Table as TableIcon, Settings, Bot, Search, MoreHorizontal } from 'lucide-react';
import { cn } from '@/src/lib/utils';


type ViewState = 'chat' | 'table' | 'settings';

export function RightPanel() {
  const [activeView, setActiveView] = useState<ViewState>('chat');

  return (
    <section className="hidden lg:flex h-full flex-1 flex-row rounded-3xl border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl relative overflow-hidden animate-in slide-in-from-right-10 duration-700 delay-100">
       
       {/* --- SIDEBAR DE NAVIGATION (Interne) --- */}
       <div className="w-20 h-full border-r border-white/5 bg-black/20 flex flex-col items-center py-8 gap-6 z-20">
          
          <NavButton 
            active={activeView === 'chat'} 
            onClick={() => setActiveView('chat')}
            icon={<MessageSquare size={24} />}
            label="Agent"
          />

          <NavButton 
            active={activeView === 'table'} 
            onClick={() => setActiveView('table')}
            icon={<TableIcon size={24} />}
            label="Données"
          />

          <div className="flex-1" />

          <NavButton 
            active={activeView === 'settings'} 
            onClick={() => setActiveView('settings')}
            icon={<Settings size={24} />}
            label="Config"
          />
       </div>

       {/* --- ZONE DE CONTENU PRINCIPALE --- */}
       <div className="flex-1 h-full relative flex flex-col">
          
          {/* Header Subtil */}
          <div className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-white/5 backdrop-blur-sm">
             <div className="flex items-center gap-3">
                <Bot className="text-emerald-400" size={20} />
                <span className="text-white font-medium tracking-wide">
                  {activeView === 'chat' && "Assistant Financier Agentique"}
                  {activeView === 'table' && "Prévisualisation des Données"}
                  {activeView === 'settings' && "Paramètres du Système"}
                </span>
             </div>
             <div className="flex gap-2">
                <button className="p-2 rounded-full hover:bg-white/10 text-zinc-400 transition-colors">
                   <Search size={18} />
                </button>
                <button className="p-2 rounded-full hover:bg-white/10 text-zinc-400 transition-colors">
                   <MoreHorizontal size={18} />
                </button>
             </div>
          </div>

          {/* Contenu Dynamique */}
          <div className="flex-1 overflow-hidden relative p-6">
            
            {activeView === 'chat' && (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                 <div className="h-24 w-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                    <Bot className="h-10 w-10 text-emerald-400" />
                 </div>
                 <h3 className="text-xl font-medium text-white mb-2">LAgent est en attente</h3>
                 <p className="text-zinc-500 max-w-sm">
                   Veuillez lancer la consolidation dans le panneau de gauche pour activer la conversation avec vos données.
                 </p>
              </div>
            )}

            {activeView === 'table' && (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                 <div className="h-24 w-24 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                    <TableIcon className="h-10 w-10 text-blue-400" />
                 </div>
                 <h3 className="text-xl font-medium text-white mb-2">Aucune donnée chargée</h3>
                 <p className="text-zinc-500 max-w-sm">
                   Les tableaux consolidés apparaîtront ici après le traitement Python.
                 </p>
              </div>
            )}

            {activeView === 'settings' && (
               <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                  <h3 className="text-lg text-zinc-400">Configuration du Dashboard</h3>
               </div>
            )}

          </div>
       </div>
    </section>
  );
}

// Composant Helper local
function NavButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
   return (
      <button 
        onClick={onClick}
        className={cn(
           "group flex flex-col items-center justify-center gap-1 w-14 h-14 rounded-xl transition-all duration-300",
           active 
             ? "bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/20 text-white shadow-lg shadow-purple-500/10" 
             : "text-zinc-500 hover:text-zinc-200 hover:bg-white/5"
        )}
      >
         <div className={cn("transition-transform duration-300", active && "scale-110")}>
            {icon}
         </div>
         <span className="text-[10px] font-medium">{label}</span>
      </button>
   );
}