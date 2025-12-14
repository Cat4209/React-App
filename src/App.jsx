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
import Logout from './components/Logout'
import Register from './components/Register'
import PrivateGuard from './components/PrivateGaurd'
import CreateMovie from './components/CreateMovie'

function App() {
  const [user, setUser] = useLocalStorage('user', null)

  return (
    <>
    <Header user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/movies/:_id' element={<MovieDetails />}/>
        <Route path='/register' element={<Register user={user} setUser={setUser} />}/>
        <Route path='/login' element={<Login user={user} setUser={setUser}/>}/>
        <Route element={<PrivateGuard user={user} />}>
            <Route path='/create' element={<CreateMovie user={user}/>}/>
            <Route path='/logout' element={<Logout user={user} setUser={setUser}/>}/>
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    <Footer />
    </>
  )
}

export default App
