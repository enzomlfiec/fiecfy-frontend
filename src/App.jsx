import React from 'react'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'

const App = () => {
  return (
    <div className="h-screen bg-bg_0">
      <div className="h-[90%] flex">
        <Sidebar />
      </div>
        <Player />
    </div>
  )
}

export default App