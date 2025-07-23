// src/app/uk/privacy-policy/page.tsx
'use client';

import React from 'react';
import Navbarhome from '@/components/uk/Homes/Navbarhome';
import Hero from '@/components/uk/homeeuthanasia/Hero';
import Footer from '@/components/Footer';
import Privacysection from '@/components/uk/privacy/Privacysection';
const Page = () => {
  return (
    <div className="bg-[#FEFBF8]">
      <Navbarhome />
      <Hero title="Privacy Policy" breadcrumb="Privacy Policy" linkHref="/uk" />
      <Privacysection />
      <Footer />
    </div>
  );
};

export default Page;
