import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

function Requestnow() {
  return (
    <div className="w-full h-[270px] lg:h-[335px] xl:h-[412px] bg-[#e8eff4] flex items-center justify-center mt-16">
      <div className="text-center">
        <h2 className="text-[27.5px] md:text-[38.5px] font-serif mb-5">
          Request an Appointment
        </h2>

        <Link href="/" passHref>
          <div className="flex justify-center">
            <Button
              label="REQUEST NOW"
              className="hover:gap-2 bg-[#0e797d] text-white hover:opacity-80 text-[13px] lg:text-[15px] font-medium px-4 py-3 lg:px-6 lg:py-3"
            />
          </div>
        </Link>

        <p className="mt-4 text-sm xl:text-base text-[#000000]">or</p>

        <p className="mt-1 font-sans text-sm xl:text-base text-[#000000]">
          Call us &nbsp;
          <Link
            href="tel:03302366999"
            className="text-[#000000] font-sans font-semibold hover:underline"
          >
            0330 2366 999
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Requestnow;
