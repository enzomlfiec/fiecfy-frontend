
import React from 'react'
import SidebarElement from './SidebarElement'

import { assets, images, albumsData } from '../assets/assets'

const Sidebar = ({ changeSong }) => {

  const [hoveringSidebarElements, setHoveringSidebarElements,] = React.useState(false)
  const [hovering, setHovering] = React.useState(false)
  const [hoveringInput, setHoveringInput] = React.useState(false)
  const [collapsed, setCollapsed] = React.useState(false)
  const [searching, setSearching] = React.useState(false)
  let searchInputRef = React.useRef(null);

  function focusOn() {
    if (collapsed) {
      setCollapsed(false)
      return
    } else {
      if (!hoveringInput) {
        if (searching) {
          setCollapsed(true)
          return
        }
      }
    }
    if (searchInputRef.current) {
      setSearching(true)
      searchInputRef.current.focus();
    }
  };

  function focusOff(colapse = true) {
    setCollapsed(colapse)
    setSearching(false)
  }

  React.useEffect(() => {
    if (!collapsed && searching && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [collapsed, searching])

  return (
    <>
      <div className={`h-full w-full justify-baseline items-baseline flex flex-col`}>
        <div className='overflow-hidden flex flex-row items-center justify-center gap-5 text-p_0 text-center font-bold text-3xl select-none relative left-5'>
          <a href="#" target="_blank" rel="noopener noreferrer" href="https://github.com/enzomlfiec">

          <img draggable={false} src={images.logo_icon} className='select-none shrink-0 mt-3 mb-1 w-16 h-16 hover:rotate-360 transition-all duration-500' />
          </a>
          <p className={`relative top-1.5 ${collapsed ? "w-0" : "w-21"} transition-all duration-300`}>Fiecfy</p>
        </div>

        <div className={`select-none min-w-25  h-full p-2 flex-col gap-2 hidden xl:flex overflow-hidden ${collapsed ? (hoveringSidebarElements ? "w-[5.8%] " : "w-[5%] ") + 'text-[rgba(255,255,255,0.1)]' : 'w-[20%] text-[rgba(255,255,255,1.0)]'} transition-all duration-300`}>
          {/* Home */}
          <div className="bg-bg_02 hover:bg-bg_03 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-around">
            <div className={`flex items-center gap-3 p-5 pl-7.5 ${collapsed ? '' : ''} `}>
              <img className="w-6 mr-2" src={assets.icons.home_icon} alt="Home" />
              <p className={`font-bold ${collapsed ? 'hidden' : 'block'}`}>Home</p>
            </div>
          </div>
          {/* Search */}
          <div className="bg-bg_02 hover:bg-bg_03 rounded-2xl flex flex-col justify-around cursor-pointer transition-all duration-300" onClick={() => focusOn()}>
            <div className='flex items-center gap-3 p-5 pl-7.5'>
              <img className="w-6" src={assets.icons.search_icon} alt="Search" />
              <p className={`font-bold p-2 ${collapsed ? 'hidden' : 'block'} ${!searching ? "w-full flex" : "w-0 hidden"}`}>Search</p>
              <input ref={searchInputRef} type="text" className={`bg-fg_01 rounded-full flex p-2 pl-5 ${searching ? "w-full visible" : "w-[0%] invisible"} font-medium ${collapsed ? 'hidden' : 'block'} transition-all duration-500`} onMouseEnter={() => setHoveringInput(true)} onMouseLeave={() => setHoveringInput(false)}></input>
            </div>
          </div>
          {/* Your Library */}
          <div className="bg-bg_02 h-[85%] rounded-xl overflow-hidden flex flex-col shrink-0">
            <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className={`cursor-pointer ${hovering ? 'pl-2' : 'pl-0'} hover:bg-bg_03 rounded-bl-xl rounded-tl transition-all duration-300`}>
              <div className={`rounded-xl flex items-center justify-between ${hovering ? 'pl-0' : 'pl-7.5'}`}>
                <div className={`flex items-center justify-between w-full pr-6 transition-all ${hovering ? 'gap-3' : 'gap-0'}`}>
                  <div className={` pt-4 pb-4 flex items-center gap-3 w-full justify-baseline ${hovering ? 'pr-0' : 'pr-0'}`} onClick={() => { focusOff(!collapsed) }}>
                    <button title="Collapse" className={`opacity-0 rotate-0 ${hovering ? 'cursor-pointer opacity-100 block' : 'hidden'} ${collapsed ? 'rotate-180' : ''} transition-all duration-300`}>
                      <img className={`w-6 shrink-0`} src={assets.icons.arrow_left} alt="Library" />
                    </button>
                    <img className="w-6 mix-blend-lighten mr-2" src={collapsed ? assets.icons.library_icon_alt : assets.icons.library_icon} alt="Library" />
                    <p className={`font-bold ${collapsed ? 'hidden' : 'block'}`}>Your Library</p>
                  </div>
                  <button title="Create Playlist" className={`cursor-pointer bg-fg_0 hover:bg-fg_02 ${collapsed ? 'hidden' : 'block'} ${hovering ? "opacity-100" : "opacity-0"} transition-all duration-300 rounded-full p-2`}>
                    <img className={`w-6 shrink-0`} src={assets.icons.plus_icon} alt="Settings" />
                  </button>
                </div>
              </div>
            </div>
            <div className={`playlist-scroll flex-1 min-h-0 ${hoveringSidebarElements ? "overflow-y-auto" : "overflow-y-hidden"}`}
              onMouseEnter={() => setHoveringSidebarElements(true)}
              onMouseLeave={() => setHoveringSidebarElements(false)}
            >
              <div className="flex flex-col items-start gap-2 mb-10 mt-2">
                {
                  // Array.from({ length: albumsData.length }).map(() => (
                    Array.from({ length: albumsData.length }).map((item, index) => (
                      <SidebarElement
                        key={index}
                        collapsed={collapsed}
                        item={item}
                        index={index}
                        changeSong={changeSong}
                      />
                    ))
                  // ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
export default Sidebar