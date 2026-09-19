// /* eslint-disable no-unused-vars */
import React from 'react'
import PlayerControls from './PlayerControls'
import { assets } from '../assets/assets'
import VolumeControls from './VolumeControls'
//Music Format

// id: x,
// name: 'x',
// image: albumCovers.imgX,
// desc: 'x',
// bgColor: '#x',
``
const PlayerBar = ({ progress, setProgress, changeSong, currentSongData, setCurrentSongData, currentSongIndex, setCurrentSongIndex, isFancyOpen, setFancy, isPlaying, setIsPlaying, audioRef }) => {

    let [volume, setVolume] = React.useState(50)
    React.useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = ((volume) / 200);
        }
    }, [volume, audioRef]);



    return (
        <>
            <audio ref={audioRef} src={currentSongData.file} volume={volume}></audio>
            <div id="player" className="bg-abw_0 h-[10%] flex items-center justify-between text-abw_1 px-4">
                <div id="SongInfo" className="hidden xl:flex item-center gap-4 w-[20vw]">
                    <div className="group flex bg-black">
                        <img className="shrink-0 absolute bottom-[2%] left-[1.2%] items-center w-16 h-16 max-w-16 min-w-16 rounded cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300" src={assets.icons.zoom_icon} alt="uparrow" onClick={() => (setFancy(!isFancyOpen))} />
                        <img className="shrink-0 items-center w-24 h-24 rounded cursor-pointer hover:opacity-30 hover:m-0 transition-all duration-300" src={currentSongData.image} alt="Album Cover" onClick={() => setFancy(!isFancyOpen)} />
                    </div>

                    <div className='flex justify-center flex-col'>
                        <p className=" font-bold cursor-pointer hover:mr-0 hover:underline">{currentSongData.name}</p>
                        <p className=" cursor-pointer text-fg_03 hover:underline hover:text-abw_1 transition-all duration-100">{currentSongData.artist}</p>
                    </div>
                </div>
                <div className='flex xl:hidden'>

                </div>
                <div id="PlayerControls" className=''>
                    <PlayerControls
                        progress={progress}
                        setProgress={setProgress}
                        changeSong={changeSong}
                        currentSongData={currentSongData}
                        setCurrentSongData={setCurrentSongData}
                        currentSongIndex={currentSongIndex}
                        setCurrentSongIndex={setCurrentSongIndex}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                    />
                </div>
                <div id="volumeControl">
                    <VolumeControls volume={volume} setVolume={setVolume} />
                </div>
            </div>
        </>
    )
}

export default PlayerBar