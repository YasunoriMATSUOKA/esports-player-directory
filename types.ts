// FIX: Import React to use React.ComponentType
import React from 'react';

export interface Team {
  name: string;
  logoUrl: string;
}

export interface Game {
  name: 'ヴァロラント' | 'エーペックスレジェンズ' | 'オーバーウォッチ' | 'リーグ・オブ・レジェンド' | 'Counter-Strike 2';
  icon: React.ComponentType<{ className?: string }>;
  officialUrl: string;
}

export interface Stats {
  label: string;
  value: string | number;
  maxValue?: number;
}

export interface Player {
  id: number;
  gamerTag: string;
  realName: string;
  avatarUrl: string;
  team: Team;
  game: Game;
  role: string;
  country: {
    name: string;
    flag: string;
  };
  stats: Stats[];
  isReal: boolean;
}

export interface PredictionResult {
  winner: string;
  confidence: 'High' | 'Medium' | 'Low';
  analysis: string;
}