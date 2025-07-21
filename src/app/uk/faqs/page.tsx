import Footer from '@/components/Footer';
import Faqsservice from '@/components/uk/faqs/Faqsservice';
import Hero from '@/components/uk/homeeuthanasia/Hero';
import Navbarhome from '@/components/uk/Homes/Navbarhome';
import React from 'react';

function page() {
  return (
    <div className="bg-[#FEFBF8]">
      <Navbarhome />
      <Hero title="FAQs" breadcrumb="FAQs" linkHref="/uk" />
      <Faqsservice />
      <Footer />
    </div>
  );
}

export default page;
