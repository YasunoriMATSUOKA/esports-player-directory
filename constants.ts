import type { Player, Game } from './types';
import { ValorantIcon } from './components/icons/ValorantIcon';
import { ApexLegendsIcon } from './components/icons/ApexLegendsIcon';
import { OverwatchIcon } from './components/icons/OverwatchIcon';
import { LeagueOfLegendsIcon } from './components/icons/LeagueOfLegendsIcon';
import { CS2Icon } from './components/icons/CS2Icon';

const REAL_PLAYERS: Player[] = [
  // Valorant Players
  {
    id: 1,
    gamerTag: 'TenZ',
    realName: 'Tyson Ngo',
    avatarUrl: 'https://picsum.photos/seed/TenZ/200/200',
    team: {
      name: 'Sentinels',
      logoUrl: 'https://picsum.photos/seed/Sentinels/100/100',
    },
    game: {
      name: 'ヴァロラント',
      icon: ValorantIcon,
      officialUrl: 'https://playvalorant.com/ja-jp/',
    },
    role: 'デュエリスト',
    country: {
      name: 'カナダ',
      flag: '🇨🇦',
    },
    stats: [
      { label: 'K/D比', value: '1.23' },
      { label: '勝率', value: 65, maxValue: 100 },
      { label: 'ヘッドショット率', value: 28, maxValue: 100 },
      { label: '平均ダメージ/ラウンド', value: 155 },
    ],
    isReal: true,
  },
  {
    id: 2,
    gamerTag: 'SugarZ3ro',
    realName: '渡邊 翔太',
    avatarUrl: 'https://picsum.photos/seed/SugarZ3ro/200/200',
    team: {
      name: 'ZETA DIVISION',
      logoUrl: 'https://picsum.photos/seed/ZETADIVISION/100/100',
    },
    game: {
      name: 'ヴァロラント',
      icon: ValorantIcon,
      officialUrl: 'https://playvalorant.com/ja-jp/',
    },
    role: 'コントローラー',
    country: {
      name: '日本',
      flag: '🇯🇵',
    },
    stats: [
      { label: 'K/D比', value: '1.15' },
      { label: '勝率', value: 70, maxValue: 100 },
      { label: 'アシスト/ラウンド', value: 0.7 },
      { label: 'クラッチ成功率', value: 30, maxValue: 100 },
    ],
    isReal: true,
  },
  {
    id: 3,
    gamerTag: 'Boaster',
    realName: 'Jake Howlett',
    avatarUrl: 'https://picsum.photos/seed/Boaster/200/200',
    team: {
      name: 'Fnatic',
      logoUrl: 'https://picsum.photos/seed/Fnatic/100/100',
    },
    game: {
      name: 'ヴァロラント',
      icon: ValorantIcon,
      officialUrl: 'https://playvalorant.com/ja-jp/',
    },
    role: 'IGL / イニシエーター',
    country: {
      name: 'イギリス',
      flag: '🇬🇧',
    },
    stats: [
      { label: 'K/D比', value: '0.98' },
      { label: '勝率', value: 75, maxValue: 100 },
      { label: 'アシスト/ラウンド', value: 0.9 },
      { label: 'ファーストブラッド成功率', value: 48, maxValue: 100 },
    ],
    isReal: true,
  },
  {
    id: 4,
    gamerTag: 'aspas',
    realName: 'Erick Santos',
    avatarUrl: 'https://picsum.photos/seed/aspas/200/200',
    team: {
      name: 'Leviatán',
      logoUrl: 'https://picsum.photos/seed/Leviatan/100/100',
    },
    game: {
      name: 'ヴァロラント',
      icon: ValorantIcon,
      officialUrl: 'https://playvalorant.com/ja-jp/',
    },
    role: 'デュエリスト',
    country: {
      name: 'ブラジル',
      flag: '🇧🇷',
    },
    stats: [
      { label: 'K/D比', value: '1.31' },
      { label: '勝率', value: 68, maxValue: 100 },
      { label: 'ヘッドショット率', value: 25, maxValue: 100 },
      { label: '平均ダメージ/ラウンド', value: 160 },
    ],
    isReal: true,
  },
  {
    id: 12,
    gamerTag: 'something',
    realName: 'Ilya Petrov',
    avatarUrl: 'https://picsum.photos/seed/something/200/200',
    team: {
      name: 'Paper Rex',
      logoUrl: 'https://picsum.photos/seed/PaperRex/100/100',
    },
    game: {
      name: 'ヴァロラント',
      icon: ValorantIcon,
      officialUrl: 'https://playvalorant.com/ja-jp/',
    },
    role: 'デュエリスト',
    country: {
      name: 'ロシア',
      flag: '🇷🇺',
    },
    stats: [
      { label: 'K/D比', value: '1.40' },
      { label: '勝率', value: 72, maxValue: 100 },
      { label: 'ヘッドショット率', value: 22, maxValue: 100 },
      { label: '平均ダメージ/ラウンド', value: 165 },
    ],
    isReal: true,
  },

  // Apex Legends Players
  {
    id: 5,
    gamerTag: 'ImperialHal',
    realName: 'Phillip Dosen',
    avatarUrl: 'https://picsum.photos/seed/ImperialHal/200/200',
    team: {
      name: 'TSM',
      logoUrl: 'https://picsum.photos/seed/TSM/100/100',
    },
    game: {
      name: 'エーペックスレジェンズ',
      icon: ApexLegendsIcon,
      officialUrl: 'https://www.ea.com/ja-jp/games/apex-legends',
    },
    role: 'IGL',
    country: {
      name: 'アメリカ合衆国',
      flag: '🇺🇸',
    },
    stats: [
      { label: 'K/D比', value: '3.5' },
      { label: '平均ダメージ', value: 950 },
      { label: 'トップ5率', value: 55, maxValue: 100 },
      { label: '合計勝利数', value: 210 },
    ],
    isReal: true,
  },
  {
    id: 6,
    gamerTag: 'Genburten',
    realName: 'Noyan Ozkose',
    avatarUrl: 'https://picsum.photos/seed/Genburten/200/200',
    team: {
      name: 'DarkZero Esports',
      logoUrl: 'https://picsum.photos/seed/DarkZero/100/100',
    },
    game: {
      name: 'エーペックスレジェンズ',
      icon: ApexLegendsIcon,
      officialUrl: 'https://www.ea.com/ja-jp/games/apex-legends',
    },
    role: 'フラッガー',
    country: {
      name: 'オーストラリア',
      flag: '🇦🇺',
    },
    stats: [
      { label: 'K/D比', value: '4.2' },
      { label: '平均ダメージ', value: 1100 },
      { label: 'トップ5率', value: 50, maxValue: 100 },
      { label: '合計勝利数', value: 180 },
    ],
    isReal: true,
  },
  {
    id: 7,
    gamerTag: 'YukaF',
    realName: '江戸 勇気',
    avatarUrl: 'https://picsum.photos/seed/YukaF/200/200',
    team: {
      name: 'FNATIC',
      logoUrl: 'https://picsum.photos/seed/FNATIC/100/100',
    },
    game: {
      name: 'エーペックスレジェンズ',
      icon: ApexLegendsIcon,
      officialUrl: 'https://www.ea.com/ja-jp/games/apex-legends',
    },
    role: 'フラッガー',
    country: {
      name: '日本',
      flag: '🇯🇵',
    },
    stats: [
      { label: 'K/D比', value: '3.9' },
      { label: '平均ダメージ', value: 1020 },
      { label: 'トップ5率', value: 48, maxValue: 100 },
      { label: '合計勝利数', value: 150 },
    ],
    isReal: true,
  },
   {
    id: 13,
    gamerTag: 'HisWattson',
    realName: 'Jacob McMillin',
    avatarUrl: 'https://picsum.photos/seed/HisWattson/200/200',
    team: {
      name: '無所属',
      logoUrl: 'https://picsum.photos/seed/FreeAgent/100/100',
    },
    game: {
      name: 'エーペックスレジェンズ',
      icon: ApexLegendsIcon,
      officialUrl: 'https://www.ea.com/ja-jp/games/apex-legends',
    },
    role: 'フラッガー',
    country: {
      name: 'アメリカ合衆国',
      flag: '🇺🇸',
    },
    stats: [
      { label: 'K/D比', value: '4.5' },
      { label: '平均ダメージ', value: 1250 },
      { label: 'トップ5率', value: 60, maxValue: 100 },
      { label: '合計勝利数', value: 250 },
    ],
    isReal: true,
  },


  // Overwatch Players
  {
    id: 8,
    gamerTag: 'Fleta',
    realName: '김병선',
    avatarUrl: 'https://picsum.photos/seed/Fleta/200/200',
    team: {
      name: 'Shanghai Dragons',
      logoUrl: 'https://picsum.photos/seed/ShanghaiDragons/100/100',
    },
    game: {
      name: 'オーバーウォッチ',
      icon: OverwatchIcon,
      officialUrl: 'https://overwatch.blizzard.com/ja-jp/',
    },
    role: 'フレックスDPS',
    country: {
      name: '韓国',
      flag: '🇰🇷',
    },
    stats: [
      { label: 'キル/10分', value: '23.1' },
      { label: 'とどめ/10分', value: '10.2' },
      { label: 'ヒーローダメージ/10分', value: '15.8k' },
      { label: '武器命中率', value: 50, maxValue: 100 },
    ],
    isReal: true,
  },
  {
    id: 9,
    gamerTag: 'super',
    realName: 'Matthew DeLisi',
    avatarUrl: 'https://picsum.photos/seed/super/200/200',
    team: {
      name: 'SF Shock',
      logoUrl: 'https://picsum.photos/seed/SFShock/100/100',
    },
    game: {
      name: 'オーバーウォッチ',
      icon: OverwatchIcon,
      officialUrl: 'https://overwatch.blizzard.com/ja-jp/',
    },
    role: 'メインタンク',
    country: {
      name: 'アメリカ合衆国',
      flag: '🇺🇸',
    },
    stats: [
      { label: 'ブロックしたダメージ/10分', value: '19.5k' },
      { label: 'キル/10分', value: '16.0' },
      { label: '死亡回数/10分', value: '4.0' },
      { label: 'アルティメット/10分', value: 3.8 },
    ],
    isReal: true,
  },
  {
    id: 10,
    gamerTag: 'JJoNak',
    realName: '방성현',
    avatarUrl: 'https://picsum.photos/seed/JJoNak/200/200',
    team: {
      name: 'NY Excelsior',
      logoUrl: 'https://picsum.photos/seed/NYXL/100/100',
    },
    game: {
      name: 'オーバーウォッチ',
      icon: OverwatchIcon,
      officialUrl: 'https://overwatch.blizzard.com/ja-jp/',
    },
    role: 'フレックスサポート',
    country: {
      name: '韓国',
      flag: '🇰🇷',
    },
    stats: [
      { label: '回復量/10分', value: '11.5k' },
      { label: '攻撃アシスト/10分', value: '38.0' },
      { label: '死亡回数/10分', value: '3.5' },
      { label: 'キル/10分', value: 8.5 },
    ],
    isReal: true,
  },
  {
    id: 11,
    gamerTag: 'Lip',
    realName: '이재원',
    avatarUrl: 'https://picsum.photos/seed/Lip/200/200',
    team: {
      name: 'Atlanta Reign',
      logoUrl: 'https://picsum.photos/seed/AtlantaReign/100/100',
    },
    game: {
      name: 'オーバーウォッチ',
      icon: OverwatchIcon,
      officialUrl: 'https://overwatch.blizzard.com/ja-jp/',
    },
    role: 'ヒットスキャンDPS',
    country: {
      name: '韓国',
      flag: '🇰🇷',
    },
    stats: [
      { label: 'キル/10分', value: '26.8' },
      { label: 'クリティカルヒット率', value: 20, maxValue: 100 },
      { label: 'ヒーローダメージ/10分', value: '17.1k' },
      { label: '武器命中率', value: 60, maxValue: 100 },
    ],
    isReal: true,
  },
  {
    id: 14,
    gamerTag: 'Profit',
    realName: '박준영',
    avatarUrl: 'https://picsum.photos/seed/Profit/200/200',
    team: {
      name: 'Seoul Dynasty',
      logoUrl: 'https://picsum.photos/seed/SeoulDynasty/100/100',
    },
    game: {
      name: 'オーバーウォッチ',
      icon: OverwatchIcon,
      officialUrl: 'https://overwatch.blizzard.com/ja-jp/',
    },
    role: 'フレックスDPS',
    country: {
      name: '韓国',
      flag: '🇰🇷',
    },
    stats: [
      { label: 'キル/10分', value: '24.5' },
      { label: 'とどめ/10分', value: '11.0' },
      { label: 'ヒーローダメージ/10分', value: '16.2k' },
      { label: '武器命中率', value: 52, maxValue: 100 },
    ],
    isReal: true,
  },

  // League of Legends Players
  {
    id: 15,
    gamerTag: 'Faker',
    realName: '이상혁',
    avatarUrl: 'https://picsum.photos/seed/Faker/200/200',
    team: {
      name: 'T1',
      logoUrl: 'https://picsum.photos/seed/T1/100/100',
    },
    game: {
      name: 'リーグ・オブ・レジェンド',
      icon: LeagueOfLegendsIcon,
      officialUrl: 'https://www.leagueoflegends.com/ja-jp/',
    },
    role: 'ミッド',
    country: {
      name: '韓国',
      flag: '🇰🇷',
    },
    stats: [
      { label: 'KDA', value: '4.8' },
      { label: 'CS/分', value: '9.2' },
      { label: 'キル関与率', value: 68, maxValue: 100 },
      { label: 'ダメージ/分', value: 550 },
    ],
    isReal: true,
  },
  {
    id: 16,
    gamerTag: 'Caps',
    realName: 'Rasmus Winther',
    avatarUrl: 'https://picsum.photos/seed/Caps/200/200',
    team: {
      name: 'G2 Esports',
      logoUrl: 'https://picsum.photos/seed/G2/100/100',
    },
    game: {
      name: 'リーグ・オブ・レジェンド',
      icon: LeagueOfLegendsIcon,
      officialUrl: 'https://www.leagueoflegends.com/ja-jp/',
    },
    role: 'ミッド',
    country: {
      name: 'デンマーク',
      flag: '🇩🇰',
    },
    stats: [
      { label: 'KDA', value: '5.1' },
      { label: 'CS/分', value: '8.9' },
      { label: 'キル関与率', value: 72, maxValue: 100 },
      { label: 'ダメージ/分', value: 610 },
    ],
    isReal: true,
  },
  {
    id: 17,
    gamerTag: 'Chovy',
    realName: '정지훈',
    avatarUrl: 'https://picsum.photos/seed/Chovy/200/200',
    team: {
      name: 'Gen.G',
      logoUrl: 'https://picsum.photos/seed/GenG/100/100',
    },
    game: {
      name: 'リーグ・オブ・レジェンド',
      icon: LeagueOfLegendsIcon,
      officialUrl: 'https://www.leagueoflegends.com/ja-jp/',
    },
    role: 'ミッド',
    country: {
      name: '韓国',
      flag: '🇰🇷',
    },
    stats: [
      { label: 'KDA', value: '6.5' },
      { label: 'CS/分', value: '10.1' },
      { label: 'キル関与率', value: 65, maxValue: 100 },
      { label: 'ダメージ/分', value: 580 },
    ],
    isReal: true,
  },
   {
    id: 18,
    gamerTag: 'Ruler',
    realName: '박재혁',
    avatarUrl: 'https://picsum.photos/seed/Ruler/200/200',
    team: {
      name: 'JD Gaming',
      logoUrl: 'https://picsum.photos/seed/JDG/100/100',
    },
    game: {
      name: 'リーグ・オブ・レジェンド',
      icon: LeagueOfLegendsIcon,
      officialUrl: 'https://www.leagueoflegends.com/ja-jp/',
    },
    role: 'ADC',
    country: {
      name: '韓国',
      flag: '🇰🇷',
    },
    stats: [
      { label: 'KDA', value: '5.9' },
      { label: 'CS/分', value: '9.8' },
      { label: 'キル関与率', value: 75, maxValue: 100 },
      { label: 'ダメージ/分', value: 650 },
    ],
    isReal: true,
  },

  // Counter-Strike 2 Players
  {
    id: 19,
    gamerTag: 's1mple',
    realName: 'Oleksandr Kostyliev',
    avatarUrl: 'https://picsum.photos/seed/s1mple/200/200',
    team: {
      name: 'Natus Vincere',
      logoUrl: 'https://picsum.photos/seed/NaVi/100/100',
    },
    game: {
      name: 'Counter-Strike 2',
      icon: CS2Icon,
      officialUrl: 'https://www.counter-strike.net/',
    },
    role: 'AWPer',
    country: {
      name: 'ウクライナ',
      flag: '🇺🇦',
    },
    stats: [
      { label: 'K/D比', value: '1.25' },
      { label: 'ダメージ/ラウンド', value: 85.2 },
      { label: 'ヘッドショット率', value: 40, maxValue: 100 },
      { label: 'Rating 2.0', value: '1.27' },
    ],
    isReal: true,
  },
  {
    id: 20,
    gamerTag: 'ZywOo',
    realName: 'Mathieu Herbaut',
    avatarUrl: 'https://picsum.photos/seed/ZywOo/200/200',
    team: {
      name: 'Team Vitality',
      logoUrl: 'https://picsum.photos/seed/Vitality/100/100',
    },
    game: {
      name: 'Counter-Strike 2',
      icon: CS2Icon,
      officialUrl: 'https://www.counter-strike.net/',
    },
    role: 'AWPer',
    country: {
      name: 'フランス',
      flag: '🇫🇷',
    },
    stats: [
      { label: 'K/D比', value: '1.30' },
      { label: 'ダメージ/ラウンド', value: 86.1 },
      { label: 'ヘッドショット率', value: 38, maxValue: 100 },
      { label: 'Rating 2.0', value: '1.31' },
    ],
    isReal: true,
  },
  {
    id: 21,
    gamerTag: 'm0NESY',
    realName: 'Ilya Osipov',
    avatarUrl: 'https://picsum.photos/seed/m0NESY/200/200',
    team: {
      name: 'G2 Esports',
      logoUrl: 'https://picsum.photos/seed/G2/100/100',
    },
    game: {
      name: 'Counter-Strike 2',
      icon: CS2Icon,
      officialUrl: 'https://www.counter-strike.net/',
    },
    role: 'AWPer',
    country: {
      name: 'ロシア',
      flag: '🇷🇺',
    },
    stats: [
      { label: 'K/D比', value: '1.22' },
      { label: 'ダメージ/ラウンド', value: 79.5 },
      { label: 'ヘッドショット率', value: 35, maxValue: 100 },
      { label: 'Rating 2.0', value: '1.20' },
    ],
    isReal: true,
  },
  {
    id: 22,
    gamerTag: 'ropz',
    realName: 'Robin Kool',
    avatarUrl: 'https://picsum.photos/seed/ropz/200/200',
    team: {
      name: 'FaZe Clan',
      logoUrl: 'https://picsum.photos/seed/FaZe/100/100',
    },
    game: {
      name: 'Counter-Strike 2',
      icon: CS2Icon,
      officialUrl: 'https://www.counter-strike.net/',
    },
    role: 'ライフラ―',
    country: {
      name: 'エストニア',
      flag: '🇪🇪',
    },
    stats: [
      { label: 'K/D比', value: '1.18' },
      { label: 'ダメージ/ラウンド', value: 80.1 },
      { label: 'ヘッドショット率', value: 55, maxValue: 100 },
      { label: 'Rating 2.0', value: '1.15' },
    ],
    isReal: true,
  },
  {
    id: 23,
    gamerTag: 'device',
    realName: 'Nicolai Reedtz',
    avatarUrl: 'https://picsum.photos/seed/device/200/200',
    team: {
      name: 'Astralis',
      logoUrl: 'https://picsum.photos/seed/Astralis/100/100',
    },
    game: {
      name: 'Counter-Strike 2',
      icon: CS2Icon,
      officialUrl: 'https://www.counter-strike.net/',
    },
    role: 'AWPer',
    country: {
      name: 'デンマーク',
      flag: '🇩🇰',
    },
    stats: [
      { label: 'K/D比', value: '1.28' },
      { label: 'ダメージ/ラウンド', value: 82.0 },
      { label: 'ヘッドショット率', value: 36, maxValue: 100 },
      { label: 'Rating 2.0', value: '1.24' },
    ],
    isReal: true,
  },
  {
    id: 24,
    gamerTag: 'karrigan',
    realName: 'Finn Andersen',
    avatarUrl: 'https://picsum.photos/seed/karrigan/200/200',
    team: {
      name: 'FaZe Clan',
      logoUrl: 'https://picsum.photos/seed/FaZe/100/100',
    },
    game: {
      name: 'Counter-Strike 2',
      icon: CS2Icon,
      officialUrl: 'https://www.counter-strike.net/',
    },
    role: 'IGL',
    country: {
      name: 'デンマーク',
      flag: '🇩🇰',
    },
    stats: [
      { label: 'K/D比', value: '0.92' },
      { label: 'ダメージ/ラウンド', value: '68.5' },
      { label: 'ヘッドショット率', value: 48, maxValue: 100 },
      { label: 'Rating 2.0', value: '0.95' },
    ],
    isReal: true,
  },
  {
    id: 25,
    gamerTag: 'Dep',
    realName: 'ゆうな',
    avatarUrl: 'https://picsum.photos/seed/Dep/200/200',
    team: {
      name: 'ZETA DIVISION',
      logoUrl: 'https://picsum.photos/seed/ZETADIVISION/100/100',
    },
    game: {
      name: 'ヴァロラント',
      icon: ValorantIcon,
      officialUrl: 'https://playvalorant.com/ja-jp/',
    },
    role: 'デュエリスト',
    country: {
      name: '日本',
      flag: '🇯🇵',
    },
    stats: [
      { label: 'K/D比', value: '1.25' },
      { label: '勝率', value: 68, maxValue: 100 },
      { label: 'ヘッドショット率', value: 24, maxValue: 100 },
      { label: '平均ダメージ/ラウンド', value: 158 },
    ],
    isReal: true,
  },
];

// --- Player Data Generation ---

const firstNames = ['Ken', 'Yuki', 'Alex', 'Chris', 'Maria', 'Sven', 'Lee', 'Wei', 'Jose', 'Omar', 'Anya', 'Boris', 'Chloe', 'David', 'Eva', 'Frank', 'Gael', 'Hiro', 'Isla', 'Jin'];
const lastNames = ['Sato', 'Kim', 'Smith', 'Müller', 'Garcia', 'Chen', 'Silva', 'Ivanov', 'Khan', 'Jones', 'Wang', 'Lee', 'Rossi', 'Kowalski', 'Bernard', 'Martinez'];
const gamerTagAdjectives = ['Swift', 'Silent', 'Dark', 'Cosmic', 'Iron', 'Crimson', 'Azure', 'Golden', 'Venom', 'Shadow', 'Phantom', 'Savage', 'Cyber', 'Arctic', 'Blazing'];
const gamerTagNouns = ['Blade', 'Fang', 'Storm', 'Echo', 'Specter', 'Pulse', 'Raptor', 'Reaper', 'Hawk', 'Wolf', 'Dragon', 'Serpent', 'Titan', 'Ghost', 'Ninja'];

const teams = [
  ...new Set(REAL_PLAYERS.map(p => p.team.name)),
  'Cloud9', 'Team Liquid', '100 Thieves', 'NRG', 'Evil Geniuses', 'Team Heretics', 'KOI', 'Giants Gaming', 'Team BDS', 'Karmine Corp',
  'DRX', 'LOUD', 'FURIA Esports', 'MIBR', 'KRÜ Esports', 'Edward Gaming', 'Bilibili Gaming', 'FunPlus Phoenix', 'Talon Esports',
  'Global Esports', 'Rex Regum Qeon', 'DetonatioN FocusMe', 'Gambit Esports', 'Acend', 'Vision Strikers', 'OpTic Gaming', 'Envy',
  'MOUZ', 'Ninjas in Pyjamas', 'BIG', 'Heroic', 'ENCE', 'OG', 'Complexity', 'Virtus.pro', 'Team Spirit', 'Outsiders', 'GamerLegion',
  'Apeks', 'Monte', 'Sprout', 'paiN Gaming', 'Imperial Esports', 'Fluxo', '00 Nation', 'The MongolZ', 'Lynn Vision Gaming',
  'Invictus Gaming', 'Royal Never Give Up', 'PSG.LGD', 'Team Aster', 'Xtreme Gaming', 'Shopify Rebellion', 'Tundra Esports',
  'Team Secret', 'Natus Vincere', 'Team Vitality', 'G2 Esports', 'FaZe Clan', 'Astralis', 'Gen.G', 'T1', 'JD Gaming', 'Sentinels', 'Fnatic',
].map(name => ({ name, logoUrl: `https://picsum.photos/seed/${name.replace(/\s/g, '')}/100/100` }));

const countries = [
  { name: '日本', flag: '🇯🇵' },
  { name: '韓国', flag: '🇰🇷' },
  { name: 'アメリカ合衆国', flag: '🇺🇸' },
  { name: 'カナダ', flag: '🇨🇦' },
  { name: 'ブラジル', flag: '🇧🇷' },
  { name: 'イギリス', flag: '🇬🇧' },
  { name: 'ドイツ', flag: '🇩🇪' },
  { name: 'フランス', flag: '🇫🇷' },
  { name: 'スウェーデン', flag: '🇸🇪' },
  { name: 'デンマーク', flag: '🇩🇰' },
  { name: 'ロシア', flag: '🇷🇺' },
  { name: 'ウクライナ', flag: '🇺🇦' },
  { name: '中国', flag: '🇨🇳' },
  { name: '台湾', flag: '🇹🇼' },
  { name: 'フィリピン', flag: '🇵🇭' },
  { name: 'インドネシア', flag: '🇮🇩' },
  { name: 'オーストラリア', flag: '🇦🇺' },
  { name: 'トルコ', flag: '🇹🇷' },
  { name: 'スペイン', flag: '🇪🇸' },
  { name: 'ポーランド', flag: '🇵🇱' },
];

const gameData = {
  'ヴァロラント': {
    icon: ValorantIcon,
    officialUrl: 'https://playvalorant.com/ja-jp/',
    roles: ['デュエリスト', 'コントローラー', 'イニシエーター', 'センチネル', 'IGL'],
    stats: () => [
      { label: 'K/D比', value: (Math.random() * 0.7 + 0.8).toFixed(2) },
      { label: '勝率', value: Math.floor(Math.random() * 30 + 45), maxValue: 100 },
      { label: 'ヘッドショット率', value: Math.floor(Math.random() * 20 + 15), maxValue: 100 },
      { label: '平均ダメージ/ラウンド', value: Math.floor(Math.random() * 50 + 120) },
    ],
  },
  'エーペックスレジェンズ': {
    icon: ApexLegendsIcon,
    officialUrl: 'https://www.ea.com/ja-jp/games/apex-legends',
    roles: ['IGL', 'フラッガー', 'アンカー', 'サポート'],
    stats: () => [
      { label: 'K/D比', value: (Math.random() * 2 + 2.5).toFixed(1) },
      { label: '平均ダメージ', value: Math.floor(Math.random() * 400 + 700) },
      { label: 'トップ5率', value: Math.floor(Math.random() * 25 + 35), maxValue: 100 },
      { label: '合計勝利数', value: Math.floor(Math.random() * 100 + 50) },
    ],
  },
  'オーバーウォッチ': {
    icon: OverwatchIcon,
    officialUrl: 'https://overwatch.blizzard.com/ja-jp/',
    roles: ['メインタンク', 'フレックスDPS', 'ヒットスキャンDPS', 'メインサポート', 'フレックスサポート'],
    stats: () => [
      { label: 'キル/10分', value: (Math.random() * 8 + 15).toFixed(1) },
      { label: 'ヒーローダメージ/10分', value: `${(Math.random() * 5 + 12).toFixed(1)}k` },
      { label: '回復量/10分', value: `${(Math.random() * 6 + 7).toFixed(1)}k` },
      { label: '死亡回数/10分', value: (Math.random() * 2 + 3.5).toFixed(1) },
    ],
  },
  'リーグ・オブ・レジェンド': {
    icon: LeagueOfLegendsIcon,
    officialUrl: 'https://www.leagueoflegends.com/ja-jp/',
    roles: ['トップ', 'ジャングル', 'ミッド', 'ADC', 'サポート'],
    stats: () => [
      { label: 'KDA', value: (Math.random() * 4 + 2.5).toFixed(1) },
      { label: 'CS/分', value: (Math.random() * 2 + 8).toFixed(1) },
      { label: 'キル関与率', value: Math.floor(Math.random() * 30 + 50), maxValue: 100 },
      { label: 'ダメージ/分', value: Math.floor(Math.random() * 250 + 400) },
    ],
  },
  'Counter-Strike 2': {
    icon: CS2Icon,
    officialUrl: 'https://www.counter-strike.net/',
    roles: ['AWPer', 'IGL', 'エントリーフラッガー', 'ライフラ―', 'サポート'],
    stats: () => [
      { label: 'K/D比', value: (Math.random() * 0.4 + 0.9).toFixed(2) },
      { label: 'ダメージ/ラウンド', value: (Math.random() * 20 + 70).toFixed(1) },
      { label: 'ヘッドショット率', value: Math.floor(Math.random() * 25 + 30), maxValue: 100 },
      { label: 'Rating 2.0', value: (Math.random() * 0.3 + 0.95).toFixed(2) },
    ],
  },
};

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const generatePlayer = (id: number): Player => {
  const firstName = getRandomItem(firstNames);
  const lastName = getRandomItem(lastNames);
  const realName = `${firstName} ${lastName}`;
  
  const adj = getRandomItem(gamerTagAdjectives);
  const noun = getRandomItem(gamerTagNouns);
  const num = Math.random() > 0.7 ? Math.floor(Math.random() * 100) : '';
  const gamerTag = `${adj}${noun}${num}`;

  const team = getRandomItem(teams);
  const country = getRandomItem(countries);

  const gameName = getRandomItem(Object.keys(gameData)) as keyof typeof gameData;
  const selectedGameData = gameData[gameName];

  const role = getRandomItem(selectedGameData.roles);
  const game: Game = {
    name: gameName,
    icon: selectedGameData.icon,
    officialUrl: selectedGameData.officialUrl,
  };
  const stats = selectedGameData.stats();

  return {
    id,
    gamerTag,
    realName,
    avatarUrl: `https://picsum.photos/seed/${id}/${gamerTag}/200/200`,
    team: {
      name: team.name,
      logoUrl: team.logoUrl,
    },
    game,
    role,
    country,
    stats,
    isReal: false,
  };
};

const generatePlayers = (count: number): Player[] => {
  const generated: Player[] = [];
  const startId = Math.max(...REAL_PLAYERS.map(p => p.id)) + 1;
  for (let i = 0; i < count; i++) {
    generated.push(generatePlayer(startId + i));
  }
  return generated;
};

const generatedPlayers = generatePlayers(2600 - REAL_PLAYERS.length);

export const players: Player[] = [...REAL_PLAYERS, ...generatedPlayers];