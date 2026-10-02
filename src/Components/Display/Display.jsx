/* eslint-disable no-unused-vars */
import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { images } from '../../assets/js/assets'
import ELSD from '../../scripts/ELSD'
import { albumsData } from '../../assets/mock/musicMockedData'
import TrackInfoBullet from './TrackInfo/Skeletons/TrackInfoBulletSkeleton'
import { ContextMenu } from '../ContextMenu/ContextMenu'
import TrackInfoCard from './TrackInfo/Skeletons/TrackInfoCardSkeleton'

function getTimeOfDay(hour = getTimeOfDay(new Date().getHours())) {
  if (hour >= 18 || hour < 6) return "Boa noite";
  if (hour < 12) return "Bom dia";
  return "Boa noite";
}

function Display({
  currentSongData,
  setCurrentSongData,
  currentSongIndex,
  setCurrentSongIndex }) {

  const currentAlbum = albumsData.find(album => album.id === currentSongData.album_id)

  const [contextMenuOpen, setContextMenuOpen] = React.useState(false)
  const [contextMenuPosition, setContextMenuPosition] = React.useState({
    x: 0, y: 0
  })

  function handleProfileClick() {
    const rect = profileRef.current.getBoundingClientRect()

    setContextMenuPosition({
      x: rect.left,
      y: rect.bottom
    })

    setContextMenuOpen(!contextMenuOpen)
  }

  const profileRef = React.useRef(null)
  const scrollRef = React.useRef(null)

  function scrollLeft() {
    scrollRef.current?.scrollBy({
      left: -1500,
      behavior: "smooth"
    })
  }

  function scrollRight() {
    scrollRef.current?.scrollBy({
      left: 1500,
      behavior: "smooth"
    })
  }

  return (
    <span
      style={{
        '--album-color': currentAlbum.bgColor
      }}
      className="flex flex-col min-h-0 w-full m-2 px-6 pt-4 bg-linear-to-b from-p_03 to-50% to-bg_02 rounded  text-white overflow-auto lg:w-[75% lg:ml-0 ] rounded-2xl" >
      <header className='flex flex-row justify-between items-center  mb-5'>
        <div id="buttons" className='flex flex-row gap-2'>

          <button type="button" aria-label="Voltar"
            className="bg-black/50 cursor-pointer inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10 transition-all duration-100">
            <ChevronLeft size={25} className="flex flex-row relative right-0.5" aria-hidden="true" />
          </button>

          <button type="button" aria-label="Avançar"
            className="bg-black/50 cursor-pointer inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10 transition-all duration-100">
            <ChevronRight size={25} className="flex flex-row relative left-0.5" aria-hidden="true" />
          </button>

        </div>
        <img className="w-10 h-10 rounded-full bg-bg_02 border-fg_0/36 border-double hover:border-solid border-6 hover:border-abw_1/25 hover:bg-abw_0/0 transition-all duration-300 cursor-pointer" src={images.defaultPFP} alt="Foto de perfil"
          ref={profileRef}
          onClick={handleProfileClick}
        />
        {contextMenuOpen && (
          <ContextMenu
            position={contextMenuPosition}
          />
        )}
      </header>
      <main className='overflow-y-auto min-h-0 square-scroll'>
        <h1 className='text-3xl font-bold mb-5'>
          {getTimeOfDay()}, {ELSD.read("userName")}
        </h1>

        <div className='grid grid-cols-2 xl:grid-cols-4 gap-4 mb-5'>
          {[...Array(8)].map((_, i) => (
            <TrackInfoBullet key={i} />
          ))}
        </div>

        <h2 className='text-2xl font-bold mb-5'>
          Recomendados para você
        </h2>

        <div className='flex flex-row relative justify-center items-center'>
          <button
            onClick={scrollLeft}
            className='absolute left-0 flex z-1 bg-black/80 opacity-50 hover:opacity-100 cursor-pointer h-12 w-12 justify-center items-center rounded-full top-[50%] '>
            <ChevronLeft />
          </button>
          <div
            ref={scrollRef}
            className="w-full overflow-x-auto scroll-smooth square-scroll mb-5 py-2">
            <div className="flex flex-row gap-4 w-max">
              {[...Array(100)].map((_, i) => (
                <TrackInfoCard key={i} />
              ))}
            </div>
          </div>
          <button
            onClick={scrollRight}
            className='absolute right-0 flex z-1 bg-black/80 opacity-50 hover:opacity-100 cursor-pointer h-12 w-12 justify-center items-center rounded-full top-[50%] '>
            <ChevronRight />
          </button>
        </div>

        <div className='flex flex-row relative justify-center items-center'>
          <button
            onClick={scrollLeft}
            className='absolute left-0 flex z-1 bg-black/80 opacity-50 hover:opacity-100 cursor-pointer h-12 w-12 justify-center items-center rounded-full top-[50%] '>
            <ChevronLeft />
          </button>
          <div
            ref={scrollRef}
            className="w-full overflow-x-auto scroll-smooth square-scroll mb-5 py-2">
            <div className="flex flex-row gap-4 w-max">
              {[...Array(100)].map((_, i) => (
                <TrackInfoCard key={i} />
              ))}
            </div>
          </div>
          <button
            onClick={scrollRight}
            className='absolute right-0 flex z-1 bg-black/80 opacity-50 hover:opacity-100 cursor-pointer h-12 w-12 justify-center items-center rounded-full top-[50%] '>
            <ChevronRight />
          </button>
        </div>

        <div className='flex flex-row relative justify-center items-center'>
          <button
            onClick={scrollLeft}
            className='absolute left-0 flex z-1 bg-black/80 opacity-50 hover:opacity-100 cursor-pointer h-12 w-12 justify-center items-center rounded-full top-[50%] '>
            <ChevronLeft />
          </button>
          <div
            ref={scrollRef}
            className="w-full overflow-x-auto scroll-smooth square-scroll mb-5 py-2">
            <div className="flex flex-row gap-4 w-max">
              {[...Array(100)].map((_, i) => (
                <TrackInfoCard key={i} />
              ))}
            </div>
          </div>
          <button
            onClick={scrollRight}
            className='absolute right-0 flex z-1 bg-black/80 opacity-50 hover:opacity-100 cursor-pointer h-12 w-12 justify-center items-center rounded-full top-[50%] '>
            <ChevronRight />
          </button>
        </div>
      </main>
    </span >
  )
}

export default Display