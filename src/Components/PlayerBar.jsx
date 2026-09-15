import React from 'react'
import {songsData} from '../assets/assets'
import PlayerControls from './PlayerControls'

//Music Format

// id: x,
// name: 'x',
// image: albumCovers.imgX,
// desc: 'x',
// bgColor: '#x',

const PlayerBar = () => {
    return (
        <div id="player" className="bg-black h-[10%] flex items-center justify-between text-white px-4">
            <div id="SongInfo" className="hidden lg:flex item-center gap-4">
                <img className="items-center w-16 h-16 rounded cursor-pointer hover:opacity-60 hover:m-0 transition-all duration-300" src={songsData[0].image} alt="Album Cover" />
                <div>
                    <p className=" font-bold hover:font-extrabold cursor-pointer hover:underline">{songsData[0].name}</p>
                    <p className=" cursor-pointer text-gray-200 hover:underline hover:text-white transition-all duration-100">{songsData[0].artist}</p>
                </div>
            </div>
            <div id="PlayerControls" className=''>
                <PlayerControls/>
            </div>
            <div id="otherInfo"></div>
        </div>
    )
}

export default PlayerBar