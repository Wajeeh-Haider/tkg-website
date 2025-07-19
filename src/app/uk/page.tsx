import Navbar from '@/components/Navbar';
import React from 'react';
import Herosection from '@/components/uk/Herosection';
import Googlereviews from '@/components/uk/Googlereviews';
import Euthanasiaservice from '@/components/uk/Euthanasiaservice';
import Petathome from '@/components/uk/Petathome';
import HowItsWork from '@/components/uk/Howitswork';
import Homerespect from '@/components/uk/Homerespect';
import Faqs from '@/components/uk/Faqs';

function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Googlereviews />
      <Petathome />
      <Euthanasiaservice />
      <HowItsWork />
      <Homerespect />
      <Faqs />
    </>
  );
}

export default Home;
