'use client';

import React, { useState } from 'react';

function Homerespect() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-[#FEFBF8]">
      <div className="container mx-auto px-4 md:px-10 lg:px-4 py-15">
        <h1 className="text-[40px] font-serif mb-4 text-[#404040]">
          Dignified, Respectful In-Home Pet Euthanasia
        </h1>
        <h2 className="text-[32px] font-serif mb-4 text-[#404040]">
          A Compassionate Farewell With Dog Euthanasia
        </h2>

        <p className="text-sm xl:text-base font-sans text-[#404040] leading-relaxed">
          Our <span className="text-[#0E797d] font-medium">dog euthanasia</span>{' '}
          service offers a peaceful and gentle way to say goodbye to your
          beloved dog in the comfort of their home. We understand how difficult
          this decision is, and our experienced veterinarians are here to
          provide compassionate care, ensuring your dog’s final moments are
          calm, stress-free, and filled with love.
        </p>

        <button
          onClick={() => setShowMore(!showMore)}
          className="text-[#404040] cursor-pointer text-sm xl:text-base hover:underline font-medium mt-2"
        >
          {showMore ? 'Read Less' : 'Read More'}
        </button>

        {showMore && (
          <div>
            <div className="mt-10">
              <h3 className="text-[32px] font-serif mb-4 text-[#404040]">
                A Peaceful Goodbye With Cat Euthanasia
              </h3>
              <p className="text-sm xl:text-base font-sans text-[#404040] leading-relaxed">
                We offer{' '}
                <span className="text-[#0E797d] font-medium">
                  cat euthanasia
                </span>{' '}
                services designed to provide your feline friend with a gentle
                and loving farewell at home. Our dedicated veterinarians
                understand the unique needs of cats and ensure their final
                moments are calm and peaceful.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-[40px] font-serif mb-4 text-[#404040]">
                UK-Wide Pet Euthanasia Services{' '}
              </h3>
              <p className="text-sm xl:text-base font-sans text-[#404040] leading-relaxed">
                At The Kindest Goodbye, we are proud to offer our compassionate
                pet euthanasia at home services across the UK. Whether you need
                support in major cities such as{' '}
                <span className="text-[#0E797d] font-medium">
                  dog euthanasia in London or dog euthanasia in Glasgow,
                </span>{' '}
                or want compassionate care in regions like
                <span className="text-[#0E797d] font-medium">
                  dog euthanasia in Sussex
                </span>{' '}
                or{' '}
                <span className="text-[#0E797d] font-medium">
                  dog euthanasia in Hampshire,
                </span>
                . our experienced veterinarians are available to provide gentle,
                in-home care for your beloved pet. No matter where you are, we
                are here to make your pet’s final moments as peaceful and
                love-filled as possible.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Homerespect;
