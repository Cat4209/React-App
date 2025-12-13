import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'
import Movies from './components/Movies'
import NotFound from './components/NotFound'
import MovieDetails from './components/MovieDetails'
import Home from './components/Home'
import Login from './components/Login'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [user, setUser] = useLocalStorage('accessToken', null)

  return (
    <>
    <Header user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/movies/:_id' element={<MovieDetails />}/>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    <Footer />
    </>
  )
}

export default App
