import Footer from '@/components/Footer';
import Hero from '@/components/uk/homeeuthanasia/Hero';
import Navbarhome from '@/components/uk/Homes/Navbarhome';
import LocationService from '@/components/uk/location/Locationservice';
import React from 'react';

function page() {
  return (
    <div className="bg-[#FEFBF8]">
      <Navbarhome />
      <Hero title="Locations" breadcrumb="Locations" linkHref="/uk" />
      <LocationService />
      <Footer />
    </div>
  );
}

export default page;
