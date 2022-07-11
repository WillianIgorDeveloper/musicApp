import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './App'
import { Albuns } from './components/Albuns'
import { Artistas } from './components/Artistas'
import { Buscar } from './components/Buscar'
import { Curtidas } from './components/Curtidas'
import { Home } from './components/Home'
import { Playlists } from './components/Playlists'
import { Wellcome } from './components/Wellcome'

import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Wellcome />} />
          <Route path='/home' element={<Home />} />
          <Route path='/buscar' element={<Buscar />} />
          <Route path='/curtidas' element={<Curtidas />} />
          <Route path='/artistas' element={<Artistas />} />
          <Route path='/albuns' element={<Albuns />} />
          <Route path='/playlists' element={<Playlists />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
