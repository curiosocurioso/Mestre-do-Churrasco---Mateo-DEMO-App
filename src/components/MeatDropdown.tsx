import { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { BRAZILIAN_MEATS, MEAT_CATEGORIES } from '../data/brazilianMeats';
import { MeatCut } from '../types';
import { playClickSound } from '../utils/sound';

interface Props {
  selectedMeat: MeatCut;
  onSelectMeat: (meat: MeatCut) => void;
  soundEnabled?: boolean;
  onOpenFullSelector?: () => void;
}

export function MeatDropdown({
  selectedMeat,
  onSelectMeat,
  soundEnabled = true,
  onOpenFullSelector
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (meat: MeatCut) => {
    playClickSound(soundEnabled);
    onSelectMeat(meat);
    setIsOpen(false);
  };

  const categorizedMeats = useMemo(() => {
    const categories = MEAT_CATEGORIES.filter((c) => c.id !== 'all');
    return categories.map((cat) => ({
      category: cat,
      items: BRAZILIAN_MEATS.filter((m) => m.category === cat.id)
    })).filter((group) => group.items.length > 0);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => {
          playClickSound(soundEnabled);
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#F27D26]/50 hover:bg-white/10 text-white transition-all cursor-pointer group shadow-sm"
        title="Trocar item do churrasco"
      >
        <span className="w-2 h-2 rounded-full bg-[#F27D26] animate-pulse" />
        <span className="font-serif italic font-semibold text-xs sm:text-sm text-white group-hover:text-[#F27D26] transition-colors">
          {selectedMeat.shortName}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-[#F27D26] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 sm:right-0 sm:left-auto mt-2 w-72 sm:w-80 rounded-2xl bg-[#121212] border border-white/15 shadow-2xl shadow-black/80 py-2 z-50 animate-fade-in backdrop-blur-xl max-h-[75vh] overflow-y-auto scrollbar-thin">
          <div className="px-3.5 py-2 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#121212]/95 backdrop-blur-md z-10">
            <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold">
              Itens & Cortes ({BRAZILIAN_MEATS.length})
            </span>
            {onOpenFullSelector && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenFullSelector();
                }}
                className="text-[10px] text-white/50 hover:text-white underline cursor-pointer"
              >
                Ver Galeria
              </button>
            )}
          </div>

          <div className="py-1">
            {categorizedMeats.map(({ category, items }) => (
              <div key={category.id} className="mb-2">
                <div className="px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/40 bg-white/[0.02] flex items-center gap-1.5">
                  <span>{category.icon}</span>
                  <span>{category.label}</span>
                </div>
                {items.map((meat) => {
                  const isSelected = meat.id === selectedMeat.id;
                  return (
                    <button
                      key={meat.id}
                      onClick={() => handleSelect(meat)}
                      className={`w-full text-left px-3.5 py-2 flex items-center justify-between transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-white/[0.08] text-[#F27D26]'
                          : 'text-white/80 hover:bg-white/[0.04] hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img
                          src={meat.image}
                          alt={meat.name}
                          referrerPolicy="no-referrer"
                          className="w-7 h-7 rounded-lg object-cover shrink-0 border border-white/10"
                        />
                        <div className="truncate">
                          <span className="text-xs font-serif italic font-semibold block truncate">
                            {meat.name}
                          </span>
                          <span className="text-[10px] text-white/40 font-light block truncate">
                            {meat.tagline}
                          </span>
                        </div>
                      </div>

                      {isSelected && (
                        <div className="w-4 h-4 rounded-full bg-[#F27D26] text-black flex items-center justify-center shrink-0 ml-2">
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
