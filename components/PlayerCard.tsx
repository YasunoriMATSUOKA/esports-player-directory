import React from 'react';
import type { Player } from '../types';
import StatBar from './StatBar';
import { StarIcon } from './icons/StarIcon';
import { VerifiedIcon } from './icons/VerifiedIcon';

interface PlayerCardProps {
  player: Player;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, isFavorite, onToggleFavorite }) => {
  const GameIcon = player.game.icon;

  const getGameColor = (gameName: string) => {
    switch (gameName) {
      case 'ヴァロラント':
        return 'from-red-500 to-red-600';
      case 'エーペックスレジェンズ':
        return 'from-orange-500 to-yellow-500';
      case 'オーバーウォッチ':
        return 'from-blue-500 to-cyan-400';
      case 'リーグ・オブ・レジェンド':
        return 'from-blue-600 to-teal-400';
      case 'Counter-Strike 2':
        return 'from-yellow-400 to-orange-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };
  
  const cardBorderColor = getGameColor(player.game.name).replace('from-', 'border-').split(' ')[0];

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(player.id);
  };

  return (
    <div className={`
      relative bg-gray-800/50 backdrop-blur-md rounded-lg overflow-hidden border-t-4 ${cardBorderColor}
      transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10
    `}>
      <button
        onClick={handleFavoriteClick}
        className="absolute top-3 right-3 text-gray-500 hover:text-yellow-400 transition-colors z-20 p-1 rounded-full bg-gray-900/50"
        aria-label={isFavorite ? 'お気に入りから削除' : 'お気に入りに追加'}
        title={isFavorite ? 'お気に入りから削除' : 'お気に入りに追加'}
      >
        <StarIcon isFilled={isFavorite} />
      </button>

      <div className="p-5">
        <div className="flex items-center space-x-4">
          <img
            src={player.avatarUrl}
            alt={player.gamerTag}
            className="w-20 h-20 rounded-full border-2 border-cyan-400 object-cover"
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-teko text-4xl font-bold leading-none">{player.gamerTag}</h2>
              {player.isReal && <VerifiedIcon />}
            </div>
            <p className="text-gray-400">{player.realName}</p>
            <p className="text-sm text-gray-300">{player.country.flag} {player.country.name}</p>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center bg-gray-900/50 p-3 rounded-md">
          <div className="flex items-center space-x-2">
            <img src={player.team.logoUrl} alt={player.team.name} className="w-8 h-8 rounded-full object-cover" />
            <span className="font-semibold">{player.team.name}</span>
          </div>
          <a
            href={player.game.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-right hover:opacity-80 transition-opacity"
            aria-label={`${player.game.name}の公式サイトを開く`}
          >
            <div>
                <p className="font-bold text-lg leading-tight">{player.game.name}</p>
                <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">{player.role}</p>
            </div>
            <GameIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
      
      <div className="px-5 pb-5">
        <h3 className="font-teko text-2xl mb-2 border-b border-gray-700 pb-1">選手スタッツ</h3>
        <div className="space-y-3">
          {player.stats.map((stat) => (
            <StatBar 
              key={stat.label} 
              label={stat.label} 
              value={stat.value} 
              maxValue={stat.maxValue}
              gameColor={getGameColor(player.game.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;