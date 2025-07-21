import Footer from '@/components/Footer';
import Hero from '@/components/uk/homeeuthanasia/Hero';
import Navbarhome from '@/components/uk/Homes/Navbarhome';
import Journey from '@/components/uk/qulity-of-life/Journey';
import React from 'react';

function page() {
  return (
    <div className="bg-[#FEFBF8]">
      <Navbarhome />
      <Hero
        title="Quality of Life Scale for Pets"
        breadcrumb="Quality of Life Scale for Pets"
        linkHref="/uk"
      />
      <Journey />
      <Footer />
    </div>
  );
}

export default page;
