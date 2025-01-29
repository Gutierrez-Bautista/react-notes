import { useState } from 'react'
import usePokemonInfo from '../hooks/usePokemonInfo'

export function PokemonCard ({ id }) {
  const [pokemonId, setPokemonId] = useState(id ?? Math.floor(Math.random() * 151 + 1))
  const { pokemonName, imgUrl, pokemonTypes } = usePokemonInfo({ pokemonId })

  const handleClick = () => {
    const newId = Math.floor(Math.random() * 151) + 1
    setPokemonId(newId)
  }

  return (
    <div className='card'>
      <div className="info">
        {pokemonName && <h3>{pokemonId}: {pokemonName}</h3>}
        {imgUrl && <img src={imgUrl} />}
        <div className="types-container">
          {pokemonTypes && pokemonTypes.map((typeInfo) => {
            return <span key={typeInfo.slot}>{typeInfo.type.name}</span>
          })}
        </div>
      </div>
      <button onClick={handleClick}>New Random Pokemon</button>
    </div>
  )
}
