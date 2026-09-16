// eslint-disable-next-line no-unused-vars
import React from 'react'
import {albumCovers} from '../assets/assets'

// eslint-disable-next-line no-unused-vars
const FancyVisualizer = ({CurrentSongData, setCurrentSongData, currentSongIndex, setCurrentSongIndex}) => {
    return (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
            <div className="bg-abw_0 p-6 rounded-lg">
                <img className="relative z-20 items-center w-160 h-160 rounded cursor-pointer hover:m-0 transition-all duration-300" src={CurrentSongData.image} alt="Album Cover" />
                <img className='absolute z-10 w-150 h-150 inset-0 top-[25%] left-[50%] animate-vinyl' src={albumCovers.vinyl} />
            </div>
        </div>
    )
}

export default FancyVisualizer
