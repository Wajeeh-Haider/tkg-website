import Navbarhome from '@/components/au/Homes/Navbarhome';
import Footer from '@/components/Footer';
import Tellus from '@/components/uk/bookingrequest/Tellus';
import Hero from '@/components/uk/homeeuthanasia/Hero';
import React from 'react';

function page() {
  return (
    <div className="bg-[#FEFBF8]">
      <Navbarhome />
      <Hero
        title="Booking request/enquiry"
        breadcrumb="Booking request/enquiry"
        linkHref="/uk"
      />
      <Tellus />
      <Footer />
    </div>
  );
}

export default page;
