import CategoryPreview from '../components/CategoryPreview'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import LogoCloud from '../components/LogoCloud'

export default function Home() {
  return (
    <div className="h-full">
      
      <Header />
      <Hero />

        <main className="bg-white">   
        <CategoryPreview />
        <LogoCloud />  
        </main>
      <Footer />


    </div>
  )
}
