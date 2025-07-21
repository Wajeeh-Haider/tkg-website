import Footer from '@/components/Footer';
import Drtom from '@/components/uk/aboutus/Drtom';
import Thekind from '@/components/uk/aboutus/Thekind';
import Hero from '@/components/uk/homeeuthanasia/Hero';
import Navbarhome from '@/components/uk/Homes/Navbarhome';
import React from 'react';

function page() {
  return (
    <div className="bg-[#FEFBF8]">
      <Navbarhome />
      <Hero title="About Us" breadcrumb="About Us" linkHref="/uk" />
      <Thekind />
      <Drtom />
      <Footer />
    </div>
  );
}

export default page;
