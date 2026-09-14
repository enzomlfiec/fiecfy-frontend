
import React from 'react'

import { assets } from '../assets/assets'

export const Sidebar = () => {

  var [hovering, setHovering] = React.useState(false)
  var [collapsed, setCollapsed] = React.useState(false)

  return (
    <div className={`m-2 select-none min-w-25  h-full p-2 flex-col gap-2 hidden lg:flex overflow-hidden ${collapsed ? 'w-[5%] text-[rgba(255,255,255,0.1)]' : 'w-[25%] text-[rgba(255,255,255,1.0)]'} transition-all duration-300`}>
      <div className="bg-bg_02 h-[15%] rounded flex flex-col justify-around">
        {/* Home */}
        <div className="cursor-pointer hover:bg-bg_03 transition-all duration-300 rounded-2xl">
          <div className={`flex items-center gap-3 p-5 pl-7.5 ${collapsed ? '' : ''} `}>
            <img className="w-6" src={assets.icons.home_icon} alt="Home" />
            <p className={`font-bold ${collapsed ? 'hidden' : 'block'}`}>Home</p>
          </div>
        </div>
        {/* Search */}
        <div className="cursor-pointer hover:bg-bg_03 transition-all duration-300 rounded-2xl">
          <div className='flex items-center gap-3 p-5 pl-7.5'>
            <img className="w-6" src={assets.icons.search_icon} alt="Search" />
            <p className={`font-bold ${collapsed ? 'hidden' : 'block'}`}>Search</p>
          </div>
        </div>
      </div>
      <div className="bg-bg_02 h-[85%] rounded">
        <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className={`cursor-pointer ${hovering ? 'pl-2' : 'pl-0'} hover:bg-bg_03 transition-all duration-300 rounded-2xl`}>
          <div className={`flex items-center justify-between ${hovering ? 'pl-0' : 'pl-7.5'}`}>
            <div className={`flex items-center justify-between w-full pr-6 transition-all ${hovering ? 'gap-3' : 'gap-0'}`}>
              <div className={` pt-4 pb-4 flex items-center gap-3 w-full justify-baseline ${hovering ? 'pr-0' : 'pr-0'}`} onClick={() => setCollapsed(!collapsed)}>
                <button title="Collapse" className={`opacity-0 rotate-0 ${hovering ? 'cursor-pointer opacity-100 block' : 'hidden'} ${collapsed ? 'rotate-180' : ''} transition-all duration-300`}>
                  <img className={`w-6 shrink-0`} src={assets.icons.arrow_left} alt="Library" />
                </button>
                <img className="w-6 mix-blend-lighten" src={collapsed ? assets.icons.library_icon_alt : assets.icons.library_icon} alt="Library" />
                <p className={`font-bold ${collapsed ? 'hidden' : 'block'}`}>Your Library</p>
              </div>
              <button title="Create Playlist" className={`cursor-pointer bg-fg_0 hover:bg-fg_02 ${collapsed ? 'hidden' : 'block'} transition-all duration-300 rounded-full p-2`}>
                <img className={`w-6 shrink-0`} src={assets.icons.plus_icon} alt="Settings" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}
export default Sidebar