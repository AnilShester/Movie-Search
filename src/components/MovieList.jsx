import { React, useState, useEffect } from 'react'
import Card from './Card'
import { useParams } from 'react-router-dom'

function MovieList() {
  const apiKey = 'c42042df8fb810fbe92fc6b463eac35e'
  const [movieList, setMovieList] = useState([])
  const { type } = useParams()

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results))
  }, [type])

  return (
    <div className="pt-20 flex flex-col gap-5 bg-orange-200">
      <h1 className="text-center text-4xl font-semibold capitalize">
        {type} Movies:
      </h1>
      {movieList.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
