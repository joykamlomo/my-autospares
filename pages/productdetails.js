import Footer from '../components/Footer'
import Header from '../components/Header'
import Productdetails from '../components/Productdetails'

export default function Home() {
  return (
    <div>
     {/* insert a header */}
     <Header />
     <main className="bg-white">
       
     <Productdetails />
       
     </main>
     {/* insert a footer */}
     <Footer />
    </div>
  )
}
