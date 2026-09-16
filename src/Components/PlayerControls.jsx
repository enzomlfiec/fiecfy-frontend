import React from 'react'
import {songsData, assets } from '../assets/assets'
import PlayerProgressBar from './PlayerProgressBar'


const PlayerControls = ({ CurrentSongData, setCurrentSongData, currentSongIndex, setCurrentSongIndex,audioRef }) => {
    let [progress, setProgress] = React.useState(0);
    let [isPlaying, setIsPlaying] = React.useState(false)
    let [inShuffle, setInShuffle] = React.useState(false)
    let [isLooping, setIsLooping] = React.useState(false)
    // let audio = new Audio(music.penumbra);

    React.useEffect(() => {
        if(isLooping && progress < 0.5){
            audioRef.current.currentTime = progress
        }
    }, [audioRef, isLooping, progress]);



    function changeSong(nextIndex) {
        let newIndex = nextIndex;
        if (!songsData[newIndex]) {
            if (songsData[newIndex] < 0) {
                audioRef.current.currentTime = progress
                setProgress(0)
                return
            } else {
                setIsPlaying(false)
                setProgress(0)
                audioRef.current.currentTime = progress
                return
            }
        }
        setCurrentSongIndex(newIndex);
        setCurrentSongData(songsData[newIndex]);
        setIsPlaying(true)
        setProgress(0)

    }
    return (
        <div className="flex flex-col items-center gap-2 w-full">
            {/* Player Controls */}
            <div className='flex justify-center w-100 gap-5'>
                <button id="shuffle" onClick={() => setInShuffle(!inShuffle)}>
                    <img className={` relative w-4 cursor-pointer ${inShuffle ? 'top-1 opacity-100' : 'top-0 opacity-50'} hover:opacity-100 hover:w-4.25 [transition-property:all,top] duration-[300ms,0ms]`} src={inShuffle ? assets.icons.shuffle_icon_alt : assets.icons.shuffle_icon} />
                </button>

                <button id="prev" onClick={() => {
                    if (progress > 3) {
                        setProgress(0);
                        audioRef.current.currentTime = 0
                    } else {
                        changeSong(currentSongIndex - 1);
                        audioRef.current.pause();
                        audioRef.current.removeAttribute("src");
                        audioRef.current.load();
                    }
                }}>
                    <img className='w-4 cursor-pointer opacity-50 hover:opacity-100 hover:w-4.25 transition-all duration-200'
                        src={assets.icons.prev_icon} />
                </button>
                <button id="play-pause" onClick={() => {
                    if (!isPlaying) {
                        audioRef.current.play();
                        audioRef.current.currentTime = progress;
                        setIsPlaying(true)
                    } else {
                        setIsPlaying(false)
                        audioRef.current.pause();
                    }
                }}

                >
                    <img className='w-8 cursor-pointer hover:opacity-50 hover:w-8.25 transition-all duration-200' src={isPlaying ? assets.icons.pause_icon : assets.icons.play_icon} alt={isPlaying ? "Pause" : "Play"} />
                </button>

                <button id="next" onClick={() => {
                    audioRef.current.pause();
                    audioRef.current.removeAttribute("src");
                    audioRef.current.load();
                    changeSong(currentSongIndex + 1)
                }}>
                    <img className='w-4 cursor-pointer opacity-50 hover:opacity-100 hover:w-4.25 transition-all duration-200' src={assets.icons.next_icon} />
                </button>

                <button id="repeat" onClick={() => setIsLooping(!isLooping)}>
                    <img className={` relative w-4 cursor-pointer ${isLooping ? 'top-1 opacity-100' : 'top-0 opacity-50'} hover:opacity-100 hover:w-4.25 [transition-property:all,top] duration-[300ms,0ms]`} src={isLooping ? assets.icons.loop_icon_alt : assets.icons.loop_icon} />
                </button>
            </div>
            {/* ProgressBar */}
            <PlayerProgressBar
                isPlaying={isPlaying}
                isLooping={isLooping}
                progress={progress}
                setProgress={setProgress}
                CurrentSongData={CurrentSongData}
                setCurrentSongData={setCurrentSongData}
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                audioRef={audioRef} />
        </div>
    )
}

export default PlayerControls