import Header from '../components/Header'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Services from '../components/Services'
import Results from '../components/Results'
import FAQ from '../components/FAQ'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <Results />
      <Services />
      <FAQ />
      <Booking />
      <Footer />
    </main>
  )
}
