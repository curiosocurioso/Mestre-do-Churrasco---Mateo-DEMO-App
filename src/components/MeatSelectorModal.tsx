import { useState, useMemo, ChangeEvent } from 'react';
import { Flame, Search, ChevronDown, X, ArrowRight, Check } from 'lucide-react';
import { BRAZILIAN_MEATS } from '../data/brazilianMeats';
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
  const [dropdownSelectedId, setDropdownSelectedId] = useState<string>(selectedMeat.id);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter items matching the search query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return BRAZILIAN_MEATS.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.shortName.toLowerCase().includes(q) ||
        m.tagline.toLowerCase().includes(q) ||
        m.categoryLabel.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  if (!isOpen) return null;

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const meatId = e.target.value;
    setDropdownSelectedId(meatId);
    const found = BRAZILIAN_MEATS.find((m) => m.id === meatId);
    if (found) {
      playClickSound(soundEnabled);
      onSelectMeat(found);
    }
  };

  const handleSelectItem = (item: MeatCut) => {
    playClickSound(soundEnabled);
    setDropdownSelectedId(item.id);
    onSelectMeat(item);
    setSearchQuery('');
    if (onClose) onClose();
  };

  const handleConfirm = () => {
    const found = BRAZILIAN_MEATS.find((m) => m.id === dropdownSelectedId) || selectedMeat;
    playClickSound(soundEnabled);
    onSelectMeat(found);
    if (onClose) onClose();
  };

  const currentItem = BRAZILIAN_MEATS.find((m) => m.id === dropdownSelectedId) || selectedMeat;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="w-full max-w-lg bg-[#111111] border border-white/15 rounded-3xl p-5 sm:p-7 shadow-2xl shadow-black/80 space-y-5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F27D26] to-[#b34b07] flex items-center justify-center shadow-md shadow-[#F27D26]/25 shrink-0">
              <Flame className="h-5 w-5 text-black stroke-[2.5]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#F27D26] font-bold block">
                Mestre do Churrasco
              </span>
              <h2 className="text-lg sm:text-xl font-serif italic text-white font-semibold">
                Selecione o Corte ou Vegetal
              </h2>
            </div>
          </div>

          {canClose && onClose && (
            <button
              onClick={() => {
                playClickSound(soundEnabled);
                onClose();
              }}
              className="rounded-full p-2 text-white/50 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
              title="Fechar"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* 1. DROP DOWN MENU WITH ALL MEAT CUTS AND VEGETABLES TOGETHER */}
        <div className="space-y-2">
          <label
            htmlFor="meat-select-dropdown"
            className="block text-xs font-serif italic text-[#F27D26] font-medium"
          >
            1. Menu Suspenso (Carnes & Vegetais)
          </label>

          <div className="relative flex items-center">
            <select
              id="meat-select-dropdown"
              value={dropdownSelectedId}
              onChange={handleDropdownChange}
              className="w-full appearance-none bg-[#1A1A1A] border border-white/20 hover:border-[#F27D26]/70 focus:border-[#F27D26] rounded-2xl px-4 py-3.5 pr-10 text-white font-medium text-sm sm:text-base transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F27D26]/30 shadow-inner"
            >
              <optgroup label="🥦 Opções Vegetarianas & Grelhados">
                {BRAZILIAN_MEATS.filter((m) => m.category === 'vegetariano').map((m) => (
                  <option key={m.id} value={m.id} className="bg-[#181818] text-white py-1">
                    {m.name} — {m.tagline}
                  </option>
                ))}
              </optgroup>
              <optgroup label="🥩 Bovinos Nobres">
                {BRAZILIAN_MEATS.filter((m) => m.category === 'bovino_nobre').map((m) => (
                  <option key={m.id} value={m.id} className="bg-[#181818] text-white py-1">
                    {m.name} — {m.tagline}
                  </option>
                ))}
              </optgroup>
              <optgroup label="🍖 Bovinos Tradicionais">
                {BRAZILIAN_MEATS.filter((m) => m.category === 'bovino_tradicional').map((m) => (
                  <option key={m.id} value={m.id} className="bg-[#181818] text-white py-1">
                    {m.name} — {m.tagline}
                  </option>
                ))}
              </optgroup>
              <optgroup label="🥓 Cortes Suínos & Linguiças">
                {BRAZILIAN_MEATS.filter((m) => m.category === 'suino').map((m) => (
                  <option key={m.id} value={m.id} className="bg-[#181818] text-white py-1">
                    {m.name} — {m.tagline}
                  </option>
                ))}
              </optgroup>
              <optgroup label="🍗 Aves na Brasa">
                {BRAZILIAN_MEATS.filter((m) => m.category === 'ave').map((m) => (
                  <option key={m.id} value={m.id} className="bg-[#181818] text-white py-1">
                    {m.name} — {m.tagline}
                  </option>
                ))}
              </optgroup>
              <optgroup label="🌿 Cordeiro & Especiais">
                {BRAZILIAN_MEATS.filter((m) => m.category === 'ovino').map((m) => (
                  <option key={m.id} value={m.id} className="bg-[#181818] text-white py-1">
                    {m.name} — {m.tagline}
                  </option>
                ))}
              </optgroup>
            </select>
            <div className="absolute right-4 pointer-events-none text-[#F27D26]">
              <ChevronDown className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* 2. SEARCH BAR TO SEARCH FOR THE CUT / FOOD */}
        <div className="space-y-2">
          <label
            htmlFor="meat-search-input"
            className="block text-xs font-serif italic text-white/70 font-medium"
          >
            2. Ou Pesquise pelo Nome do Alimento
          </label>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              id="meat-search-input"
              type="text"
              placeholder="Ex: picanha, brócolis, abobrinha, queijo coalho, costela..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-white/20 focus:border-[#F27D26] rounded-2xl pl-11 pr-10 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs px-1.5 py-0.5 rounded bg-white/10"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Instant Search Results Dropdown List */}
          {searchQuery.trim() !== '' && (
            <div className="mt-2 max-h-48 overflow-y-auto rounded-2xl bg-[#161616] border border-white/15 p-1.5 shadow-xl divide-y divide-white/5 scrollbar-thin">
              {searchResults.length > 0 ? (
                searchResults.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectItem(item)}
                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white/10 flex items-center justify-between transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-8 h-8 rounded-lg object-cover border border-white/10 shrink-0"
                      />
                      <div className="truncate">
                        <span className="text-sm font-medium text-white group-hover:text-[#F27D26] block truncate">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-white/50 block truncate">
                          {item.categoryLabel} • {item.tagline}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-[#F27D26] shrink-0 ml-2" />
                  </button>
                ))
              ) : (
                <div className="p-3 text-center text-xs text-white/50">
                  Nenhum corte ou vegetal encontrado para "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>

        {/* Selected Item Summary Card */}
        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-3.5 flex items-center gap-3.5">
          <img
            src={currentItem.image}
            alt={currentItem.name}
            referrerPolicy="no-referrer"
            className="w-12 h-12 rounded-xl object-cover border border-white/10 shrink-0"
          />
          <div className="min-w-0 flex-1">
            <span className="text-[10px] uppercase font-bold text-[#F27D26] tracking-wider block">
              Item Selecionado
            </span>
            <h3 className="text-sm sm:text-base font-serif italic font-semibold text-white truncate">
              {currentItem.name}
            </h3>
            <p className="text-xs text-white/60 truncate font-light">
              {currentItem.tagline}
            </p>
          </div>
          <div className="w-7 h-7 rounded-full bg-[#F27D26]/20 text-[#F27D26] flex items-center justify-center shrink-0">
            <Check className="h-4 w-4 stroke-[2.5]" />
          </div>
        </div>

        {/* Primary Action Button */}
        <button
          onClick={handleConfirm}
          className="w-full py-3.5 rounded-2xl bg-[#F27D26] hover:bg-[#d96a1a] text-black font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#F27D26]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
        >
          <span>Abrir Guia de {currentItem.shortName}</span>
          <ArrowRight className="h-4 w-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}
