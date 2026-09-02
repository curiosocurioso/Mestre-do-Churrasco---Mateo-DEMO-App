import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Bell, Flame, Coffee } from 'lucide-react';
import { playTimerChime, playClickSound, playSizzle } from '../../utils/sound';

interface Props {
  type: 'searing' | 'resting';
  soundEnabled?: boolean;
}

export function StepTimer({ type, soundEnabled = true }: Props) {
  const defaultMinutes = type === 'searing' ? 5 : 9;
  const [totalSeconds, setTotalSeconds] = useState(defaultMinutes * 60);
  const [timeLeft, setTimeLeft] = useState(defaultMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsRunning(false);
            setHasFinished(true);
            playTimerChime(soundEnabled);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, soundEnabled]);

  const toggleTimer = () => {
    playClickSound(soundEnabled);
    if (!isRunning && timeLeft === 0) {
      setTimeLeft(totalSeconds);
      setHasFinished(false);
    }
    if (!isRunning && type === 'searing') {
      playSizzle(soundEnabled);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    playClickSound(soundEnabled);
    setIsRunning(false);
    setTimeLeft(totalSeconds);
    setHasFinished(false);
  };

  const setPreset = (mins: number) => {
    playClickSound(soundEnabled);
    setIsRunning(false);
    setTotalSeconds(mins * 60);
    setTimeLeft(mins * 60);
    setHasFinished(false);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = ((totalSeconds - timeLeft) / totalSeconds) * 100;

  return (
    <div id={`step-timer-${type}`} className="mt-4 rounded-2xl border border-white/10 bg-[#121212]/90 p-5 md:p-6 backdrop-blur-md shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#F27D26]/20 rounded-lg text-[#F27D26]">
            {type === 'searing' ? (
              <Flame className="h-5 w-5 animate-pulse" />
            ) : (
              <Coffee className="h-5 w-5" />
            )}
          </div>
          <div>
            <h4 className="font-serif italic font-semibold text-white text-base md:text-lg">
              {type === 'searing'
                ? 'Cronômetro de Selagem da Fraldinha'
                : 'Cronômetro de Descanso Sagrado'}
            </h4>
            <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold">
              {type === 'searing' ? '4 a 6 minutos por lado' : '8 a 10 minutos na tábua'}
            </span>
          </div>
        </div>

        {/* Presets */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          <span className="text-[10px] uppercase tracking-wider text-white/40 mr-1">Predefinição:</span>
          {type === 'searing' ? (
            <>
              <button
                onClick={() => setPreset(4)}
                className={`px-3 py-1 text-xs font-mono rounded-full border transition-all cursor-pointer ${
                  totalSeconds === 240
                    ? 'bg-[#F27D26] border-[#F27D26] text-black font-bold shadow-md shadow-[#F27D26]/20'
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                4 min
              </button>
              <button
                onClick={() => setPreset(5)}
                className={`px-3 py-1 text-xs font-mono rounded-full border transition-all cursor-pointer ${
                  totalSeconds === 300
                    ? 'bg-[#F27D26] border-[#F27D26] text-black font-bold shadow-md shadow-[#F27D26]/20'
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                5 min (Ideal)
              </button>
              <button
                onClick={() => setPreset(6)}
                className={`px-3 py-1 text-xs font-mono rounded-full border transition-all cursor-pointer ${
                  totalSeconds === 360
                    ? 'bg-[#F27D26] border-[#F27D26] text-black font-bold shadow-md shadow-[#F27D26]/20'
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                6 min
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setPreset(8)}
                className={`px-3 py-1 text-xs font-mono rounded-full border transition-all cursor-pointer ${
                  totalSeconds === 480
                    ? 'bg-[#F27D26] border-[#F27D26] text-black font-bold shadow-md shadow-[#F27D26]/20'
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                8 min
              </button>
              <button
                onClick={() => setPreset(9)}
                className={`px-3 py-1 text-xs font-mono rounded-full border transition-all cursor-pointer ${
                  totalSeconds === 540
                    ? 'bg-[#F27D26] border-[#F27D26] text-black font-bold shadow-md shadow-[#F27D26]/20'
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                9 min
              </button>
              <button
                onClick={() => setPreset(10)}
                className={`px-3 py-1 text-xs font-mono rounded-full border transition-all cursor-pointer ${
                  totalSeconds === 600
                    ? 'bg-[#F27D26] border-[#F27D26] text-black font-bold shadow-md shadow-[#F27D26]/20'
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                10 min
              </button>
            </>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Big Digital Display & Controls */}
        <div className="flex items-center gap-6">
          <div className="relative flex items-center justify-center">
            {/* Circular background / progress ring */}
            <svg className="w-28 h-28 transform -rotate-90">
              <circle
                cx="56"
                cy="56"
                r="48"
                stroke="currentColor"
                strokeWidth="5"
                className="text-white/10"
                fill="transparent"
              />
              <circle
                cx="56"
                cy="56"
                r="48"
                stroke="#F27D26"
                strokeWidth="5"
                strokeDasharray={2 * Math.PI * 48}
                strokeDashoffset={2 * Math.PI * 48 * (1 - progress / 100)}
                strokeLinecap="round"
                fill="transparent"
                style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-2xl font-mono font-bold text-white tracking-wider">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
              <span className="text-[9px] text-white/40 uppercase tracking-widest font-mono mt-0.5">
                {isRunning ? 'Contagem' : hasFinished ? 'Pronto!' : 'Pausado'}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={toggleTimer}
              className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs transition-all shadow-lg cursor-pointer ${
                isRunning
                  ? 'bg-white/10 hover:bg-white/15 text-[#F27D26] border border-white/20'
                  : 'bg-[#F27D26] hover:scale-105 text-black shadow-[#F27D26]/20'
              }`}
            >
              {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <span>{isRunning ? 'Pausar' : timeLeft === 0 ? 'Reiniciar' : 'Iniciar Contagem'}</span>
            </button>
            <button
              onClick={resetTimer}
              className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-white/50 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Resetar</span>
            </button>
          </div>
        </div>

        {/* Informative advice for current state */}
        <div className="flex-1 rounded-xl bg-white/[0.03] border border-white/10 p-4 space-y-1.5">
          {hasFinished ? (
            <div className="flex items-center gap-2 text-[#F27D26] font-bold text-sm">
              <Bell className="h-4 w-4 animate-bounce" />
              <span>
                {type === 'searing'
                  ? 'Tempo esgotado! Hora de virar ou checar a crosta dourada!'
                  : 'Descanso sagrado concluído! Sucos redistribuídos. Fatie agora a 90°!'}
              </span>
            </div>
          ) : (
            <>
              <span className="text-xs font-serif italic text-[#F27D26] font-semibold block">
                {type === 'searing' ? 'Regra de Ouro durante a selagem:' : 'Dica durante o descanso:'}
              </span>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                {type === 'searing'
                  ? 'Não fique mexendo ou perfurando a carne. A crosta precisa de contato contínuo com a grelha para caramelizar.'
                  : 'Os sucos e a temperatura interna se equilibram por todas as fibras. Nunca corte antes de 8 minutos!'}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
