import React from 'react'
import {songsData} from '../assets/assets'

//Music Format

// id: 0,
// name: 'Top 50 Global',
// image: albumCovers.img8,
// desc: 'Your weekly update of the most played tracks',
// bgColor: '#2a4365',

const Player = () => {
    return (
        <div id="player" className="bg-black h-[10%] flex items-center justify-between text-white px-4">
            <div className="hidden lg:flex item-center gap-4">
                <img className="w-12 h-12" src={songsData[0].image} alt="Album Cover" />
                <div>
                    <p className="font-bold">{songsData[0].name}</p>
                    <p>{songsData[0].artist}</p>
                </div>
            </div>
        </div>
    )
}

export default Player