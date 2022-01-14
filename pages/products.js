import BlankArea from '../components/BlankArea'
import CategoryPreview from '../components/CategoryPreview'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import LogoCloud from '../components/LogoCloud'
// import LogoClouds from '../components/LogoClouds'
import Welcome from '../components/Welcome'

export default function Home() {
  return (
    <div className="h-full">
      
      <Header />

      <BlankArea />

        <main className="bg-white">   
        <CategoryPreview />
        </main>
       <Footer />


    </div>
  )
}
