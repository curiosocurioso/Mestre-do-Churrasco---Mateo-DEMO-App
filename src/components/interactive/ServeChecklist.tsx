import { useState } from 'react';
import { Utensils, Check, Sparkles, AlertCircle } from 'lucide-react';
import { playClickSound } from '../../utils/sound';

interface Props {
  soundEnabled?: boolean;
}

interface SideDish {
  id: string;
  name: string;
  category: string;
  description: string;
  isTraditional: boolean;
}

const SIDE_DISHES: SideDish[] = [
  {
    id: 'farofa',
    name: 'Farofa Crocante',
    category: 'Acompanhamento Essencial',
    description: 'Farofa dourada na manteiga com pedacinhos de cebola ou bacon crocante.',
    isTraditional: true
  },
  {
    id: 'vinagrete',
    name: 'Vinagrete Fresco',
    category: 'Acidez & Frescor',
    description: 'Tomate maduro, cebola em cubos, cheiro-verde, azeite extra virgem e vinagre de vinho.',
    isTraditional: true
  },
  {
    id: 'arroz',
    name: 'Arroz Branco Soltinho',
    category: 'Base Clássica',
    description: 'Arroz quentinho com alho dourado e leve toque de cebola.',
    isTraditional: true
  },
  {
    id: 'pao_alho',
    name: 'Pão de Alho Crocante',
    category: 'Grelha',
    description: 'Pão baguete recheado com pasta de alho e queijo derretido tostado na brasa.',
    isTraditional: true
  },
  {
    id: 'salada',
    name: 'Salada Verde Fresca',
    category: 'Leveza',
    description: 'Folhas de rúcula, agrião ou alface com lâminas de cebola roxa e limão.',
    isTraditional: true
  },
  {
    id: 'chimichurri',
    name: 'Chimichurri Artesanal',
    category: 'Opcional / Contemporâneo',
    description: 'Ervas frescas (salsinha, orégano), pimenta calabresa, azeite e vinagre servido à parte.',
    isTraditional: false
  },
  {
    id: 'bebidas',
    name: 'Cerveja Gelada / Caipirinha',
    category: 'Harmonização',
    description: 'Cerveja tipo Pilsen/Lager estupidamente gelada ou Caipirinha tradicional de cachaça e limão.',
    isTraditional: true
  }
];

export function ServeChecklist({ soundEnabled = true }: Props) {
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'farofa',
    'vinagrete',
    'arroz',
    'pao_alho',
    'bebidas'
  ]);

  const toggleItem = (id: string) => {
    playClickSound(soundEnabled);
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div id="serve-checklist-card" className="mt-4 rounded-2xl border border-white/10 bg-[#121212]/90 p-5 md:p-6 backdrop-blur-md shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#F27D26]/20 rounded-lg text-[#F27D26]">
            <Utensils className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-serif italic font-semibold text-white text-base md:text-lg">
              Mesa de Churrascaria: Monte a sua Guarnição
            </h4>
            <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold">
              Harmonizações Tradicionais Brasileiras
            </span>
          </div>
        </div>
        <span className="text-xs text-[#F27D26] font-mono bg-white/5 px-3 py-1 rounded-full border border-white/10">
          {selectedItems.length} selecionados
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {SIDE_DISHES.map((dish) => {
          const isChecked = selectedItems.includes(dish.id);
          return (
            <button
              key={dish.id}
              onClick={() => toggleItem(dish.id)}
              className={`text-left p-3.5 rounded-xl border transition-all flex items-start justify-between gap-2.5 cursor-pointer ${
                isChecked
                  ? 'bg-white/[0.05] border-[#F27D26]/60 shadow-lg shadow-[#F27D26]/5'
                  : 'bg-white/[0.02] border-white/10 text-white/60 hover:bg-white/[0.04]'
              }`}
            >
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono font-bold text-[#F27D26] block">
                  {dish.category}
                </span>
                <span className="text-xs font-serif italic font-semibold text-white block">
                  {dish.name}
                </span>
                <p className="text-[11px] text-white/70 font-light leading-relaxed">
                  {dish.description}
                </p>
              </div>

              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                  isChecked
                    ? 'bg-[#F27D26] border-[#F27D26] text-black'
                    : 'border-white/20 bg-white/5 text-transparent'
                }`}
              >
                <Check className="h-3 w-3 stroke-[3]" />
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3 flex items-center gap-3 text-xs text-white/80 font-light">
        <AlertCircle className="h-4 w-4 text-[#F27D26] shrink-0" />
        <span>
          <strong className="text-white font-medium">Dica do Assador:</strong> Sirva os molhos e acompanhamentos sempre à parte. A fraldinha fatiada deve brilhar pelo próprio sabor de brasa, sal e marmoreio.
        </span>
      </div>
    </div>
  );
}
