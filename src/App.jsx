import React from 'react'
import Sidebar from './Components/Sidebar'
import PlayerBar from './Components/PlayerBar'

const App = () => {
  return (
    <div
    //  id="black-border" className='border-2 bg-black border-black m-2 p-0 h-screen w-screen'
    >
      <div className="h-screen bg-bg_0">
        <div className="h-[90%] flex">
          <Sidebar />
        </div>
        <PlayerBar />
      </div>
    </div>
  )
}

export default App