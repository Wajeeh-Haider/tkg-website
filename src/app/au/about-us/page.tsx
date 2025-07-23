import React from 'react';
import { MdOutlinePets } from 'react-icons/md';
import Image from 'next/image';
import Navbarhome from '@/components/au/Homes/Navbarhome';
const vetdata = [
  {
    name: 'Dr Rachael Moon',
    image: '/images/vets/vet1.jpg',
    description:
      'Saying goodbye to a family member is one of the hardest thing to do, and Dr Rachael Moon is passionate about allowing families to say goodbye to their furry family member in the peace and familiarity of their own home, surrounded by the comfort of the ones they love the most. <br/><br/> Dr Rachael is an extremely experienced veterinarian with 12 years of experience. She has worked in both mixed animal practice and private small animal practice with most of that time on beautiful Bribie island, where she fell in love with the close one-on-one care that a comes from working in such a tight community.<br/><br/> Seeing firsthand the stress that some animals felt in a veterinary clinic, she felt passionately about starting a full service mobile clinic. This has been running for 4 years, with over 1,500 patients helped.<br/><br/> Recently, Dr Moon has dedicated more of her time to her property, where she has her 3 dogs, 2 cats, lots of the cutest sheep in the world (Valais Blacknose) and miniature highland cattle. This has allowed her the time to assist more families say farewell at home through The Kindest Goodbye. <br/><br/>Dr Rachael is available in the Brisbane, Gold Coast and Ipswich areas.',
  },
  {
    name: 'Dr Monica Dickson',
    image: '/images/vets/vet2.jpg',
    description:
      'Monica graduated from University of Queensland in Veterinary Science over 30 years ago and worked initially in mixed practice followed by working as a small animal veterinarian.<br/><br/> After discovering the joys of motherhood, Monica had a long career break while raising a large family of 6 sons and 1 daughter. <br/><br/>When her youngest child had settled into school, Monica returned to practising as a veterinarian and loves the variety her career provides from working in the sheep health field with farmers and offering home euthanasia for pets. <br/><br/> As pets are much beloved members of the family, Monica believes that when the time has come to say goodbye, being able to facilitate this in a pet’s own home is the most comforting way to ensure grace and dignity for both pet owners and their pets.',
  },
  {
    name: 'Dr Kym Tapley',
    image: '/images/vets/vet3.jpg',
    description:
      'Dr Kym graduated from Murdoch University in 1998 and began her veterinary career in mixed practice but has been working in small animal practice since beginning a family. She has been a passionate animal lover her whole life and has never been without at least one furry family member in her home, oftentimes outnumbering the human kids! Her current dog is a very determined Miniature Dachshund who is always looking for cuddles, treats or something to bark at. <br/><br/>Kym is passionate about ensuring that all her patients have the best quality of life possible. She takes great comfort in being able to ease her patients suffering in the most gentle way possible when the time comes to say goodbye and providing emotional support to the family members at such a difficult time. She particularly loves working for The Kindest Goodbye, allowing these precious furry friends to be put to sleep in their own comfortable surroundings rather than the stress of a clinic, and so their family are able to go through such a sad occasion in the privacy of their home.',
  },
  {
    name: 'Dr Lauren Davis',
    image: '/images/vets/vet4.jpg',
    description:
      'After graduating in 2013 from Sydney University, Lauren began practising as a small animal veterinarian in a little clinic in the eastern suburbs of Melbourne where she grew up. She instantly loved her job and enjoyed building relationships with her clients and patients, a number of which she cared for from their puppyhood into their geriatric years. Although she found this deeply rewarding, clinical practice was busy, and it was often difficult to facilitate home visits around a busy practice schedule, particularly as the sole vet on duty. Despite the desperate need for home visits for pets and owners alike, there were times she simply couldn’t be there, and on more than one occasion it broke her heart to have to say no. <br/><br/> This inspired her journey to become a home visiting veterinarian. She feels very privileged to be able to allow pets and their families to say goodbye in their own way and in the most peaceful way possible.',
  },
  {
    name: 'Dr David Kahl',
    image: '/images/vets/vet5.jpg',
    description:
      'Dr Dave is an experienced veterinarian with further training in end of life care for pets. He grew up on a farm in Central Queensland surrounded by an assortment of pets and animals which is where he developed a strong bond and empathy with pets. <br/><br/>Growing up with animals led Dr Dave to undertake a Bachelor’s degree in Veterinary Science with Honours at the University of Queensland. He has since practised veterinary medicine and surgery in both general practice and emergency before finding that his kind and compassionate nature could help pet owners through their difficult times. <br/><br/>Dr Dave believes that euthanasia can be our final gift to our beloved pets to prevent suffering and ensure their last days are good days. This is why providing this opportunity to Sunshine Coast pet owners is so important to him.',
  },
  {
    name: 'Dr Shagufta (Sha) Singh',
    image: '/images/vets/vet6.jpg',
    description:
      'Dr Sha graduated from Massey University (New Zealand) and has worked as a companion animal veterinarian in NZ and Australia since. Sha takes great pride in her role as a companion animal veterinarian and is low stress handling certified. She has worked in busy clinical practice, tele med and palliative care before committing to mobile veterinary practice. <br/><br/>Having said goodbyes to her own pets in the past, she does everything she can to ensure the journey is as calm and peaceful for you and your pet as possible. She feels grateful that we can help families say goodbye to their beloved pets in the most loving way possible: surrounded by family in the comfort of their home. She has been an animal lover, her whole life and loves that her veterinary career helps her serve pets and in the comfort of their home.',
  },
  {
    name: 'Dr Louise Grey',
    image: '/images/vets/vet7.jpg',
    description:
      'Dr Louise Grey graduated from the University of Sydney in 2004 and spent a few years there before moving to Canberra in 2009 with her husband. She fell in love with the Bush Capital immediately. Between work in clinic she’s produced a few kids and acquired a range of pets: a dog, a cat, two rats and a Hay’s flat coiled snail. Dr Louise has a passion for all things small and squeaky and has devoted herself to the care of exotic pets in addition to dogs and cats. <br/><br/>At the end of life it is so important to have the time to say goodbye, in an environment that supports everyone as much as possible, and home is often the best place for this. It is a privilege to be able to help families give their precious pet a loving and kind final goodbye and Dr Louise has found a new personal passion in being there for families and helping them provide this for their pet.',
  },
  {
    name: 'Dr Abby Masters',
    image: '/images/vets/vet8.jpg',
    description:
      'Dr Abby graduated from the University of QLD in 2013 where she completed a small animal internship before moving on to mostly small animal practice. She has had the privilege to work in the Northern Territory treating some of Australia’s most beautiful and impressive wildlife as well as being involved in rural and regional community dog health programs. Now she has returned to her home town and resides in The Southern Highlands NSW with her young family, where she is focussed on providing veterinary support for families within their own home. <br/><br/>Dr Abby values the importance of providing a safe and comfortable journey for pets and their owners at this difficult time of life and is happy to be able to help families through the end of life transition in the comfort of their own homes.',
  },
  {
    name: 'Dr Kate',
    image: '/images/vets/vet9.jpg',
    description:
      'Dr Kate is an experienced Veterinarian with a special interest in end-of-life care. Growing up on a cattle property in NSW, she has always had a furry companion by her side. She treasures the beautiful bond humans & animals can form. After graduating from the University of QLD in 2012, Dr Kate found her passion in small animal practice, focusing on holistic well-being. She has flourished in palliative care, ensuring older pets have a pain-free and high-quality life. <br/><br/>Dr Kate is grateful for the privilege of providing peaceful euthanasia services & aims to make this moment filled with love & cherished memories. She strives to offer a kind & calm goodbye, addressing both the mental & physical needs of pets in their final moments.',
  },
  {
    name: 'Dr Henriette van der Westhuizen',
    image: '/images/vets/vet10.png',
    description:
      'Henriette was born in South Africa, and qualified as a vet at Onderstepoort, Pretoria in 2005. She worked as a small animal vet in Cape Town and later Pretoria for about 3 years. After getting married in 2008, she and her husband decided to make the big move to Australia, along with their miniature Schnauzer and two cats. The best decision ever! They absolutely love the people, freedom, nature and quality of life here.<br/><br/> Between 2009-2020 Henriette worked in multiple mainly small animal clinics, and gained a lot of experience over a very broad range of conditions. In 2020, while still working part time in a very busy small animal hospital, she decided to start her own business, focusing mainly on home-based end-of-life care of pets. She soon discovered that doing this well, with care, respect, compassion and with the comforts of home, makes such a big difference to pets and their families, and is now focusing just on this full time.',
  },
  {
    name: 'Dr Josie Ginty',
    image: '/images/vets/vet11.jpg',
    description:
      'Dr Josie grew up in Sydney, studied at The Australian National University and Melbourne University, and now lives with two birds and two dogs on the Central Coast. She works part-time in Mixed Practice, providing professional and compassionate care to every creature from guinea pigs to goats. <br/><br/>Kindness is at the centre of all veterinary practice, and Josie strives to bring this philosophy to every encounter. She believes it is a privilege to be able to grant peaceful end of life care to pets in the comfort of their own home – whether it be snuggled up on the couch, in a patch of sunlight in the garden, or snuggled up on the lap of the people they love. <br/><br/>Favourite quote: “The pain I feel now is the happiness I had before. That’s the deal.” – C.S. Lewis',
  },
  {
    name: 'Dr Gen Dwyer',
    image: '/images/vets/vet12.jpg',
    description:
      'Gen graduated from the University of Sydney in 2017 and worked in country practice in central NSW for several years before returning to her home of Sydney. She has since undergone an internship at a specialty hospital and attained membership in small animal medicine with the ANZCVS. Gen has recently been travelling and working as vet throughout Australia and New Zealand filling in locum positions – combining her two passions of veterinary work & exploring new places. <br/><br/>Gen knows it is a privilege to be able to provide end of life care for a beloved pet, and strives to make this difficult time as comfortable and stress free as possible.',
  },
  {
    name: 'Dr Jared',
    image: '/images/vets/vet13.jpg',
    description:
      'Dr Jared has been in the veterinary industry in one form or another for over 20 years. Originally from the USA , Dr. Jared moved to Perth to study Veterinary Medicine at Murdoch University where he graduated in 2011. After graduation, he returned to the USA for a short time before moving back to Perth permanently in 2013. Dr. Jared is kept busy by his wife and three kids, and their pet pug Winnie. <br/><br/> After working as a vet in private practice he became aware of just how special the at-home euthanasia process can be when he helped his own pet pass peacefully in the comfort of home. Shortly after that time, Dr Jared decided to devote his time and efforts to providing a peaceful, private, and dignified experience when it is time to say goodbye and he now works exclusively to deliver this important service.',
  },
  {
    name: 'Dr Amy Andrew',
    image: '/images/vets/vet14.jpg',
    description:
      'Dr Amy is based on the north side of Adelaide with her partner, baby and fur baby (a Siberian cat). She graduated from Charles Sturt University and has since been working in mixed practice in the Adelaide Hills and also as a registered nurse for a number of years. <br/><br/>Her work as a veterinarian and as a registered nurse has provided her with an insight into our ability as pet owners to be able to end suffering for our beloved pets, friends and companions. We have the gift of allowing a dignified and loving farewell. Having had to say farewell to her own beloved pets over the years, she has realised how difficult it can be, so understands the emotions that families face during this time.',
  },
  {
    name: 'Dr Kate Thompson',
    image: '/images/vets/vet15.jpg',
    description:
      'Dr Kate Thompson graduated from the University of Melbourne. Once graduated she initially went into mixed practice in Western Victoria. Since graduating she has worked across Victoria, Melbourne and the UK. <br/><br/> More recently Dr Kate has worked in equine practice and has extensive experience in medicine and has a passion for equine dentistry. <br/><br/>Kate enjoys all aspects of veterinary practice. She feels especially privileged and grateful that she can help people achieve a peaceful passing of their beloved pets at home. Allowing people to say goodbye in their own time and at home where they are most comfortable.',
  },
  {
    name: 'Dr Aoibheann Clarke',
    image: '/images/vets/vet16.jpg',
    description:
      'Aoibheann (pronounced Aveen) was born in Ireland and qualified as a vet at the University College Dublin (UCD) in 2009. After working for 2 years in mixed practice in Northern Ireland, she moved to Melbourne in 2012 and has been working in small animal practices since. She lives on the Mornington peninsula with her family. <br/><br/>Knowing the hardship in letting beloved pets go, she will do everything to make the journey calm and peaceful for your pet. She believes that euthanasia, while heartbreaking, provides a kind release for those suffering and feels that it is a privilege to help people and their pets during this difficult time.',
  },
  {
    name: 'Dr Tarley McPadden',
    image: '/images/vets/vet17.jpg',
    description:
      'Dr Tarley graduated from Murdoch University in 2011. She worked in a mixed practice clinic in regional Victoria for 5 years before returning to Geelong to raise her family. Dr Tarley believes that being able to say goodbye to your beloved pet in the comfort of your own home is an amazing final gift for your pet. Dr Tarley aims to allow pets to pass peacefully surrounded by their human and furry loved ones while also celebrating their life together. <br/><br/>In addition to facilitating peaceful passing of pets at home, Dr Tarley works in a GP practice and has a keen interest in palliative and hospice care.',
  },
  {
    name: 'Dr Taylah Locastro',
    image: '/images/vets/vet18.jpg',
    description:
      'Dr Taylah is a kind and gentle veterinarian who is passionate about creating a meaningful & peaceful environment for your pet’s goodbye. She is friendly and calm in her approach, helping to ease any fear or stress during this time. Dr Taylah takes her time to get to know you and your precious furbaby, so there is no need to feel rushed. <br/><br/>When Dr Taylah isn’t helping with peaceful goodbyes, she works within the local veterinary community assisting in emergency, providing in-home palliative care, holistic veterinary options such as CBD oil, and volunteers for those in need with Pets In The Park.',
  },
  {
    name: 'Dr Thomas Andrew',
    image: '/images/vets/vet19.jpg',
    description:
      'Dr Tom graduated from James Cook University in 2017. He started his career working in mixed practice in South Gippsland where he worked with large and small animals for over 2 years. He then went far and wide to pursue further training in busy referral practices in Queensland and Western Australia. For several years he has been working in emergency and specialist referral clinics.Throughout his time working in the hospital environment, Tom saw the opportunity for less stressful end of life care for pets and their owners. This led Dr Tom to start working with TKG, where he now works passionately to provide the most peaceful euthanasia care for pets in the comfort of their own home. Tom has a keen interest in pain management in geriatric pets, managing chronic diseases and palliative care.Pictured is Tom with his best friend Barney, gone but never forgotten.',
  },
  {
    name: 'Dr Josh',
    image: '/images/vets/vet20.jpg',
    description:
      'Josh is a small animal veterinarian with a passion for geriatric medicine and end of life care. He works to ensure the wellbeing and comfort of both his clients and their pets. Outside of work you can find him gardening or catching a flight',
  },
  {
    name: 'Dr Beck Whiting',
    image: '/images/vets/vet21.jpg',
    description:
      'Beck graduated from The University of Melbourne and is a Geelong local. Caring for pets is her passion, and after recently becoming a mum, she has been reminded of the vital relationships pets create in a family. <br/><br/>Early in her career Beck grasped the significance of a peaceful euthanasia process, both for pets and their families, and feels it is privileged to be able to provide this service in what is often a difficult moment.',
  },
  {
    name: 'Dr Sandra Macheroux',
    image: '/images/vets/vet22.jpg',
    description:
      'Dr Sandra graduated in 1993 from the University of Sydney. She has attained her Memberships in Small Animal Medicine (ANZCVS) and a Diploma in Professional Photography. <br/><br/> She has travelled and lived all over the world. She has practised vet science in the UK, Hong Kong, Singapore, Thailand and Australia. <br/><br/>She has a passion for philosophy, animal welfare and end of life care for pets. She is also a proud mum of two teenagers and Buddy, an adopted and much loved dog. <br/><br/> Favourite quote: “Do what you can, with what you have, where you are.” ―Theodore Roosevelt.',
  },
  {
    name: 'Dr Mel Hayde',
    image: '/images/vets/vet23.jpg',
    description:
      'Dr Mel has been caring for Melbourne’s pets for over 20 years, and has always enjoyed seeing the special bonds and love that people share with their furry friends. <br/><br/> She knows how heartbreaking it is when we have to say goodbye to them, so hopes to make the end-of-life journey a little bit easier by providing a gentle and peaceful passing for your beloved pet, allowing you to be together in the comfort of your own home during this very sad time.',
  },
  {
    name: 'Dr Melissa Closter',
    image: '/images/vets/vet24.jpeg',
    description:
      'Melissa Closter graduated from university then spent some time working in Canberra before moving back to her home town Melbourne with her dog, Luna. She enjoys working with dogs and cats as well as other small creatures such as birds, rabbits and reptiles. <br/><br/> Dr Melissa feels privileged to be able to provide love and care for pets and their families at all stages of life, and is deeply passionate about creating peace and comfort when it is time to say goodbye.',
  },
  {
    name: 'Dr Sam Marzouk',
    image: '/images/vets/vet25.jpg',
    description:
      'Sam received a Bachelor of Veterinary Science (Hons) from the University of QLD. <br/><br/> After working in mixed practice for seven years, he moved to Sydney where as well as performing peaceful home euthanaisa for pets, he works as an emergency vet in both general practice and specialist hospitals. <br/><br/> In his spare time, I enjoy spending time with family & friends and his 1-year-old cat Tiger!',
  },
];
const page = () => {
  return (
    <div>
      <Navbarhome country='au'/>
      <div className="bg-[#E5F2F2]">
        <div className="container mx-auto lg:pt-67 pt-35 p-3  lg:pb-30 pb-10  ">
          <h1 className="text-[40px] lg:text-[72px] font-serif text-primary">
            About Us
          </h1>
        </div>
        <div className="bg-[#FEFBF8] ">
          <div className="relative w-full h-full z-10">
            <Image
              src={'/images/decor1.svg'}
              alt="decor"
              height={700}
              width={780}
              className="absolute top-40 right-0 -z-1"
            />
            <div className="container mx-auto lg:pt-20 pt-10 lg:pb-50 pb-10 px-3 z-20">
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
                <div>
                  <p className="text-[14px] lg:text-[17px] text-gray-600 font-sans leading-[2] lg:mb-5 mb-2">
                    <p className="lg:mb-10 mb-2">
                      <b>Dr Tom Milton’s veterinary journey</b> has taken him
                      from mixed practice to small animal work in clinic and
                      finally to in-home veterinary care and a passion for
                      offering and promoting peaceful home euthanasia for pets.
                    </p>
                    <p>
                      His own work locally in this area inspired him to set up
                      The Kindest Goodbye, a national network of equally
                      dedicated vets offering this wonderful service to families
                      and their beloved pets across Australia.
                    </p>
                  </p>
                </div>
                <div className="relative xl:bottom-32 bottom-0 xl:right-0 right-0">
                  <img
                    src="/images/drtom.jpg"
                    alt="Dr Tom Milton"
                    className="lg:w-[466px] lg:h-[477px] w-100 h-75 mb-5"
                  />
                  <h2 className="text-[25.12px] lg:text-[43.03px] font-serif text-gray-700 mb-1">
                    Dr Tom Milton
                  </h2>
                  <p className="text-[14px] lg:text-[17px] text-primary font-semibold font-sans ">
                    Founder
                  </p>
                </div>
                <div>
                  <div className="relative xl:top-15 top-0 xl:right-18 right-0">
                    <div className="box-border xl:w-[490]  xl:p-10 p-5 bg-cream">
                      <div className="flex flex-row justify-center h-full">
                        <div className="mr-4 xl:text-3xl text-2xl">
                          <MdOutlinePets className="text-primary" />
                        </div>
                        <div>
                          <h4 className="xl:text-3xl text-[20.8px] text-[#404040] font-serif mb-5">
                            The Kindest Goodbye
                          </h4>
                          <p className="xl:text-[17px] text-[14px] text-[#404040] mt-2 font-sans leading-[1.8] mb-5">
                            Putting your pet to sleep in the comfort of home,
                            with loved ones by their side and away from the
                            stress of the vet clinic is the kindest goodbye you
                            can give your beloved friend.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center h-full">
                        <div className="mr-4 xl:text-3xl text-2xl">
                          <MdOutlinePets className="text-primary" />
                        </div>
                        <div>
                          <h4 className="xl:text-3xl text-[20.8px] text-[#404040] font-serif mb-5">
                            Experienced Vets
                          </h4>
                          <p className="xl:text-[17px] text-[14px] text-[#404040] mt-2 font-sans leading-[1.8] mb-5">
                            As a team of pet lovers, we understand what it’s
                            like to love and lose your pet. We believe that your
                            pet’s end-of-life journey should be just as caring,
                            loving and unique as they are. Our vets offer mobile
                            pet euthanasia so your pet can feel safe and loved.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* OUR VETS */}
          <div className="container mx-auto lg:pb-25 pb-10 px-3 z-20">
            <h2 className="text-[25.12px] lg:text-[57.76px] font-serif text-primary mb-5">
              Our Vets
            </h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:mt-15 mt-5">
              {vetdata.map((vet, index) => (
                <div key={index}>
                  <img
                    src={vet.image}
                    alt="vet"
                    className="lg:w-[630px] lg:h-[500px] w-100 h-75 mb-7 object-cover"
                  />
                  <h3 className="text-[22.88px] lg:text-[32.16px] font-serif text-gray-700 mb-5">
                    {vet.name}
                  </h3>
                  <p
                    className="text-[14px] lg:text-[18px] text-gray-500  font-sans leading-[2] mb-5"
                    dangerouslySetInnerHTML={{ __html: vet.description }}
                  ></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
