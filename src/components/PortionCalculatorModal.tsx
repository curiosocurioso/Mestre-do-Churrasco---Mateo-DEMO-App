import { Users, X } from 'lucide-react';
import { PortionCalculator } from './interactive/PortionCalculator';
import { playClickSound } from '../utils/sound';
import { MeatCut } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  soundEnabled?: boolean;
  meatCut?: MeatCut;
}

export function PortionCalculatorModal({ isOpen, onClose, soundEnabled = true, meatCut }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl space-y-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#F27D26]/20 rounded-lg text-[#F27D26]">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-serif italic font-semibold text-white text-lg">
                Calculadora de Churrasco: {meatCut?.name || 'Geral'}
              </h3>
              <p className="text-xs text-white/50 font-light">Ajuste conforme o número de convidados</p>
            </div>
          </div>
          <button
            onClick={() => {
              playClickSound(soundEnabled);
              onClose();
            }}
            className="rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <PortionCalculator soundEnabled={soundEnabled} meatCut={meatCut} />

        <div className="flex justify-end pt-2">
          <button
            onClick={() => {
              playClickSound(soundEnabled);
              onClose();
            }}
            className="px-6 py-2.5 rounded-full bg-[#F27D26] hover:bg-[#d96a1a] text-black font-bold text-xs transition-all shadow-lg shadow-[#F27D26]/20 cursor-pointer"
          >
            Fechar Calculadora
          </button>
        </div>
      </div>
    </div>
  );
}
