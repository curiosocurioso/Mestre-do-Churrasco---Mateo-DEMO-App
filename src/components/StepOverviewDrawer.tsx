import { X, ChevronRight, Flame, ShoppingBag, Utensils, Scissors, Thermometer, Clock, Sparkles } from 'lucide-react';
import { MeatCut, StepCategory } from '../types';
import { playClickSound } from '../utils/sound';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  soundEnabled?: boolean;
  selectedMeat: MeatCut;
}

function getCategoryIcon(cat: StepCategory) {
  switch (cat) {
    case 'comprar':
      return <ShoppingBag className="h-4 w-4 text-amber-400" />;
    case 'preparo':
      return <Scissors className="h-4 w-4 text-emerald-400" />;
    case 'fogo':
      return <Flame className="h-4 w-4 text-orange-400" />;
    case 'grelha':
      return <Flame className="h-4 w-4 text-red-400" />;
    case 'ponto':
      return <Thermometer className="h-4 w-4 text-rose-400" />;
    case 'descanso':
      return <Clock className="h-4 w-4 text-blue-400" />;
    case 'corte':
      return <Scissors className="h-4 w-4 text-emerald-400" />;
    case 'servir':
      return <Utensils className="h-4 w-4 text-amber-400" />;
    case 'resumo':
      return <Sparkles className="h-4 w-4 text-yellow-400" />;
    default:
      return <Sparkles className="h-4 w-4 text-amber-400" />;
  }
}

export function StepOverviewDrawer({
  isOpen,
  onClose,
  currentIndex,
  onSelectIndex,
  soundEnabled = true,
  selectedMeat
}: Props) {
  if (!isOpen) return null;

  const steps = selectedMeat.steps;

  const handleSelect = (idx: number) => {
    playClickSound(soundEnabled);
    onSelectIndex(idx);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="w-full max-w-md h-full bg-[#0A0A0A] border-l border-white/10 p-6 flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <h3 className="font-serif italic font-semibold text-white text-lg">
              Índice: {selectedMeat.name}
            </h3>
            <p className="text-xs text-white/50 font-light">Todas as etapas e cartões interativos</p>
          </div>
          <button
            onClick={() => {
              playClickSound(soundEnabled);
              onClose();
            }}
            className="rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
            aria-label="Fechar índice"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* List of Steps */}
        <div className="flex-1 overflow-y-auto py-4 space-y-2 pr-1 scrollbar-none">
          {steps.map((step, idx) => {
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={step.id}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                  isCurrent
                    ? 'bg-white/[0.08] border-[#F27D26] shadow-lg shadow-[#F27D26]/10 text-white'
                    : 'bg-white/[0.02] border-white/10 text-white/70 hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${
                      isCurrent
                        ? 'bg-[#F27D26] border-[#F27D26] text-black font-bold text-xs'
                        : 'bg-white/5 border-white/10 text-white/60 text-xs font-mono'
                    }`}
                  >
                    {step.stepNumber !== null ? `${step.stepNumber}` : getCategoryIcon(step.category)}
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-[#F27D26] font-mono uppercase tracking-wider block">
                      {step.sectionTitle}
                    </span>
                    <span className="text-xs font-serif italic font-semibold block truncate text-white">
                      {step.title}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-1.5 text-white/40">
                  {isCurrent && (
                    <span className="text-[10px] font-mono font-bold text-[#F27D26] bg-[#F27D26]/20 px-2 py-0.5 rounded-full border border-[#F27D26]/30">
                      Atual
                    </span>
                  )}
                  <ChevronRight className="h-4 w-4 text-white/30" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-4 text-center text-xs text-white/40 font-light">
          <span>Dica: Use as setas <strong>←</strong> e <strong>→</strong> do teclado ou deslize para navegar</span>
        </div>
      </div>
    </div>
  );
}
