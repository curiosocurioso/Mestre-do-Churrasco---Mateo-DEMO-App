import { useState, useMemo, ChangeEvent } from 'react';
import { Flame, Search, ChevronDown, Sparkles, Clock, ArrowRight, X, Check, Utensils } from 'lucide-react';
import { BRAZILIAN_MEATS, MEAT_CATEGORIES } from '../data/brazilianMeats';
import { MeatCut } from '../types';
import { playClickSound } from '../utils/sound';

interface Props {
  isOpen: boolean;
  onClose?: () => void;
  selectedMeat: MeatCut;
  onSelectMeat: (meat: MeatCut) => void;
  soundEnabled?: boolean;
  canClose?: boolean;
}

export function MeatSelectorModal({
  isOpen,
  onClose,
  selectedMeat,
  onSelectMeat,
  soundEnabled = true,
  canClose = true
}: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dropdownSelectedId, setDropdownSelectedId] = useState<string>(selectedMeat.id);

  const filteredMeats = useMemo(() => {
    return BRAZILIAN_MEATS.filter((meat) => {
      const matchesCategory = selectedCategory === 'all' || meat.category === selectedCategory;
      const matchesSearch =
        meat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        meat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        meat.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  if (!isOpen) return null;

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const meatId = e.target.value;
    setDropdownSelectedId(meatId);
    const found = BRAZILIAN_MEATS.find((m) => m.id === meatId);
    if (found) {
      playClickSound(soundEnabled);
      onSelectMeat(found);
      if (onClose) onClose();
    }
  };

  const handlePickMeat = (meat: MeatCut) => {
    playClickSound(soundEnabled);
    onSelectMeat(meat);
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div
        className="w-full max-w-5xl my-auto bg-[#0F0F0F] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl space-y-6 relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Title & Close if available */}
        <div className="flex items-start justify-between border-b border-white/10 pb-5 shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F27D26] to-[#b34b07] flex items-center justify-center shadow-lg shadow-[#F27D26]/25 shrink-0">
              <Flame className="h-6 w-6 text-black stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#F27D26] font-bold">
                  Mestre do Churrasco Brasileiro
                </span>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/5 text-white/60 border border-white/10">
                  {BRAZILIAN_MEATS.length} Cortes Disponíveis
                </span>
              </div>
              <h2 className="text-xl sm:text-3xl font-serif italic text-white tracking-tight mt-0.5">
                Escolha a Carne do Seu Churrasco
              </h2>
            </div>
          </div>

          {canClose && onClose && (
            <button
              onClick={() => {
                playClickSound(soundEnabled);
                onClose();
              }}
              className="rounded-full p-2.5 text-white/50 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
              title="Fechar"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* PRIMARY DROPDOWN MENU (Directly fulfilling user request) */}
        <div className="rounded-2xl bg-gradient-to-r from-[#181818] via-[#141414] to-[#181818] border border-[#F27D26]/30 p-4 sm:p-5 shadow-lg shadow-black/40 shrink-0">
          <label
            htmlFor="meat-select-dropdown"
            className="block text-xs font-serif italic text-[#F27D26] font-semibold mb-2"
          >
            Selecione o Corte no Menu Suspenso:
          </label>

          <div className="relative flex items-center">
            <select
              id="meat-select-dropdown"
              value={dropdownSelectedId}
              onChange={handleDropdownChange}
              className="w-full appearance-none bg-[#0A0A0A] border border-white/20 hover:border-[#F27D26]/60 focus:border-[#F27D26] rounded-xl px-4 py-3.5 pr-10 text-white font-medium text-sm sm:text-base transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F27D26]/30"
            >
              <optgroup label="🥩 Bovinos Nobres">
                {BRAZILIAN_MEATS.filter((m) => m.category === 'bovino_nobre').map((m) => (
                  <option key={m.id} value={m.id} className="bg-[#121212] text-white py-1">
                    {m.name} — {m.tagline}
                  </option>
                ))}
              </optgroup>
              <optgroup label="🍖 Bovinos Tradicionais">
                {BRAZILIAN_MEATS.filter((m) => m.category === 'bovino_tradicional').map((m) => (
                  <option key={m.id} value={m.id} className="bg-[#121212] text-white py-1">
                    {m.name} — {m.tagline}
                  </option>
                ))}
              </optgroup>
              <optgroup label="🥓 Cortes Suínos">
                {BRAZILIAN_MEATS.filter((m) => m.category === 'suino').map((m) => (
                  <option key={m.id} value={m.id} className="bg-[#121212] text-white py-1">
                    {m.name} — {m.tagline}
                  </option>
                ))}
              </optgroup>
              <optgroup label="🍗 Aves na Brasa">
                {BRAZILIAN_MEATS.filter((m) => m.category === 'ave').map((m) => (
                  <option key={m.id} value={m.id} className="bg-[#121212] text-white py-1">
                    {m.name} — {m.tagline}
                  </option>
                ))}
              </optgroup>
              <optgroup label="🌿 Cordeiro & Especiais">
                {BRAZILIAN_MEATS.filter((m) => m.category === 'ovino').map((m) => (
                  <option key={m.id} value={m.id} className="bg-[#121212] text-white py-1">
                    {m.name} — {m.tagline}
                  </option>
                ))}
              </optgroup>
            </select>
            <div className="absolute right-3.5 pointer-events-none text-[#F27D26]">
              <ChevronDown className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Search & Category Filter Pills */}
        <div className="space-y-3 shrink-0">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <input
                type="text"
                placeholder="Buscar corte (ex: picanha, costela, coração, cupim, linguiça)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 focus:border-[#F27D26] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-white/40 focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            {MEAT_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    playClickSound(soundEnabled);
                    setSelectedCategory(cat.id);
                  }}
                  className={`px-3 py-1.5 rounded-full border whitespace-nowrap font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#F27D26] border-[#F27D26] text-black font-bold shadow-md shadow-[#F27D26]/20'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Visual Cards Grid */}
        <div className="flex-1 overflow-y-auto pr-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 scrollbar-thin">
          {filteredMeats.map((meat) => {
            const isSelected = meat.id === selectedMeat.id;
            return (
              <div
                key={meat.id}
                onClick={() => handlePickMeat(meat)}
                className={`group relative rounded-2xl border transition-all cursor-pointer flex flex-col justify-between overflow-hidden p-4 ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#1E1E1E] to-[#121212] border-[#F27D26] shadow-xl shadow-[#F27D26]/10 ring-1 ring-[#F27D26]'
                    : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20'
                }`}
              >
                {/* Image Banner */}
                <div className="relative h-28 w-full rounded-xl overflow-hidden mb-3 bg-[#0A0A0A]">
                  <img
                    src={meat.image}
                    alt={meat.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                  <div className="absolute top-2 left-2 flex items-center gap-1">
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-black/70 text-[#F27D26] border border-[#F27D26]/30 backdrop-blur-md">
                      {meat.categoryLabel}
                    </span>
                  </div>
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#F27D26] text-black flex items-center justify-center shadow-lg">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                  )}
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1 mb-3">
                  <h3 className="font-serif italic font-semibold text-white text-base group-hover:text-[#F27D26] transition-colors">
                    {meat.name}
                  </h3>
                  <p className="text-xs text-[#F27D26] font-medium line-clamp-1">
                    {meat.tagline}
                  </p>
                  <p className="text-[11px] text-white/60 font-light line-clamp-2 leading-relaxed">
                    {meat.description}
                  </p>
                </div>

                {/* Badges & Action Button */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="flex items-center justify-between text-[10px] text-white/50 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-[#F27D26]" />
                      {meat.prepTimeText}
                    </span>
                    <span className="text-white/70 font-semibold">
                      ~{meat.defaultGramsPerPerson}g / pessoa
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePickMeat(meat);
                    }}
                    className={`w-full py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#F27D26] text-black shadow-md shadow-[#F27D26]/30'
                        : 'bg-white/5 hover:bg-[#F27D26] hover:text-black text-white/80'
                    }`}
                  >
                    <span>{isSelected ? 'Corte Selecionado' : 'Abrir Guia'}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40 font-light shrink-0">
          <div className="flex items-center gap-2">
            <Utensils className="h-4 w-4 text-[#F27D26]" />
            <span>Todos os guias incluem calculadoras de porção, simuladores de brasa e fatiamento.</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePickMeat(selectedMeat)}
              className="px-6 py-2 rounded-full bg-[#F27D26] hover:bg-[#d96a1a] text-black font-bold text-xs transition-all shadow-lg shadow-[#F27D26]/20 cursor-pointer"
            >
              Iniciar com {selectedMeat.shortName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
