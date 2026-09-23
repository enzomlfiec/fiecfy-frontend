// /* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PlayerControls from './PlayerControls'
import { assets, albumsData } from '../assets/assets'
import VolumeControls from './VolumeControls'
//Music Format

// id: x,
// name: 'x',
// image: albumCovers.imgX,
// desc: 'x',
// bgColor: '#x',
``
const PlayerBar = ({progress, setProgress, changeSong, currentSongData, setCurrentSongData, currentSongIndex, setCurrentSongIndex, isFancyOpen, setFancy, isPlaying, setIsPlaying, isLooping, setIsLooping, inShuffle, setInShuffle, audioRef , volume, setVolume}) => {
    return (
        <>
            <div id="player" className="bg-abw_0 h-[10%] flex items-center justify-between text-abw_1 px-4">
                <div id="SongInfo" className="hidden xl:flex item-center gap-4 w-[20vw]">
                    <div className="group flex bg-black select-none">
                        <img className="shrink-0 absolute bottom-[2.2%] left-[1.5%] items-center w-[2.5vw] h-[2.5vw] max-w-[2.5vw] min-w-[2.5vw] rounded cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300" src={assets.icons.zoom_icon} alt="uparrow" onClick={() => (setFancy(!isFancyOpen))} />
                        <img className="shrink-0 items-center w-[4vw] h-[4vw] rounded cursor-pointer hover:opacity-30 hover:m-0 transition-all duration-300" src={albumsData.find(album => album.id === currentSongData.album_id).image} alt="Album Cover" onClick={() => setFancy(!isFancyOpen)} />
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
                        audioRef={audioRef}
                        isLooping={isLooping}
                        setIsLooping={setIsLooping}
                        inShuffle={inShuffle}
                        setInShuffle={setInShuffle}
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