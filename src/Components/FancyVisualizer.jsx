
import React from 'react'
import { images, albumsData, assets } from '../assets/assets'


const FancyVisualizer = ({ progress, setProgress, audioRef, changeSong, currentSongIndex, currentSongData, isFancyOpen, setFancy, isPlaying, setIsPlaying }) => {

    const [hovering, setHovering] = React.useState(false)
    const [isVinylOut, setIsVinylOut] = React.useState(false)
    // const [,] = React.useState(false)

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
        let warpStrengh = isVinylOut ? 5 : 20;

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

    React.useEffect(() => {
        const handleKeyUp = (e) => {
            if (e.key === "Escape") {
                clickAway();
            }
        };

        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [clickAway]);

    return (
        <>

            {/* {isFancyOpen && ( */}
            <div>
                <div
                    style={{
                        "--album-color": albumsData[currentSongData.album_id].bgColor
                    }}
                    className={`select-none ${isVinylOut ? "overlay vinyl-out" : "overlay"} shrink-0 fixed inset-0 items-center flex justify-center z-30 ${isFancyOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} ${isVinylOut ? "backdrop-grayscale-100" : "bg-black/80 backdrop-grayscale-100"}`}
                    onClick={() => clickAway()}
                >
                    <div id="prevFancy">

                        {/* Previous */}
                        <button id="prev" onClick={() => {
                            if (progress > 3) {
                                // changeSong("update")
                                setProgress(0.1);
                                audioRef.current.currentTime = 0
                            } else {
                                changeSong(currentSongIndex - 1);
                            }
                        }}>
                            <img className={`w-16 z-50 ${isVinylOut ? "cursor-pointer opacity-50 hover:opacity-99 pointer-events-auto " : "opacity-0 pointer-events-none "} transition-all duration-200`}
                                src={assets.icons.prev_icon} />
                        </button>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-10'>
                        <div ref={coverRef} className={` bg-debug/0 p-10 rounded-lg group flex flex-row items-center transition-[transform] duration-500 ease-out`}
                            onMouseEnter={() => { handleMouseEnter(), setHovering(true) }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={() => { handleMouseLeave(), setHovering(false) }}
                        >

                            <img id="cover"
                                onClick={() => setIsVinylOut(!isVinylOut)}
                                className={`flex flex-row justify-center
                            shrink-0 brightness-110 relative z-20 items-center w-160 h-160 rounded-lg ${isVinylOut ? "cursor-none left-[10%]" : "cursor-pointer left-[25%]"} transition-[left] duration-300`} src={currentSongData.image} alt="Album Cover"
                            />
                            <div>
                                <div className={`relative ${isVinylOut ? "right-[25%] pointer-events-auto" : "right-[50%] pointer-events-none"} transition-all duration-300`}>
                                    <img id="vinyl" style={{
                                        backgroundColor: albumsData[currentSongData.album_id].bgColor
                                    }} draggable={false} className={`shrink-0 flex z-10 w-150 h-150 rounded-full animate-vinyl ${isPlaying ? '[animation-play-state:running]' : '[animation-play-state:paused]'}  transition-all duration-300 cursor-none `} src={images.vinyl}
                                    />
                                    <button id="play-pause" className='m-0 p-0 bg-debug/0 w-full' onClick={() => {
                                        if (isVinylOut) {
                                            setProgress(audioRef.current.currentTime)
                                            if (!isPlaying) {
                                                audioRef.current.play();
                                                audioRef.current.currentTime = progress;
                                                setIsPlaying(true)
                                            } else {
                                                setIsPlaying(false)
                                                audioRef.current.pause();
                                            }
                                        }
                                    }}
                                    >
                                        <img src={!isPlaying ? assets.play_icon : assets.pause_icon} draggable={false} className='
                                        invert
                                        mix-blend-screen
                                        opacity-0
                                        hover:opacity-100
                                        w-32 h-32 absolute inset-0 left-[75%] top-[37%] cursor-pointer
                                        transition-all duration-300' />
                                    </button>
                                </div>

                            </div>
                        </div>
                        <p
                            style={{
                                color: isVinylOut ? albumsData[currentSongData.album_id].bgColor : "white"
                            }}
                            className={`${isVinylOut ? "duration-800 opacity-99" : "duration-300 opacity-0"} select-all text-4xl font-extrabold z-67 ${isVinylOut ? "hover:duration-100 invert grayscale-100 opacity-5 hover:opacity-100 " : "text-white hover:text-white duration-1000"} transition-all`}>{currentSongData.name}
                        </p>

                        <p
                            style={{
                                color: isVinylOut ? albumsData[currentSongData.album_id].bgColor : "white"
                            }}
                            className={`text-xl font-medium cursor-pointer hover:underline z-67 ${isVinylOut ? "hover:duration-100 invert grayscale-100 opacity-5 hover:opacity-100 " : "text-white hover:text-white duration-1000"} transition-all  `} onClick={() => setFancy(false)}>Close
                        </p>

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
