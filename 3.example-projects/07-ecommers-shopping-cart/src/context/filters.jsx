import { createContext, useState } from 'react'

// Crear contexto || Tambien es lo que vamos a consumir
export const FiltersContext = createContext()

// Crear provider
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
