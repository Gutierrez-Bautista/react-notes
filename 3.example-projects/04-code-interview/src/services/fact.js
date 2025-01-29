import { CATS_FACTS_ENDPOINT } from '../constants'

export const getRandomFact = async () => {
  const res = await fetch(CATS_FACTS_ENDPOINT)
  const data = await res.json()
  const { fact } = data
  return fact
}
