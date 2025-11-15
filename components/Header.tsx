import React from 'react';
import { EnvelopeIcon } from './icons/EnvelopeIcon';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  countries: string[];
  teams: string[];
  games: string[];
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  selectedTeam: string;
  setSelectedTeam: (team: string) => void;
  selectedGame: string;
  setSelectedGame: (game: string) => void;
  onOpenPredictionModal: () => void;
  onOpenContactModal: () => void;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
  showOnlyFavorites: boolean;
  setShowOnlyFavorites: (show: boolean) => void;
  favoritesCount: number;
  playerType: string;
  setPlayerType: (type: string) => void;
}

const FilterSelect: React.FC<{
  label: string;
  options: string[] | { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultOption: string;
}> = ({ label, options, value, onChange, defaultOption }) => (
  <div className="flex-1 min-w-[150px]">
    <label htmlFor={label} className="sr-only">{label}</label>
    <select
      id={label}
      value={value}
      onChange={onChange}
      className="w-full bg-gray-800/50 border-2 border-gray-700 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all appearance-none"
      style={{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 0.75rem center',
        backgroundSize: '1.5em 1.5em',
        paddingRight: '2.5rem',
      }}
    >
      <option value="">{defaultOption}</option>
      {options.map(option => {
        if (typeof option === 'string') {
          return <option key={option} value={option}>{option}</option>;
        }
        return <option key={option.value} value={option.value}>{option.label}</option>;
      })}
    </select>
  </div>
);

const Header: React.FC<HeaderProps> = ({ 
  searchQuery, setSearchQuery,
  countries, teams, games,
  selectedCountry, setSelectedCountry,
  selectedTeam, setSelectedTeam,
  selectedGame, setSelectedGame,
  onOpenPredictionModal,
  onOpenContactModal,
  isMusicPlaying, onToggleMusic,
  showOnlyFavorites, setShowOnlyFavorites, favoritesCount,
  playerType, setPlayerType
}) => {
  return (
    <header className="py-6 border-b border-gray-700/50 bg-gray-900/30 backdrop-blur-sm sticky top-0 z-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
          <div className="text-center md:text-left">
            <h1 className="font-teko text-5xl md:text-6xl font-bold tracking-widest uppercase">
              <span className="text-cyan-400">eスポーツ</span> 選手ステータスハブ
            </h1>
            <p className="text-gray-400 mt-1 text-sm md:text-base">
              お気に入りのプロ選手の統計をチェック
            </p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative w-full md:w-auto md:min-w-[256px]">
              <input
                type="text"
                placeholder="選手名で検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800/50 border-2 border-gray-700 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
              />
            </div>
            <button
              onClick={onToggleMusic}
              className="flex-shrink-0 bg-gray-800/50 hover:bg-gray-700/70 text-white font-bold p-2.5 rounded-lg transition-colors duration-300"
              title={isMusicPlaying ? '音楽を停止' : '音楽を再生'}
            >
              {isMusicPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </button>
             <button
              onClick={onOpenPredictionModal}
              className="flex-shrink-0 bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center gap-2"
              title="AI対戦予想"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span className="hidden sm:inline">AI予想</span>
            </button>
            <button
              onClick={onOpenContactModal}
              className="flex-shrink-0 bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center gap-2"
              title="管理者へのお問い合わせ"
            >
              <EnvelopeIcon className="h-5 w-5" />
              <span className="hidden sm:inline">お問い合わせ</span>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center md:justify-end items-center">
           <button
            onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
            className={`flex items-center gap-2 py-2 px-4 rounded-lg transition-all duration-300 font-semibold border-2 ${
              showOnlyFavorites
                ? 'bg-yellow-400/20 border-yellow-400 text-yellow-300 scale-105'
                : 'bg-gray-800/50 border-gray-700 text-white hover:border-gray-500'
            }`}
            title="お気に入りの選手のみ表示"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="whitespace-nowrap">お気に入り ({favoritesCount})</span>
          </button>
          <FilterSelect
            label="選手タイプ"
            options={[
              { value: 'real', label: '実在の選手' },
              { value: 'generated', label: '生成された選手' }
            ]}
            value={playerType}
            onChange={(e) => setPlayerType(e.target.value)}
            defaultOption="すべての選手"
          />
          <FilterSelect
            label="国籍"
            options={countries}
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            defaultOption="すべての国籍"
          />
          <FilterSelect
            label="チーム名"
            options={teams}
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            defaultOption="すべてのチーム"
          />
          <FilterSelect
            label="ゲーム"
            options={games}
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
            defaultOption="すべてのゲーム"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;