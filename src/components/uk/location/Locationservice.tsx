import React from 'react';
import Link from 'next/link';

type RegionData = {
  region: string;
  areas: string[];
};

const locationData: RegionData[] = [
  {
    region: 'England',
    areas: [
      'Bedfordshire',
      'Berkshire',
      'Berwickshire',
      'Birmingham',
      'Bristol',
      'Buckinghamshire',
      'Cambridgeshire',
      'Cheshire',
      'Denbighshire',
      'Derbyshire',
      'Dorset',
      'East Riding',
      'Essex',
      'Flintshire',
      'Gloucestershire',
      'Hampshire',
      'Herefordshire',
      'Hertfordshire',
      'Huntingdonshire',
      'Kent',
      'Lancashire',
      'Leeds',
      'Leicestershire',
      'Lincolnshire',
      'Liverpool',
      'London (Greater)',
      'Manchester',
      'Merseyside',
      'Middlesex',
      'Norfolk',
      'Northhamptonshire',
      'Nottinghamshire',
      'Oxfordshire',
      'Sheffield',
      'Shropshire',
      'Somerset',
      'Staffordshire',
      'Suffolk',
      'Surrey',
      'Sussex (East and West)',
      'Tyne & Wear',
      'Warwickshire',
      'Wiltshire',
      'Worcestershire',
      'Yorkshire',
    ],
  },
  {
    region: 'Scotland',
    areas: [
      'Ayrshire',
      'Berwickshire',
      'Dunbar',
      'Dunbartonshire',
      'East Lothian',
      'Edinburgh',
      'Glasgow',
      'Lanarkshire',
      'Midlothian',
      'Peebleshire',
      'Renfrewshire',
      'Selkirkshire',
      'Stirlingshire',
      'West Lothian',
    ],
  },
  {
    region: 'Wales',
    areas: [
      'Caernarfonshire',
      'Cardiff',
      'Glamorgan',
      'Merionethshire',
      'Monmouthshire',
      'Montgomeryshire',
      'Newport',
    ],
  },
];

export default function LocationService() {
  return (
    <div className="container mx-auto px-4 lg:px-12 pt-12 pb-8">
      <p className="text-[22.5px] md:text-[26.5px] xl:text-[32px] text-[#306060] font-serif mb-15">
        Our wonderful network of caring providers can provide in-home euthanasia
        services to much of the UK population, including some or all of the
        following counties/cities:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        {locationData.map(({ region, areas }) => (
          <div key={region}>
            <h3 className="text-[27.5px] md:text-[32.5px] xl:text-[57px] font-serif text-[#404040] mb-4">
              {region}
            </h3>
            <ul className="list-disc list-inside space-y-1 leading-10">
              {areas.map((area) => (
                <li key={area} className="text-[14px] text-[#404040] font-sans">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-sm xl:text-base text-[#404040] font-sans my-20 flex justify-center">
        To submit a booking request for our service, simply &nbsp;
        <Link href="/uk/book" className="text-[#306060] hover:underline">
          click here
        </Link>
        .
      </p>
    </div>
  );
}
