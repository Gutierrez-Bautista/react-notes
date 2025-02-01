import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (evt) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: evt.target.value
    }))
  }

  const handleChangeCategory = (evt) => {
    setFilters(prevState => ({
      ...prevState,
      category: evt.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Minimum price:</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='500'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='beauty'>Beauty</option>
          <option value='fragrances'>Fragrances</option>
          <option value='furniture'>Furniture</option>
          <option value='groceries'>Groceries</option>
        </select>
      </div>
    </section>
  )
}
