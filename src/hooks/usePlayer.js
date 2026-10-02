import React from 'react'
// import { images } from '../assets/js/assets'
import { songsData } from '../assets/mock/musicMockedData'
import ELSD from '../scripts/ELSD'
import spinningIconFrames from '../scripts/SpinningIconFrames'


const usePlayer = () => {
    const audioRef = React.useRef(null)
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [isFancyOpen, setFancy] = React.useState(false)
    const [inShuffle, setInShuffle] = React.useState(false)
    const [isLooping, setIsLooping] = React.useState(false)
    const [volume, setVolume] = React.useState(50)
    const [progress, setProgress] = React.useState(ELSD.read("lastProgress", 0))
    const [currentSongIndex, setCurrentSongIndex] = React.useState(ELSD.read("lastSongIndex", 0))
    const [currentSongData, setCurrentSongData] = React.useState(songsData[currentSongIndex])

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
            favicon.href = spinningIconFrames[i];
            return;
        }

        function contar() {
            favicon.href = spinningIconFrames[i];
            i++;
            if (i >= spinningIconFrames.length) {
                i = 0;
            }
            timeout = setTimeout(contar, 150);
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
        ELSD.write("lastSongIndex", nextIndex)
        ELSD.write("lastProgress", 0, false)
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
        isPlaying, setIsPlaying,
        isFancyOpen, setFancy,
        inShuffle, setInShuffle,
        isLooping, setIsLooping,
        volume, setVolume,
        progress, setProgress,
        currentSongIndex, setCurrentSongIndex,
        currentSongData, setCurrentSongData,

        audioRef,
        changeSong,
    }
}

export default usePlayer