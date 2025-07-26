import React from 'react';
import Link from 'next/link';

interface HeroProps {
  title: string;
  breadcrumb: string;
  linkHref?: string;
}

function Hero({ title, breadcrumb, linkHref = '/' }: HeroProps) {
  return (
    <div className="bg-[#e5f2f2] w-full mb-10">
      <div className="container mx-auto pt-15 xl:py-10 pl-4 md:pl-8 xl:pl-15 h-[250px] lg:h-[350px] xl:h-[470px] flex items-center">
        <div className="text-left xl:pt-30">
          <h2 className="font-serif text-[40px] lg:text-[56px] xl:text-[72px] text-[#306060] my-5">
            {title}
          </h2>
          <p className="text-sm lg:text-[16px] xl:text-[17px] font-sans text-[#306060]">
            <Link
              href={linkHref}
              className="hover:underline decoration-2 decoration-black"
            >
              Home
            </Link>
            &nbsp;- {breadcrumb}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
