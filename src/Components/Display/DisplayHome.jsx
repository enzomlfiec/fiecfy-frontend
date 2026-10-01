import React from 'react'
import { Route } from 'react-router-dom'

function DisplayHome() {
    return (
        <Route path='/' element={<DisplayHome/>}/>
  )
}

export default DisplayHome