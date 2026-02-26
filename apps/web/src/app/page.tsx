import Topbar from '@/components/landing/Topbar'
import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'
import FeaturesGrid from '@/components/landing/FeaturesGrid'
import OpsSection from '@/components/landing/OpsSection'
import HierarchySection from '@/components/landing/HierarchySection'
import CtaBanner from '@/components/landing/CtaBanner'
import Footer from '@/components/landing/Footer'

export default function LandingPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <OpsSection />
        <HierarchySection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
