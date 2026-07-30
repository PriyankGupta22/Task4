import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedSection from './components/FeaturedSection'
import LocationSection from './components/LocationSection'
import PropertySection from './components/Properties'
import FAQSection from './components/FAQSection'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer'

const HomePage = () => {
  return (
    <main className="w-full">
      <Hero />
      <FeaturedSection />
      <LocationSection />
      <PropertySection />
      <FAQSection />
      <TestimonialSection />
      <Footer />
    </main>
  )
}

const PageShell = ({ title, description }) => {
  return (
    <main className="w-full">
      <section className="w-full px-6 py-28 sm:py-32 bg-[#f7f7f2]">
        <div className="w-full">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">EverGreen</p>
          <h1 className="text-5xl sm:text-6xl font-semibold leading-tight max-w-4xl">{title}</h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-8">{description}</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about"
          element={
            <PageShell
              title="A full-width real estate experience built for modern buyers."
              description="Learn how EverGreen helps people discover premium homes, compare neighborhoods and move forward with confidence."
            />
          }
        />
        <Route
          path="/properties"
          element={
            <PageShell
              title="Browse properties with a clean, full-width layout."
              description="Explore featured homes, curated listings and location details without the layout feeling boxed in."
            />
          }
        />
        <Route
          path="/contact"
          element={
            <PageShell
              title="Talk to the team and start your search."
              description="Reach out for property guidance, booking help or investment advice and we will get back to you quickly."
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
