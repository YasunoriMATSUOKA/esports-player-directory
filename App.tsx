import React, { useState, useMemo, useRef, useEffect } from 'react';
import Header from './components/Header';
import PlayerCard from './components/PlayerCard';
import { players } from './constants';
import type { Player } from './types';
import AIPredictionModal from './components/AIPredictionModal';
import ContactModal from './components/ContactModal';
import Toast from './components/Toast';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedGame, setSelectedGame] = useState('');
  const [playerType, setPlayerType] = useState('');
  const [isPredictionModalOpen, setIsPredictionModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const savedFavorites = localStorage.getItem('favoritePlayers');
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch (error) {
      console.error('Failed to parse favorites from localStorage', error);
      return [];
    }
  });
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);

  const uniqueCountries = useMemo(() => [...new Set(players.map(p => p.country.name))].sort(), []);
  const uniqueTeams = useMemo(() => [...new Set(players.map(p => p.team.name))].sort(), []);
  const uniqueGames = useMemo(() => [...new Set(players.map(p => p.game.name))].sort(), []);
  
  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  useEffect(() => {
    localStorage.setItem('favoritePlayers', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (playerId: number) => {
    setFavorites(prevFavorites => {
      const isCurrentlyFavorite = prevFavorites.includes(playerId);
      if (isCurrentlyFavorite) {
        const player = players.find(p => p.id === playerId);
        if (player) {
          setToastMessage(`${player.gamerTag}をお気に入りから削除しました。`);
        }
        return prevFavorites.filter(id => id !== playerId);
      } else {
        const player = players.find(p => p.id === playerId);
        if (player) {
            setToastMessage(`${player.gamerTag}をお気に入りに追加しました。`);
        }
        return [...prevFavorites, playerId];
      }
    });
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play().catch(error => {
          console.log("Playback was prevented by the browser.", error);
          setIsMusicPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying]);
  
  const handleContactSubmit = () => {
    setIsContactModalOpen(false);
    setToastMessage('お問い合わせありがとうございます。メッセージが送信されました。');
  };

  const filteredPlayers = players.filter(player => {
    if (showOnlyFavorites && !favorites.includes(player.id)) {
      return false;
    }

    const matchesSearch = player.gamerTag.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          player.realName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = !selectedCountry || player.country.name === selectedCountry;
    const matchesTeam = !selectedTeam || player.team.name === selectedTeam;
    const matchesGame = !selectedGame || player.game.name === selectedGame;
    const matchesPlayerType = !playerType ||
      (playerType === 'real' && player.isReal) ||
      (playerType === 'generated' && !player.isReal);

    return matchesSearch && matchesCountry && matchesTeam && matchesGame && matchesPlayerType;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <audio 
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2022/02/21/audio_a109a63321.mp3?filename=lofi-study-112191.mp3"
        loop
      />
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10"
        style={{backgroundImage: "url('https://picsum.photos/seed/esportsbg/1920/1080')"}}
      ></div>
      <div className="relative z-10">
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          countries={uniqueCountries}
          teams={uniqueTeams}
          games={uniqueGames}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          selectedTeam={selectedTeam}
          setSelectedTeam={setSelectedTeam}
          selectedGame={selectedGame}
          setSelectedGame={setSelectedGame}
          playerType={playerType}
          setPlayerType={setPlayerType}
          onOpenPredictionModal={() => setIsPredictionModalOpen(true)}
          onOpenContactModal={() => setIsContactModalOpen(true)}
          isMusicPlaying={isMusicPlaying}
          onToggleMusic={toggleMusic}
          showOnlyFavorites={showOnlyFavorites}
          setShowOnlyFavorites={setShowOnlyFavorites}
          favoritesCount={favorites.length}
        />
        <main className="container mx-auto px-4 py-8 md:py-12">
          <div className="mb-6 text-right">
            <p className="font-teko text-2xl text-gray-400">
              <span className="text-white font-bold">{filteredPlayers.length}</span> / {players.length} 人の選手を表示中
            </p>
          </div>
          {filteredPlayers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredPlayers.map((player: Player) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  isFavorite={favorites.includes(player.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-2xl font-teko">{showOnlyFavorites && favorites.length > 0 ? '現在のフィルターではお気に入り選手が見つかりませんでした。' : '該当する選手が見つかりませんでした。'}</p>
              <p className="font-teko text-xl text-gray-500 mt-2">
                総選手数: {players.length}人 {showOnlyFavorites && `(お気に入り: ${favorites.length}人)`}
              </p>
            </div>
          )}
        </main>
      </div>
      <AIPredictionModal
        isOpen={isPredictionModalOpen}
        onClose={() => setIsPredictionModalOpen(false)}
        players={players}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onSubmit={handleContactSubmit}
      />
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage('')}
        />
      )}
    </div>
  );
};

export default App;