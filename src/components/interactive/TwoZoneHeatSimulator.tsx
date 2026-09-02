import { useState } from 'react';
import { Flame, ShieldAlert, ThermometerSun, Wind, MoveRight } from 'lucide-react';
import { playClickSound } from '../../utils/sound';

interface Props {
  soundEnabled?: boolean;
}

export function TwoZoneHeatSimulator({ soundEnabled = true }: Props) {
  const [steakPosition, setSteakPosition] = useState<'hot' | 'cool'>('hot');
  const [flareUp, setFlareUp] = useState(false);

  const moveSteak = (pos: 'hot' | 'cool') => {
    playClickSound(soundEnabled);
    setSteakPosition(pos);
    if (pos === 'cool') {
      setFlareUp(false);
    }
  };

  const triggerFlare = () => {
    playClickSound(soundEnabled);
    setFlareUp(true);
    setSteakPosition('hot');
  };

  return (
    <div id="two-zone-heat-simulator" className="mt-4 rounded-2xl border border-white/10 bg-[#121212]/90 p-5 md:p-6 backdrop-blur-md shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#F27D26]/20 rounded-lg text-[#F27D26]">
            <Flame className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-serif italic font-semibold text-white text-base md:text-lg">
              Simulador de Churrasqueira em 2 Zonas
            </h4>
            <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold">
              Calor Direto vs. Calor Indireto
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={triggerFlare}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-full bg-red-500/20 text-red-300 border border-red-500/40 hover:bg-red-500/30 transition-all cursor-pointer"
          >
            <ShieldAlert className="h-3.5 w-3.5 text-red-400" />
            Simular Labareda
          </button>
        </div>
      </div>

      {/* Grill Visualization */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Visual Grill Box */}
        <div className="md:col-span-7 bg-white/[0.03] rounded-xl border border-white/10 p-3.5 flex flex-col justify-between relative overflow-hidden min-h-[220px]">
          {/* Grill Grate Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, #fff, #fff 2px, transparent 2px, transparent 16px)'
            }}
          />

          {/* Two Zones Split */}
          <div className="grid grid-cols-2 gap-3 h-full z-10 relative">
            {/* Zone 1: HOT ZONE */}
            <div
              onClick={() => moveSteak('hot')}
              className={`rounded-xl border p-3.5 transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                steakPosition === 'hot'
                  ? 'border-[#F27D26] bg-[#F27D26]/10 shadow-lg shadow-[#F27D26]/10'
                  : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05]'
              }`}
            >
              {/* Glowing coals effect */}
              <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-[#F27D26]/30 via-orange-500/10 to-transparent pointer-events-none" />

              <div className="flex items-center justify-between text-xs font-bold text-[#F27D26]">
                <span className="flex items-center gap-1.5">
                  <Flame className="h-4 w-4 animate-pulse" />
                  ZONA QUENTE
                </span>
                <span className="text-[10px] bg-[#F27D26]/20 px-2 py-0.5 rounded-full border border-[#F27D26]/30 font-mono text-[#F27D26]">
                  230–280 °C
                </span>
              </div>

              {/* Steak placed in HOT zone */}
              {steakPosition === 'hot' && (
                <div className="my-auto mx-auto py-2.5 px-4 rounded-full bg-gradient-to-r from-red-950 to-[#2A150A] border border-[#F27D26] text-[#F27D26] text-xs font-bold text-center shadow-lg relative animate-bounce-short">
                  🥩 Fraldinha Selando
                  {flareUp && (
                    <div className="absolute -top-3 -right-2 bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full animate-ping">
                      🔥 FOGO!
                    </div>
                  )}
                </div>
              )}

              <div className="text-[10px] text-white/40 mt-2 font-mono">
                Calor direto • Carvão rubro • Selar 4-6 min
              </div>
            </div>

            {/* Zone 2: COOL ZONE */}
            <div
              onClick={() => moveSteak('cool')}
              className={`rounded-xl border p-3.5 transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                steakPosition === 'cool'
                  ? 'border-cyan-500/60 bg-cyan-950/20 shadow-lg shadow-cyan-500/10'
                  : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05]'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold text-cyan-400">
                <span className="flex items-center gap-1.5">
                  <Wind className="h-4 w-4" />
                  ZONA FRIA (Indireta)
                </span>
                <span className="text-[10px] bg-cyan-500/20 px-2 py-0.5 rounded-full border border-cyan-500/30 font-mono text-cyan-300">
                  120–160 °C
                </span>
              </div>

              {/* Steak placed in COOL zone */}
              {steakPosition === 'cool' && (
                <div className="my-auto mx-auto py-2.5 px-4 rounded-full bg-gradient-to-r from-stone-900 to-zinc-900 border border-cyan-400/60 text-cyan-200 text-xs font-bold text-center shadow-lg">
                  🥩 Ponto / Descanso Indireto
                </div>
              )}

              <div className="text-[10px] text-white/40 mt-2 font-mono">
                Sem carvão direto • Salvação de labaredas • Ponto suave
              </div>
            </div>
          </div>

          <div className="mt-2.5 text-center text-[11px] text-white/40 z-10 font-light">
            Toque em cada zona para mover a fraldinha na grelha
          </div>
        </div>

        {/* Dynamic Status & Guidance */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-3">
          {flareUp && steakPosition === 'hot' ? (
            <div className="rounded-xl border border-red-500/50 bg-red-950/40 p-4 space-y-2.5 animate-pulse">
              <div className="flex items-center gap-1.5 text-red-400 font-bold text-xs font-mono">
                <ShieldAlert className="h-4 w-4 shrink-0" />
                <span>LABAREDA DETECTADA!</span>
              </div>
              <p className="text-xs text-white/90 font-light leading-relaxed">
                A gordura pingou na brasa e subiu chama alta. <strong>Mova a fraldinha para a Zona Fria agora!</strong>
              </p>
              <button
                onClick={() => moveSteak('cool')}
                className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <MoveRight className="h-3.5 w-3.5" />
                Mover para Zona Fria (Salvar Carne)
              </button>
            </div>
          ) : steakPosition === 'hot' ? (
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 space-y-2">
              <div className="flex items-center gap-1.5 text-[#F27D26] font-serif italic font-semibold text-xs">
                <ThermometerSun className="h-4 w-4 shrink-0" />
                <span>Fase Atual: Selamento & Crosta (Maillard)</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Sobre as brasas fortes, a fraldinha carameliza a superfície sem cozinhar o miolo em excesso.
              </p>
              <span className="text-[11px] text-[#F27D26] font-mono block">
                ⏱️ 4 a 6 minutos de cada lado
              </span>
            </div>
          ) : (
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 space-y-2">
              <div className="flex items-center gap-1.5 text-cyan-400 font-serif italic font-semibold text-xs">
                <Wind className="h-4 w-4 shrink-0" />
                <span>Fase Atual: Calor Indireto & Ponto Suave</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Aqui o calor suave penetra até o centro da carne sem queimar a crosta externa já formada.
              </p>
              <span className="text-[11px] text-cyan-300 font-mono block">
                🎯 Alvo: 54–57 °C de temperatura interna
              </span>
            </div>
          )}

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-[11px] text-white/50 font-light">
            💡 <strong className="text-white/80">Nunca jogue água:</strong> Jogar água apaga as brasas, levanta cinzas na carne e derruba a temperatura.
          </div>
        </div>
      </div>
    </div>
  );
}
