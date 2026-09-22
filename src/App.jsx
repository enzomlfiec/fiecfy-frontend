import React from 'react'
import Sidebar from './Components/Sidebar'
import PlayerBar from './Components/PlayerBar'
import FancyVisualizer from './Components/FancyVisualizer'
import { songsData, albumsData } from './assets/assets'
import ELSD from './scripts/ELSD'

// if (React) {
//   console.log("React is loaded")
// }

const App = () => {

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isFancyOpen, setFancy] = React.useState(false)
  const [inShuffle, setInShuffle] = React.useState(false)
  const [isLooping, setIsLooping] = React.useState(false)
  const [volume, setVolume] = React.useState(50)
  const [progress, setProgress] = React.useState(ELSD("r", "lastProgress", 0));

  let audioRef = React.useRef(null);
  

  let [, setSwapped] = React.useState(false);

  const swapRefs = React.useCallback(() => {
    setSwapped(prev => !prev)
  }, [])

  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = ((volume) / 200);
    }
  }, [volume, audioRef]);

  React.useEffect(() => {
    if (!isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
  }, [isPlaying, audioRef])


  React.useEffect(() => {
    if (isLooping && progress <= 0.1) {
      audioRef.current.currentTime = progress
    }
  }, [audioRef, isLooping, progress]);

  const [currentSongIndex, setCurrentSongIndex] = React.useState(ELSD("r", "lastSongIndex", "0"));

  const [currentSongData, setCurrentSongData] = React.useState({
    id: songsData[currentSongIndex].id,
    name: songsData[currentSongIndex].name,
    artist: songsData[currentSongIndex].artist,
    image: albumsData[songsData[currentSongIndex].album_id].image,
    file: songsData[currentSongIndex].file,
    desc: songsData[currentSongIndex].desc,
    album_id: songsData[currentSongIndex].album_id,
    duration: songsData[currentSongIndex].duration,
    bgColor: albumsData[songsData[currentSongIndex].album_id].bgColor
  }
  )

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => { }); // ignore AbortError when src changes mid-load
    } else {
      audio.pause();
    }
  }, [isPlaying, currentSongData.file]);

  const changeSong = React.useCallback((nextIndex) => {
    //Creates??? a new index
    let newIndex = nextIndex;

    //if the new index for some reason is bellow 0, lets say im trying to go back in a song which id is already 0, it would not even work
    if (newIndex < 0) {
      return;
    }

    //same thing, except it just restarts the song
    if (!songsData[newIndex]) {
      setIsPlaying(false);
      setProgress(0);
      return;
    }
    
    //Guaranteed stuff
    setCurrentSongIndex(newIndex); //sets the current song index to the new index
    setCurrentSongData(songsData[newIndex]); 
    setProgress(0); //sets the current song progress to 0
    setIsPlaying(true); //plays

    ELSD("w", "lastSongIndex", newIndex);
    ELSD("w", "lastProgress", 0,false);
  }, [progress]);



  React.useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, audioRef])

  React.useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => {
      if (audio.duration - 0.1 - audio.currentTime <= 0) {
        // swapRefs()
        changeSong(currentSongIndex + 1)
        audioRef.current.currentTime = 0
      }
    }

    audio.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
    }

  }, [audioRef, changeSong, currentSongIndex, isLooping, swapRefs])

  return (
    <>
      <audio ref={audioRef} src={currentSongData.file} volume={volume}></audio>
      {/* <audio ref={swapped ? audioRef : audioRef2} src={currentSongData.file} volume={volume}></audio> */}

      <div
      //  id="black-border" className='border-2 bg-black border-black m-2 p-0 h-screen w-screen'
      >
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
      </div>
    </>
  )
}

export default App