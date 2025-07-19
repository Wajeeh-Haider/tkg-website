import React from 'react'

const Blogs = () => {
  return (
    <div>
        <section className="bg-white dark:bg-cream">
  <div className=" container mx-auto mt-20 pb-30 pt-30">
      <div className="mb-17 ">
          <h2 className=" text-3xl lg:text-7xl tracking-tight font-serif text-primary">Blog</h2>
      </div> 
      <div className="grid gap-8 lg:grid-cols-3">
          <article className="p-6 bg-white rounded-lg  dark:bg-cream ">
              
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black"><a href="#">How to quickly deploy a static website</a></h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
              <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                      <span className="font-medium dark:text-gray-400 ">
                          July 26,2025
                      </span>
                  </div>
                  <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
          </article>                   
      </div>  
  </div>
</section>
    </div>
  )
}

export default Blogs