import React from 'react'

import { songsData } from '../assets/assets'
import ELSD from '../scripts/ELSD'
import FiecfyIcon from '../assets/images/FiecfyIcon.png'
import FiecfyIconSpin from '../assets/images/FiecfyIconSpin.gif'

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

    React.useEffect(() => {
        const favicon = document.querySelector("link[rel='icon']")

        if (!favicon) return

        favicon.href = isPlaying
            ? FiecfyIconSpin
            : FiecfyIcon
    }, [isPlaying])

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