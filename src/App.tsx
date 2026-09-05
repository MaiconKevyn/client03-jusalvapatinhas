import { useState } from 'react'
import { Header } from './components/Header'
import { Hero, MissionStrip } from './components/Hero'
import { AdoptionSection } from './components/AdoptionSection'
import {
  StorySection,
  AdoptionSteps,
  HelpSection,
  FaqSection,
} from './components/ContentSections'
import { Footer } from './components/Footer'
import { InstagramSection } from './components/InstagramSection'
import { PetDialog } from './components/PetDialog'
import { SupportDialog } from './components/SupportDialog'
import type { SupportKind } from './components/SupportDialog'
import type { Pet } from './data/pets'
import { useFavorites } from './hooks/useFavorites'

export default function App() {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null)
  const [supportKind, setSupportKind] = useState<SupportKind | null>(null)
  const { favorites, toggleFavorite } = useFavorites()

  return (
    <>
      <a className="skip-link" href="#main">
        Pular para o conteúdo
      </a>
      <Header onSupport={() => setSupportKind('donate')} />
      <main id="main">
        <Hero />
        <MissionStrip />
        <AdoptionSection
          favorites={favorites}
          onFavorite={toggleFavorite}
          onSelect={setSelectedPet}
        />
        <StorySection />
        <AdoptionSteps />
        <HelpSection onSupport={setSupportKind} />
        <InstagramSection />
        <FaqSection />
      </main>
      <Footer onSupport={() => setSupportKind('donate')} />
      {selectedPet && (
        <PetDialog
          pet={selectedPet}
          favorite={favorites.includes(selectedPet.id)}
          onFavorite={() => toggleFavorite(selectedPet.id)}
          onClose={() => setSelectedPet(null)}
        />
      )}
      {supportKind && (
        <SupportDialog
          initialKind={supportKind}
          onClose={() => setSupportKind(null)}
        />
      )}
    </>
  )
}
