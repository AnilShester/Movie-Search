import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { IoIosAddCircle } from 'react-icons/io'

function Card({ movie, onGetWatchedMovie }) {
  return (
    <div className="flex gap-5 w-3/4 mx-auto bg-white">
      <img
        src={`https://image.tmdb.org/t/p/original${
          movie.poster_path && movie.poster_path
        }`}
        alt="poster"
        className="w-52"
      />
      <div className="flex flex-col py-5 gap-5">
        <div className="flex items-baseline gap-2">
          <p className="text-2xl font-semibold">{movie.title}</p>
          <AiFillStar className="text-yellow-600" />
          <p>{movie.vote_average}</p>
        </div>

        <div className="flex">
          {movie.genre_ids &&
            movie.genre_ids.map((genre) => <p key={genre}>{genre},</p>)}
        </div>
        <p className="text-gray-700">{movie.overview}</p>
        <div className="flex items-center gap-2 cursor-pointer">
          <IoIosAddCircle className="text-2xl" />
          <p>Add to Watchlist</p>
        </div>
      </div>
    </div>
  )
}

export default Card
