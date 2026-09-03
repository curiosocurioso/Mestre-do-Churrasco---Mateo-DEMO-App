import { useState } from 'react';
import { Users, Scale, Sparkles, Flame } from 'lucide-react';
import { playClickSound } from '../../utils/sound';
import { MeatCut } from '../../types';

interface Props {
  soundEnabled?: boolean;
  meatCut?: MeatCut;
}

export function PortionCalculator({ soundEnabled = true, meatCut }: Props) {
  const [guests, setGuests] = useState<number>(6); // Default to 6 people

  const handleGuestsChange = (num: number) => {
    playClickSound(soundEnabled);
    setGuests(Math.max(2, Math.min(20, num)));
  };

  const gramsPerPerson = meatCut?.defaultGramsPerPerson || 250;
  const meatName = meatCut?.shortName || 'Carne';

  // Calculate meat range based on the cut's yield
  const minMeatKg = ((guests * gramsPerPerson * 0.95) / 1000).toFixed(1);
  const maxMeatKg = ((guests * gramsPerPerson * 1.15) / 1000).toFixed(1);
  const saltGrams = Math.round(Number(maxMeatKg) * 11);
  const charcoalKg = Math.max(2.5, Math.round(guests * 0.6));

  return (
    <div id="portion-calculator-widget" className="mt-4 rounded-2xl border border-white/10 bg-[#121212]/90 p-5 md:p-6 backdrop-blur-md shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#F27D26]/20 rounded-lg text-[#F27D26]">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-serif italic font-semibold text-white text-base md:text-lg">
              Calculadora de Churrasco: {meatName}
            </h4>
            <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold">
              Base do Guia: {guests} Convidados
            </span>
          </div>
        </div>
        <span className="text-xs bg-[#F27D26]/20 text-[#F27D26] px-3 py-1 rounded-full border border-[#F27D26]/30 font-mono">
          ~{gramsPerPerson}g por pessoa
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Guest Selector Control */}
        <div className="md:col-span-5 space-y-3.5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/50 font-light">Número de Convidados:</span>
            <span className="text-lg font-serif italic font-bold text-[#F27D26]">
              {guests} pessoas
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => handleGuestsChange(guests - 1)}
              disabled={guests <= 2}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white disabled:opacity-30 font-bold flex items-center justify-center transition-all cursor-pointer text-lg"
            >
              -
            </button>
            <input
              type="range"
              min="2"
              max="20"
              step="1"
              value={guests}
              onChange={(e) => handleGuestsChange(Number(e.target.value))}
              className="flex-1 accent-[#F27D26] cursor-pointer h-1.5 bg-white/10 rounded-lg"
            />
            <button
              onClick={() => handleGuestsChange(guests + 1)}
              disabled={guests >= 20}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white disabled:opacity-30 font-bold flex items-center justify-center transition-all cursor-pointer text-lg"
            >
              +
            </button>
          </div>

          <div className="flex justify-between text-[11px] text-white/40 px-1 font-mono">
            <span>2 pessoas</span>
            <span className="text-[#F27D26] font-bold">6 (Padrão)</span>
            <span>20 pessoas</span>
          </div>
        </div>

        {/* Calculated Results */}
        <div className="md:col-span-7 grid grid-cols-3 gap-3">
          {/* Meat */}
          <div className="rounded-xl bg-white/[0.03] border border-[#F27D26]/40 p-3.5 flex flex-col justify-between text-center shadow-lg shadow-[#F27D26]/5">
            <div className="flex items-center justify-center text-[#F27D26] mb-1">
              <Scale className="h-4 w-4" />
            </div>
            <span className="text-[10px] text-white/40 uppercase font-medium">{meatName} Crua</span>
            <span className="text-sm sm:text-base font-bold text-white font-mono my-0.5">
              {minMeatKg}–{maxMeatKg} kg
            </span>
            <span className="text-[9px] text-white/40 font-light">peso recomendado</span>
          </div>

          {/* Salt */}
          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5 flex flex-col justify-between text-center">
            <div className="flex items-center justify-center text-white/60 mb-1">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-[10px] text-white/40 uppercase font-medium">Sal de Parrilla</span>
            <span className="text-sm sm:text-base font-bold text-white font-mono my-0.5">
              ~{saltGrams} g
            </span>
            <span className="text-[9px] text-white/40 font-light">10-12g / kg</span>
          </div>

          {/* Charcoal */}
          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5 flex flex-col justify-between text-center">
            <div className="flex items-center justify-center text-[#F27D26] mb-1">
              <Flame className="h-4 w-4" />
            </div>
            <span className="text-[10px] text-white/40 uppercase font-medium">Carvão</span>
            <span className="text-sm sm:text-base font-bold text-white font-mono my-0.5">
              ~{charcoalKg} kg
            </span>
            <span className="text-[9px] text-white/40 font-light">braseiro ideal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
