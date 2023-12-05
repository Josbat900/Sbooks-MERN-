import React from 'react'
import { Routes,Route } from 'react-router-dom'
import home from './pages/home'
import createBooks from './pages/createBooks'
import showBooks from './pages/showBooks'
import editBooks from './pages/editBooks'
import deleteBooks from './pages/deleteBooks'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={home}/>
      <Route path='/books/create' element={createBooks}/>
      <Route path='/books/detais/:id' element={showBooks}/>
      <Route path='/books/edit/:id' element={editBooks}/>
      <Route path='/books/delete/:id' element={deleteBooks}/>
    </Routes>
  )
}

export default App
