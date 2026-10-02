import {
    ExternalLink
} from 'lucide-react'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import ELSD from '../../scripts/ELSD'

// eslint-disable-next-line no-unused-vars
export const ContextMenu = ({ position = { x: 0, y: 0 } }, setPosition) => {

    return (
        <div className={` text-abw_1 font-medium gap-2 absolute w-75 p-2 select-none border-fg_0/25 border rounded-md bg-bg_02 z-67 flex items-center justify-baseline flex-col overflow-hidden`}
            style={{
                left: position.x - (75*3.5),
                top: position.y
            }}
        >
            <span className='w-full py-2 hover:bg-bg_03 rounded px-2 flex justify-between flex-row'>
                Conta
                <ExternalLink
                    className="w-4 h-4 text-fg_03"
                />
            </span>

            <span className='w-full py-2 hover:bg-bg_03 rounded px-2 flex justify-between flex-row'>
                Perfil
            </span>

            <span className='w-full py-2 hover:bg-bg_03 rounded px-2 flex justify-between flex-row'>
                Suporte
                <ExternalLink
                    className="w-4 h-4 text-fg_03"
                />
            </span>

            <span className='w-full py-2 hover:bg-bg_03 rounded px-2 flex justify-between flex-row'>
                Configurações
            </span>

            <span className='w-full py-2 hover:bg-bg_03 rounded px-2 flex justify-between flex-row'>
                Sair de {ELSD.read("userName")}
            </span>
            {/* <span className='w-full py-2 hover:bg-bg_03 rounded px-2 flex justify-between flex-row'>
                Option 6
            </span> */}


        </div>
    )
}
