
import React from 'react'
import { albumCovers, albumsData, assets } from '../assets/assets'


const FancyVisualizer = ({ progress, setProgress, audioRef, changeSong, currentSongIndex, currentSongData, isFancyOpen, setFancy, isPlaying, setIsPlaying }) => {


    const [hovering, setHovering] = React.useState(false)
    const [isVinylOut, setIsVinylOut] = React.useState(false)
    const [,] = React.useState(false)

    function clickAway() {
        if (!hovering && !isVinylOut) {
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
        let warpStrengh = isVinylOut ? 2 : 10;

        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * warpStrengh
        const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * warpStrengh

        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current)
        }

        animationFrameRef.current = requestAnimationFrame(() => {
            if (coverRef.current) {
                coverRef.current.style.transform =
                    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isVinylOut ? 1 : 1.067})`
            }
        })
    }

    function handleMouseLeave() {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current)
        }

        if (coverRef.current) {
            coverRef.current.style.transform =
                'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
        }
    }

    // const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    // React.useEffect(() => {
    //     // 1. Define the function to update state on resize
    //     const handleResize = () => {
    //         setWindowWidth(window.innerWidth);
    //     };

    //     // 2. Add event listener when component mounts
    //     window.addEventListener('resize', handleResize);

    //     // 3. Clean up event listener when component unmounts
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []); // Empty dependency array ensures it runs once on mount


    return (
        <>

            {/* {isFancyOpen && ( */}
            <div>
                <div
                    style={{
                        "--album-color": albumsData[currentSongData.album_id].bgColor
                    }}
                    className={`${isVinylOut ? "overlay vinyl-out" : "overlay"} shrink-0 fixed inset-0 items-center flex justify-center z-30 ${isFancyOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} ${isVinylOut ? "backdrop-grayscale-0" : "bg-black/80 backdrop-grayscale-100"}`} onClick={() => clickAway()}>
                    <div id="prevFancy">

                        {/* Previous */}
                        <button id="prev" onClick={() => {
                            if (progress > 3) {
                                setProgress(0.1);
                                audioRef.current.currentTime = 0
                            } else {
                                changeSong(currentSongIndex - 1);
                            }
                        }}>
                            <img className={`w-16 z-50 cursor-pointer ${isVinylOut ? "opacity-50 hover:opacity-99 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-all duration-200`}
                                src={assets.icons.prev_icon} />
                        </button>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-10'>
                        <div ref={coverRef} className={` bg-white/0 p-10 rounded-lg group flex flex-row items-center transition-[transform] duration-500 ease-out`}
                            onMouseEnter={() => { handleMouseEnter(), setHovering(true) }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={() => { handleMouseLeave(), setHovering(false) }}
                        >

                            <img id="cover"
                                onClick={() => setIsVinylOut(!isVinylOut)}
                                className={`
                            cursor-pointer shrink-0 brightness-110 relative z-20 items-center w-160 h-160 rounded-lg ${isVinylOut ? "left-[10%]" : "left-[25%]"} transition-[left] duration-300`} src={currentSongData.image} alt="Album Cover"
                            />

                            <img id="vinyl" style={{
                                backgroundColor: albumsData[currentSongData.album_id].bgColor
                            }} className={`cursor-pointer shrink-0 relative flex z-10 w-150 h-150 rounded-full ${isVinylOut ? "right-[10%] pointer-events-auto" : "right-[25%] pointer-events-none"} animate-vinyl ${isPlaying ? '[animation-play-state:running]' : '[animation-play-state:paused]'}  transition-all duration-300`} src={albumCovers.vinyl} onClick={() => setIsPlaying(!isPlaying)} />
                        </div>
                        <p
                            style={{
                                color: isVinylOut ? albumsData[currentSongData.album_id].bgColor : "white"
                            }}
                            className={`text-xl font-medium cursor-pointer hover:underline z-67 ${isVinylOut ? "hover:duration-100 invert grayscale-100 opacity-5 hover:opacity-100 " : "text-white hover:text-white duration-1000"} transition-all  `} onClick={() => setFancy(false)}>Close</p>
                    </div>

                    <div id="nextFancy">

                        {/* Next */}

                        <button id="next" onClick={() => {
                            changeSong(currentSongIndex + 1)
                            audioRef.current.currentTime = 0
                        }}>
                            <img className={`w-16 z-50 cursor-pointer ${isVinylOut ? "opacity-50 hover:opacity-99 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-all duration-200`}
                                src={assets.icons.next_icon} />
                        </button>
                    </div>
                </div>
            </div>
            {/* )} */}
        </>
    )
}

export default FancyVisualizer
