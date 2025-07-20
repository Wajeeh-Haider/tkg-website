import React from 'react'
import Articlecard from './Articlecard';

const blogsData = [
  {title: 'How to Talk to Your Child About Losing a Cat: Expert Tips That Work', content: 'Learn How to Talk to Your Child About Losing a Cat, here are 5 compassionate strategies to help your child process the loss of a…', date: 'July 26, 2025'},
  {title: 'The Ultimate Guide to At-Home Cat Euthanasia', content: 'This is your ultimate guide to at-home cat euthanasia Cat euthanasia at home is one of the most compassionate decisions you can make when your…' , date: 'May 2, 2025' },
  {title: '5 Subtle Signs It’s Time to Say Goodbye to Your Cat', content: 'Wondering when to say goodbye to your cat? Learn 5 gentle signs your cat may be suffering and how in-home euthanasia brings peace and dignity…' , date: 'May 2, 2025'},
  {title: '6 Powerful Benefits of In-Home Euthanasia for Your Cat in Geelong and the Bellarine Peninsula', content: 'Here are 6 Powerful Benefits of In-Home Euthanasia for Your Cat in Geelong and the Bellarine Peninsula. Cats are emotionally complex creatures. They build deep…' , date: 'May 2, 2025'}
];


const Blogs = () => {
  return (
    <div>
        <section className="bg-white dark:bg-cream">
  <div className=" container mx-auto  xl:pb-30 pb-10 pt-30 xl:pr-0 md:pr-4 pr-2 xl:pl-0 pl-2 md:pl-4">
      <div className="flex flex-row justify-between xl:mb-15 mb-4 ">
        <div>
          <h2 className=" text-[27.68px] xl:text-7xl tracking-tight font-serif text-primary">Blog</h2>
        </div>
        <div>
          <a
          href="#"
          className="inline-block lg:px-7 px-4 lg:py-4 py-3 text-[13px] lg:text-[16px] bg-cream border-2 text-primary font-bold rounded hover:bg-teal-700 hover:text-white transition"
        >
          ALL NEWS
        </a>
        </div>
      </div> 
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {blogsData.map((blog, index) => (
          <Articlecard key={index} {...blog} />
        ))}        
      </div>  
  </div>
</section>
    </div>
  )
}

export default Blogs