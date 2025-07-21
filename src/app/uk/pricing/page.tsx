import Footer from '@/components/Footer';
import Hero from '@/components/uk/homeeuthanasia/Hero';
import Navbarhome from '@/components/uk/Homes/Navbarhome';
import Cost from '@/components/uk/pricing/Cost';
import Emergency from '@/components/uk/pricing/Emergency';
import Privatecards from '@/components/uk/pricing/Privatecards';
import React from 'react';

function page() {
  return (
    <div className="bg-[#FEFBF8]">
      <Navbarhome />
      <Hero title="Pricing" breadcrumb="Pricing" linkHref="/uk" />
      <Cost />
      <Emergency />
      <Privatecards />
      <Footer />
    </div>
  );
}

export default page;
