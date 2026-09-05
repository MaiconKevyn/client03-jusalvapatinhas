import { useEffect, useState } from 'react'
import { pets } from '../data/pets'

const storageKey = 'jusalvapatinhas:favorites:v1'

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved: unknown = JSON.parse(
        localStorage.getItem(storageKey) ?? '[]',
      )
      return Array.isArray(saved)
        ? saved.filter(
            (id): id is string =>
              typeof id === 'string' && pets.some((pet) => pet.id === id),
          )
        : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(favorites))
    } catch {
      /* Favorites still work for this visit when storage is unavailable. */
    }
  }, [favorites])

  function toggleFavorite(id: string) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    )
  }

  return { favorites, toggleFavorite }
}
