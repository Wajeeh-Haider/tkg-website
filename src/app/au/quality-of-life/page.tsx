import Journey from "@/components/au/Journey";
import React from "react";
import Link from "next/link";
import Navbarhome from "@/components/uk/Homes/Navbarhome";
const page = () => {
  return (
    <div>
      <Navbarhome country="au" />
      <div className="bg-[#E5F2F2]">
        <div className="container mx-auto lg:pt-67 pt-35 p-3  lg:pb-30 pb-10 ">
          <h1 className="text-[40px] lg:text-[72px] font-serif text-primary">
            Quality of Life Scale for Pets
          </h1>
        </div>
      </div>
      <div className="bg-[#FEFBF8]">
        <div className="lg:pt-20 pt-10 lg:pb-20 pb-10">
          <Journey />
        </div>
      </div>
    </div>
  );
};

export default page;
