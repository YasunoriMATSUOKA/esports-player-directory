import React, { useState, useMemo, useEffect } from 'react';
import type { Player, PredictionResult, Game } from '../types';
import { GoogleGenAI, Type } from "@google/genai";
import { marked } from 'marked';
import { TrophyIcon } from './icons/TrophyIcon';

interface AIPredictionModalProps {
  isOpen: boolean;
  onClose: () => void;
  players: Player[];
}

const AIPredictionModal: React.FC<AIPredictionModalProps> = ({ isOpen, onClose, players }) => {
  const [selectedGame, setSelectedGame] = useState('');
  const [player1Id, setPlayer1Id] = useState<string>('');
  const [player2Id, setPlayer2Id] = useState<string>('');
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uniqueGames = useMemo(() => [...new Set(players.map(p => p.game.name))].sort(), [players]);
  
  const gamePlayers = useMemo(() => {
    return players.filter(p => p.game.name === selectedGame).sort((a, b) => a.gamerTag.localeCompare(b.gamerTag));
  }, [selectedGame, players]);

  const player1 = useMemo(() => gamePlayers.find(p => p.id === parseInt(player1Id)), [player1Id, gamePlayers]);
  const player2 = useMemo(() => gamePlayers.find(p => p.id === parseInt(player2Id)), [player2Id, gamePlayers]);

  useEffect(() => {
    if (isOpen) {
      handleReset();
    }
  }, [isOpen]);

  const handleGameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGame(e.target.value);
    setPlayer1Id('');
    setPlayer2Id('');
    setPrediction(null);
    setError(null);
  };
  
  const handleReset = () => {
    setSelectedGame('');
    setPlayer1Id('');
    setPlayer2Id('');
    setPrediction(null);
    setIsLoading(false);
    setError(null);
  };

  const handlePredict = async () => {
    if (!player1 || !player2) return;

    setIsLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const formatPlayerStats = (player: Player) => {
        return player.stats.map(s => `- ${s.label}: ${s.value}${s.maxValue ? `/${s.maxValue}` : ''}`).join('\n');
      };
      
      const prompt = `あなたは世界クラスのeスポーツアナリストです。以下の2人の「${selectedGame}」プレイヤーが1対1で対戦した場合、どちらが勝利する可能性が高いか、その理由とともに詳細に分析・予想してください。

# プレイヤー1:
- ゲーマータグ: ${player1.gamerTag}
- チーム: ${player1.team.name}
- ロール: ${player1.role}
- 統計:
${formatPlayerStats(player1)}

# プレイヤー2:
- ゲーマータグ: ${player2.gamerTag}
- チーム: ${player2.team.name}
- ロール: ${player2.role}
- 統計:
${formatPlayerStats(player2)}

# 指示
- 両プレイヤーの長所と短所を比較してください。
- 対戦の重要な鍵となるポイントを挙げてください。
- 最終的な勝者を明確に示し、その結論に至った説得力のある根拠を提示してください。
- 分析結果はマークダウン形式で記述してください。
`;
      
      const responseSchema = {
        type: Type.OBJECT,
        properties: {
          winner: { type: Type.STRING, description: "勝利すると予想されるプレイヤーのゲーマータグ" },
          confidence: { type: Type.STRING, description: "勝利予想の自信度（High, Medium, Low）" },
          analysis: { type: Type.STRING, description: "分析結果（マークダウン形式）" },
        },
        required: ["winner", "confidence", "analysis"],
      };

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [{ parts: [{ text: prompt }] }],
        config: {
          responseMimeType: "application/json",
          responseSchema: responseSchema,
        },
      });

      const resultJson = JSON.parse(response.text);
      setPrediction(resultJson);

    } catch (e) {
      console.error(e);
      setError('AIによる予想の生成に失敗しました。時間をおいて再度お試しください。');
    } finally {
      setIsLoading(false);
    }
  };

  const analysisHtml = useMemo(() => {
    if (prediction?.analysis) {
      return marked(prediction.analysis, { breaks: true, gfm: true });
    }
    return '';
  }, [prediction]);


  if (!isOpen) return null;

  const renderPlayerCard = (player?: Player, isWinner?: boolean) => {
    if (!player) return <div className="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">プレイヤーを選択</div>;
    return (
      <div className={`relative p-4 bg-gray-800 rounded-lg border-2 transition-all duration-300 ${isWinner ? 'border-yellow-400 scale-105' : 'border-gray-700'}`}>
        {isWinner && <div className="absolute -top-4 -right-4 text-yellow-400"><TrophyIcon className="w-10 h-10" /></div>}
        <div className="flex items-center space-x-3">
          <img src={player.avatarUrl} alt={player.gamerTag} className="w-16 h-16 rounded-full border-2 border-cyan-400 object-cover" />
          <div>
            <h3 className="font-teko text-3xl font-bold leading-none">{player.gamerTag}</h3>
            <p className="text-gray-400">{player.team.name}</p>
          </div>
        </div>
      </div>
    );
  };
  
  const CustomSelect: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & {defaultOption: string}> = ({ children, defaultOption, ...props }) => (
    <select
        {...props}
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
        {children}
    </select>
  )

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-gray-900 border-2 border-cyan-500/50 rounded-xl shadow-2xl shadow-cyan-500/10 w-full max-w-4xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <header className="p-4 border-b border-gray-700 flex justify-between items-center">
          <h2 className="font-teko text-4xl font-bold"><span className="text-cyan-400">AI</span> 対戦予想</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">&times;</button>
        </header>
        
        <main className="p-6 overflow-y-auto">
          {!prediction && !isLoading && (
            <div className="space-y-6">
              <div>
                <label className="block mb-2 font-semibold text-gray-300">1. ゲームを選択</label>
                <CustomSelect value={selectedGame} onChange={handleGameChange} defaultOption="対戦するゲームを選択してください">
                  {uniqueGames.map(game => <option key={game} value={game}>{game}</option>)}
                </CustomSelect>
              </div>

              {selectedGame && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-semibold text-gray-300">2. プレイヤー1を選択</label>
                    <CustomSelect value={player1Id} onChange={e => setPlayer1Id(e.target.value)} disabled={!selectedGame} defaultOption="プレイヤー1">
                      {gamePlayers.filter(p => p.id !== parseInt(player2Id)).map(p => <option key={p.id} value={p.id}>{p.gamerTag}</option>)}
                    </CustomSelect>
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold text-gray-300">3. プレイヤー2を選択</label>
                    <CustomSelect value={player2Id} onChange={e => setPlayer2Id(e.target.value)} disabled={!selectedGame} defaultOption="プレイヤー2">
                       {gamePlayers.filter(p => p.id !== parseInt(player1Id)).map(p => <option key={p.id} value={p.id}>{p.gamerTag}</option>)}
                    </CustomSelect>
                  </div>
                </div>
              )}

              <div className="text-center pt-4">
                 <button 
                  onClick={handlePredict}
                  disabled={!player1Id || !player2Id || isLoading}
                  className="font-teko text-3xl bg-cyan-500 text-white font-bold py-2 px-12 rounded-lg hover:bg-cyan-400 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100 transform hover:scale-105"
                >
                  予想を開始
                </button>
              </div>
            </div>
          )}
          
          {isLoading && (
             <div className="text-center py-20">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-cyan-400 mx-auto"></div>
                <p className="mt-4 font-teko text-3xl text-gray-300">AIが対戦を分析中...</p>
                <p className="text-gray-500">数秒かかる場合があります</p>
            </div>
          )}

          {error && <div className="text-center text-red-400 bg-red-900/50 p-4 rounded-lg">{error}</div>}

          {prediction && (
            <div className="animate-fade-in">
                <div className="grid grid-cols-2 gap-4 items-center relative">
                    {renderPlayerCard(player1, prediction.winner === player1?.gamerTag)}
                    <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-teko text-6xl text-gray-600">VS</p>
                    {renderPlayerCard(player2, prediction.winner === player2?.gamerTag)}
                </div>
                <div className="mt-6">
                    <h3 className="font-teko text-3xl border-b-2 border-cyan-400/50 pb-2 mb-3">AIアナリストによる分析</h3>
                    <div className="prose prose-invert prose-sm sm:prose-base max-w-none bg-gray-800/50 p-4 rounded-lg h-64 overflow-y-auto" dangerouslySetInnerHTML={{ __html: analysisHtml }}></div>
                </div>
            </div>
          )}

        </main>
        
        <footer className="p-4 border-t border-gray-700 text-right">
          {(prediction || error) && (
            <button onClick={handleReset} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              もう一度予想する
            </button>
          )}
        </footer>
      </div>
    </div>
  );
};

export default AIPredictionModal;
