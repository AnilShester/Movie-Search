import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'

function SearchResult() {
  const apiKey = 'c42042df8fb810fbe92fc6b463eac35e'
  const [movieResult, setMovieResult] = useState([])
  const { search_results } = useParams()

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search_results}&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovieResult(data.results))
  }, [apiKey, search_results])

  return (
    <>
      {movieResult.length > 0 ? (
        <div className="pt-20 flex flex-col gap-5 bg-orange-200">
          <h1 className="text-center text-4xl font-semibold capitalize">
            Search Results for: {search_results}
          </h1>
          {movieResult.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="bg-orange-200 h-full pt-20 text-center">
          <h1 className=" text-4xl font-semibold capitalize">
            Search Results for: {search_results}
          </h1>
          <div className="h-60">
            <h2 className="py-5 text-2xl">
              No results found for '{search_results}'
            </h2>
            <p>Make sure you typed the correct movie name. Please try again.</p>
          </div>
        </div>
      )}
    </>
  )
}

export default SearchResult
