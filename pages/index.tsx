import Header from '../components/Header'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Results from '../components/Results'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Booking from '../components/Booking'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Results />
        <FAQ />
        <div id="book-demo">
          <Booking />
        </div>
      </main>
      <Footer />
    </div>
  );
}
