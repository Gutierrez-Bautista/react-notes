import { useState, useEffect } from 'react'
import './App.css'

import { CATS_FACTS_ENDPOINT, CAT_PREFIX_IMAGE_URL } from './constants'

export function App () {
  const [fact, setFact] = useState()
  const [imgWords, setImgWords] = useState()

  // recuperar hecho
  useEffect(() => {
    fetch(CATS_FACTS_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, []) // <-- no olvidar las dependencias ("[]")

  // para recuperar la imagen cuando tenemos una cita
  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]

    setImgWords(firstWord)
  }, [fact])

  return (
    <main>
      <h1>App de Gatitos</h1>
      {fact && <p>{fact}</p>}
      {imgWords && <img src={`${CAT_PREFIX_IMAGE_URL}${imgWords}`} alt='Image extracted using the first word of fact' />}
    </main>
  )
}
