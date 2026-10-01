import React from 'react'

import { Sidebar } from './Components/Sidebar'
import { FancyVisualizer, PlayerBar } from './Components/Player'
import { Popup } from './Components/Misc'
import { Display } from './Components/Display'

import usePlayer from './hooks/usePlayer'
import { ContextMenu } from './Components/ContextMenu'

const App = () => {

  const [moreInfoPopup, setMoreInfoPopup] = React.useState(false)

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

      {/* <ContextMenu /> */}

      <Popup
        moreInfoPopup={moreInfoPopup}
        setMoreInfoPopup={setMoreInfoPopup}
      />


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
            moreInfoPopup={moreInfoPopup}
            setMoreInfoPopup={setMoreInfoPopup}
          />
          <Display/>
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