import React from 'react'
import format from 'format-duration'
import ProgressTipPopUp from './ProgressTipPopUp'
import ELSD from '../scripts/ELSD'
// import { songsData } from '../assets/assets'


const PlayerProgressBar = ({ isPlaying, isLooping, progress, setProgress, currentSongData, currentSongIndex, audioRef }) => {
    const [hovering, setHovering] = React.useState(false)
    const [hoveredPosition, setHoveringPosition] = React.useState(0)
    // const [playerProgress, setPlayerProgress] = React.useState(ELSD("r", "lastProgress", "0"))

    let fullProgressString = currentSongData?.duration || "1:40";    // let fullProgressString = "1:00"

    const timeToSeconds = (time) => {
        const [minutes, seconds] = time.split(":");
        return Number(minutes) * 60 + Number(seconds);
    }

    let fullProgress = timeToSeconds(fullProgressString)


    // // Old Progress Logic
    function capped(value, max = fullProgress, min = 0) {
        if (value > max) {
            return max - 1
        } else if (value < min) {
            return min
        } else {
            return value
        }
    }

    React.useEffect(() => {
        if (!isPlaying) { return }
        const interval = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress > fullProgress) {
                    if (isLooping) {
                        return 0;
                    }
                    return fullProgress;
                }
                if (prevProgress < fullProgress) {
                    return prevProgress + 0.1
                }
            });
            ELSD("w", "lastProgress", progress)
        }, 100);
        return () => clearInterval(interval);
    }, [isPlaying, isLooping, setProgress, currentSongData, fullProgress, currentSongIndex, audioRef, progress]);

    // React.useEffect(() => {
    //     setPlayerProgress(audioRef.current.currentTime)
    // }, [progress, audioRef])

    // eslint-disable-next-line no-unused-vars
    function safeFormat(value, cappedmin = true, cappedmax = true, logging = true) {
        if (hoveredPosition > fullProgress) {
            console.log("hovering is idk, ", hoveredPosition)
            return format(fullProgress * 1000)
        }

        if (capped && value > fullProgress * 1000) {
            logging && console.log("safeFormat: value is above fullProgress ", fullProgress)
            return format(fullProgress)
        } else if (capped && value < 0) {
            if (hovering == true) { return format(0) }
            logging && console.log("safeFormat: value is bellow 0")
            return format(0)
        }

        if (Number.isNaN(value)) {
            logging && console.log("safeFormat: VALUE IS UNDEFINED returned", format(fullProgress - 0.1))
            format(fullProgress - 0.1)
        } else {
            return format(value)
        }
    }

    function changePosition(value) {
        value = capped(value)
        audioRef.current.currentTime = value
        setProgress(value)
    }

    return (
        <>
            <div className='flex items-center text-left gap-5'>
                <p className="text-sm sm:text-base text-fg_03 relative top-[0.25vw]">{safeFormat(progress * 1000)}</p>
                <div className='bg-debug/0'
                    onChange={(e) => setProgress(Number(e.target.value))}
                    onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
                >

                    <input id="progress-bar" type="range" min="0" max={fullProgress}
                        style={{
                            //Command to start Background Color
                            background: `linear-gradient(to right,` +
                                `${hovering ? 'var(--color-p_0)' : 'var(--color-abw_1)'}` +
                                `${(((progress ?? fullProgress)) / fullProgress) * 100}%,` +
                                `${hovering ? 'var(--color-fg_0)' : 'var(--color-fg_01)'}` +
                                `0%)`
                        }}
                        value={capped(progress)} className=" mt-3 progressBar w-[40vw] h-2 hover:h-4 rounded-full cursor-pointer duration-300"
                        onClick={() => { changePosition(hoveredPosition) }}
                        onMouseMove={(e) => {
                            const slider = e.currentTarget
                            const rect = slider.getBoundingClientRect()
                            const position = (e.clientX - rect.left) / rect.width
                            const value = slider.min * 1 + position * (slider.max - slider.min)
                            console.log(safeFormat(value* 1000))
                            setHoveringPosition(Number(value))
                            console.log(value)
                        }}
                    ></input>
                </div>
                <p className="text-sm sm:text-base text-fg_03 relative top-[0.25vw]">{safeFormat(fullProgress * 1000)}</p>
            </div>
            <ProgressTipPopUp
                fullProgress={fullProgress}
                progressValue={safeFormat(hoveredPosition * 1000)}
                show={hovering}
                hoveredValue={hoveredPosition / 100}
            />

        </>
    )
}

export default PlayerProgressBar