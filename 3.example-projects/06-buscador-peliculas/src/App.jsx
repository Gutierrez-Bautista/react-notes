import './App.css'

import { Movies } from './components/Movies'

import { useMovies } from './hooks/useMovies'
import { useSearch } from "./hooks/useSearch";

import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it';

export default function App () {
  const [sort, setSort] = useState(false)
  const {search, updateSearch, error: searchError} = useSearch()
  const { movies, getMovies, loading, error: moviesError } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 500)
    , [getMovies])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    getMovies(search)
  }

  const handleSort = () => { setSort(!sort) }

  const handleChange = (evt) => {
    const newQuery = evt.target.value
    updateSearch(newQuery)
    debouncedGetMovies(newQuery)
  }

  return (
    <div className="page" onSubmit={handleSubmit}>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form onSubmit={handleSubmit} className="form">
          <input name="query" type="text" placeholder="Avengers, Star Wars..." onChange={handleChange} value={search} />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {searchError && <p style={{color: 'red'}}>{searchError}</p>}
      </header>

      <main>
        {
          loading ? 
            <p>Loading ...</p>
            : moviesError ?
              <p>{moviesError}</p>
              : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}