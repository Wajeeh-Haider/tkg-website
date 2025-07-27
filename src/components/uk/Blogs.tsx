'use client';

import React from 'react';
import Link from 'next/link';
import Blogscard from '../Blogcard/blogcard';

const blogsData: {
  title: string;
  content: string;
  date: string;
  image: string;
}[] = [
  {
    title:
      '10 Powerful Signs Your Dog Is Suffering This Summer: How to Understand When End of Life Is Near',
    content:
      'In this article, discover 10 powerful signs your dog is suffering this summer and how to recognise them. Summer is a special time in the…',
    date: 'July 26, 2025',
    image: '/images/blogimage4.jpg',
  },
  {
    title:
      '4 Essential Steps to Check If Your Pet Insurance Covers In-Home Euthanasia',
    content:
      'What Is In-Home Euthanasia? In-home euthanasia is a service provided by licensed veterinarians who visit your home to perform the euthanasia procedure. Your pet remains…',
    date: 'May 2, 2025',
    image: '/images/Is-there-a-special-place-on-your-tree-blog.png',
  },
  {
    title: 'How to Arrange Home Euthanasia for Your Dog?',
    content:
      'You’re seeking to arrange a home euthanasia for your dog? Parting with a beloved pet is among the most heart-wrenching moments a pet owner can…',
    date: 'May 2, 2025',
    image: '/images/pet-euthanasia-at-home-blog.jpg',
  },
  {
    title: 'Why In-Home Pet Euthanasia Can Be the Kindest Choice for Your Pet',
    content:
      'Saying farewell to a cherished pet is one of the most heart-wrenching experiences a pet owner can face. It’s a time filled with love, sorrow,…',
    date: 'May 2, 2025',
    image: '/images/blogimage4.jpg',
  },
];

const Blogs = () => {
  return (
    <section className="bg-[#f6f0ea] py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[27.68px] xl:text-7xl tracking-tight font-serif text-[#306060]">
            Blog
          </h2>
          <Link
            href="#"
            className="inline-block font-sans px-4 py-3 lg:px-7 lg:py-4 text-[13px] lg:text-[16px] bg-cream border-2 font-semibold cursor-pointer border-primary text-primary rounded hover:bg-primary hover:text-white transition"
          >
            ALL NEWS
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogsData.map((blog, index) => (
            <Blogscard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
