import React from 'react'
import Sidebar from './Components/Sidebar'
import PlayerBar from './Components/PlayerBar'
import FancyVisualizer from './Components/FancyVisualizer'
import { songsData, albumsData } from './assets/assets'
// import localStorageData from './scripts/functions'

// if (React) {
//   console.log("React is loaded")
// }

const App = () => {
  let audioRef = React.useRef(null);
  let [currentSongIndex, setCurrentSongIndex] = React.useState(1);
  let [isPlaying, setIsPlaying] = React.useState(false);
  const [isFancyOpen, setFancy] = React.useState(false)

  React.useEffect(() => {
    if (!isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
  }, [isPlaying, audioRef])

  function checkForLocalStorage() {
    if (localStorage) {
      return (
        {
          id: songsData[currentSongIndex].id,
          name: songsData[currentSongIndex].name,
          artist: songsData[currentSongIndex].artist,
          image: albumsData[songsData[currentSongIndex].album_id].image,
          file: songsData[currentSongIndex].file,
          desc: songsData[currentSongIndex].desc,
          album_id: songsData[currentSongIndex].album_id,
          duration: songsData[currentSongIndex].duration,
          bgColor: albumsData[songsData[currentSongIndex].album_id].bgColor,
        }
      )
    } else {
      return
    }
  }

  let [CurrentSongData, setCurrentSongData] = React.useState(
    checkForLocalStorage())


  return (
    <div
    //  id="black-border" className='border-2 bg-black border-black m-2 p-0 h-screen w-screen'
    >
      <div className="h-screen bg-bg_0">
        <FancyVisualizer
          CurrentSongData={CurrentSongData}
          setCurrentSongData={setCurrentSongData}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          isFancyOpen={isFancyOpen}
          setFancy={setFancy}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <div className="h-[90%] flex">
          <Sidebar />
        </div>
        <PlayerBar
          CurrentSongData={CurrentSongData}
          setCurrentSongData={setCurrentSongData}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          isFancyOpen={isFancyOpen}
          setFancy={setFancy}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
        />
      </div>
    </div>
  )
}

export default App