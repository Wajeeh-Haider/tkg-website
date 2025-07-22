import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Herosection from '@/components/au/Herosection';
import Blogs from '@/components/au/Blogs';
import Faqs from '@/components/au/Faqs';
import Googlereviews from '@/components/au/Googlereviews';
import HowItsWork from '@/components/au/Howitswork';
import Petathome from '@/components/au/Petathome';
import React from 'react';
import Euthanasiaservice from '@/components/au/Euthanasiaservice';
const cardsData = [
  {
    imageSrc: '/images/pet.svg',
    alt: 'Home Icon',
    title: 'At-Home Pet Euthanasia',
    description:
      'One of our dedicated vets will visit you to perform your at-home pet euthanasia. From the moment of arrival, everything is done to make the process as peaceful and stress-free as possible for them and you, ensuring we can give your beloved pet the kindest goodbye possible.',
    buttonLabel: 'BOOK NOW',
    buttonHref: '/au',
    bgColor: '#E5F2F2', // optional override
  },
  {
    imageSrc: '/images/Petlove.svg',
    alt: 'Aftercare Icon',
    title: 'Aftercare Services',
    description:
      'We offer a wide range of individual cremation options through our crematorium partners. Cremation without the return of ashes is also available, or we can leave your pet in your care if you wish to make your own arrangements.',
    buttonLabel: 'LEARN MORE',
    buttonHref: '/au',
    bgColor: '#E8EFF4',
  },
];
function page() {
  return (
    <div className="bg-[#FEFBF8]">
      <Navbar country="au" />
      <Herosection />
      <Googlereviews />
      <Petathome />
      <Euthanasiaservice
        title="In-Home Pet Euthanasia Services"
        cardsData={cardsData}
      />
      <HowItsWork />
      <Faqs />
      <Blogs />

      <Footer />
    </div>
  );
}

export default page;
