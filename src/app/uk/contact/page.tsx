import Footer from '@/components/Footer';
import Formsection from '@/components/uk/contact/Formsection';
import Hero from '@/components/uk/homeeuthanasia/Hero';
import Navbarhome from '@/components/uk/Homes/Navbarhome';
import React from 'react';

function page() {
  return (
    <div className="bg-[#fefbf8]">
      <Navbarhome />
      <Hero title="Contact Us" breadcrumb="Contact Us" linkHref="/uk" />
      <Formsection />
      <Footer />
    </div>
  );
}

export default page;
