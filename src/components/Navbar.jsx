import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="h-20 flex items-center p-10 gap-20 bg-orange-300">
      <Link to="/"> LOGO </Link>
      <Link to="/movies/popular">Popular</Link>
      <Link to="/movies/top_rated">Top Rated</Link>
      <Link to="/movies/upcoming">Upcoming</Link>
      <Link to="/my_watchlist">My wastchlist</Link>
    </div>
  )
}

export default Navbar
