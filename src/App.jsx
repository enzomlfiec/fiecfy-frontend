import React from 'react'
import Sidebar from './Components/Sidebar'
import PlayerBar from './Components/PlayerBar'
import FancyVisualizer from './Components/FancyVisualizer'
import { songsData } from './assets/assets'

if (React) {
  console.log("React is loaded")
}

const App = () => {

  let [currentSongIndex, setCurrentSongIndex] = React.useState(67);
  let [CurrentSongData, setCurrentSongData] = React.useState(
    {
      id: songsData[currentSongIndex].id,
      name: songsData[currentSongIndex].name,
      artist: songsData[currentSongIndex].artist,
      image: songsData[currentSongIndex].image,
      file: songsData[currentSongIndex].file,
      desc: songsData[currentSongIndex].desc,
      duration: songsData[currentSongIndex].duration,
      bgColor: songsData[currentSongIndex].bgColor,
    }
  );

  return (
    <div
    //  id="black-border" className='border-2 bg-black border-black m-2 p-0 h-screen w-screen'
    >
      <div className="h-screen bg-bg_0">
        <FancyVisualizer
          CurrentSongData={CurrentSongData}
          setCurrentSongData={setCurrentSongData}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex} />
        <div className="h-[90%] flex">
          <Sidebar />
        </div>
        <PlayerBar
          CurrentSongData={CurrentSongData}
          setCurrentSongData={setCurrentSongData}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
        />
      </div>
    </div>
  )
}

export default App