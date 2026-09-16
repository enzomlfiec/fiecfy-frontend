// /* eslint-disable no-unused-vars */
import React from 'react'
import PlayerControls from './PlayerControls'
import {music, assets } from '../assets/assets'
import VolumeControls from './VolumeControls'
//Music Format

// id: x,
// name: 'x',
// image: albumCovers.imgX,
// desc: 'x',
// bgColor: '#x',
                                ``
const PlayerBar = ({CurrentSongData, setCurrentSongData, currentSongIndex, setCurrentSongIndex,isFancyOpen,setFancy,isPlaying,setIsPlaying,audioRef}) => {
    
    let [volume, setVolume] = React.useState(100)
    React.useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 500;
        }
    }, [volume,audioRef]);

    return (
        <>
            <audio ref={audioRef} src={music.penumbra} volume="0"></audio>
            <div id="player" className="bg-abw_0 h-[10%] flex items-center justify-between text-abw_1 px-4">
                <div id="SongInfo" className="hidden lg:flex item-center gap-4 w-[20vw]">
                    <div className="group">
                        <img className="absolute bottom-[2%] left-[1.2%] items-center w-16 h-16 rounded cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300" src={assets.icons.zoom_icon} alt="uparrow" onClick={() =>console.log(setFancy(!isFancyOpen))} />
                        <img className="items-center w-24 h-24 rounded cursor-pointer hover:opacity-30 hover:m-0 transition-all duration-300" src={CurrentSongData.image} alt="Album Cover" onClick={() =>setFancy(!isFancyOpen)}/>
                    </div>

                    <div className='flex justify-center flex-col'>
                        <p className=" font-bold cursor-pointer hover:mr-0 hover:underline">{CurrentSongData.name}</p>
                        <p className=" cursor-pointer text-fg_03 hover:underline hover:text-abw_1 transition-all duration-100">{CurrentSongData.artist}</p>
                    </div>
                </div>
                <div className='flex lg:hidden'>

                </div>
                <div id="PlayerControls" className=''>
                    <PlayerControls
                        CurrentSongData={CurrentSongData}
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