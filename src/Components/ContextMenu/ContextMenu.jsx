import React from 'react'

export const ContextMenu = () => {
    const [mousePosition, setMousePosition] = React.useState({
        x: 0,
        y: 0
    })

    React.useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY
            })
        }
    }, [])

    return (
        <div className={` text-white absolute w-20 h-50 select-none bg-abw_0 z-67 flex items-center justify-baseline flex-col overflow-hidden`}
            style={{
                left: mousePosition.x,
                top: mousePosition.y
            }}
        >
            <span className='border-white border-b w-full'>
                Option1
            </span>
            <span className='border-white border-b w-full'>
                Option1
            </span>
            <span className='border-white border-b w-full'>
                Option1
            </span>

        </div>
    )
}
