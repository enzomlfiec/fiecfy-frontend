// eslint-disable-next-line no-unused-vars
import React from 'react'
import { albumsData, assets } from '../assets/assets'
import ELSD from '../scripts/ELSD'

// eslint-disable-next-line no-unused-vars
const SidebarElement = ({ collapsed, item, index, changeSong }) => {
    function chopText(input, limit, defaultbehaviour = true) {
        if (!defaultbehaviour) { return input } else {

            if (input.length > limit - 3) {
                return input.slice(0, limit - 3) + "..."
            } else {
                return input
            }
        }
    }

    return (
        <>
            {/* <p>{collapsed ? "COLLAPSED" : "NOT COLLAPSED"}</p> */}
            <div className={`group overflow-hidden flex flex-row truncate text-ellipsis w-[95%] pl-0.5 ${collapsed ? "mb-0" : "mb-0"} hover:bg-bg_03 cursor-pointer transition-all duration-100 rounded-xl`}
            >
                <div className='relative shrink-0 '
                    onClick={() => changeSong(albumsData[index].trackList[0])}
                >
                    <img src={albumsData[index].image} className='h-20 w-20 rounded-lg group-hover:bg-abw_0 group-hover:opacity-50 transition-all duration-100' />
                    <img src={assets.plays_icon} className='absolute inset-0 m-auto h-12 w-12 opacity-0 group-hover:opacity-100 transition-all duration-100' />
                </div>
                <div className={`flex flex-col gap-2 items-baseline justify-center ml-3 ${collapsed ? "opacity-0" : "opacity-100"} transition-all duration-200`}>
                    {
                        !collapsed &&
                        <>
                            <p className={`font-medium text-lg w-full overflow-hidden whitespace-nowrap truncate`}>{chopText(albumsData[index].name, 26)}</p>
                            <div className='flex flex-row gap-2'>
                                <p className={`text-fg_03`}>Playlist</p>
                                <p className={`text-fg_03`}>•</p>
                                <p className={`text-fg_03`}>{ELSD("r", "userName", "Username")}</p>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default SidebarElement
