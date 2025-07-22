import React from 'react';
import Navbar from '@/components/Navbar';
import Herosection from '@/components/au/Herosection';
import Googlereviews from '@/components/au/Googlereviews';
import HowItsWork from '@/components/au/Howitswork';
import Homerespect from '@/components/au/Homerespect';
import Footer from '@/components/Footer';
import Faqs from '@/components/au/Faqs';
import Petathome from '@/components/au/Petathome';
import Euthanasiaservice from '@/components/au/Euthanasiaservice';
import Blogs from '@/components/au/Blogs';

const cardsData = [
  {
    imageSrc: '/images/pet.svg',
    alt: 'Home Icon',
    title: 'At-Home Pet Euthanasia',
    description:
      'One of our devoted veterinarians will come to your home to carry out at-home pet euthanasia. From the moment we arrive, we focus on making the experience as peaceful and stress-free as possible for both you and your beloved pet. We ensure they receive the kindest of goodbyes with our gentle, in-home pet euthanasia service.',
    buttonLabel: 'Request An Appointment Now',
    buttonHref: '/uk',
    bgColor: '#F2E8DC', // optional override
  },
  {
    imageSrc: '/images/Petlove.svg',
    alt: 'Aftercare Icon',
    title: 'Aftercare Services',
    description:
      'We offer a wide range of individual cremation options through our crematorium partners. Cremation without the return of ashes is also available, or we can leave your pet in your care if you wish to make your own arrangements. Our compassionate approach to pet euthanasia extends beyond the moment of passing, with tailored aftercare options to suit your needs.',
    buttonLabel: 'LEARN MORE',
    buttonHref: '/uk',
    bgColor: '#E8EFF4',
  },
];
function Home() {
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
      <Homerespect />
      <Faqs />
      <Blogs />

      <Footer />
    </div>
  );
}

export default Home;
