/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { CardDeck } from './components/CardDeck';
import { HeaderNav } from './components/HeaderNav';
import { StepOverviewDrawer } from './components/StepOverviewDrawer';
import { PortionCalculatorModal } from './components/PortionCalculatorModal';
import { MeatSelectorModal } from './components/MeatSelectorModal';
import { BRAZILIAN_MEATS } from './data/brazilianMeats';
import { MeatCut } from './types';

export default function App() {
  const [selectedMeat, setSelectedMeat] = useState<MeatCut>(BRAZILIAN_MEATS[0]); // Default to Picanha
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isCalcOpen, setIsCalcOpen] = useState<boolean>(false);
  const [isMeatModalOpen, setIsMeatModalOpen] = useState<boolean>(true); // Opens first with the dropdown menu
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const handleSelectMeat = (meat: MeatCut) => {
    setSelectedMeat(meat);
    setCurrentIndex(0);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] flex flex-col relative selection:bg-[#F27D26] selection:text-black font-sans antialiased overflow-x-hidden">
      {/* Subtle Ambient Background Glowing Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#F27D26]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#F27D26]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-[#3D1A1A]/20 rounded-full blur-3xl" />
      </div>

      {/* Main Top Header */}
      <HeaderNav
        selectedMeat={selectedMeat}
        onSelectMeat={handleSelectMeat}
        onOpenMeatSelector={() => setIsMeatModalOpen(true)}
        currentIndex={currentIndex}
        totalSteps={selectedMeat.steps.length}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenCalculator={() => setIsCalcOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* Main Fullscreen Card Deck */}
      <main className="flex-1 flex flex-col z-10">
        <CardDeck
          selectedMeat={selectedMeat}
          currentIndex={currentIndex}
          onIndexChange={setCurrentIndex}
          soundEnabled={soundEnabled}
        />
      </main>

      {/* Initial / On-Demand Meat Selection Modal with Dropdown */}
      <MeatSelectorModal
        isOpen={isMeatModalOpen}
        onClose={() => setIsMeatModalOpen(false)}
        selectedMeat={selectedMeat}
        onSelectMeat={handleSelectMeat}
        soundEnabled={soundEnabled}
        canClose={true}
      />

      {/* Slide-in Step Overview Drawer */}
      <StepOverviewDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentIndex={currentIndex}
        onSelectIndex={setCurrentIndex}
        soundEnabled={soundEnabled}
        selectedMeat={selectedMeat}
      />

      {/* Portion Calculator Modal */}
      <PortionCalculatorModal
        isOpen={isCalcOpen}
        onClose={() => setIsCalcOpen(false)}
        soundEnabled={soundEnabled}
        meatCut={selectedMeat}
      />
    </div>
  );
}
