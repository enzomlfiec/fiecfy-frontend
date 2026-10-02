// import React from 'react'

function TrackInfoCard() {
    return (
        <div className='shrink-0 
        rounded-xl border hover:bg-fg_03/50 border-white/20 border-l-white/0 bg-fg_03/20 backdrop-blur-3xl 
        max-w-60 w-full p-2
        flex flex-col justify-center items-center 
        transition-all duration-300 cursor-pointer group'>
            <span className='bg-fg_03 aspect-square rounded-lg min-w-55 h-full m-2 animate-pulse delay-500'/>
            <div id="placeholder-text" className='flex flex-col gap-2 justify-center items-baseline w-full'>
                <div className='bg-fg_03 w-[90%] h-3 rounded-full animate-pulse' />
                <div className='bg-fg_03 w-[90%] h-3 rounded-full animate-pulse' />
                <div className='bg-fg_03 w-[90%] h-3 rounded-full animate-pulse' />
                <div className='bg-fg_03 w-[50%] h-3 rounded-full animate-pulse delay-500' />
            </div>
        </div>
    )
}

export default TrackInfoCard
