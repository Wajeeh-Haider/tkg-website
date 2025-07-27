import React from 'react';

function Thekind() {
  return (
    <div className="container mx-auto px-6 xl:px-14 grid grid-cols-1 xl:grid-cols-2 gap-12">
      <div className="pb-2">
        <h2 className="text-[25px] md:text-[32px] font-serif text-[#404040]">
          The Kindest Goodbye
        </h2>
      </div>
      <div className="pb-8 md:w-[50%] xl:w-full xl:pt-15">
        <p className="text-[14px] xl:text-[17px] font-sans text-[#404040] leading-6">
          The <strong>Kindest Goodbye</strong> is an organisation that connects
          families of beloved pets in need of end-of-life care with
          compassionate and dedicated veterinary practitioners offering this
          service across the UK.
        </p>
        <p className="text-[14px] xl:text-[17px] font-sans text-[#404040] leading-6 py-6">
          We also work closely with a wide network of pet cremation providers to
          help families honour and memorialise their pet, creating a simple,
          single touch-point for familes to help make what can be an extremely
          difficult time just that little bit easier…
        </p>
      </div>
    </div>
  );
}

export default Thekind;
