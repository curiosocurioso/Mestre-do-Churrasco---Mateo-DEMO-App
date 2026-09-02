import { Flame, ListFilter, Users, Volume2, VolumeX, Maximize2, Minimize2, Sparkles } from 'lucide-react';
import { MeatCut } from '../types';
import { playClickSound } from '../utils/sound';
import { MeatDropdown } from './MeatDropdown';

interface Props {
  selectedMeat: MeatCut;
  onSelectMeat: (meat: MeatCut) => void;
  onOpenMeatSelector: () => void;
  currentIndex: number;
  totalSteps: number;
  onOpenDrawer: () => void;
  onOpenCalculator: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export function HeaderNav({
  selectedMeat,
  onSelectMeat,
  onOpenMeatSelector,
  currentIndex,
  totalSteps,
  onOpenDrawer,
  onOpenCalculator,
  soundEnabled,
  onToggleSound,
  isFullscreen,
  onToggleFullscreen
}: Props) {
  const progressPercent = totalSteps > 0 ? ((currentIndex + 1) / totalSteps) * 100 : 0;
  const formattedIndex = String(currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(totalSteps).padStart(2, '0');

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#0A0A0A]/95 border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand / Title & Meat Selector Dropdown */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <button
            onClick={() => {
              playClickSound(soundEnabled);
              onOpenMeatSelector();
            }}
            className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-gradient-to-br from-[#F27D26] to-[#b34b07] flex items-center justify-center shadow-lg shadow-[#F27D26]/20 shrink-0 hover:scale-105 transition-transform cursor-pointer"
            title="Escolher corte de churrasco"
          >
            <Flame className="h-4 sm:h-5 w-4 sm:w-5 text-black stroke-[2.5]" />
          </button>

          <div className="flex items-center gap-2 min-w-0">
            <div className="truncate flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#F27D26] font-bold truncate">
                  Mestre do Churrasco
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/5 text-white/60 border border-white/10">
                  {selectedMeat.categoryLabel}
                </span>
              </div>

              {/* In-Header Dropdown Menu */}
              <div className="flex items-center gap-1.5 mt-0.5">
                <MeatDropdown
                  selectedMeat={selectedMeat}
                  onSelectMeat={onSelectMeat}
                  soundEnabled={soundEnabled}
                  onOpenFullSelector={onOpenMeatSelector}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Center Progress on Desktop */}
        <div className="hidden lg:flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium">
              Progresso
            </span>
            <span className="text-xs font-mono text-[#F27D26]">
              {Math.round(progressPercent)}%
            </span>
          </div>
          <div className="w-36 sm:w-44 h-1 bg-white/10 mt-1 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#F27D26] transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Change Cut Button */}
          <button
            onClick={() => {
              playClickSound(soundEnabled);
              onOpenMeatSelector();
            }}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#F27D26]/40 hover:bg-white/10 text-white/80 hover:text-white text-xs font-medium transition-all cursor-pointer"
            title="Abrir catálogo completo de carnes"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#F27D26]" />
            <span>Trocar Carne</span>
          </button>

          {/* Step Number Display & Drawer Button */}
          <button
            onClick={() => {
              playClickSound(soundEnabled);
              onOpenDrawer();
            }}
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90 hover:bg-white/10 hover:border-[#F27D26]/40 text-xs transition-all cursor-pointer group"
            title="Ver índice de passos"
          >
            <ListFilter className="h-3.5 w-3.5 text-[#F27D26] group-hover:scale-110 transition-transform" />
            <span className="font-light tracking-wider">
              <span className="font-serif italic font-semibold text-white">{formattedIndex}</span>
              <span className="text-white/40 text-[10px] ml-1">/ {formattedTotal}</span>
            </span>
          </button>

          {/* Portion Calculator Button */}
          <button
            onClick={() => {
              playClickSound(soundEnabled);
              onOpenCalculator();
            }}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white hover:border-[#F27D26]/40 text-xs font-medium transition-all cursor-pointer"
            title="Ajustar número de pessoas e proporções"
          >
            <Users className="h-3.5 w-3.5 text-[#F27D26]" />
            <span className="hidden sm:inline">Porções</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className={`p-2 rounded-full border transition-all cursor-pointer ${
              soundEnabled
                ? 'bg-white/5 border-white/10 text-[#F27D26] hover:bg-white/10'
                : 'bg-white/5 border-white/10 text-white/30 hover:text-white/60'
            }`}
            title={soundEnabled ? 'Silenciar sons' : 'Ativar efeitos sonoros'}
            aria-label="Controle de áudio"
          >
            {soundEnabled ? <Volume2 className="h-3.5 sm:h-4 w-3.5 sm:w-4" /> : <VolumeX className="h-3.5 sm:h-4 w-3.5 sm:w-4" />}
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all hidden sm:flex items-center justify-center cursor-pointer"
            title={isFullscreen ? 'Sair de tela cheia' : 'Entrar em tela cheia'}
            aria-label="Tela cheia"
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Thin Header Progress Bar */}
      <div className="w-full h-[2px] bg-white/5 overflow-hidden">
        <div
          className="h-full bg-[#F27D26] transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </header>
  );
}
