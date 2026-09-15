import React from 'react'

const PlayerProgressBar = () => {
    var [progress, setProgress] = React.useState(10);
    var [hovering, setHovering] = React.useState(false)

    return (
        <div className='items-center'>
            <input type="range" min="0" max="100"
                style={{
                    background: `linear-gradient(to right, ${hovering ? 'var(--color-p_0)' : 'white'} ${progress}%, var(--color-fg_0) ${progress}%)`
                }}
                value={progress} className=" mt-3 progressBar w-[50vw] h-2 hover:h-4 rounded-full cursor-pointer duration-300"
                onChange={(e) => setProgress(e.target.value)}
                onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
                ></input>
        </div>
    )
}

export default PlayerProgressBar