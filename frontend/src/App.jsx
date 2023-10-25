import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateBook from './pages/CreateBook.jsx'
import ShowBook from './pages/ShowBook.jsx'
import DeleteBook from './pages/DeleteBook.jsx'
import EditBook from './pages/EditBook.jsx'
import Home from './pages/Home.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/books/create' element={<CreateBook/>} />
      <Route path='/books/details/:id' element={<ShowBook/>} />
      <Route path='/books/delete/:id' element={<DeleteBook/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/books/edit/:id' element={<EditBook/>} />
    </Routes>
  )
}

export default App
