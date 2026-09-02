import { useState } from 'react';
import { Scissors, CheckCircle, AlertTriangle, RefreshCw } from 'lucide-react';
import { playClickSound } from '../../utils/sound';

interface Props {
  soundEnabled?: boolean;
}

export function FiberCutSimulator({ soundEnabled = true }: Props) {
  const [cutMode, setCutMode] = useState<'against' | 'parallel'>('against');

  const toggleMode = (mode: 'against' | 'parallel') => {
    playClickSound(soundEnabled);
    setCutMode(mode);
  };

  return (
    <div id="fiber-cut-simulator" className="mt-4 rounded-2xl border border-white/10 bg-[#121212]/90 p-5 md:p-6 backdrop-blur-md shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#F27D26]/20 rounded-lg text-[#F27D26]">
            <Scissors className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-serif italic font-semibold text-white text-base md:text-lg">
              Simulador de Corte Transversal
            </h4>
            <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold">
              Contra as Fibras (90°) vs A Favor
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-full border border-white/10 self-start sm:self-auto">
          <button
            onClick={() => toggleMode('against')}
            className={`px-3.5 py-1.5 text-xs rounded-full transition-all cursor-pointer ${
              cutMode === 'against'
                ? 'bg-emerald-600 text-white font-bold shadow-md shadow-emerald-900/30'
                : 'text-white/60 hover:text-white'
            }`}
          >
            ✓ 90° Contra a Fibra (Correto)
          </button>
          <button
            onClick={() => toggleMode('parallel')}
            className={`px-3.5 py-1.5 text-xs rounded-full transition-all cursor-pointer ${
              cutMode === 'parallel'
                ? 'bg-rose-600 text-white font-bold shadow-md shadow-rose-900/30'
                : 'text-white/60 hover:text-white'
            }`}
          >
            ✕ A Favor da Fibra (Erro)
          </button>
        </div>
      </div>

      {/* SVG Interactive Diagram */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        <div className="md:col-span-6 relative bg-white/[0.03] rounded-xl border border-white/10 p-3.5 flex flex-col items-center justify-center overflow-hidden">
          <svg
            viewBox="0 0 320 180"
            className="w-full h-auto max-h-48 drop-shadow-lg"
          >
            <defs>
              <linearGradient id="meatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#881337" />
                <stop offset="50%" stopColor="#4c0519" />
                <stop offset="100%" stopColor="#2A150A" />
              </linearGradient>
              <linearGradient id="fatCapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F27D26" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.6" />
              </linearGradient>
              <pattern id="fiberLines" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 0 10 L 20 10" stroke="#f87171" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="3,2" />
              </pattern>
            </defs>

            {/* Meat Slice Body */}
            <path
              d="M 20,40 C 90,25 230,25 300,45 C 305,100 295,145 285,155 C 220,165 100,160 30,150 C 15,110 15,70 20,40 Z"
              fill="url(#meatGrad)"
              stroke="#F27D26"
              strokeOpacity="0.4"
              strokeWidth="1.5"
            />

            {/* Fat layer on top */}
            <path
              d="M 20,40 C 90,25 230,25 300,45 C 300,55 250,50 180,48 C 110,48 50,52 20,40 Z"
              fill="url(#fatCapGrad)"
            />

            {/* Muscle Grain Direction Indicator Lines */}
            <g stroke="#fca5a5" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.65">
              <line x1="40" y1="65" x2="280" y2="65" />
              <line x1="35" y1="85" x2="285" y2="85" />
              <line x1="35" y1="105" x2="280" y2="105" />
              <line x1="40" y1="125" x2="270" y2="125" />
            </g>

            {/* Fiber direction labels */}
            <text x="160" y="78" fill="#EDEDED" fontSize="10" fontWeight="bold" textAnchor="middle" opacity="0.85">
              ➔ SENTIDO LONGITUDINAL DAS FIBRAS ➔
            </text>

            {/* Knife Cutting Lines */}
            {cutMode === 'against' ? (
              <g>
                {/* 90 degree vertical knife cut lines across */}
                {[90, 140, 190, 240].map((x) => (
                  <g key={x}>
                    <line
                      x1={x}
                      y1="20"
                      x2={x}
                      y2="170"
                      stroke="#10b981"
                      strokeWidth="2.5"
                      strokeDasharray="4,2"
                    />
                    <circle cx={x} cy="25" r="3" fill="#10b981" />
                  </g>
                ))}
                {/* Knife icon representation */}
                <rect x="135" y="10" width="10" height="40" rx="2" fill="#e2e8f0" stroke="#0f172a" />
                <path d="M 135,10 L 145,25 L 140,50 Z" fill="#94a3b8" />
                <text x="160" y="172" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">
                  Corte a 90° (Fibras Encurtadas)
                </text>
              </g>
            ) : (
              <g>
                {/* Parallel knife cut lines along fibers */}
                <line
                  x1="20"
                  y1="95"
                  x2="300"
                  y2="95"
                  stroke="#ef4444"
                  strokeWidth="3"
                  strokeDasharray="4,2"
                />
                <text x="160" y="172" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle">
                  Corte Paralelo (Fibras Longas Intactas)
                </text>
              </g>
            )}
          </svg>

          <span className="text-[11px] text-white/40 mt-1.5 font-mono">
            {cutMode === 'against' ? '✓ Lâmina perpendicular à fibra (90°)' : '✕ Lâmina no mesmo sentido da fibra'}
          </span>
        </div>

        {/* Result Explanation */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-3">
          {cutMode === 'against' ? (
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-serif italic font-semibold text-sm md:text-base">
                <CheckCircle className="h-4 w-4 shrink-0" />
                <span>Resultado: Suculência & Maciez Extrema</span>
              </div>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                Ao cortar a <strong>90 graus transversalmente</strong>, a lâmina da faca rompe mecanicamente as fibras musculares longas em pequenos feixes curtos.
              </p>
              <div className="bg-emerald-900/30 rounded-lg p-2.5 text-[11px] text-emerald-200 font-light">
                ⭐ <strong className="text-emerald-300">Na mastigação:</strong> O dente não encontra resistência elástica. A fraldinha derrete na boca.
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-4 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-serif italic font-semibold text-sm md:text-base">
                <AlertTriangle className="h-4 w-4 shrink-0" />
                <span>Resultado: Carne Borrachuda e Dura</span>
              </div>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                Cortar a favor da fibra mantém os filamentos musculares inteiros e compridos. Mesmo que a carne esteja no ponto perfeito, cada mordida terá feixes elásticos longos.
              </p>
              <div className="bg-rose-900/30 rounded-lg p-2.5 text-[11px] text-rose-200 font-light">
                ⚠️ <strong className="text-rose-300">Atenção:</strong> É o erro número 1 que faz uma fraldinha nobre parecer carne dura.
              </div>
            </div>
          )}

          <div className="flex items-center justify-between text-xs text-white/40 pt-1 font-light">
            <span>Dica: memorize a direção com a peça crua antes de assar!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
