function Welcome() {
    return (
        <section className="container max-w-7xl mx-auto px-6 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-2 justify-around">

                {/* https://images.unsplash.com/photo-1583955275036-fd20a9c185bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 */}
                <article className="p-10 h-80 max-w-3xl my-1 px-1 w-full rounded-l text-gray-100 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-2/3 lg:my-1 lg:px-1 lg:w-2/3 xl:my-2 xl:px-2 xl:w-2/3 bg-center bg-cover transform duration-500 hover:-translate-y-1 cursor-pointer" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')" }}>
                    <h1 className="mt-5 text-4xl text-gray-100 leading-snug  min-h-33">One small step for man one giant leap for mankind
                    </h1>
                    <div className="mt-2">
                        <span className="text-xl">Moonlanding - </span>
                        <span className="font-bold text-xl">Neil Armstrong</span>
                    </div>
                </article>

                {/*  flex flex-col-reverse p-10 h-80 max-w-xl w-full bg-orange-600 rounded-xl text-gray-100 transform duration-500 hover:-translate-y-1 cursor-pointer  */}
                <article className="flex flex-col-reverse p-10 h-80 max-w-1xl w-full bg-orange-600 rounded-l text-gray-100 my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/3 lg:my-1 lg:px-1 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3 transform duration-500 hover:-translate-y-1 cursor-pointer">
                    <div className="mt-24">
                        <span className="text-xl">Checkout - </span>
                        <span className="font-bold text-xl">New items</span>
                    </div>
                    <div className="mt-4 flex justify-evenly">
                        <span className="p-3 pl-0"></span>
                        <span className="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black ">New Arrivals</span>
                    </div>
                </article>

            </div>
        </section>
    )
}

export default Welcome;
