import { useRouter } from "next/router"

const callouts = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
    {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
      },
      {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
      },
  ]
  
  function CategoryPreview
  () {
    const router = useRouter();
    return (
      <section className="max-w-7xl mx-auto px-8 sm:px-4 lg:px-6 mb-20">
      {/* search & filtering */}
      <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-3 lg:-mx-4 xl:-mx-4">

        <div className="my-2 px-2 py-6 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2">
          <form className="w-full group relative">
              <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-lime-600 pointer-events-none group-focus-within:text-lime-500" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
              </svg>
              <input className="focus:ring-5 focus:ring-gray-600 focus:outline-none w-full text-sm leading-6 text-gray-900 placeholder-gray-900 rounded-md py-2 pl-10 ring-1 ring-gray-900 shadow-sm" type="text" aria-label="Filter projects" placeholder="Search for..." />
          </form>
        </div>

        <div className="my-2 px-2 py-6 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2">
        <select className="pl-6 pr-6 border-0 border-l border-gray-100 focus:border-gray-100 focus:ring-transparent focus:outline-none cursor-pointer" name="" id="">
          <option>All&nbsp;items</option>
          <option>Collection</option>
          <option>Option</option>
        </select>
        </div>

      </div>
      {/*  */}
      <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-3 md:-mx-3 lg:-mx-3 xl:-mx-3">

      <div className="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/3 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/4 xl:my-3 xl:px-3 xl:w-1/5">
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
          alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
          className="bg-gray-100 rounded-lg"
        />
      </div>

      <div className="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/3 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/4 xl:my-3 xl:px-3 xl:w-1/5">
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
          alt="Top down view of walnut card tray with embedded magnets and card groove."
          className="bg-gray-100 rounded-lg"
        />
      </div>

      <div className="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/3 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/4 xl:my-3 xl:px-3 xl:w-1/5">
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
          alt="Side of walnut card tray with card groove and recessed card area."
          className="bg-gray-100 rounded-lg"
        />
      </div>

      <div className="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/3 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/4 xl:my-3 xl:px-3 xl:w-1/5">
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
          alt="Walnut card tray filled with cards and card angled in dedicated groove."
          className="bg-gray-100 rounded-lg"
        />
      </div>

      <div className="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/3 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/4 xl:my-3 xl:px-3 xl:w-1/5">
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
          alt="Top down view of walnut card tray with embedded magnets and card groove."
          className="bg-gray-100 rounded-lg"
        />
      </div>

      <div className="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/3 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/4 xl:my-3 xl:px-3 xl:w-1/5">
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
          alt="Side of walnut card tray with card groove and recessed card area."
          className="bg-gray-100 rounded-lg"
        />
      </div>

      <div className="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/3 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/4 xl:my-3 xl:px-3 xl:w-1/5">
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
          alt="Walnut card tray filled with cards and card angled in dedicated groove."
          className="bg-gray-100 rounded-lg"
        />
      </div>

      </div>
      {/*  */}

      <div className="flex justify-center items-center px-4 py-12">
        <a onClick={()=> router.push("/products")} className="inline-block bg-lime-500 hover:bg-gray-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200" href="#">See more</a>
      </div>
    </section>
    )
  }
  

export default CategoryPreview
