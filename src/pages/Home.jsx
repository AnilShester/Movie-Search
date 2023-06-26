import { React, useState, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../components/Card'
// import ErrorText from '../components/ErrorText'

function Home() {
  const [movie, setMovie] = useState('')
  //   const [movieResult, setMovieResult] = useState([])
  const navigate = useNavigate()

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setMovie('')
    navigate(`/${movie}`)
  }

  const onHandleChange = (e) => {
    setMovie(e.target.value)
  }

  return (
    <div className="h-[500px] w-full">
      <img
        src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className=" h-full w-full object-cover object-center "
      />
      <h1 className="text-6xl text-white -mt-60 ml-20 drop-shadow-2xl">
        Find your Films
      </h1>

      <form
        onSubmit={onSubmitHandler}
        className="h-10 flex w-9/12 items-center mx-auto mt-40"
      >
        <AiOutlineSearch className="h-full pl-2 text-2xl bg-white" />
        <input
          type="text"
          placeholder="Seach movies"
          className=" h-full px-2 flex-1 "
          value={movie}
          onChange={onHandleChange}
        />

        <button className="px-10 h-full bg-blue-800 text-white">Search</button>
      </form>
    </div>
  )
}

export default Home
