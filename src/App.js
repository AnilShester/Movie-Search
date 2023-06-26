import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MovieList from './components/MovieList'
import SearchResult from './components/SearchResult'
import Popular from './components/Popular'
import WatchList from './components/WatchList'

function App() {
  const [watchList, setWatchList] = useState([])

  const addtoWatchList = (watchedMovie) => {
    setWatchList((prev) => [...watchedMovie, prev])
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Routes>
        <Route
          index
          element={<Popular addtoWatchList={addtoWatchList} />}
        ></Route>
        <Route
          path="movie/:id"
          element={<h1>This is Movie detail page.</h1>}
        ></Route>
        <Route path="movies/:type" element={<MovieList />}></Route>
        <Route
          path="my_watchlist"
          element={<WatchList watchList={watchList} />}
        ></Route>
        <Route path="/:search_results" element={<SearchResult />}></Route>
        <Route path="*/" element={<h1>This is error page.</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
