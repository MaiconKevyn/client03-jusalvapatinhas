export type Species = 'dog' | 'cat'
export type PetSize = 'Pequeno' | 'Médio' | 'Grande'
export type PetStatus = 'seeking' | 'uncertain' | 'adopted'

export interface Pet {
  id: string
  name: string
  aliases: string[]
  species: Species
  sex: 'Fêmea' | 'Macho' | null
  age: string | null
  ageDate: string | null
  birthDate: string | null
  size: PetSize | null
  status: PetStatus
  statusNote: string | null
  image: string
  photos: { src: string; sourceUrl: string }[]
  personality: string
  story: string
  storyIsCaption: boolean
  traits: string[]
  care: string | null
  requirements: string | null
  sources: { url: string; date: string; kind: string }[]
  lastPublishedAt: string
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(
    new Date(`${date}T12:00:00Z`),
  )
}
