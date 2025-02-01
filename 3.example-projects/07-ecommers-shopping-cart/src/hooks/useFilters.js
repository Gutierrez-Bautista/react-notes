import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(p => {
      return (
        p.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          filters.category === p.category
        )
      )
    })
  }

  return { filters, filterProducts, setFilters }
}
