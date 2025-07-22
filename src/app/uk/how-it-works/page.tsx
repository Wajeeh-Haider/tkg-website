import Footer from '@/components/Footer';
import Hero from '@/components/uk/homeeuthanasia/Hero';
import Requestnow from '@/components/uk/homeeuthanasia/Requestnow';
import Requestsection from '@/components/uk/homeeuthanasia/Requestsection';
import Navbarhome from '@/components/uk/Homes/Navbarhome';
import React from 'react';

function page() {
  return (
    <div className="bg-[#FEFBF8]">
      <Navbarhome />
      <Hero title="How It Works" breadcrumb="How It Works" linkHref="/uk" />
      <Requestsection />
      <Requestnow />
      <Footer />
    </div>
  );
}

export default page;
