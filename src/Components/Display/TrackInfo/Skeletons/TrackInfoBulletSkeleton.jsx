// import React from 'react'

function TrackInfoBullet() {
    return (
        <div className='border hover:bg-fg_03/50 border-white/20 border-l-white/0  backdrop-blur-3xl bg-fg_03/20 w-full h-15 rounded-xl flex justify-baseline items-center transition-all duration-300 cursor-pointer group'>
            <span className='bg-fg_03 aspect-square rounded-lg h-full mr-2 animate-pulse delay-500' />
            <div id="placeholder-text" className='flex flex-col gap-2 justify-baseline items-baseline w-full'>
                <div className='bg-fg_03 w-[70%] h-3 rounded-full animate-pulse' />
                <div className='bg-fg_03 w-[50%] h-3 rounded-full animate-pulse delay-500' />
            </div>
        </div>
    )
}

export default TrackInfoBullet
