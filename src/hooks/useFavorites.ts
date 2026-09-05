import { useMemo, useSyncExternalStore } from 'react'
import { pets } from '../data/pets'

const storageKey = 'jusalvapatinhas:favorites:v1'
const changeEvent = 'jusalvapatinhas:favorites-changed'
let visitSnapshot = '[]'

function readSnapshot() {
  try {
    return localStorage.getItem(storageKey) ?? visitSnapshot
  } catch {
    return visitSnapshot
  }
}

function parseFavorites(snapshot: string): string[] {
  try {
    const saved: unknown = JSON.parse(snapshot)
    return Array.isArray(saved)
      ? saved.filter(
          (id): id is string =>
            typeof id === 'string' && pets.some((pet) => pet.id === id),
        )
      : []
  } catch {
    return []
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener('storage', onChange)
  window.addEventListener(changeEvent, onChange)
  return () => {
    window.removeEventListener('storage', onChange)
    window.removeEventListener(changeEvent, onChange)
  }
}

export function useFavorites() {
  // The server and first hydration render agree before browser storage is read.
  const snapshot = useSyncExternalStore(subscribe, readSnapshot, () => '[]')
  const favorites = useMemo(() => parseFavorites(snapshot), [snapshot])

  function toggleFavorite(id: string) {
    const current = parseFavorites(readSnapshot())
    visitSnapshot = JSON.stringify(
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    )
    try {
      localStorage.setItem(storageKey, visitSnapshot)
    } catch {
      /* Favorites still work for this visit when storage is unavailable. */
    }
    window.dispatchEvent(new Event(changeEvent))
  }

  return { favorites, toggleFavorite }
}
