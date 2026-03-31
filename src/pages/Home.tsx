import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ComparisonSection from '../components/ComparisonSection'
import CTAOpenAccount from '../components/CTAOpenAccount'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden font-proxima-soft">
      <Navbar />
      <div className="relative overflow-x-hidden">
        <Hero />
        <ComparisonSection />
      </div>
      <CTAOpenAccount />
      <FAQ />
      <Footer />
    </main>
  )
}
