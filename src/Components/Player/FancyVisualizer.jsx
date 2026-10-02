
import React from 'react'
import { images } from '../../assets/js/assets'
import { icons } from '../../assets/js/icons'
import { albumsData } from '../../assets/mock/musicMockedData'

const FancyVisualizer = ({
    progress,
    setProgress,
    audioRef,
    changeSong,
    currentSongIndex,
    currentSongData,
    isFancyOpen,
    setFancy,
    isPlaying,
    setIsPlaying,
}) => {
    const [hovering, setHovering] = React.useState(false)
    const [isVinylOut, setIsVinylOut] = React.useState(false)
    const [reactiveValue, setReactiveValue] = React.useState(100)
    const [smoothReactiveValue, setSmoothReactiveValue] = React.useState(50)

    const currentAlbum = albumsData.find(album => album.id === currentSongData.album_id)

    const audioContextRef = React.useRef(null)
    const analyserRef = React.useRef(null)
    const sourceRef = React.useRef(null)
    const coverRef = React.useRef(null)
    const rectRef = React.useRef(null)
    const animationFrameRef = React.useRef(null)
    const fancyContentRef = React.useRef(null)

    function hexToRgb(hex, brightness = 255, method = 'string') {
        hex = hex.replace('#', '')

        if (method === 'string') {
            return `rgb(${parseInt(hex.slice(0, 2), 16) * brightness / 255}, ${parseInt(hex.slice(2, 4), 16) * brightness / 255}, ${parseInt(hex.slice(4, 6), 16) * brightness / 255})`
        }

        if (method === 'object') {
            return {
                r: parseInt(hex.slice(0, 2), 16) * brightness / 255,
                g: parseInt(hex.slice(2, 4), 16) * brightness / 255,
                b: parseInt(hex.slice(4, 6), 16) * brightness / 255,
            }
        }
    }

    function checkIfDark(rgba) {
        const values = rgba.match(/[\d.]+/g)

        if (!values || values.length < 3) {
            return false
        }

        const [r, g, b] = values.map(Number)

        // Perceived brightness
        const brightness = Math.sqrt(
            0.299 * r ** 2 +
            0.587 * g ** 2 +
            0.114 * b ** 2
        )

        // Color saturation
        const max = Math.max(r, g, b)
        const min = Math.min(r, g, b)
        const saturation = max === 0 ? 0 : (max - min) / max

        // Boost brightness for highly saturated colors
        const adjustedBrightness = brightness + saturation * 40

        return adjustedBrightness <= 128
    }

    function cap(number, min, max) {
        return Math.min(Math.max(number, min), max)
    }

    const toggleFullscreen = () => {
        const isFullscreen = document.fullscreenElement !== null

        if (isFullscreen) {
            document.exitFullscreen()
        } else {
            document.documentElement.requestFullscreen()
        }
    }

    React.useEffect(() => {
        if (!audioRef.current) return

        const audio = audioRef.current

        if (!audioContextRef.current) {
            const audioContext = new AudioContext()
            const analyser = audioContext.createAnalyser()
            const source = audioContext.createMediaElementSource(audio)

            analyser.fftSize = 256

            source.connect(analyser)
            analyser.connect(audioContext.destination)

            audioContextRef.current = audioContext
            analyserRef.current = analyser
            sourceRef.current = source
        }

        const analyser = analyserRef.current
        const data = new Uint8Array(analyser.frequencyBinCount)
        let animationFrame

        function visualize() {
            analyser.getByteFrequencyData(data)

            let minCurReacValue
            let maxCurReacValue

            if (isPlaying) {
                minCurReacValue = 50
                maxCurReacValue = 150
            } else {
                minCurReacValue = 100
                maxCurReacValue = 100
            }

            const mids = data.slice(2, 12)
            const midAverage = mids.reduce((sum, value) => sum + value, 0) / mids.length
            const normalized = Math.max(0, (midAverage - 80) / (200 - 80))
            const curved = normalized ** 3
            const curReacValue = minCurReacValue + curved * (maxCurReacValue - minCurReacValue)

            let newReactiveValue

            if (!isPlaying) {
                newReactiveValue = 50
            } else {
                newReactiveValue = Math.min(
                    Math.max(
                        (curReacValue - minCurReacValue) /
                        (maxCurReacValue - minCurReacValue) * 100,
                        0
                    ),
                    100
                )
            }

            setTimeout(() => {
                if (isPlaying) {
                    setSmoothReactiveValue(newReactiveValue)
                } else {
                    setSmoothReactiveValue(prev => {
                        if (prev < maxCurReacValue) {
                            return cap(prev + 1, 0, 100)
                        }

                        return cap(maxCurReacValue, 0, 100)
                    })
                }
            }, 100)

            setReactiveValue(smoothReactiveValue)
            if (checkIfDark(hexToRgb(currentAlbum.bgColor)) && isPlaying && isVinylOut) {

                if (fancyContentRef.current) {
                    fancyContentRef.current.style.filter = `brightness(${curReacValue}%)`
                }
            } else {
                if (fancyContentRef.current) {
                    fancyContentRef.current.style.filter = `brightness(100%)`
                }
            }
            animationFrame = requestAnimationFrame(visualize)
        }

        visualize()

        return () => {
            cancelAnimationFrame(animationFrame)
        }
    }, [audioRef, isPlaying, reactiveValue, smoothReactiveValue, currentAlbum.bgColor, isVinylOut])

    React.useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === 'Escape' && isFancyOpen && !isVinylOut) {
                setFancy(false)
            }

            if (e.key === 'Escape' && isFancyOpen && isVinylOut) {
                setIsVinylOut(false)
            }

            if (e.key === 'F' && isFancyOpen && isVinylOut) {
                toggleFullscreen()
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isFancyOpen, setFancy, isVinylOut, setIsVinylOut])

    const clickAway = React.useCallback(() => {
        if (!hovering && !isVinylOut) {
            setFancy(false)
            setIsVinylOut(false)
        }
    }, [hovering, isVinylOut, setFancy, setIsVinylOut])

    function handleMouseEnter() {
        rectRef.current = coverRef.current.getBoundingClientRect()
    }

    function handleMouseMove(event) {
        if (!isFancyOpen || !rectRef.current) return

        const rect = rectRef.current
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        const warpStrength = isVinylOut ? 5 : 20

        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * warpStrength
        const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * warpStrength

        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current)
        }

        animationFrameRef.current = requestAnimationFrame(() => {
            if (coverRef.current) {
                coverRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isVinylOut ? 1 : 1.067})`
            }
        })
    }

    function handleMouseLeave() {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current)
        }

        if (coverRef.current) {
            coverRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
        }
    }

    React.useEffect(() => {
        const handleKeyUp = e => {
            if (e.key === 'Escape') {
                clickAway()
            }
            if (e.key === 'f' && isFancyOpen) {
                toggleFullscreen()
            }
        }

        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [clickAway, isFancyOpen])

    return (
        <>
            <div>
                <div
                    style={{
                        '--album-color': hexToRgb(
                            currentAlbum.bgColor,
                            cap(255 * (smoothReactiveValue / 100), 50, 255),
                            'string'
                        ),
                        background: isVinylOut
                            ? `linear-gradient(
            to bottom,
            rgb(0, 0, 0) ${isPlaying ? 100 - smoothReactiveValue : 100 - smoothReactiveValue}%,
            var(--album-color) 100%
        )`
                            : 'linear-gradient(to top, rgba(0, 0, 0, 0.4) 100%, var(--album-color) 100%)',
                    }}
                    className={`select-none ${isVinylOut ? 'overlay vinyl-out' : 'overlay'} shrink-0 fixed inset-0 items-center flex justify-center z-30 ${isFancyOpen ? 'opacity-100 pointer-events-auto select-auto' : 'opacity-0 pointer-events-none select-none'} ${isVinylOut ? 'backdrop-grayscale-100' : 'bg-black/50 backdrop-grayscale-100'} transition-all duration-1000`}
                    onClick={() => clickAway()}
                >
                    <div id="prevFancy">
                        <button
                            id="prev"
                            onClick={() => {
                                if (progress > 3) {
                                    setProgress(0.1)
                                    audioRef.current.currentTime = 0
                                } else {
                                    changeSong(currentSongIndex - 1)
                                }
                            }}
                        >
                            <img
                                className={`w-16 z-50 ${isVinylOut ? 'cursor-pointer opacity-50 hover:opacity-99 pointer-events-auto ' : 'opacity-0 pointer-events-none '} transition-all duration-200`}
                                src={icons.prev_icon}
                            />
                        </button>
                    </div>

                    <div ref={fancyContentRef} id="fancy-content" className="flex flex-col justify-center items-center gap-10">
                        <div
                            ref={coverRef}
                            className="bg-debug/0 p-10 rounded-lg group flex flex-row items-center transition-[transform] duration-500 ease-out"
                            onMouseEnter={() => {
                                handleMouseEnter()
                                setHovering(true)
                            }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={() => {
                                handleMouseLeave()
                                setHovering(false)
                            }}
                        >
                            <img
                                id="cover"
                                onClick={() => {
                                    setIsVinylOut(!isVinylOut)
                                    toggleFullscreen()
                                }}
                                className={`flex flex-row justify-center shrink-0 brightness-110 relative z-20 items-center w-160 h-160 rounded-lg ${isVinylOut ? 'cursor-none left-[10%]' : 'cursor-pointer left-[25%]'} transition-[left] duration-300`}
                                src={currentSongData.image}
                                alt="Capa do álbum"
                            />
                            <div>
                                <div className={`relative ${isVinylOut ? 'right-[25%] pointer-events-auto' : 'right-[50%] pointer-events-none'} transition-all duration-300`}>
                                    <img
                                        id="vinyl"
                                        style={{ backgroundColor: currentAlbum.bgColor }}
                                        draggable={false}
                                        className={`shrink-0 flex z-10 min-w-150 min-h-150 w-150 h-150 rounded-full animate-vinyl ${isPlaying ? '[animation-play-state:running]' : '[animation-play-state:paused]'} transition-all duration-300 cursor-none`}
                                        src={images.vinyl}
                                    />
                                    <button
                                        id="play-pause"
                                        className="m-0 p-0 bg-debug/0 w-full"
                                        onClick={() => {
                                            if (isVinylOut) {
                                                setProgress(audioRef.current.currentTime)

                                                if (!isPlaying) {
                                                    audioRef.current.play()
                                                    audioRef.current.currentTime = progress
                                                    setIsPlaying(true)
                                                } else {
                                                    setIsPlaying(false)
                                                    audioRef.current.pause()
                                                }
                                            }
                                        }}
                                    >
                                        <img
                                            src={!isPlaying ? icons.play_icon : icons.pause_icon}
                                            draggable={false}
                                            className="invert mix-blend-screen opacity-0 hover:opacity-100 w-32 h-32 absolute inset-0 left-[75%] top-[40%] cursor-pointer transition-all duration-300"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <p
                            style={{ color: isVinylOut ? currentAlbum.bgColor : 'white' }}
                            className={`${isVinylOut ? 'duration-800 opacity-99' : 'duration-300 opacity-0'} pr-5 pl-5 select-all text-4xl font-black z-67 text-shadow-black/50 ${isVinylOut ? 'hover:duration-100 invert grayscale-100 opacity-5 hover:opacity-100 ' : 'text-white hover:text-white duration-1000'} transition-all`}
                        >
                            {currentSongData.name}
                        </p>

                        <p
                            style={{ color: isVinylOut ? currentAlbum.bgColor : 'white' }}
                            className={`text-xl font-medium cursor-pointer hover:underline z-67 ${isVinylOut ? 'hover:duration-100 invert grayscale-100 opacity-5 hover:opacity-100 ' : 'text-white hover:text-white duration-1000'} transition-all`}
                            onClick={() => setFancy(false)}
                        >
                            Fechar
                        </p>
                    </div>

                    <div id="nextFancy">
                        <button
                            id="next"
                            onClick={() => {
                                changeSong(currentSongIndex + 1)
                                audioRef.current.currentTime = 0
                            }}
                        >
                            <img
                                className={`w-16 z-50 cursor-pointer ${isVinylOut ? 'opacity-50 hover:opacity-99 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-all duration-200`}
                                src={icons.next_icon}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FancyVisualizer
