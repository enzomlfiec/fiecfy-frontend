import React from 'react'

import { songsData } from '../assets/assets'
import ELSD from '../scripts/ELSD'
import FiecfyIcon from '../assets/images/FiecfyIcon.png'
import FiecfyIconSpin from '../assets/images/FiecfyIconSpin.gif'
import SpinningIcon from '../scripts/SpinningIcon'

const usePlayer = () => {

    const audioRef = React.useRef(null)

    const [isPlaying, setIsPlaying] = React.useState(false)
    const [isFancyOpen, setFancy] = React.useState(false)
    const [inShuffle, setInShuffle] = React.useState(false)
    const [isLooping, setIsLooping] = React.useState(false)

    const [volume, setVolume] = React.useState(50)

    const [progress, setProgress] = React.useState(
        ELSD("r", "lastProgress", 0)
    )

    const [currentSongIndex, setCurrentSongIndex] = React.useState(
        ELSD("r", "lastSongIndex", 0)
    )

    const [currentSongData, setCurrentSongData] = React.useState(
        songsData[currentSongIndex]
    )

    React.useEffect(() => {

        const audio = audioRef.current

        if (!audio) return

        audio.volume = volume / 200

    }, [volume])


    // Spinning Icon
    React.useEffect(() => {
        let i = 0;
        let timeout;

        const favicon = document.querySelector("link[rel='icon']");

        if (!isPlaying) {
            favicon.href = FiecfyIcon;
            return;
        }

        const spinningIconFrames = [ //15 Frames
            "src/assets/images/FramesSpinningIcon/frame_00_delay-0.05s.png", //0
            "src/assets/images/FramesSpinningIcon/frame_01_delay-0.05s.png", //1
            "src/assets/images/FramesSpinningIcon/frame_02_delay-0.05s.png", //2
            "src/assets/images/FramesSpinningIcon/frame_03_delay-0.05s.png", //3
            "src/assets/images/FramesSpinningIcon/frame_04_delay-0.05s.png", //4
            "src/assets/images/FramesSpinningIcon/frame_05_delay-0.05s.png", //5
            "src/assets/images/FramesSpinningIcon/frame_06_delay-0.05s.png", //6
            "src/assets/images/FramesSpinningIcon/frame_07_delay-0.05s.png", //7
            "src/assets/images/FramesSpinningIcon/frame_08_delay-0.05s.png", //8
            "src/assets/images/FramesSpinningIcon/frame_09_delay-0.05s.png", //9
            "src/assets/images/FramesSpinningIcon/frame_10_delay-0.05s.png", //10
            "src/assets/images/FramesSpinningIcon/frame_11_delay-0.05s.png", //11
            "src/assets/images/FramesSpinningIcon/frame_12_delay-0.05s.png", //12
            "src/assets/images/FramesSpinningIcon/frame_13_delay-0.05s.png", //13
            "src/assets/images/FramesSpinningIcon/frame_14_delay-0.05s.png", //14
        ];

        function contar() {
            favicon.href = spinningIconFrames[i];
            i++;
            if (i >= spinningIconFrames.length) {
                i = 0;
            }
            timeout = setTimeout(contar, 75);
        }
        contar();
        return () => {
            clearTimeout(timeout);
        };
    }, [isPlaying]);

    React.useEffect(() => {

        const audio = audioRef.current

        if (!audio) return

        if (isPlaying) {

            audio.play().catch(() => { })
        } else {
            audio.pause()
        }

    }, [isPlaying, currentSongData.file])

    const changeSong = React.useCallback((nextIndex) => {

        if (nextIndex < 0) {
            return
        }

        if (!songsData[nextIndex]) {
            setIsPlaying(false)
            setProgress(0)
            return
        }

        setCurrentSongIndex(nextIndex)
        setCurrentSongData(songsData[nextIndex])

        setProgress(0)
        setIsPlaying(true)

        ELSD("w", "lastSongIndex", nextIndex)
        ELSD("w", "lastProgress", 0, false)

    }, [])

    React.useEffect(() => {

        const audio = audioRef.current

        if (!audio) return

        const handleTimeUpdate = () => {

            if (audio.duration - 0.1 - audio.currentTime <= 0) {
                changeSong(currentSongIndex + 1)
            }

        }

        audio.addEventListener(
            'timeupdate',
            handleTimeUpdate
        )

        return () => {
            audio.removeEventListener(
                'timeupdate',
                handleTimeUpdate
            )
        }

    }, [changeSong, currentSongIndex])

    return {

        audioRef,

        isPlaying,
        setIsPlaying,

        isFancyOpen,
        setFancy,

        inShuffle,
        setInShuffle,

        isLooping,
        setIsLooping,

        volume,
        setVolume,

        progress,
        setProgress,

        currentSongIndex,
        setCurrentSongIndex,

        currentSongData,
        setCurrentSongData,

        changeSong

    }
}

export default usePlayer