import React from 'react'

const Articlecard = ({ title, content, date }: { title: string; content: string; date: string }) => {

    return (
    
    <article  className="relative overflow-hidden bg-cream rounded-lg transform transition-all duration-700 ease-in-out before:absolute before:inset-0 before:bg-white before:origin-bottom before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:ease-in-out">
            <div className="relative z-10 flex flex-col justify-between h-full ">

              <h2 className="xl:mb-5 mb-0 xl:text-4xl text-[27px] font-serif text-gray-700 hover:text-primary hover:underline decoration-[1px] underline-offset-8 cursor-pointer xl:p-6 p-4"><a href="#">{title}</a></h2>
              <p className="xl:mb-5 mb-0 xl:text-[19px] text-[14px] font-sans text-gray-500 xl:p-6 p-4">{content}</p>
              <div className="flex justify-between items-center bg-white xl:p-6 p-4">
                  <div className="flex items-center space-x-4 ">
                      <span className="font-medium  dark:text-gray-400 ">
                          {date}
                      </span>
                  </div>
              <a
                href="#"
                className="text-primary xl:text-1xl text-[14px] font-semibold rounded cursor-pointer flex items-center group "
              >
                READ MORE{' '}
                <span className="ml-2 transition-all duration-300 group-hover:translate-x-1">
                  &gt;
                </span>
              </a>
              </div>
  </div>  
          </article>
    
  )
}

export default Articlecard