import React from 'react'
import format from 'format-duration'
import ProgressTipPopUp from './ProgressTipPopUp'
import { songsData } from '../assets/assets'


const PlayerProgressBar = ({ isPlaying, isLooping, progress, setProgress, CurrentSongData, setCurrentSongData, currentSongIndex, setCurrentSongIndex, audioRef }) => {
    let [hovering, setHovering] = React.useState(false)
    let [hoveredPosition, setHoveringPosition] = React.useState(0)
    let mockedProgress = true
    let fullProgressString = CurrentSongData?.duration || "1:40";    // let fullProgressString = "6:00"

    const timeToSeconds = (time) => {
        const [minutes, seconds] = time.split(":");
        return Number(minutes) * 60 + Number(seconds);
    }

    function changeSong(nextIndex) {
        let newIndex = nextIndex;
        if (!songsData[newIndex]) {
            setProgress(0)
            return
        }
        setCurrentSongIndex(newIndex);
        setCurrentSongData(songsData[newIndex]);
        setProgress(0)
    }

    let fullProgress = timeToSeconds(fullProgressString)
    console.log(fullProgressString)

    React.useEffect(() => {
        if (!isPlaying) { return }
        if (!mockedProgress) { return }
        const interval = setInterval(() => {
            if (progress >= fullProgress) {
                changeSong(currentSongIndex + 1)
            }
            setProgress(prevProgress => {
                if (prevProgress >= fullProgress) {
                    if (isLooping) {
                        return 0;
                    }
                    return fullProgress;
                }
                if (prevProgress < fullProgress) {
                    console.log("Progress: ", prevProgress + 0.3);
                    return prevProgress + 0.3;
                }
            });
        }, 300);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying, isLooping, setProgress, mockedProgress, CurrentSongData, fullProgress, currentSongIndex]);


    return (
        <>
            <div className='flex items-center text-left gap-5'>
                <p className="text-sm sm:text-base text-fg_03 relative top-[0.25vw]">{format(progress * 1000)}</p>
                <input id="progress-bar" type="range" min="0" max={fullProgress}
                    style={{
                        background: `linear-gradient(to right, ${hovering ? 'var(--color-p_02)' : 'var(--color-abw_1)'} ${(progress / fullProgress) * 50}%,${hovering ? 'var(--color-p_0)' : 'var(--color-fg_03)'} ${(progress / fullProgress) * 100}%, var(--color-fg_0) ${(progress / fullProgress) * 100}%)`
                    }}
                    value={progress} className=" mt-3 progressBar w-[40vw] h-2 hover:h-4 rounded-full cursor-pointer duration-300"
                    onChange={(e) => setProgress(Number(e.target.value))}
                    onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
                    onClick={() => { audioRef.current.currentTime = progress }}
                    onMouseMove={(e) => {
                        const slider = e.currentTarget
                        const rect = slider.getBoundingClientRect()

                        const position = (e.clientX - rect.left) / rect.width
                        const value = slider.min * 1 + position * (slider.max - slider.min)
                        setHoveringPosition(Number(value))
                        console.log(value)
                    }}
                ></input>
                <p className="text-sm sm:text-base text-fg_03 relative top-[0.25vw]">{format(fullProgress * 1000)}</p>
            </div>
            <ProgressTipPopUp
                progressValue={format(hoveredPosition * 1000)}
                show={hovering}
                hoveredValue={hoveredPosition / 100}
            />

        </>
    )
}

export default PlayerProgressBar