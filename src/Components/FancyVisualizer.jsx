
import React from 'react'
import { albumCovers, albumsData } from '../assets/assets'


const FancyVisualizer = ({ CurrentSongData, isFancyOpen, setFancy, isPlaying, setIsPlaying }) => {

    const [hovering, setHovering] = React.useState(false)
    const [isVinylOut, setIsVinylOut] = React.useState(false)

    function clickAway() {
        if (!hovering) {
            setFancy(false)
            setIsVinylOut(false)
        }
    }

    const coverRef = React.useRef(null)
    const rectRef = React.useRef(null)
    const animationFrameRef = React.useRef(null) // Holds the active frame loop

    function handleMouseEnter() {
        rectRef.current = coverRef.current.getBoundingClientRect()
    }

    function handleMouseMove(event) {
        if (!isFancyOpen || !rectRef.current) return

        const rect = rectRef.current
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top

        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10
        const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 10

        // Cancel any pending paint tasks so they don't pile up
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current)
        }

        // Schedule the CSS update strictly on the browser's next redraw frame
        animationFrameRef.current = requestAnimationFrame(() => {
            if (coverRef.current) {
                coverRef.current.style.transform =
                    `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
            }
        })
    }

    function handleMouseLeave() {
        // Clean up any remaining scheduled animation frames
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current)
        }

        if (coverRef.current) {
            coverRef.current.style.transform =
                'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
        }
    }


    return (
        <div
            style={{
                "--album-color": albumsData[CurrentSongData.album_id].bgColor
            }}
            className={`${isVinylOut ? "overlay vinyl-out" : "overlay"} shrink-0 bg-abw_0/50 fixed inset-0 items-center flex justify-center opacity-0 z-50 ${isFancyOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-all duration-300`} onClick={() => clickAway()}>
            <div className='flex flex-col justify-center items-center gap-10'>
                <div ref={coverRef} className=" bg-abw_0/0 p-6 rounded-lg group flex flex-row items-center transition-[transform] duration-500 ease-out"
                    onMouseEnter={() => { handleMouseEnter(), setHovering(true) }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => { handleMouseLeave(), setHovering(false) }}
                >

                    <img id="cover"
                        onClick={() => setIsVinylOut(!isVinylOut)}
                        className={`
                        cursor-pointer shrink-0 brightness-110 relative z-20 items-center w-160 h-160 rounded-lg ${isVinylOut ? "left-[10%]" : "left-[25%]"} transition-[left] duration-300`} src={CurrentSongData.image} alt="Album Cover"
                    />

                    <img id="vinyl" style={{
                        backgroundColor: albumsData[CurrentSongData.album_id].bgColor
                    }} className={`cursor-pointer shrink-0 relative flex z-10 w-150 h-150 rounded-full ${isVinylOut ? "right-[0%] pointer-events-auto" : "right-[25%] pointer-events-none"} animate-vinyl ${isPlaying ? '[animation-play-state:running]' : '[animation-play-state:paused]'}  transition-all duration-300`} src={albumCovers.vinyl} onClick={() => setIsPlaying(!isPlaying)} />
                </div>
                <p 
                style={{
                    color: isVinylOut ?  albumsData[CurrentSongData.album_id].bgColor:"white"
                }}
                className={` text-xl font-medium cursor-pointer hover:underline z-67 ${isVinylOut? "invert grayscale-100" : "text-white hover:text-white"} transition-all duration-700 `} onClick={() => setFancy(false)}>Close</p>
            </div>
        </div>
    )
}

export default FancyVisualizer
