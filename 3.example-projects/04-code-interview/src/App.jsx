import { useState, useEffect } from 'react'
import './App.css'

import { CAT_PREFIX_IMAGE_URL } from './constants'
import { getRandomFact } from './services/fact'

export function App () {
  const [fact, setFact] = useState()
  const [imgWords, setImgWords] = useState()

  // recuperar hecho
  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, []) // <-- no olvidar las dependencias ("[]")

  // para recuperar la imagen cuando tenemos una cita
  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]

    setImgWords(firstWord)
  }, [fact])

  const handleClick = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  return (
    <main>
      <h1>App de Gatitos</h1>
      <button onClick={handleClick}>
        Get New Fact
      </button>
      {fact && <p>{fact}</p>}
      {imgWords && <img src={`${CAT_PREFIX_IMAGE_URL}${imgWords}`} alt='Image extracted using the first word of fact' />}
    </main>
  )
}
