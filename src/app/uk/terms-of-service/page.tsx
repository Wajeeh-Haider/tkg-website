import Footer from '@/components/Footer';
import Hero from '@/components/uk/homeeuthanasia/Hero';
import Navbarhome from '@/components/uk/Homes/Navbarhome';
import Natureofservice from '@/components/uk/terms-of service/Natureofservice';
import React from 'react';

function page() {
  return (
    <div className="bg-[#FEFBF8]">
      <Navbarhome />
      <Hero
        title="Terms of Service"
        breadcrumb="Terms of Service"
        linkHref="/uk"
      />
      <Natureofservice />
      <Footer />
    </div>
  );
}

export default page;
