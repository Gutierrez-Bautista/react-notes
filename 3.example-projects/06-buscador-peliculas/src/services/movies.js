const API_KEY = '69a03327'

export const searchMovies = async ({ search }) => {
  if (search === '') return null
  let moviesJson

  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)

    moviesJson = await res.json()
  } catch {
    throw new Error('Error searching movies, retry later')
  }

  const error = moviesJson.Error

  if (error) {
    throw new Error(error)
  }

  const movies = moviesJson.Search

  return movies.map(m => ({
    id: m.imdbID,
    title: m.Title,
    year: m.Year,
    image: m.Poster
  }))
}
