
export enum RiskState {
  GREEN = 'GREEN',
  YELLOW = 'YELLOW',
  RED = 'RED'
}

export interface FragilityMetric {
  date: string;
  score: number;
  tailProbability: number;
}

export interface CorrelationBreak {
  pair: [string, string];
  historical: number;
  current: number;
  drift: number;
  severity: 'low' | 'medium' | 'high';
}

export interface LiquiditySignal {
  venue: string;
  depth: number;
  trend: 'stable' | 'decay' | 'expanding';
  stressScore: number;
}

export interface Insight {
  title: string;
  content: string;
  confidence: number;
}

export type ChatMode = 'INTELLIGENCE' | 'STRATEGY' | 'FOUNDER';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
