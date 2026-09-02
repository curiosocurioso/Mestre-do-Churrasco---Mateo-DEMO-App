import { StepItem, MeatCut } from '../types';
import { Sparkles, ShieldAlert } from 'lucide-react';
import { VisualInspectionGallery } from './interactive/VisualInspectionGallery';
import { FiberCutSimulator } from './interactive/FiberCutSimulator';
import { TwoZoneHeatSimulator } from './interactive/TwoZoneHeatSimulator';
import { HeatTestSimulator } from './interactive/HeatTestSimulator';
import { StepTimer } from './interactive/StepTimer';
import { DonenessSelector } from './interactive/DonenessSelector';
import { PortionCalculator } from './interactive/PortionCalculator';
import { GoldenRulesCard } from './interactive/GoldenRulesCard';
import { ServeChecklist } from './interactive/ServeChecklist';

interface Props {
  step: StepItem;
  soundEnabled?: boolean;
  meatCut?: MeatCut;
}

export function StepCard({ step, soundEnabled = true, meatCut }: Props) {
  return (
    <div className="relative w-full max-w-5xl mx-auto group">
      {/* Ambient ember glow behind the card */}
      <div className="absolute -inset-2 sm:-inset-4 bg-[#F27D26]/15 blur-3xl rounded-3xl opacity-30 pointer-events-none transition-opacity duration-700 group-hover:opacity-40" />

      {/* Main Card Surface */}
      <div className="relative w-full flex flex-col rounded-2xl bg-gradient-to-br from-[#1E1E1E] to-[#121212] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-md">
        {/* Top Banner / Image Section */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-[#0A0A0A]">
          <img
            src={step.image}
            alt={step.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105 opacity-90"
          />
          {/* Subtle Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/80 via-transparent to-[#121212]/80" />

          {/* Floating Badges & Section Title */}
          <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2 pointer-events-none">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#F27D26]/10 text-[#F27D26] text-[10px] font-bold uppercase tracking-widest border border-[#F27D26]/30 shadow-lg shadow-black/60">
                {step.sectionTitle}
              </span>
              {step.stepNumber !== null && (
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/70 text-white/90 border border-white/10 backdrop-blur-md">
                  Passo {String(step.stepNumber).padStart(2, '0')}
                </span>
              )}
            </div>
          </div>

          {/* Bottom Hero Title inside banner */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-8 sm:right-8">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight drop-shadow-md">
              {step.title}
            </h2>
            {step.subtitle && (
              <p className="text-sm sm:text-base md:text-lg text-white/70 font-light mt-1.5 leading-relaxed drop-shadow">
                {step.subtitle}
              </p>
            )}
            {step.imageCaption && (
              <p className="text-[11px] text-white/40 mt-2 italic flex items-center gap-1.5 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26]" />
                {step.imageCaption}
              </p>
            )}
          </div>
        </div>

        {/* Main Content Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          {/* Paragraphs */}
          {step.paragraphs && step.paragraphs.length > 0 && (
            <div className="space-y-4">
              {step.paragraphs.map((p, idx) => (
                <p key={idx} className="text-base sm:text-lg text-white/75 font-light leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          )}

          {/* Bullet Points with Elegant Dark left-accent list & numbered badges */}
          {step.bullets && step.bullets.length > 0 && (
            <div className="border-l-2 border-[#F27D26]/30 pl-5 sm:pl-7 py-2 space-y-3.5 bg-white/[0.02] rounded-r-xl pr-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#F27D26] font-bold">
                  Instruções & Pontos de Atenção
                </span>
              </div>
              <div className="space-y-3">
                {step.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full border border-[#F27D26] flex items-center justify-center shrink-0 mt-0.5 text-[10px] text-[#F27D26] font-bold bg-[#F27D26]/10">
                      {idx + 1}
                    </div>
                    <p className="text-sm sm:text-base text-white/80 font-light leading-snug">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Warning Box */}
          {step.warning && (
            <div className="rounded-xl border border-rose-900/30 bg-rose-950/20 p-4 sm:p-5 flex items-start gap-4 text-xs sm:text-sm text-rose-200/90 shadow-inner">
              <div className="p-2 bg-rose-500/20 rounded-lg text-rose-400 shrink-0">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="font-bold text-rose-400 uppercase tracking-widest text-[10px] block">
                  Alerta Crítico
                </span>
                <p className="leading-relaxed font-light text-rose-200/90">{step.warning}</p>
              </div>
            </div>
          )}

          {/* Key Rule / ProTip Box */}
          {step.keyRule && (
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 flex items-start gap-4 text-xs sm:text-sm text-white/80 shadow-md">
              <div className="p-2 bg-[#F27D26]/20 rounded-lg text-[#F27D26] shrink-0">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="font-serif italic font-semibold text-white text-sm block">
                  Dica de Ouro do Mestre
                </span>
                <p className="leading-relaxed font-light text-white/70 whitespace-pre-line">{step.keyRule}</p>
              </div>
            </div>
          )}

          {/* Embedded Interactive Components based on interactiveType */}
          {step.interactiveType === 'inspection_gallery' && step.inspectionItems && (
            <VisualInspectionGallery items={step.inspectionItems} soundEnabled={soundEnabled} />
          )}

          {step.interactiveType === 'fiber_slicer' && (
            <FiberCutSimulator soundEnabled={soundEnabled} />
          )}

          {step.interactiveType === 'two_zone_fire' && (
            <TwoZoneHeatSimulator soundEnabled={soundEnabled} />
          )}

          {step.interactiveType === 'heat_test' && (
            <HeatTestSimulator soundEnabled={soundEnabled} />
          )}

          {step.interactiveType === 'searing_timer' && (
            <StepTimer type="searing" soundEnabled={soundEnabled} />
          )}

          {step.interactiveType === 'doneness_picker' && (
            <DonenessSelector soundEnabled={soundEnabled} />
          )}

          {step.interactiveType === 'resting_timer' && (
            <StepTimer type="resting" soundEnabled={soundEnabled} />
          )}

          {step.interactiveType === 'portion_calc' && (
            <PortionCalculator soundEnabled={soundEnabled} meatCut={meatCut} />
          )}

          {step.interactiveType === 'serve_checklist' && (
            <ServeChecklist soundEnabled={soundEnabled} />
          )}

          {step.interactiveType === 'golden_rules' && (
            <GoldenRulesCard soundEnabled={soundEnabled} />
          )}
        </div>
      </div>
    </div>
  );
}
