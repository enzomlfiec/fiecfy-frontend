import bell_icon from './icons/bell.png'
import home_icon from './icons/home.png'
import like_icon from './icons/like.png'
import loop_icon from './icons/loop.png'
import loop_icon_alt from './icons/loop_alt.png'
import mic_icon from './icons/mic.png'
import next_icon from './icons/next.png'
import play_icon from './icons/play.png'
import pause_icon from './icons/pause.png'
import plays_icon from './icons/plays.png'
import prev_icon from './icons/prev.png'
import search_icon from './icons/search.png'
import shuffle_icon from './icons/shuffle.png'
import shuffle_icon_alt from './icons/shuffle_alt.png'
import speaker_icon from './icons/speaker.png'
import stack_icon from './icons/stack.png'
import zoom_icon from './icons/zoom.png'
import plus_icon from './icons/plus.png'
import arrow_icon from './icons/arrow.png'
import mini_player_icon from './icons/mini-player.png'
import queue_icon from './icons/queue.png'
import volume_icon from './icons/volume.png'
import arrow_right from './icons/right_arrow.png'
import arrow_left from './icons/left_arrow.png'
import spotify_logo from './icons/spotify_logo.png'
import clock_icon from './icons/clock_icon.png'
import stack_icon_alt from './icons/stack_alt.png'

import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
import img7 from './images/img7.jpg'
import img8 from './images/img8.jpg'
import img9 from './images/img9.jpg'
import img10 from './images/img10.jpg'
import img11 from './images/img11.jpg'
import img12 from './images/img12.jpg'
import img13 from './images/img13.jpg'
import img14 from './images/img14.jpg'
import img15 from './images/img15.jpg'
import img16 from './images/img16.jpg'

import song1 from './music/song1.mp3'
import song2 from './music/song2.mp3'
import song3 from './music/song3.mp3'

const icons = {
  bell_icon,
  home_icon,
  like_icon,
  loop_icon,
  loop_icon_alt,
  mic_icon,
  next_icon,
  play_icon,
  pause_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
  shuffle_icon_alt,
  speaker_icon,
  stack_icon,
  zoom_icon,
  plus_icon,
  arrow_icon,
  mini_player_icon,
  volume_icon,
  queue_icon,
  arrow_left,
  arrow_right,
  spotify_logo,
  clock_icon,
  library_icon: stack_icon,
  library_icon_alt: stack_icon_alt,
}

const albumCovers = {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
}

const music = {
  song1,
  song2,
  song3,
}

export const assets = {
  icons,
  ...icons,
}

export const albumsData = [
  {
    id: 0,
    name: 'CHASER',
    artist: 'femtanyl',
    image: albumCovers.img1,
    desc: 'CHASER by femtanyl',
    bgColor: '#3b111f',
  },

  {
    id: 1,
    name: 'Aratamemashite, Hajimemashite, Midori desu',
    artist: 'ミドリ',
    image: albumCovers.img2,
    desc: 'Aratamemashite, Hajimemashite, Midori desu by Midori',
    bgColor: '#253b2a',
  },

  {
    id: 2,
    name: 'Sinister Minds',
    artist: 'Churgney Gurgney',
    image: albumCovers.img3,
    desc: 'Sinister Minds by Churgney Gurgney',
    bgColor: '#241b2f',
  },

  {
    id: 3,
    name: 'Best of Deltarune OST',
    artist: 'Toby Fox',
    image: albumCovers.img4,
    desc: 'My favorite Deltarune tracks',
    bgColor: '#1b2745',
  },

  {
    id: 4,
    name: 'Yakuza 0 — Favorites',
    artist: 'SEGA Sound Team',
    image: albumCovers.img5,
    desc: 'Selected favorites from Yakuza 0',
    bgColor: '#472018',
  },

  {
    id: 5,
    name: 'Judgment — Favorites',
    artist: 'SEGA Sound Team',
    image: albumCovers.img6,
    desc: 'Selected favorites from Judgment',
    bgColor: '#172d3d',
  },
]

export const songsData = [
  // =========================
  // FEMTANYL — CHASER
  // =========================

  {
    id: 0,
    name: 'ACT RIGHT',
    artist: 'femtanyl',
    image: albumCovers.img1,
    file: music.actRight,
    desc: 'CHASER',
    duration: '2:24',
  },

  {
    id: 1,
    name: 'P3T',
    artist: 'femtanyl',
    image: albumCovers.img1,
    file: music.p3t,
    desc: 'CHASER',
    duration: '1:42',
  },

  {
    id: 2,
    name: 'PUSH UR T3MPRR',
    artist: 'femtanyl',
    image: albumCovers.img1,
    file: music.pushUrT3mprr,
    desc: 'CHASER',
    duration: '2:28',
  },

  {
    id: 3,
    name: 'KATAMARI',
    artist: 'femtanyl',
    image: albumCovers.img1,
    file: music.katamari,
    desc: 'CHASER',
    duration: '2:38',
  },

  {
    id: 4,
    name: 'MURDER EVERY 1 U KNOW!',
    artist: 'femtanyl, takihasdied',
    image: albumCovers.img1,
    file: music.murderEvery1UKnow,
    desc: 'CHASER',
    duration: '2:05',
  },

  {
    id: 5,
    name: 'GIRL HELL 1999',
    artist: 'femtanyl',
    image: albumCovers.img1,
    file: music.girlHell1999,
    desc: 'CHASER',
    duration: '2:25',
  },


  // =========================
  // MIDORI
  // =========================

  {
    id: 6,
    name: 'Suki',
    artist: 'ミドリ',
    image: albumCovers.img2,
    file: music.suki,
    desc: 'Aratamemashite, Hajimemashite, Midori desu',
    duration: '0:44',
  },

  {
    id: 7,
    name: 'Yukikosan',
    artist: 'ミドリ',
    image: albumCovers.img2,
    file: music.yukikosan,
    desc: 'Aratamemashite, Hajimemashite, Midori desu',
    duration: '3:09',
  },

  {
    id: 8,
    name: 'Kanashiihibi',
    artist: 'ミドリ',
    image: albumCovers.img2,
    file: music.kanashiihibi,
    desc: 'Aratamemashite, Hajimemashite, Midori desu',
    duration: '2:38',
  },

  {
    id: 9,
    name: 'お猿',
    artist: 'ミドリ',
    image: albumCovers.img2,
    file: music.osaru,
    desc: 'Aratamemashite, Hajimemashite, Midori desu',
    duration: '2:09',
  },

  {
    id: 10,
    name: 'Konjounashiatashi, ahobokekasu',
    artist: 'ミドリ',
    image: albumCovers.img2,
    file: music.konjounashiatashi,
    desc: 'Aratamemashite, Hajimemashite, Midori desu',
    duration: '1:39',
  },

  {
    id: 11,
    name: 'Chiharunokoi',
    artist: 'ミドリ',
    image: albumCovers.img2,
    file: music.chiharunokoi,
    desc: 'Aratamemashite, Hajimemashite, Midori desu',
    duration: '3:29',
  },

  {
    id: 12,
    name: 'Himitsunofutari',
    artist: 'ミドリ',
    image: albumCovers.img2,
    file: music.himitsunofutari,
    desc: 'Aratamemashite, Hajimemashite, Midori desu',
    duration: '3:27',
  },

  {
    id: 13,
    name: 'Gobyoushi',
    artist: 'ミドリ',
    image: albumCovers.img2,
    file: music.gobyoushi,
    desc: 'Aratamemashite, Hajimemashite, Midori desu',
    duration: '4:38',
  },

  {
    id: 14,
    name: 'Howlingjigoku',
    artist: 'ミドリ',
    image: albumCovers.img2,
    file: music.howlingjigoku,
    desc: 'Aratamemashite, Hajimemashite, Midori desu',
    duration: '3:33',
  },

  {
    id: 15,
    name: 'Muyokunomuryoku',
    artist: 'ミドリ',
    image: albumCovers.img2,
    file: music.muyokunomuryoku,
    desc: 'Aratamemashite, Hajimemashite, Midori desu',
    duration: '5:43',
  },


  // =========================
  // CHURGNEY GURGNEY
  // SINISTER MINDS
  // =========================

  {
    id: 16,
    name: 'Welcome Home',
    artist: 'Churgney Gurgney, Marley Jauz',
    image: albumCovers.img3,
    file: music.welcomeHome,
    desc: 'Sinister Minds',
    duration: '0:37',
  },

  {
    id: 17,
    name: 'I Miss The Quiet',
    artist: 'Churgney Gurgney, Marley Jauz',
    image: albumCovers.img3,
    file: music.iMissTheQuiet,
    desc: 'Sinister Minds',
    duration: '4:03',
  },

  {
    id: 18,
    name: 'You Must Answer',
    artist: 'Churgney Gurgney, Marley Jauz',
    image: albumCovers.img3,
    file: music.youMustAnswer,
    desc: 'Sinister Minds',
    duration: '5:40',
  },

  {
    id: 19,
    name: 'Minds',
    artist: 'Churgney Gurgney, Marley Jauz, RedTv53, MarStarBro',
    image: albumCovers.img3,
    file: music.minds,
    desc: 'Sinister Minds',
    duration: '5:24',
  },

  {
    id: 20,
    name: 'Big Misser',
    artist: 'Churgney Gurgney, Marley Jauz',
    image: albumCovers.img3,
    file: music.bigMisser,
    desc: 'Sinister Minds',
    duration: '3:21',
  },

  {
    id: 21,
    name: 'I Did That',
    artist: 'Churgney Gurgney, Marley Jauz, Wrathstetic',
    image: albumCovers.img3,
    file: music.iDidThat,
    desc: 'Sinister Minds',
    duration: '3:59',
  },

  {
    id: 22,
    name: 'Meatshow',
    artist: 'Churgney Gurgney, Marley Jauz',
    image: albumCovers.img3,
    file: music.meatshow,
    desc: 'Sinister Minds',
    duration: '4:29',
  },

  {
    id: 23,
    name: 'Beauty',
    artist: 'Churgney Gurgney, Harrison Bennett, MaimyMayo',
    image: albumCovers.img3,
    file: music.beauty,
    desc: 'Sinister Minds',
    duration: '4:52',
  },

  {
    id: 24,
    name: 'Scars',
    artist: 'Churgney Gurgney, Marley Jauz',
    image: albumCovers.img3,
    file: music.scars,
    desc: 'Sinister Minds',
    duration: '1:40',
  },

  {
    id: 25,
    name: 'The Fire Rises',
    artist: 'Churgney Gurgney, Marley Jauz',
    image: albumCovers.img3,
    file: music.theFireRises,
    desc: 'Sinister Minds',
    duration: '5:42',
  },

  {
    id: 26,
    name: 'Sinister',
    artist: 'Churgney Gurgney, Marley Jauz, RedTv53, Wrathstetic',
    image: albumCovers.img3,
    file: music.sinister,
    desc: 'Sinister Minds',
    duration: '3:28',
  },

  {
    id: 27,
    name: 'Feel That Dread?',
    artist: 'Churgney Gurgney, Marley Jauz, Wrathstetic',
    image: albumCovers.img3,
    file: music.feelThatDread,
    desc: 'Sinister Minds',
    duration: '5:42',
  },

  {
    id: 28,
    name: 'RUNAWAY',
    artist: 'Churgney Gurgney, MaimyMayo',
    image: albumCovers.img3,
    file: music.runaway,
    desc: 'Sinister Minds',
    duration: '4:04',
  },

  {
    id: 29,
    name: 'Red-Handed',
    artist: 'Churgney Gurgney, Marley Jauz, MaimyMayo',
    image: albumCovers.img3,
    file: music.redHanded,
    desc: 'Sinister Minds',
    duration: '4:49',
  },

  {
    id: 30,
    name: 'One Last Ask',
    artist: 'Churgney Gurgney, Marley Jauz',
    image: albumCovers.img3,
    file: music.oneLastAsk,
    desc: 'Sinister Minds',
    duration: '1:28',
  },

  {
    id: 31,
    name: "Don't Come Back.",
    artist: 'Churgney Gurgney, Marley Jauz, MaimyMayo',
    image: albumCovers.img3,
    file: music.dontComeBack,
    desc: 'Sinister Minds',
    duration: '5:54',
  },


  // =========================
  // DELTARUNE
  // =========================

  {
    id: 32,
    name: 'Rude Buster',
    artist: 'Toby Fox',
    image: albumCovers.img4,
    file: music.rudeBuster,
    desc: 'Best of Deltarune OST',
    duration: '1:15',
  },

  {
    id: 33,
    name: 'Field of Hopes and Dreams',
    artist: 'Toby Fox',
    image: albumCovers.img4,
    file: music.fieldOfHopesAndDreams,
    desc: 'Best of Deltarune OST',
    duration: '2:41',
  },

  {
    id: 34,
    name: 'Chaos King',
    artist: 'Toby Fox',
    image: albumCovers.img4,
    file: music.chaosKing,
    desc: 'Best of Deltarune OST',
    duration: '1:46',
  },

  {
    id: 35,
    name: 'THE WORLD REVOLVING',
    artist: 'Toby Fox',
    image: albumCovers.img4,
    file: music.theWorldRevolving,
    desc: 'Best of Deltarune OST',
    duration: '1:41',
  },

  {
    id: 36,
    name: 'BIG SHOT',
    artist: 'Toby Fox',
    image: albumCovers.img4,
    file: music.bigShot,
    desc: 'Best of Deltarune OST',
    duration: '2:22',
  },

  {
    id: 37,
    name: 'Ruder Buster',
    artist: 'Toby Fox',
    image: albumCovers.img4,
    file: music.ruderBuster,
    desc: 'Best of Deltarune OST',
    duration: '1:46',
  },

  {
    id: 38,
    name: 'TV WORLD',
    artist: 'Toby Fox',
    image: albumCovers.img4,
    file: music.tvWorld,
    desc: 'Best of Deltarune OST',
    duration: '2:09',
  },

  {
    id: 39,
    name: 'Black Knife',
    artist: 'Toby Fox',
    image: albumCovers.img4,
    file: music.blackKnife,
    desc: 'Best of Deltarune OST',
    duration: '1:57',
  },

  {
    id: 40,
    name: 'Hammer of Justice',
    artist: 'Toby Fox',
    image: albumCovers.img4,
    file: music.hammerOfJustice,
    desc: 'Best of Deltarune OST',
    duration: '2:13',
  },

  {
    id: 41,
    name: 'GUARDIAN',
    artist: 'Toby Fox',
    image: albumCovers.img4,
    file: music.guardian,
    desc: 'Best of Deltarune OST',
    duration: '3:46',
  },

  {
    id: 42,
    name: 'Garden of Hopes and Dreams',
    artist: 'Toby Fox, insaneintherainmusic',
    image: albumCovers.img4,
    file: music.gardenOfHopesAndDreams,
    desc: 'Best of Deltarune OST',
    duration: '3:23',
  },

  {
    id: 43,
    name: 'Rakuichi Buster',
    artist: 'Toby Fox, Rakuichi',
    image: albumCovers.img4,
    file: music.rakuichiBuster,
    desc: 'Best of Deltarune OST',
    duration: '1:49',
  },

  {
    id: 44,
    name: 'Sunset of Seven Suns',
    artist: 'Toby Fox',
    image: albumCovers.img4,
    file: music.sunsetOfSevenSuns,
    desc: 'Best of Deltarune OST',
    duration: '1:36',
  },

  {
    id: 45,
    name: 'Flower Man',
    artist: 'Toby Fox, Camellia',
    image: albumCovers.img4,
    file: music.flowerMan,
    desc: 'Best of Deltarune OST',
    duration: '3:12',
  },

  {
    id: 46,
    name: 'Force Addiction',
    artist: 'SEGA SOUND TEAM, 庄司 英徳',
    image: albumCovers.img5,
    file: music.forceAddiction,
    desc: 'Yakuza 0 — Favorites',
    duration: '...',
  },

  {
    id: 47,
    name: 'Parry Addiction',
    artist: 'SEGA SOUND TEAM, 庄司 英徳',
    image: albumCovers.img5,
    file: music.parryAddiction,
    desc: 'Yakuza 0 — Favorites',
    duration: '...',
  },

  {
    id: 48,
    name: 'Crash Addiction',
    artist: 'SEGA SOUND TEAM, 庄司 英徳',
    image: albumCovers.img5,
    file: music.crashAddiction,
    desc: 'Yakuza 0 — Favorites',
    duration: '...',
  },

  {
    id: 49,
    name: 'Receive You ~Tech Trance Arrangement~',
    artist: 'SEGA SOUND TEAM, 庄司 英徳',
    image: albumCovers.img5,
    file: music.receiveYouTechTrance,
    desc: 'Yakuza 0 — Favorites',
    duration: '...',
  },

  {
    id: 50,
    name: 'Trouble Shooting Star',
    artist: 'SEGA SOUND TEAM, ZENTA',
    image: albumCovers.img5,
    file: music.troubleShootingStar,
    desc: 'Yakuza 0 — Favorites',
    duration: '...',
  },

  {
    id: 51,
    name: 'Customer Creed',
    artist: 'SEGA SOUND TEAM, 庄司 英徳',
    image: albumCovers.img5,
    file: music.customerCreed,
    desc: 'Yakuza 0 — Favorites',
    duration: '...',
  },

  {
    id: 52,
    name: 'One-Eyed Slugger',
    artist: 'SEGA SOUND TEAM, 庄司 英徳',
    image: albumCovers.img5,
    file: music.oneEyedSlugger,
    desc: 'Yakuza 0 — Favorites',
    duration: '...',
  },

  {
    id: 53,
    name: 'One-Eyed Dancer',
    artist: 'SEGA SOUND TEAM, 庄司 英徳',
    image: albumCovers.img5,
    file: music.oneEyedDancer,
    desc: 'Yakuza 0 — Favorites',
    duration: '...',
  },

  {
    id: 54,
    name: 'Receive You The Subtype',
    artist: 'SEGA SOUND TEAM, 庄司 英徳',
    image: albumCovers.img5,
    file: music.receiveYouTheSubtype,
    desc: 'Yakuza 0 — Favorites',
    duration: '...',
  },

  {
    id: 55,
    name: 't u s k',
    artist: 'SEGA SOUND TEAM, 庄司 英徳',
    image: albumCovers.img5,
    file: music.tusk,
    desc: 'Yakuza 0 — Favorites',
    duration: '...',
  },

  {
    id: 56,
    name: 'Pledge of Demon',
    artist: 'SEGA SOUND TEAM, 庄司 英徳',
    image: albumCovers.img5,
    file: music.pledgeOfDemon,
    desc: 'Yakuza 0 — Favorites',
    duration: '...',
  },

  {
    id: 57,
    name: 'Oath of Enma',
    artist: 'SEGA SOUND TEAM, 庄司 英徳',
    image: albumCovers.img5,
    file: music.oathOfEnma,
    desc: 'Yakuza 0 — Favorites',
    duration: '...',
  },

  {
    id: 58,
    name: 'With Vengeance',
    artist: 'SEGA SOUND TEAM, 庄司 英徳',
    image: albumCovers.img5,
    file: music.withVengeance,
    desc: 'Yakuza 0 — Favorites',
    duration: '...',
  },

  {
    id: 59,
    name: 'Two Dragons',
    artist: 'SEGA SOUND TEAM, 庄司 英徳',
    image: albumCovers.img5,
    file: music.twoDragons,
    desc: 'Yakuza 0 — Favorites',
    duration: '...',
  },

  {
    id: 60,
    name: 'Random Fire',
    artist: 'Hidenori Shoji',
    image: albumCovers.img6,
    file: music.randomFire,
    desc: 'Judgment — Favorites',
    duration: '3:18',
  },

  {
    id: 61,
    name: 'Drumfire',
    artist: 'Hidenori Shoji',
    image: albumCovers.img6,
    file: music.drumfire,
    desc: 'Judgment — Favorites',
    duration: '3:54',
  },

  {
    id: 62,
    name: 'My Own Style',
    artist: 'Saori Yoshida',
    image: albumCovers.img6,
    file: music.myOwnStyle,
    desc: 'Judgment — Favorites',
    duration: '3:48',
  },

  {
    id: 63,
    name: 'Λ (lambda)',
    artist: '83key',
    image: albumCovers.img6,
    file: music.lambda,
    desc: 'Judgment — Favorites',
    duration: '2:52',
  },

  {
    id: 64,
    name: 'Hyenas Wheezing',
    artist: 'Hyd Lunch',
    image: albumCovers.img6,
    file: music.hyenasWheezing,
    desc: 'Judgment — Favorites',
    duration: '2:08',
  },

  {
    id: 65,
    name: 'Rake Your Inside',
    artist: '83key',
    image: albumCovers.img6,
    file: music.rakeYourInside,
    desc: 'Judgment — Favorites',
    duration: '3:26',
  },

  {
    id: 66,
    name: 'Destination',
    artist: 'Yuri Fukuda',
    image: albumCovers.img6,
    file: music.destination,
    desc: 'Judgment — Favorites',
    duration: '3:32',
  },

  {
    id: 67,
    name: 'Penumbra',
    artist: 'Hidenori Shoji',
    image: albumCovers.img6,
    file: music.penumbra,
    desc: 'Judgment — Favorites',
    duration: '5:22',
  },
]