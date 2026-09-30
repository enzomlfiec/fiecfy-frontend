import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'


function Display() {
  return (
    <div className="w-full m-2 px-6 pt-4 rounded bg-bg_02 text-white  overflow-auto lg:w-[75% lg:ml-0 ] rounded-2xl">
      <div id="buttons" className='flex flex-row gap-2'>
        <button
          type="button"
          aria-label="return"
          className="bg-black/50 cursor-pointer inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10 transition-all duration-100"
        >
          <ChevronLeft size={25} className="flex flex-row relative right-[2px]" aria-hidden="true" />
        </button>

        <button
          type="button"
          aria-label="back"
          className="bg-black/50 cursor-pointer inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10 transition-all duration-100"
        >
          <ChevronRight size={25} className="flex flex-row relative left-[2px]" aria-hidden="true" />
        </button>

      </div>
    </div>
  )
}

export default Display