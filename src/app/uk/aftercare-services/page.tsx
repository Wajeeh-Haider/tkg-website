import Footer from '@/components/Footer';
import Cremation from '@/components/uk/aftercareservice/Cremation';
import CremationCards from '@/components/uk/aftercareservice/Cremationcards';
import Hero from '@/components/uk/homeeuthanasia/Hero';
import Navbarhome from '@/components/uk/Homes/Navbarhome';
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
