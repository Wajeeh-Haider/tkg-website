import Navbarhome from '@/components/au/Homes/Navbarhome';
import Image from 'next/image';
import React from 'react';
const statesData = [
  { state: 'ACT', website: 'Edenhills website', link: 'https://edenhills.com.au' },
  { state: 'NSW', website: 'Patch and Purr website', link: 'https://patchandpurr.com.au' },
  { state: 'SA', website: 'Edenhills website', link: 'https://edenhills.com.au' },
  { state: 'QLD', website: 'Pet in Peace website', link: 'https://www.petsinpeace.com.au/' },
  { state: 'VIC', website: 'Edenhills website', link: 'https://edenhills.com.au' },
  { state: 'WA', website: 'Lawnswood website', link: 'https://lawnswood.com.au' },
];

function page() {
  return (
    <div >
      <Navbarhome country='au'/>
              <div className='bg-[#E5F2F2]'>
            <div className='container mx-auto lg:pt-67 pt-35 p-3  lg:pb-30 pb-10 '>
                <h1 className='text-[40px] lg:text-[72px] font-serif text-primary'>Aftercare Services</h1>
            </div>
        </div>
        <div className='bg-[##E5F2F2]'>
            <div className='lg:pt-20 pt-5 '>
    <div className="container mx-auto px-4 md:px-7 py-6">
      <article className="xl:pl-6 lg:pb-20 pb-5">
        <p className="text-[#404040] font-semibold text-[14px] xl:text-[17px] font-sans pb-7 leading-6">
          We offer a range of aftercare options to help you best celebrate the life of your beloved pet.
        </p>
        <p className="text-gray-600 text-[14px] xl:text-[17px] font-sans pb-7 leading-6">
          With <span className='font-semibold'>our home euthanasia service,</span> unless you wish to bury your pet at home, or have organised your own cremation arrangements, our vet can take your pet with them when they leave your home and arrange transfer to our crematorium partner.
        </p>
        <p className="text-gray-600 text-[14px] xl:text-[17px] font-sans pb-7 leading-6">
          If you are using our <span className='font-semibold'>collection service,</span> our staff will organise a gentle and dignified transfer for you to our crematorium partners for your selected aftercare.
        </p>
        <h2 className="text-gray-700 text-[27.5px] md:text-[38.5px] xl:text-[57.76px] font-serif py-4">
          Private Cremation
        </h2>
        <p className="text-gray-600 text-[14px] xl:text-[17px] font-sans pb-7 leading-6">
          Private* (guaranteed single chamber) cremation with the return of your pet’s ashes is available from our crematorium partners across Australia. We can organise transfer of your pet to the crematorium on your behalf.  Please select your location below to see the specific options available from our local aftercare partner.
        </p>
        <p className="text-gray-600 font-semibold text-[14px] xl:text-[17px] font-sans pb-7 leading-6">
          After your booking for us has been completed, our local cremation partner will contact you directly in the 24-48 hours following to discuss what memorial options you would like for your pet.
        </p>
        <p className="text-gray-600 text-[14px] xl:text-[17px] font-sans pb-7 leading-6">
          *Unlike some other cremation companies, our crematorium partners cremate all pets booked for private cremation in their own private chamber, not individually by sectioning off with refractory bricks. This guarantees that only your pet’s ashes are returned to you.
        </p>
      </article>
    </div>

<div className='container mx-auto lg:pb-20 pb-10'>
  <div>
<div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 p-2 ">
      {statesData.map(({ state, website, link }) => (
        <div
          key={state}
          className="bg-[#E5F2F2] p-15 pb-35 rounded"
        >
          <h3 className="text-[20px] lg:text-[25px] font-serif text-gray-800 mb-7">{state}</h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-[14px] lg:text-[17px] font-sans hover:text-teal-900 hover:underline hover:underline-offset-4"
          >
            {website}
          </a>
        </div>
      ))}
    </div>
  </div>
</div>

            {/* cards */}
        <div className="relative w-full h-full z-10 pb-26">
          <Image
            src={'/images/decor1.svg'}
            alt="decor"
            height={700}
            width={700}
            className="absolute top-0 -z-1 md:h-50 md:w-50 lg:h-160 lg:w-160"
          />
          <div className="container mx-auto lg:pb-15 pb-0 z-20">
            <div className="flex flex-col md:flex-row gap-7 max-w-8xl mx-auto lg:py-10 py-0 p-2">
              {/* Card 1 */}
              <div className="flex-1  bg-cream xl:p-8 p-2 rounded ">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <img
                    src="/images/pet.svg"
                    alt="Home Icon"
                    className="xl:w-35 xl:h-35 mt-1 "
                  />
                  <div>
                    <h3 className="xl:text-4xl text-3xl font-serif lg:mt-10 mt-5">
                      Companion Cremation
                    </h3>
                    <p className="font-sans text-gray-500 lg:text-[18px] text-[14px] leading-[2] mb-4 mt-5">
                      If you do not wish to have your pet’s ashes returned to you, we can organise for companion cremation (without the return of ashes) from just $150. Transfer to the crematorium on your behalf is generally available for an additional $50.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex-1  bg-cream  xl:p-8 p-2 rounded">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <img
                    src="/images/Petlove.svg" // replace with your own path or use <Image />
                    alt="Aftercare Icon"
                    className="lg:w-35 lg:h-35 mt-1"
                  />
                  <div>
                    <h3 className=" xl:text-4xl text-3xl font-serif lg:mt-10 mt-5">
                      Burying Your Pet At Home
                    </h3>
                    <p className="font-sans text-gray-500  lg:text-[18px] text-[14px]  leading-[2] mb-4 mt-5">
                      If you have provision to and would prefer to bury your pet at home, we will leave them in your care once they have passed. Please ensure that you are aware of and abiding by local regulations regarding the burial of pets on your property
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

            </div>
        </div>

    </div>
  );
}

export default page;
