import { useState } from 'react';
import { ShieldAlert, Flame, Ban, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { playClickSound } from '../../utils/sound';

interface Props {
  soundEnabled?: boolean;
}

const FLOW_STEPS = [
  { step: '1. Compre', desc: '1,5–1,8 kg inteira com marmoreio' },
  { step: '2. Apare', desc: 'Remova tecidos duros e excesso de sebo' },
  { step: '3. Seque', desc: 'Retire umidade com papel-toalha' },
  { step: '4. Fogo', desc: 'Brasas vivas a 230–280 °C, sem chamas' },
  { step: '5. Tempere', desc: 'Sal grosso imediatamente antes da grelha' },
  { step: '6. Sele', desc: '4–6 min cada lado (gordura para cima 1º)' },
  { step: '7. Finalize', desc: 'Zona fria até centro atingir 54–57 °C' },
  { step: '8. Descanse', desc: '8–10 min sagrados na tábua de corte' },
  { step: '9. Fatie', desc: 'A 90° contra as fibras (0,5–1 cm)' },
  { step: '10. Sirva', desc: 'Imediatamente com farofa e vinagrete' }
];

export function GoldenRulesCard({ soundEnabled = true }: Props) {
  const [activeTab, setActiveTab] = useState<'rules' | 'flow'>('rules');

  const switchTab = (tab: 'rules' | 'flow') => {
    playClickSound(soundEnabled);
    setActiveTab(tab);
  };

  return (
    <div id="golden-rules-card" className="mt-4 rounded-2xl border border-white/10 bg-[#121212]/90 p-5 md:p-6 backdrop-blur-md shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#F27D26]/20 rounded-lg text-[#F27D26]">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-serif italic font-semibold text-white text-base md:text-lg">
              O Manifesto do Churrasqueiro
            </h4>
            <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold">
              Princípios Inegociáveis da Fraldinha
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-full border border-white/10">
          <button
            onClick={() => switchTab('rules')}
            className={`px-3.5 py-1.5 text-xs rounded-full transition-all cursor-pointer ${
              activeTab === 'rules'
                ? 'bg-[#F27D26] text-black font-bold shadow-md shadow-[#F27D26]/20'
                : 'text-white/60 hover:text-white'
            }`}
          >
            ⭐ As 3 Leis Inegociáveis
          </button>
          <button
            onClick={() => switchTab('flow')}
            className={`px-3.5 py-1.5 text-xs rounded-full transition-all cursor-pointer ${
              activeTab === 'flow'
                ? 'bg-[#F27D26] text-black font-bold shadow-md shadow-[#F27D26]/20'
                : 'text-white/60 hover:text-white'
            }`}
          >
            📋 Fluxograma dos 10 Passos
          </button>
        </div>
      </div>

      {activeTab === 'rules' ? (
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Rule 1 */}
          <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-4 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 text-rose-400 font-mono font-bold text-xs mb-1 uppercase tracking-wider">
                <Ban className="h-4 w-4 shrink-0" />
                <span>Lei 1 • Fogo Limpo</span>
              </div>
              <h5 className="font-serif italic font-semibold text-white text-sm md:text-base">
                NÃO cozinhe sobre chamas ativas
              </h5>
              <p className="text-xs text-white/70 mt-2 font-light leading-relaxed">
                Labaredas queimam a crosta externa antes de cozinhar o miolo e impregnam fuligem amarga na gordura. Aguarde as chamas baixarem e use braseiro incandescente.
              </p>
            </div>
            <span className="text-[10px] font-mono text-rose-300/80 mt-2 block">
              ✦ Use a Zona Fria se a gordura pingar
            </span>
          </div>

          {/* Rule 2 */}
          <div className="rounded-xl border border-[#F27D26]/30 bg-[#F27D26]/10 p-4 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 text-[#F27D26] font-mono font-bold text-xs mb-1 uppercase tracking-wider">
                <ShieldAlert className="h-4 w-4 shrink-0" />
                <span>Lei 2 • Ponto Nobre</span>
              </div>
              <h5 className="font-serif italic font-semibold text-white text-sm md:text-base">
                NÃO passe além do ponto
              </h5>
              <p className="text-xs text-white/70 mt-2 font-light leading-relaxed">
                A fraldinha tem fibras longas que dependem dos sucos internos para se manterem macias. Passar de 60 °C resulta em ressecamento irremediável e rigidez.
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#F27D26]/90 mt-2 block">
              ✦ Alvo: 54–57 °C de temperatura interna
            </span>
          </div>

          {/* Rule 3 */}
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-xs mb-1 uppercase tracking-wider">
                <CheckCircle className="h-4 w-4 shrink-0" />
                <span>Lei 3 • Corte Cirúrgico</span>
              </div>
              <h5 className="font-serif italic font-semibold text-white text-sm md:text-base">
                NÃO fatie a favor da fibra
              </h5>
              <p className="text-xs text-white/70 mt-2 font-light leading-relaxed">
                O corte deve ser sempre a 90° em relação às fibras musculares para encurtar os feixes. Cortar no sentido longitudinal destrói a maciez na mastigação.
              </p>
            </div>
            <span className="text-[10px] font-mono text-emerald-300/80 mt-2 block">
              ✦ Fatias de 0,5 a 1 cm contra a fibra
            </span>
          </div>
        </div>
      ) : (
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {FLOW_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white/[0.03] border border-white/10 p-3 flex flex-col justify-between text-center relative group hover:border-[#F27D26]/50 transition-all hover:bg-white/[0.05]"
            >
              <span className="text-xs font-serif italic font-semibold text-[#F27D26]">{item.step}</span>
              <p className="text-[10px] text-white/70 font-light mt-1.5 line-clamp-2">{item.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
