import bell_icon from './icons/bell.png'
import home_icon from './icons/home.png'
import like_icon from './icons/like.png'
import loop_icon from './icons/loop.png'
import mic_icon from './icons/mic.png'
import next_icon from './icons/next.png'
import play_icon from './icons/play.png'
import pause_icon from './icons/pause.png'
import plays_icon from './icons/plays.png'
import prev_icon from './icons/prev.png'
import search_icon from './icons/search.png'
import shuffle_icon from './icons/shuffle.png'
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
  mic_icon,
  next_icon,
  play_icon,
  pause_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
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
    name: 'Top 50 Global',
    image: albumCovers.img8,
    artist: 'Various Artists',
    desc: 'Your weekly update of the most played tracks',
    bgColor: '#2a4365',
  },
  {
    id: 1,
    name: 'Top 50 India',
    artist: 'Various Artists',
    image: albumCovers.img9,
    desc: 'Your weekly update of the most played tracks',
    bgColor: '#22543d',
  },
  {
    id: 2,
    name: 'Trending India',
    artist: 'Various Artists',
    image: albumCovers.img10,
    desc: 'Your weekly update of the most played tracks',
    bgColor: '#742a2a',
  },
  {
    id: 3,
    name: 'Trending Global',
    artist: 'Various Artists',
    image: albumCovers.img16,
    desc: 'Your weekly update of the most played tracks',
    bgColor: '#44337a',
  },
  {
    id: 4,
    name: 'Mega Hits,',
    image: albumCovers.img11,
    desc: 'Your weekly update of the most played tracks',
    bgColor: '#234e52',
  },
  {
    id: 5,
    name: 'Happy Favorites',
    image: albumCovers.img15,
    desc: 'Your weekly update of the most played tracks',
    bgColor: '#744210',
  },
]

export const songsData = [
  {
    id: 0,
    name: 'Song One',
    artist: 'Various Artists',
    image: albumCovers.img1,
    file: music.song1,
    desc: 'Put a smile on your face with these happy tunes',
    duration: '3:00',
  },
  {
    id: 1,
    name: 'Song Two',
    artist: 'Various Artists',
    image: albumCovers.img2,
    file: music.song2,
    desc: 'Put a smile on your face with these happy tunes',
    duration: '2:20',
  },
  {
    id: 2,
    name: 'Song Three',
    artist: 'Various Artists',
    image: albumCovers.img3,
    file: music.song3,
    desc: 'Put a smile on your face with these happy tunes',
    duration: '2:32',
  },
  {
    id: 3,
    name: 'Song Four',
    artist: 'Various Artists',
    image: albumCovers.img4,
    file: music.song1,
    desc: 'Put a smile on your face with these happy tunes',
    duration: '2:50',
  },
  {
    id: 4,
    name: 'Song Five',
    artist: 'Various Artists',
    image: albumCovers.img5,
    file: music.song2,
    desc: 'Put a smile on your face with these happy tunes',
    duration: '3:10',
  },
  {
    id: 5,
    name: 'Song Six',
    artist: 'Various Artists',
    image: albumCovers.img14,
    file: music.song3,
    desc: 'Put a smile on your face with these happy tunes',
    duration: '2:45',
  },
  {
    id: 6,
    name: 'Song Seven',
    artist: 'Various Artists',
    image: albumCovers.img7,
    file: music.song1,
    desc: 'Put a smile on your face with these happy tunes',
    duration: '2:18',
  },
  {
    id: 7,
    name: 'Song Eight',
    artist: 'Various Artists',
    image: albumCovers.img12,
    file: music.song2,
    desc: 'Put a smile on your face with these happy tunes',
    duration: '2:35',
  },
]