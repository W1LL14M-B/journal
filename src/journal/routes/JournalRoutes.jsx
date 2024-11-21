import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const JournalRoutes = () => {
  return (
<Routes>
<Route path='/' element={ <JournalRoutes />} />
<Route path='/' element={ <Navigate to="/" />} />

</Routes>
  )
}

export default JournalRoutes