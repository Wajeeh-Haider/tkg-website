"use client"
import React from 'react'
import { MdOutlinePets } from "react-icons/md";
const PetAtHome = () => {
  return (
    <div>
      <div className='flex'>
<div className='relative top-20 left-20'>
          <img
              src="/images/decor1.svg" // replace with your own path or use <Image />
              alt="Aftercare Icon"
              // className="w-45 h-45 mt-1"
            />
        </div>
      <div className="container mx-auto mt-10 mb-60">

        <div className="flex flex-row gap-10 items-center mb-6">
          <div>
            <h1 className='text-7xl text-primary font-serif'>Pet <br/>Euthanasia At <br/>Home</h1>
            <p className='font-sans text-gray-400 mt-10 mb-10 text-[17px] leading-[1.8]'>The Kindest Goodbye is a network of dedicated and<br/> experienced vets providing caring in-home pet<br/> euthanasia services across Australia.</p>
            <button className="inline-flex justify-center items-center text-white text-sm uppercase font-bold leading-[1.5] px-6 py-3 border-2 border-primary bg-primary rounded text-center no-underline cursor-pointer transition duration-300 ease-in-out hover:bg-teal-600 hover:border-teal-600">Read More</button>
          </div>
          <div>
            <img src="/images/Pet-Euthanasia-At-Home.jpg" alt="Pet at Home" className='w-[520px] h-[400px]'/>
          </div>
<div className='relative top-35 right-18'>
          <div className='box-border w-[490] p-10 bg-cream '>
            <div className='flex flex-row justify-center h-full'>
              <div className='mr-4 text-3xl'><MdOutlinePets className='text-primary'/></div>
              <div>
                <h4 className='text-3xl text-[#404040] font-serif mb-5'>The Kindest Goodbye</h4>
                <p className="text-[17px] text-[#404040] mt-2 font-sans leading-[1.8] mb-5">Putting your pet to sleep in the comfort of home, with loved ones by their side and away from the stress of the vet clinic is the kindest goodbye you can give your beloved friend.</p>
              </div>
            </div>
            <div className='flex flex-row justify-center h-full'>
              <div className='mr-4 text-3xl'><MdOutlinePets className='text-primary'/></div>
              <div>
                <h4 className='text-3xl text-[#404040] font-serif mb-5'>Experienced Vets</h4>
                <p className="text-[17px] text-[#404040] mt-2 font-sans leading-[1.8] mb-5">As a team of pet lovers, we understand what it’s like to love and lose your pet. We believe that your pet’s end-of-life journey should be just as caring, loving and unique as they are. Our vets offer mobile pet euthanasia so your pet can feel safe and loved.</p>
              </div>
            </div>
          </div>
</div>
    
        </div>
      </div>
      </div>
        

    </div>
  )
}

export default PetAtHome