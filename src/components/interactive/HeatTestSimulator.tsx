import { useState } from 'react';
import { Hand, Flame, CheckCircle, AlertTriangle, Thermometer } from 'lucide-react';
import { playClickSound } from '../../utils/sound';

interface Props {
  soundEnabled?: boolean;
}

export function HeatTestSimulator({ soundEnabled = true }: Props) {
  const [secondsHeld, setSecondsHeld] = useState<number>(4);

  const handleSelectSeconds = (sec: number) => {
    playClickSound(soundEnabled);
    setSecondsHeld(sec);
  };

  const getHeatStatus = (sec: number) => {
    if (sec <= 2) {
      return {
        level: 'Calor Extremo (> 300 °C)',
        status: 'Fogo excessivamente quente ou com chamas!',
        color: 'text-red-400',
        borderColor: 'border-red-600',
        bgColor: 'bg-red-950/40',
        verdict: 'Espere as chamas baixarem e o carvão formar cinza antes de colocar a carne.',
        isOptimal: false
      };
    }
    if (sec <= 4) {
      return {
        level: 'Calor Forte Ideal (230–280 °C)',
        status: 'PERFEITO PARA FRALDINHA!',
        color: 'text-emerald-400',
        borderColor: 'border-emerald-600',
        bgColor: 'bg-emerald-950/40',
        verdict: 'Temperatura ideal na altura da grelha (10-12 cm). Hora de salgar e colocar a fraldinha.',
        isOptimal: true
      };
    }
    if (sec <= 6) {
      return {
        level: 'Calor Médio (180–220 °C)',
        status: 'Calor brando para selar fraldinha',
        color: 'text-amber-400',
        borderColor: 'border-amber-600',
        bgColor: 'bg-amber-950/40',
        verdict: 'A carne pode cozinhar sem criar a crosta crocante rápida necessária.',
        isOptimal: false
      };
    }
    return {
      level: 'Calor Fraco (< 170 °C)',
      status: 'Brasa fraca / Carvão apagando',
      color: 'text-blue-400',
      borderColor: 'border-blue-600',
      bgColor: 'bg-blue-950/40',
      verdict: 'Adicione mais carvão e oxigênio para reativar o braseiro.',
      isOptimal: false
    };
  };

  const heatInfo = getHeatStatus(secondsHeld);

  return (
    <div id="heat-test-simulator" className="mt-4 rounded-2xl border border-white/10 bg-[#121212]/90 p-5 md:p-6 backdrop-blur-md shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#F27D26]/20 rounded-lg text-[#F27D26]">
            <Hand className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-serif italic font-semibold text-white text-base md:text-lg">
              O Teste Prático da Mão
            </h4>
            <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold">
              10 a 12 cm sobre a grelha
            </span>
          </div>
        </div>
        <span className="text-xs font-mono text-white/50 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
          Sem termômetro infravermelho?
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Interactive Slider & Controls */}
        <div className="md:col-span-6 space-y-3.5">
          <label className="text-xs text-white/80 font-light block">
            Quantos segundos você consegue manter a mão espalmada sobre a grelha?
          </label>

          <div className="flex items-center gap-2">
            {[2, 3, 4, 5, 7].map((sec) => (
              <button
                key={sec}
                onClick={() => handleSelectSeconds(sec)}
                className={`flex-1 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  secondsHeld === sec
                    ? 'bg-[#F27D26] text-black shadow-lg shadow-[#F27D26]/20 scale-105'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {sec <= 2 ? '≤ 2s' : sec >= 7 ? '7s+' : `${sec}s`}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-[11px] text-white/40 px-1 font-mono">
            <span>🔥 Calor Extremo</span>
            <span className="text-[#F27D26] font-bold">⭐ 3-4s (Ideal)</span>
            <span>❄️ Brasa Fraca</span>
          </div>

          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3 flex items-center gap-2 text-xs text-white/70 font-light">
            <Thermometer className="h-4 w-4 text-[#F27D26] shrink-0" />
            <span>
              Com termômetro infravermelho de grelha: buscar <strong>230 °C a 280 °C</strong> na zona quente.
            </span>
          </div>
        </div>

        {/* Heat Result Card */}
        <div className="md:col-span-6">
          <div className={`rounded-xl border ${heatInfo.borderColor} ${heatInfo.bgColor} p-4 space-y-2`}>
            <div className="flex items-center justify-between">
              <span className={`text-xs font-mono font-bold uppercase tracking-wider ${heatInfo.color}`}>
                {heatInfo.level}
              </span>
              {heatInfo.isOptimal ? (
                <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                  <CheckCircle className="h-3.5 w-3.5" /> Ponto Certo!
                </span>
              ) : (
                <span className="flex items-center gap-1 text-xs font-bold text-[#F27D26] bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-[#F27D26]/40">
                  <AlertTriangle className="h-3.5 w-3.5" /> Ajustar Brasa
                </span>
              )}
            </div>

            <h5 className="font-serif italic font-semibold text-white text-sm md:text-base">
              {heatInfo.status}
            </h5>

            <p className="text-xs text-white/70 leading-relaxed font-light">
              {heatInfo.verdict}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
