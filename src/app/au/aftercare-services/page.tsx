import Footer from '@/components/Footer';
import Cremation from '@/components/au/aftercareservice/Cremation';
import CremationCards from '@/components/au/aftercareservice/Cremationcards';
import Hero from '@/components/au/homeeuthanasia/Hero';
import Navbarhome from '@/components/au/Homes/Navbarhome';
import React from 'react';

function page() {
  return (
    <div className="bg-[#fefbf8]">
      <Navbarhome />
      <Hero
        title="Aftercare Services"
        breadcrumb="Aftercare Services"
        linkHref="/uk"
      />
      <Cremation />
      <CremationCards />
      <Footer />
    </div>
  );
}

export default page;
