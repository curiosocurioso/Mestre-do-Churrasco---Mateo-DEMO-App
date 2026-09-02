import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MeatCut } from '../types';
import { StepCard } from './StepCard';
import { playSwipeSound, playClickSound } from '../utils/sound';

interface Props {
  currentIndex: number;
  onIndexChange: (newIndex: number) => void;
  soundEnabled: boolean;
  selectedMeat: MeatCut;
}

function getStepMetadata(category: string, meat: MeatCut): { time: string; equipment: string } {
  switch (category) {
    case 'intro':
      return { time: 'Planejamento', equipment: `${meat.shortName} / Convidados` };
    case 'comprar':
      return { time: '15 minutos', equipment: 'Inspeção no Açougue / Sal' };
    case 'preparo':
      return { time: '5 a 10 min', equipment: 'Faca Afiada / Tábua' };
    case 'fogo':
      return { time: '20 a 30 min', equipment: `${meat.grillHeight} / 2 Zonas` };
    case 'tempero':
      return { time: '2 minutos', equipment: 'Sal de Parrilla / Sal Grosso' };
    case 'grelha':
      return { time: meat.prepTimeText, equipment: `Grelha a ${meat.grillHeight}` };
    case 'ponto':
      return { time: meat.optimalPullTemp, equipment: 'Termômetro Culinário' };
    case 'descanso':
      return { time: '5 a 10 min', equipment: 'Tábua / Sucos Internos' };
    case 'corte':
      return { time: '3 minutos', equipment: meat.cuttingTechnique };
    case 'ajuste':
      return { time: '1 minuto', equipment: 'Flor de Sal / Tábua Quente' };
    case 'servir':
      return { time: 'Ao Ponto', equipment: 'Farofa / Vinagrete / Pão de Alho' };
    case 'resumo':
      return { time: '3 Leis de Ouro', equipment: `Manual de ${meat.shortName}` };
    default:
      return { time: '5 minutos', equipment: 'Churrasqueira / Grelha' };
  }
}

export function CardDeck({ currentIndex, onIndexChange, soundEnabled, selectedMeat }: Props) {
  const [direction, setDirection] = useState<number>(0);
  const steps = selectedMeat.steps;
  const totalSteps = steps.length;
  const safeIndex = Math.min(currentIndex, Math.max(0, totalSteps - 1));

  const goToNext = useCallback(() => {
    if (safeIndex < totalSteps - 1) {
      playSwipeSound(soundEnabled);
      setDirection(1);
      onIndexChange(safeIndex + 1);
    }
  }, [safeIndex, totalSteps, soundEnabled, onIndexChange]);

  const goToPrev = useCallback(() => {
    if (safeIndex > 0) {
      playSwipeSound(soundEnabled);
      setDirection(-1);
      onIndexChange(safeIndex - 1);
    }
  }, [safeIndex, soundEnabled, onIndexChange]);

  const jumpTo = (index: number) => {
    if (index === safeIndex) return;
    playClickSound(soundEnabled);
    setDirection(index > safeIndex ? 1 : -1);
    onIndexChange(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === ' ' && !e.shiftKey) {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Swipe drag threshold logic
  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number }; velocity: { x: number; y: number } }
  ) => {
    const swipeThreshold = 40;
    const velocityThreshold = 350;

    if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      goToNext();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      goToPrev();
    }
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 320 : -320,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -320 : 320,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 }
      }
    })
  };

  const currentStep = steps[safeIndex] || steps[0];
  const metadata = getStepMetadata(currentStep?.category || 'intro', selectedMeat);

  return (
    <div className="relative w-full min-h-[calc(100vh-5rem)] pt-20 sm:pt-24 pb-24 sm:pb-28 flex flex-col justify-between overflow-x-hidden">
      {/* Side Navigation Buttons (Floating Left / Right) */}
      <div className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={goToPrev}
          disabled={safeIndex === 0}
          className="w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 disabled:opacity-20 disabled:pointer-events-none transition-all cursor-pointer shadow-xl group"
          title="Passo Anterior (←)"
          aria-label="Passo Anterior"
        >
          <ChevronLeft className="h-6 w-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={goToNext}
          disabled={safeIndex === totalSteps - 1}
          className="w-12 h-12 rounded-full bg-[#F27D26] text-black flex items-center justify-center hover:scale-105 transition-transform shadow-xl shadow-[#F27D26]/25 disabled:opacity-20 disabled:pointer-events-none cursor-pointer font-bold group"
          title="Próximo Passo (→)"
          aria-label="Próximo Passo"
        >
          <ChevronRight className="h-6 w-6 group-hover:translate-x-0.5 transition-transform stroke-[2.5]" />
        </button>
      </div>

      {/* Main Swipeable Card Stage */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-12 py-4">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={`${selectedMeat.id}-${currentStep.id}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="w-full flex justify-center cursor-grab active:cursor-grabbing touch-pan-y"
          >
            <StepCard step={currentStep} soundEnabled={soundEnabled} meatCut={selectedMeat} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Navigation Bar */}
      <footer className="fixed bottom-0 inset-x-0 z-40 bg-[#050505]/95 border-t border-white/10 backdrop-blur-xl px-4 sm:px-10 py-3.5 sm:py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Metadata Display (Tempo Estimado & Equipamento) */}
          <div className="flex items-center gap-5 sm:gap-10">
            <div className="flex flex-col">
              <span className="text-[9px] sm:text-[10px] text-white/30 uppercase tracking-widest font-medium">
                Tempo Estimado
              </span>
              <span className="text-xs sm:text-sm font-medium text-white/90">
                {metadata.time}
              </span>
            </div>
            <div className="flex flex-col hidden xs:flex">
              <span className="text-[9px] sm:text-[10px] text-white/30 uppercase tracking-widest font-medium">
                Técnica / Foco
              </span>
              <span className="text-xs sm:text-sm font-medium text-white/90">
                {metadata.equipment}
              </span>
            </div>
          </div>

          {/* Center/Right: Swipe / Key Indicator & Dash Pagination */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-light">
                Swipe ou Setas ← →
              </span>
            </div>

            {/* Pagination Dash Pill Indicators */}
            <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto max-w-[40vw] sm:max-w-none py-1 scrollbar-none">
              {steps.map((step, idx) => {
                const isActive = idx === safeIndex;
                return (
                  <button
                    key={step.id}
                    onClick={() => jumpTo(idx)}
                    className={`h-1 rounded-full transition-all cursor-pointer ${
                      isActive
                        ? 'w-6 sm:w-8 bg-[#F27D26] shadow-sm shadow-[#F27D26]/50'
                        : 'w-2 sm:w-3.5 bg-white/20 hover:bg-white/40'
                    }`}
                    title={`${step.sectionTitle} - ${step.title}`}
                    aria-label={`Ir para o passo ${idx + 1}`}
                  />
                );
              })}
            </div>

            {/* Mobile Prev / Next Buttons */}
            <div className="flex items-center gap-1.5 xl:hidden">
              <button
                onClick={goToPrev}
                disabled={safeIndex === 0}
                className="p-2 rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 disabled:opacity-20 disabled:pointer-events-none transition-all"
                title="Voltar"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={goToNext}
                disabled={safeIndex === totalSteps - 1}
                className="p-2 rounded-full bg-[#F27D26] text-black hover:scale-105 disabled:opacity-20 disabled:pointer-events-none transition-all shadow-md shadow-[#F27D26]/20 font-bold"
                title="Avançar"
              >
                <ChevronRight className="h-4 w-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
