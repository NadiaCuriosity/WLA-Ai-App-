export interface Concept {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  memoryAnchor: string;
  iconName: 'Brain' | 'Scale' | 'Ladder' | 'User' | 'Message' | 'Shield' | 'Zap';
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation: string;
}

export interface ActionItem {
  title: string;
  description: string;
  type: 'immediate' | 'practice';
}

export interface GlossaryItem {
  term: string;
  definition: string;
}

export type ViewState = 'home' | 'concepts' | 'crit-tool' | 'quiz' | 'action-plan';