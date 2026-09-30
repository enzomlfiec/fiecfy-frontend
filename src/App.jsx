import React from 'react'

import Sidebar from './Components/Sidebar'
import PlayerBar from './Components/PlayerBar'
import FancyVisualizer from './Components/FancyVisualizer'

import usePlayer from './hooks/usePlayer'
import Display from './Components/Display'

const App = () => {

  const {
    //States 
    isPlaying, setIsPlaying,
    isFancyOpen, setFancy,
    inShuffle, setInShuffle,
    isLooping, setIsLooping,
    volume, setVolume,
    progress, setProgress,
    currentSongIndex, setCurrentSongIndex,
    currentSongData, setCurrentSongData,

    //Refs
    audioRef,

    //Functions
    changeSong,

  } = usePlayer()

  return (
    <>
      <audio
        ref={audioRef}
        src={currentSongData.file}
      />
      <div className="h-screen bg-bg_0">
        <FancyVisualizer
          progress={progress}
          setProgress={setProgress}
          changeSong={changeSong}
          currentSongData={currentSongData}
          setCurrentSongData={setCurrentSongData}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          isFancyOpen={isFancyOpen}
          setFancy={setFancy}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
        />
        <div className="h-[90%] flex">
          <Sidebar
            changeSong={changeSong}
          />
          <Display />
        </div>
        <PlayerBar
          progress={progress}
          setProgress={setProgress}
          changeSong={changeSong}
          currentSongData={currentSongData}
          setCurrentSongData={setCurrentSongData}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          isFancyOpen={isFancyOpen}
          setFancy={setFancy}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
          isLooping={isLooping}
          setIsLooping={setIsLooping}
          inShuffle={inShuffle}
          setInShuffle={setInShuffle}
          volume={volume}
          setVolume={setVolume}
        />

      </div>
    </>
  )
}

export default App