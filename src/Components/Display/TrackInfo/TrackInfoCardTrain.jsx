import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import TrackInfoCard from './TrackInfoCard'

function TrackInfoCardTrain() {

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
        <div className='flex flex-row relative justify-center items-center'>
            <button onClick={scrollLeft}
                className='absolute left-0 flex z-1 bg-black/80 opacity-50 hover:opacity-100 cursor-pointer h-12 w-12 justify-center items-center rounded-full top-[50%] '>
                <ChevronLeft />
            </button>
            <div ref={scrollRef} className="w-full overflow-x-auto scroll-smooth square-scroll mb-5 py-2">
                <div className="flex flex-row gap-4 w-max">
                    {[...Array(20)].map((_, i) => (
                        <TrackInfoCard key={i} />
                    ))}
                </div>
            </div>
            <button onClick={scrollRight}
                className='absolute right-0 flex z-1 bg-black/80 opacity-50 hover:opacity-100 cursor-pointer h-12 w-12 justify-center items-center rounded-full top-[50%] '>
                <ChevronRight />
            </button>
        </div>
    )
}

export default TrackInfoCardTrain
