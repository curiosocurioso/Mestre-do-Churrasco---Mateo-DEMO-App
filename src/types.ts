export type StepCategory =
  | 'intro'
  | 'comprar'
  | 'preparo'
  | 'fogo'
  | 'tempero'
  | 'grelha'
  | 'ponto'
  | 'descanso'
  | 'corte'
  | 'ajuste'
  | 'servir'
  | 'resumo';

export type MeatCategory =
  | 'bovino_nobre'
  | 'bovino_tradicional'
  | 'suino'
  | 'ave'
  | 'ovino'
  | 'vegetariano';

export interface VisualInspectionItem {
  id: string;
  title: string;
  image: string;
  description: string;
  whatToLookFor: string[];
  whatToAvoid: string[];
}

export interface DonenessLevel {
  name: string;
  sub: string;
  tempRange: string;
  recommendedPullTemp: string;
  description: string;
  color: string;
  isRecommended?: boolean;
}

export interface StepItem {
  id: string;
  stepNumber: number | null;
  sectionTitle: string;
  title: string;
  subtitle?: string;
  category: StepCategory;
  image: string;
  imageCaption?: string;
  paragraphs?: string[];
  bullets?: string[];
  keyRule?: string;
  warning?: string;
  proTip?: string;
  interactiveType?:
    | 'inspection_gallery'
    | 'portion_calc'
    | 'two_zone_fire'
    | 'heat_test'
    | 'searing_timer'
    | 'doneness_picker'
    | 'resting_timer'
    | 'fiber_slicer'
    | 'golden_rules'
    | 'serve_checklist';
  inspectionItems?: VisualInspectionItem[];
}

export interface MeatCut {
  id: string;
  name: string;
  shortName: string;
  category: MeatCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  image: string;
  defaultGramsPerPerson: number;
  prepTimeText: string;
  grillHeight: string;
  heatLevelText: string;
  optimalPullTemp: string;
  cuttingTechnique: string;
  steps: StepItem[];
}
