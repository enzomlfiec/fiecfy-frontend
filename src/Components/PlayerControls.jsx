import React from 'react'
import { assets } from '../assets/assets'
import PlayerProgressBar from './PlayerProgressBar'


const PlayerControls = ({ changeSong, progress, setProgress, currentSongData, setCurrentSongData, currentSongIndex, setCurrentSongIndex, audioRef, isPlaying, setIsPlaying }) => {

    let [inShuffle, setInShuffle] = React.useState(false)
    let [isLooping, setIsLooping] = React.useState(false)

    React.useEffect(() => {
        if (isLooping && progress <= 0.1) {
            audioRef.current.currentTime = progress
        }
    }, [audioRef, isLooping, progress]);

    React.useEffect(() => {
        audioRef.current.src = currentSongData.file
        audioRef.current.load()
        audioRef.current.currentTime = progress
        audioRef.current.play()
        // audioRef.current.pause()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSongData, audioRef])

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
            if (audio.duration - audio.currentTime <= 0) {
                changeSong(currentSongIndex + 1)
            }
        }

        audio.addEventListener('timeupdate', handleTimeUpdate)

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate)
        }

    }, [audioRef, changeSong, currentSongIndex, isLooping])

    return (
        <div className="flex flex-col items-center gap-2 w-full select-none">
            {/* Player Controls */}
            <div className='flex justify-center w-100 gap-5'>
                <button id="shuffle" onClick={() => setInShuffle(!inShuffle)}>
                    <img className={` relative w-4 cursor-pointer ${inShuffle ? 'top-1 opacity-100' : 'top-0 opacity-50'} hover:opacity-100 hover:w-4.25 [transition-property:all,top] duration-[300ms,0ms]`} src={inShuffle ? assets.icons.shuffle_icon_alt : assets.icons.shuffle_icon} />
                </button>

                <button id="prev" onClick={() => {
                    if (progress > 3) {
                        setProgress(0.1);
                        audioRef.current.currentTime = 0
                    } else {
                        changeSong(currentSongIndex - 1);
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
                    changeSong(currentSongIndex + 1)
                    audioRef.current.currentTime = 0
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
                currentSongData={currentSongData}
                setCurrentSongData={setCurrentSongData}
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                audioRef={audioRef}
                changeSong={changeSong}
            />
        </div>
    )
}

export default PlayerControls