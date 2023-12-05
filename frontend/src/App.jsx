import { Routes,Route } from 'react-router-dom'
import CreateBooks from './pages/createBooks'
import ShowBooks from './pages/showBooks'
import EditBooks from './pages/editBooks'
import DeleteBooks from './pages/deleteBooks'
import Home from './pages/home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBooks/>}/>
      <Route path='/books/details/:id' element={<ShowBooks/>}/>
      <Route path='/books/edit/:id' element={<EditBooks/>}/>
      <Route path='/books/delete/:id' element={<DeleteBooks/>}/>
    </Routes>
  )
}

export default App
