import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import StorySection from '@/components/StorySection'
import FashionSection from '@/components/FashionSection'
import VisitSection from '@/components/VisitSection'
import Footer from '@/components/Footer'
import MobileActions from '@/components/MobileActions'
import StitchObserver from '@/components/StitchObserver'

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <StorySection />
        <FashionSection />
        <VisitSection />
      </main>
      <Footer />
      <MobileActions />
      <StitchObserver />
    </>
  )
}
