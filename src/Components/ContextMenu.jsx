import React from 'react'

export const ContextMenu = (
    position = {
        x: 0,
        y: 0,
    },
) => {
    return (
        <div className={` text-white absolute top-${position.y} right-${position.x} p-20 bg-abw_0`}>
            Hello!
        </div>
    )
}
