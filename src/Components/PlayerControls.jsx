import React from 'react'
import { assets } from '../assets/assets'
import PlayerProgressBar from './PlayerProgressBar'

const PlayerControls = () => {

    var [isPlaying, setIsPlaying] = React.useState(true)
    var [inShuffle, setInShuffle] = React.useState(false)
    var [isLooping, setIsLooping] = React.useState(false)

    return (
        <div className="flex flex-col items-center gap-2 w-full">
            {/* Player Controls */}
            <div className='flex justify-center w-100 gap-5'>
                <button id="shuffle" onClick={() => setInShuffle(!inShuffle)}>
                    <img className={` relative w-4 cursor-pointer ${inShuffle ? 'top-1 opacity-100' : 'top-0 opacity-75'} hover:opacity-100 hover:w-4.25 [transition-property:all,top] duration-[300ms,0ms]`} src={inShuffle ? assets.icons.shuffle_icon_alt : assets.icons.shuffle_icon} />
                </button>

                <button id="prev" onClick={() => { }}>
                    <img className='w-4 cursor-pointer opacity-75 hover:opacity-100 hover:w-4.25 transition-all duration-200' src={assets.icons.prev_icon} />
                </button>

                <button id="play-pause" onClick={() => setIsPlaying(!isPlaying)}>
                    <img className='w-8 cursor-pointer hover:opacity-75 hover:w-8.25 transition-all duration-200' src={isPlaying ? assets.icons.pause_icon : assets.icons.play_icon} alt={isPlaying ? "Pause" : "Play"} />
                </button>

                <button id="next" onClick={() => { }}>
                    <img className='w-4 cursor-pointer opacity-75 hover:opacity-100 hover:w-4.25 transition-all duration-200' src={assets.icons.next_icon} />
                </button>

                <button id="repeat" onClick={() => setIsLooping(!isLooping)}>
                    <img className={` relative w-4 cursor-pointer ${isLooping ? 'top-1 opacity-100' : 'top-0 opacity-75'} hover:opacity-100 hover:w-4.25 [transition-property:all,top] duration-[300ms,0ms]`} src={isLooping ? assets.icons.loop_icon_alt : assets.icons.loop_icon} />
                </button>
            </div>
            {/* ProgressBar */}
            <PlayerProgressBar/>
        </div>
    )
}

export default PlayerControls