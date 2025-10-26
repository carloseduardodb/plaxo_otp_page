import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Screenshots } from './components/Screenshots'
import { Download } from './components/Download'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-plaxo-background">
      <Hero />
      <Features />
      <Screenshots />
      <Download />
      <Footer />
    </div>
  )
}
