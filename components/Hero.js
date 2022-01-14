import { useRouter } from 'next/router'

function Hero() {
const router = useRouter();

    return (
        <section className="py-3 bg-white overflow-x-hidden">
          <div className="container px-4 mx-auto relative">
            <div className="absolute inset-0 bg-lime-300 my-8 -ml-4 -mr-4"></div>
            <div className="relative bg-lime-400 overflow-hidden">
              <img className="absolute top-0 left-0 xl:-ml-40 w-full h-full" src="yofte-assets/elements/cta-lines.svg" alt="" />
              <div className="relative flex flex-wrap items-center">
                <div className="w-full md:w-4/6 p-10 lg:pl-40">
                  <span className="text-xl md:text-2xl text-white">New Products</span>
                  <h2 className="mt-4 mb-14 text-4xl md:text-5xl font-bold font-heading text-white">Check our new collection</h2>
                  <a onClick={()=> router.push("/products")} className="inline-block bg-gray-500 hover:bg-gray-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200" href="#">More</a>
                </div>
                <img className="relative ml-auto w-full md:w-2/6 h-96 object-cover" src="https://images.unsplash.com/photo-1522598140461-ec9911e01c53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" />
              </div>
            </div>
          </div>
        </section>
    )
}

export default Hero
