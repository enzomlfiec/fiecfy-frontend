// eslint-disable-next-line no-unused-vars
import React from 'react'
import { icons } from '../../assets/js/icons'
import { albumsData } from '../../assets/mock/musicMockedData'
import ELSD from '../../scripts/ELSD'

// eslint-disable-next-line no-unused-vars
const SidebarElement = ({ collapsed, item, index, changeSong }) => {

    return (
        <>
            {/* <p>{collapsed ? "COLLAPSED" : "NOT COLLAPSED"}</p> */}
            <div className={`group overflow-hidden flex flex-row truncate text-ellipsis w-[95%] pl-0.5 ${collapsed ? "mb-0" : "mb-0"} hover:bg-bg_03 cursor-pointer transition-all duration-100 rounded-xl`}
            >
                <div className='relative shrink-0 '
                    onClick={() => changeSong(albumsData[index].trackList[0])}
                >
                    <img src={albumsData[index].image} className='h-20 w-20 rounded-lg group-hover:bg-abw_0 group-hover:opacity-50 transition-all duration-100' />
                    <img src={icons.plays_icon} className='absolute inset-0 m-auto h-12 w-12 opacity-0 group-hover:opacity-100 transition-all duration-100' />
                </div>
                <div className={`flex min-w-0 flex-col gap-2 overflow-hidden items-baseline justify-center ml-3 ${collapsed ? "opacity-0" : "opacity-100"} transition-all duration-200`}>
                    {
                        !collapsed &&
                        <>
                            <p className={`relative font-medium text-lg w-full ${albumsData[index].name.length > 28 ? "hover:animate-marquee" : ""}`}>{albumsData[index].name}</p>
                            <div className='flex flex-row gap-2'>
                                <p className={`text-fg_03`}>Playlist</p>
                                <p className={`text-fg_03`}>•</p>
                                <p className={`text-fg_03`}>{ELSD.read("userName", "Nome de usuário")}</p>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default SidebarElement
