import React from "react"
import { images } from "../../../assets/js/assets"


function TrackInfoBullet() {

    const [loading, setLoading] = React.useState(true)

    return (
        <div className='border hover:bg-fg_03/50 border-white/20 border-l-white/0 backdrop-blur-3xl bg-fg_03/20 w-full h-15 rounded-xl flex justify-baseline items-center transition-all duration-200 cursor-pointer group'>
            {loading ? (
                <span className='bg-fg_03 aspect-square rounded-lg animate-pulse h-full mr-2 delay-500' />
            ) : (
                <img
                    src={images.placeholder}
                    className='bg-black h-full w-15 aspect-square rounded-lg object-cover mr-2'
                />
            )}
            <div id="placeholder-text" className={`flex flex-col ${loading ? "gap-3" : ""} justify-baseline items-baseline  w-full min-w-0 overflow-hidden`}>
                <div className={`w-[90%] truncate flex items-center font-medium ${loading ? "rounded full animate-pulse bg-fg_03 h-3 text-black/0" : "bg-fg_03/0"}`}>Lorem, ipsum dolor sit amet</div>
                <div className={`w-[90%] truncate flex items-center font-medium ${loading ? "rounded full animate-pulse bg-fg_03 h-3 text-black/0" : "bg-fg_03/0"}`}>consectetur adipisicing elit.</div>
            </div>
        </div>
    )
}

export default TrackInfoBullet
