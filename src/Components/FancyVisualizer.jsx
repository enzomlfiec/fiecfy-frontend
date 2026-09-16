// eslint-disable-next-line no-unused-vars
import React from 'react'
import { albumCovers } from '../assets/assets'

// eslint-disable-next-line no-unused-vars
const FancyVisualizer = ({ CurrentSongData, setCurrentSongData, currentSongIndex, setCurrentSongIndex, isFancyOpen, setFancy,isPlaying,setIsPlaying}) => {
    return (
        <div className={`fixed inset-0 bg-black/90 items-center flex justify-center opacity-0 z-50 ${isFancyOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-all duration-300`}>
            <div className='flex flex-col justify-center items-center gap-10'>
                <div className="bg-abw_0 p-6 rounded-lg group">
                    <img id="cover" className="relative left-[0%] z-20 items-center w-160 h-160 rounded hover:m-0 group-hover:left-[-20%] transition-all duration-300" src={CurrentSongData.image} alt="Album Cover"/>
                    <img id="vinyl" className={`pointer-events-none absolute z-10 w-150 h-150 inset-0 top-[22%] left-[38%] group-hover:left-[45%] group-hover:pointer-events-auto animate-vinyl ${isPlaying ? '[animation-play-state:running]' : ''} transition-all duration-300 [animation-play-state:paused]`} src={albumCovers.vinyl} onClick={()=>setIsPlaying(!isPlaying)}/>
                </div>
                <p className='text-white text-xl font-bold cursor-pointer hover:underline' onClick={()=>setFancy(false)}>Close</p>
            </div>
        </div>
    )
}

export default FancyVisualizer
