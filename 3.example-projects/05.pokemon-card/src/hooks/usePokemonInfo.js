import { useState, useEffect } from 'react'

export default function usePokemonInfo ({ pokemonId }) {
  const [pokemonName, setPokemonName] = useState()
  const [imgUrl, setImgUrl] = useState()
  const [pokemonTypes, setPokemonTypes] = useState([])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(res => res.json())
      .then(data => {
        setPokemonName(data.name)
        setImgUrl(data.sprites.front_default)
        setPokemonTypes(data.types)
      })
  }, [pokemonId])

  return { pokemonName, imgUrl, pokemonTypes }
}
