import { useState } from 'react';
import { VisualInspectionItem } from '../../types';
import { CheckCircle2, XCircle, Info, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { playClickSound } from '../../utils/sound';

interface Props {
  items: VisualInspectionItem[];
  soundEnabled?: boolean;
}

export function VisualInspectionGallery({ items, soundEnabled = true }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] || items[0];

  const handleSelect = (idx: number) => {
    playClickSound(soundEnabled);
    setActiveIndex(idx);
  };

  const handlePrev = () => {
    playClickSound(soundEnabled);
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const handleNext = () => {
    playClickSound(soundEnabled);
    setActiveIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };

  return (
    <div id="visual-inspection-gallery" className="mt-4 rounded-2xl border border-white/10 bg-[#121212]/90 p-5 md:p-6 backdrop-blur-md shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#F27D26]/20 rounded-lg text-[#F27D26]">
            <Eye className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-serif italic font-semibold text-white text-base md:text-lg">
              Guia de Inspeção Visual
            </h4>
            <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold">
              5 Detalhes Críticos no Açougue
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
            title="Anterior"
            aria-label="Item anterior de inspeção"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-xs font-mono text-[#F27D26] px-1">
            {activeIndex + 1}/{items.length}
          </span>
          <button
            onClick={handleNext}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
            title="Próximo"
            aria-label="Próximo item de inspeção"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Tabs / Pills */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {items.map((item, idx) => {
          const isSelected = idx === activeIndex;
          return (
            <button
              key={item.id}
              onClick={() => handleSelect(idx)}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#F27D26] text-black font-bold shadow-md shadow-[#F27D26]/20'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {idx + 1}. {item.title.split('—')[1]?.trim() || item.title}
            </button>
          );
        })}
      </div>

      {/* Active Card Content */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        <div className="md:col-span-5 relative group overflow-hidden rounded-xl border border-white/10 bg-black aspect-video md:aspect-[4/3]">
          <img
            src={activeItem.image}
            alt={activeItem.title}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <span className="rounded-full bg-[#F27D26] px-3 py-1 text-[10px] font-bold text-black uppercase tracking-wider shadow-md">
              {activeItem.title}
            </span>
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-between space-y-3.5">
          <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
            {activeItem.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {/* O que procurar */}
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3.5">
              <div className="flex items-center gap-1.5 font-serif italic font-semibold text-emerald-400 mb-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>O que procurar</span>
              </div>
              <ul className="space-y-1.5 text-white/70 font-light text-[11px] sm:text-xs">
                {activeItem.whatToLookFor.map((point, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* O que evitar */}
            <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-3.5">
              <div className="flex items-center gap-1.5 font-serif italic font-semibold text-rose-400 mb-2">
                <XCircle className="h-4 w-4 text-rose-400 shrink-0" />
                <span>O que evitar</span>
              </div>
              <ul className="space-y-1.5 text-white/70 font-light text-[11px] sm:text-xs">
                {activeItem.whatToAvoid.map((point, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
