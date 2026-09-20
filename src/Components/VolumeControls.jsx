import React from 'react'
import { assets } from '../assets/assets';

const VolumeControls = ({ setVolume }) => {
    const [sliderValue, setSliderValue] = React.useState(50);
    const [hovering, setHovering] = React.useState(false)

    const [storedvolume, setStoredvolume] = React.useState(50)
    const [muted, setMuted] = React.useState(false)

    const handleChange = (event) => {
        setSliderValue(event.target.value);
        setVolume(Number(event.target.value))
    };

    function muteUnmute() {
        if (muted) {
            console.log("its muted so unmuting!")
            setMuted(false)
            setSliderValue(storedvolume)
            setVolume(storedvolume)
        } else {
            console.log("its NOT muted so muting!")
            setMuted(true)
            setStoredvolume(sliderValue)
            setSliderValue(0)
            setVolume(0)
        }
    }

    return (
        <div className={`flex flex-row align-middle items-center gap-5 w-full justify-center bg-debug/0`}>
            <button className='hover:cursor-pointer select-none' onClick={() => muteUnmute()}>
                <img className='w-8 shrink-0' src={!muted ? assets.icons.volume_icon : assets.icons.mute_icon} />
            </button>
            <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}

                style={{
                    background: `linear-gradient(to right, ${hovering ? "var(--color-p_0)" : "var(--color-abw_1)"} ${sliderValue}%, var(--color-fg_0) ${sliderValue}%)`
                }}
                className={`volumeBar w-full h-2 bg-fg_0 rounded-lg appearance-none cursor-pointer ${hovering ? "accent-p_0" : "accent-abw_1"} transition-all duration-200`}
                onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
                onChange={handleChange}
            />
        </div>
    )
}

export default VolumeControls
