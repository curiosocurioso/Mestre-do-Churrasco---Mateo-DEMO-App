import { useState } from 'react';
import { DonenessLevel } from '../../types';
import { Thermometer, Star, Info, CheckCircle2 } from 'lucide-react';
import { playClickSound } from '../../utils/sound';

interface Props {
  soundEnabled?: boolean;
}

const DONENESS_LEVELS: DonenessLevel[] = [
  {
    name: 'Malpassada',
    sub: 'Rare',
    tempRange: '48 – 52 °C',
    recommendedPullTemp: '48 °C',
    description: 'Centro vermelho rubi quente, máxima umidade e maciez, textura muito tenra.',
    color: 'from-rose-900 to-red-600',
    isRecommended: false
  },
  {
    name: 'Malpassada para Ao Ponto',
    sub: 'Medium Rare',
    tempRange: '52 – 55 °C',
    recommendedPullTemp: '52 °C',
    description: 'Centro rosado escuro bem suculento, gordura totalmente aquecida e derretida.',
    color: 'from-rose-800 to-amber-700',
    isRecommended: false
  },
  {
    name: 'Ponto Ideal do Churrasqueiro',
    sub: 'Ponto da Casa (54–57 °C)',
    tempRange: '54 – 57 °C',
    recommendedPullTemp: '54–55 °C (no fogo) → sobe para 57 °C no descanso',
    description: 'O ápice da fraldinha: centro rosado brilhante, bordas crocantes e retenção máxima de sucos.',
    color: 'from-amber-700 to-red-700',
    isRecommended: true
  },
  {
    name: 'Ao Ponto',
    sub: 'Medium',
    tempRange: '57 – 60 °C',
    recommendedPullTemp: '57 °C',
    description: 'Centro rosa claro firme, textura agradável, leve redução de suculência líquida.',
    color: 'from-amber-800 to-amber-950',
    isRecommended: false
  },
  {
    name: 'Bem Passada',
    sub: 'Well Done',
    tempRange: '63 °C ou mais',
    recommendedPullTemp: '60 °C+',
    description: 'Carne totalmente cinza/marrom no centro. A fraldinha resseca e perde sua principal virtude.',
    color: 'from-zinc-800 to-stone-900',
    isRecommended: false
  }
];

export function DonenessSelector({ soundEnabled = true }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(2); // Default to Recommended 54-57°C
  const activeLevel = DONENESS_LEVELS[selectedIndex];

  const handleSelect = (idx: number) => {
    playClickSound(soundEnabled);
    setSelectedIndex(idx);
  };

  return (
    <div id="doneness-selector" className="mt-4 rounded-2xl border border-white/10 bg-[#121212]/90 p-5 md:p-6 backdrop-blur-md shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#F27D26]/20 rounded-lg text-[#F27D26]">
            <Thermometer className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-serif italic font-semibold text-white text-base md:text-lg">
              Guia Interativo de Pontos & Temperaturas
            </h4>
            <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold">
              Medição no centro térmico da peça
            </span>
          </div>
        </div>
        <span className="text-xs text-white/50 font-mono">
          Termômetro de Espeto
        </span>
      </div>

      {/* Tabs */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {DONENESS_LEVELS.map((level, idx) => {
          const isSelected = idx === selectedIndex;
          return (
            <button
              key={level.name}
              onClick={() => handleSelect(idx)}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#F27D26] text-black font-bold shadow-md shadow-[#F27D26]/20'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {level.isRecommended && (
                <span className="inline-block mr-1 text-black font-black">★</span>
              )}
              {level.name}
            </button>
          );
        })}
      </div>

      {/* Detail Area */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Slice Visualizer */}
        <div className="md:col-span-5 bg-white/[0.03] rounded-xl border border-white/10 p-4 flex flex-col items-center justify-center space-y-3">
          <div className="w-full h-20 rounded-xl relative overflow-hidden border border-white/15 shadow-inner flex items-center justify-center">
            {/* Background crust */}
            <div className="absolute inset-0 bg-[#080808]" />
            {/* Top & bottom charred crust */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-b from-black to-[#2A150A]" />
            <div className="absolute bottom-0 inset-x-0 h-2 bg-gradient-to-t from-black to-[#2A150A]" />

            {/* Inner core color */}
            <div
              className={`h-12 w-full mx-2 rounded-lg bg-gradient-to-r ${activeLevel.color} flex items-center justify-center transition-all duration-500 shadow-lg`}
            >
              <span className="text-xs font-bold text-white uppercase drop-shadow-md tracking-wider">
                {activeLevel.name} ({activeLevel.tempRange})
              </span>
            </div>
          </div>

          <div className="w-full flex items-center justify-between text-xs px-1 text-white/40 font-mono">
            <span>🔥 Crosta Maillard</span>
            <span>🥩 Miolo Suculento</span>
          </div>
        </div>

        {/* Info & Recommendation */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-3">
          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-serif italic font-semibold text-white">
                {activeLevel.name} ({activeLevel.sub})
              </span>
              <span className="text-xs font-mono font-bold bg-[#F27D26]/20 text-[#F27D26] px-2.5 py-0.5 rounded-full border border-[#F27D26]/30">
                {activeLevel.tempRange}
              </span>
            </div>

            <p className="text-xs text-white/70 leading-relaxed font-light">
              {activeLevel.description}
            </p>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-white/40">Momento de tirar da brasa:</span>
              <span className="font-bold text-[#F27D26] font-mono">
                {activeLevel.recommendedPullTemp}
              </span>
            </div>
          </div>

          {activeLevel.isRecommended ? (
            <div className="rounded-xl border border-[#F27D26]/40 bg-[#F27D26]/10 p-3 flex items-start gap-2.5 text-xs text-white/90">
              <Star className="h-4 w-4 text-[#F27D26] shrink-0 mt-0.5 fill-[#F27D26]" />
              <span>
                <strong className="text-[#F27D26]">A Escolha do Mestre:</strong> Retirar a fraldinha por volta de <strong>54 °C a 57 °C</strong> e deixá-la descansar. Ela atinge a harmonia perfeita entre maciez extrema e retenção de suco.
              </span>
            </div>
          ) : (
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 flex items-center gap-2 text-xs text-white/50">
              <Info className="h-4 w-4 text-white/40 shrink-0" />
              <span>
                Dica: a temperatura sobe de 2 °C a 3 °C durante os 8–10 min de descanso na tábua.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
