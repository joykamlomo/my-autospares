import Image from "next/image"
import { useRouter } from "next/router"

/* This example requires Tailwind CSS v2.0+ */
const features = [
    { name: 'for Make', description: 'BMW' },
    { name: 'Material', description: 'Steel ' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'lorem ipsum lorem ipsum lorem ipsum' },
    { name: 'Includes', description: 'lorem ipsum lorem ipsum lorem ipsum' },
    { name: 'Price', description: '$200 Piece, and $150 with minimum 10 orders' },
  ]
  
  function Productdetails() {
  const router = useRouter();


    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Specifications</h2>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellendus quos, maxime illum aut ea rem natus aspernatur dolorem voluptatem delectus similique deleniti reprehenderit, ullam, ipsa dolor. Unde, deleniti autem?
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image className="bg-gray-250 rounded-lg" src="/images/9.jpg" width="800" height="800"/>
          </div>
        </div>
        <div className="flex justify-center items-center px-4 py-12">
        <a onClick={()=> router.push("/cart")} className="inline-block bg-lime-500 hover:bg-gray-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-250" href="#">Add to cart</a>
      </div>
      </div>
    )
  }
  
export default Productdetails
