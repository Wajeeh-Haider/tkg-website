'use client';

import React from 'react';
import Image from 'next/image';

const vets = [
  {
    name: 'Dr Rachael Moon',
    description:
      'Saying goodbye to a family member is one of the hardest thing to do, and Dr Rachael Moon is passionate about allowing families to say goodbye to their furry family member in the peace and familiarity of their own home, surrounded by the comfort of the ones they love the most.<br/><br/>Dr Rachael is an extremely experienced veterinarian with 12 years of experience. She has worked in both mixed animal practice and private small animal practice with most of that time on beautiful Bribie island, where she fell in love with the close one-on-one care that a comes from working in such a tight community.<br/><br/>Seeing firsthand the stress that some animals felt in a veterinary clinic, she felt passionately about starting a full service mobile clinic. This has been running for 4 years, with over 1,500 patients helped.<br/><br/>Recently, Dr Moon has dedicated more of her time to her property, where she has her 3 dogs, 2 cats, lots of the cutest sheep in the world (Valais Blacknose) and miniature highland cattle. This has allowed her the time to assist more families say farewell at home through The Kindest Goodbye.<br/><br/>Dr Rachael is available in the Brisbane, Gold Coast and Ipswich areas.',
    image: '/images/Dr-Rachel-Moon.jpg',
  },
  {
    name: 'Dr Monica Dickson',
    description:
      'Monica graduated from University of Queensland in Veterinary Science over 30 years ago and worked initially in mixed practice followed by working as a small animal veterinarian.<br/><br/>After discovering the joys of motherhood, Monica had a long career break while raising a large family of 6 sons and 1 daughter.<br/><br/>When her youngest child had settled into school, Monica returned to practising as a veterinarian and loves the variety her career provides from working in the sheep health field with farmers and offering home euthanasia for pets.<br/><br/>As pets are much beloved members of the family, Monica believes that when the time has come to say goodbye, being able to facilitate this in a pet’s own home is the most comforting way to ensure grace and dignity for both pet owners and their pets.',
    image: '/images/Monica-Dixon.jpg',
  },
  {
    name: 'Dr Kym Tapley',
    description:
      'Dr Kym graduated from Murdoch University in 1998 and began her veterinary career in mixed practice but has been working in small animal practice since beginning a family. She has been a passionate animal lover her whole life and has never been without at least one furry family member in her home, oftentimes outnumbering the human kids! Her current dog is a very determined Miniature Dachshund who is always looking for cuddles, treats or something to bark at.<br/><br/>Kym is passionate about ensuring that all her patients have the best quality of life possible. She takes great comfort in being able to ease her patients suffering in the most gentle way possible when the time comes to say goodbye and providing emotional support to the family members at such a difficult time. She particularly loves working for The Kindest Goodbye, allowing these precious furry friends to be put to sleep in their own comfortable surroundings rather than the stress of a clinic, and so their family are able to go through such a sad occasion in the privacy of their home.',
    image: '/images/Dr-Kym-Tapley.jpg',
  },
  {
    name: 'Dr Lauren Davis',
    description:
      'After graduating in 2013 from Sydney University, Lauren began practising as a small animal veterinarian in a little clinic in the eastern suburbs of Melbourne where she grew up. She instantly loved her job and enjoyed building relationships with her clients and patients, a number of which she cared for from their puppyhood into their geriatric years. Although she found this deeply rewarding, clinical practice was busy, and it was often difficult to facilitate home visits around a busy practice schedule, particularly as the sole vet on duty. Despite the desperate need for home visits for pets and owners alike, there were times she simply couldn’t be there, and on more than one occasion it broke her heart to have to say no.<br/><br/>This inspired her journey to become a home visiting veterinarian. She feels very privileged to be able to allow pets and their families to say goodbye in their own way and in the most peaceful way possible.',
    image: '/images/Lauren-Davis.jpg',
  },
  {
    name: 'Dr David Kahl',
    description:
      'Dr Dave is an experienced veterinarian with further training in end of life care for pets. He grew up on a farm in Central Queensland surrounded by an assortment of pets and animals which is where he developed a strong bond and empathy with pets.<br/><br/>Growing up with animals led Dr Dave to undertake a Bachelor’s degree in Veterinary Science with Honours at the University of Queensland. He has since practised veterinary medicine and surgery in both general practice and emergency before finding that his kind and compassionate nature could help pet owners through their difficult times.<br/><br/>Dr Dave believes that euthanasia can be our final gift to our beloved pets to prevent suffering and ensure their last days are good days. This is why providing this opportunity to Sunshine Coast pet owners is so important to him.',
    image: '/images/David-Kahl.jpg',
  },
  {
    name: 'Dr Shagufta (Sha) Singh',
    description:
      'Dr Sha graduated from Massey University (New Zealand) and has worked as a companion animal veterinarian in NZ and Australia since. Sha takes great pride in her role as a companion animal veterinarian and is low stress handling certified. She has worked in busy clinical practice, tele med and palliative care before committing to mobile veterinary practice.<br/><br/>Having said goodbyes to her own pets in the past, she does everything she can to ensure the journey is as calm and peaceful for you and your pet as possible. She feels grateful that we can help families say goodbye to their beloved pets in the most loving way possible: surrounded by family in the comfort of their home. She has been an animal lover, her whole life and loves that her veterinary career helps her serve pets and in the comfort of their home.',
    image: '/images/Sha-cropped.jpg',
  },
  {
    name: 'Dr Louise Grey',
    description:
      'Dr Louise Grey graduated from the University of Sydney in 2004 and spent a few years there before moving to Canberra in 2009 with her husband. She fell in love with the Bush Capital immediately. Between work in clinic she’s produced a few kids and acquired a range of pets: a dog, a cat, two rats and a Hay’s flat coiled snail. Dr Louise has a passion for all things small and squeaky and has devoted herself to the care of exotic pets in addition to dogs and cats.<br/><br/>At the end of life it is so important to have the time to say goodbye, in an environment that supports everyone as much as possible, and home is often the best place for this. It is a privilege to be able to help families give their precious pet a loving and kind final goodbye and Dr Louise has found a new personal passion in being there for families and helping them provide this for their pet.',
    image: '/images/Louise-Grey.jpg',
  },
  {
    name: 'Dr Abby Masters',
    description:
      'Dr Abby graduated from the University of QLD in 2013 where she completed a small animal internship before moving on to mostly small animal practice. She has had the privilege to work in the Northern Territory treating some of Australia’s most beautiful and impressive wildlife as well as being involved in rural and regional community dog health programs.Now she has returned to her home town and resides in The Southern Highlands NSW with her young family, where she is focussed on providing veterinary support for families within their own home.<br/><br/>Dr Abby values the importance of providing a safe and comfortable journey for pets and their owners at this difficult time of life and is happy to be able to help families through the end of life transition in the comfort of their own homes.',
    image: '/images/Dr-Abby-Masters.jpg',
  },
  {
    name: 'Dr Kate',
    description:
      'Dr Kate is an experienced Veterinarian with a special interest in end-of-life care. Growing up on a cattle property in NSW, she has always had a furry companion by her side. She treasures the beautiful bond humans & animals can form. After graduating from the University of QLD in 2012, Dr Kate found her passion in small animal practice, focusing on holistic well-being. She has flourished in palliative care, ensuring older pets have a pain-free and high-quality life.<br/><br/>Dr Kate is grateful for the privilege of providing peaceful euthanasia services & aims to make this moment filled with love & cherished memories. She strives to offer a kind & calm goodbye, addressing both the mental & physical needs of pets in their final moments.',
    image: '/images/Dr-Kate.jpg',
  },
  {
    name: 'Dr Henriette van der Westhuizen',
    description:
      'Henriette was born in South Africa, and qualified as a vet at Onderstepoort, Pretoria in 2005. She worked as a small animal vet in Cape Town and later Pretoria for about 3 years. After getting married in 2008, she and her husband decided to make the big move to Australia, along with their miniature Schnauzer and two cats. The best decision ever! They absolutely love the people, freedom, nature and quality of life here.<br/><br/>Between 2009-2020 Henriette worked in multiple mainly small animal clinics, and gained a lot of experience over a very broad range of conditions. In 2020, while still working part time in a very busy small animal hospital, she decided to start her own business, focusing mainly on home-based end-of-life care of pets. She soon discovered that doing this well, with care, respect, compassion and with the comforts of home, makes such a big difference to pets and their families, and is now focusing just on this full time.',
    image: '/images/Henriette-van-der-Westhuizen.png',
  },
  {
    name: 'Dr Josie Ginty',
    description:
      'Dr Josie grew up in Sydney, studied at The Australian National University and Melbourne University, and now lives with two birds and two dogs on the Central Coast. She works part-time in Mixed Practice, providing professional and compassionate care to every creature from guinea pigs to goats.<br/><br/>Kindness is at the centre of all veterinary practice, and Josie strives to bring this philosophy to every encounter. She believes it is a privilege to be able to grant peaceful end of life care to pets in the comfort of their own home – whether it be snuggled up on the couch, in a patch of sunlight in the garden, or snuggled up on the lap of the people they love.<br/><br/>Favourite quote: “The pain I feel now is the happiness I had before. That’s the deal.” – C.S. Lewis',
    image: '/images/Dr-Josie-Ginty.jpg',
  },
  {
    name: 'Dr Gen Dwyer',
    description:
      'Gen graduated from the University of Sydney in 2017 and worked in country practice in central NSW for several years before returning to her home of Sydney. She has since undergone an internship at a specialty hospital and attained membership in small animal medicine with the ANZCVS. Gen has recently been travelling and working as vet throughout Australia and New Zealand filling in locum positions – combining her two passions of veterinary work & exploring new places.<br/><br/>Gen knows it is a privilege to be able to provide end of life care for a beloved pet, and strives to make this difficult time as comfortable and stress free as possible.',
    image: '/images/Dr-Gen-Dwyer.jpg',
  },
  {
    name: 'Dr Jared',
    description:
      'Dr Jared has been in the veterinary industry in one form or another for over 20 years. Originally from the USA , Dr. Jared moved to Perth to study Veterinary Medicine at Murdoch University where he graduated in 2011. After graduation, he returned to the USA for a short time before moving back to Perth permanently in 2013. Dr. Jared is kept busy by his wife and three kids, and their pet pug Winnie.<br/><br/>After working as a vet in private practice he became aware of just how special the at-home euthanasia process can be when he helped his own pet pass peacefully in the comfort of home. Shortly after that time, Dr Jared decided to devote his time and efforts to providing a peaceful, private, and dignified experience when it is time to say goodbye and he now works exclusively to deliver this important service.',
    image: '/vets/aisha.jpg',
  },
  {
    name: 'Dr Amy Andrew',
    description:
      'Dr Amy is based on the north side of Adelaide with her partner, baby and fur baby (a Siberian cat). She graduated from Charles Sturt University and has since been working in mixed practice in the Adelaide Hills and also as a registered nurse for a number of years.<br/><br/>Her work as a veterinarian and as a registered nurse has provided her with an insight into our ability as pet owners to be able to end suffering for our beloved pets, friends and companions. We have the gift of allowing a dignified and loving farewell. Having had to say farewell to her own beloved pets over the years, she has realised how difficult it can be, so understands the emotions that families face during this time.',
    image: '/vets/aisha.jpg',
  },
  {
    name: 'Dr Kate Thompson',
    description:
      'Dr Kate Thompson graduated from the University of Melbourne. Once graduated she initially went into mixed practice in Western Victoria. Since graduating she has worked across Victoria, Melbourne and the UK.<br/><br/>More recently Dr Kate has worked in equine practice and has extensive experience in medicine and has a passion for equine dentistry.<br/><br/>Kate enjoys all aspects of veterinary practice. She feels especially privileged and grateful that she can help people achieve a peaceful passing of their beloved pets at home. Allowing people to say goodbye in their own time and at home where they are most comfortable.',
    image: '/vets/aisha.jpg',
  },
  {
    name: 'Dr Aoibheann Clarke',
    description:
      'Aoibheann (pronounced Aveen) was born in Ireland and qualified as a vet at the University College Dublin (UCD) in 2009. After working for 2 years in mixed practice in Northern Ireland, she moved to Melbourne in 2012 and has been working in small animal practices since. She lives on the Mornington peninsula with her family.<br/><br/>Knowing the hardship in letting beloved pets go, she will do everything to make the journey calm and peaceful for your pet. She believes that euthanasia, while heartbreaking, provides a kind release for those suffering and feels that it is a privilege to help people and their pets during this difficult time.',
    image: '/vets/aisha.jpg',
  },
  {
    name: 'Dr Tarley McPadden',
    description:
      'Dr Tarley graduated from Murdoch University in 2011. She worked in a mixed practice clinic in regional Victoria for 5 years before returning to Geelong to raise her family. Dr Tarley believes that being able to say goodbye to your beloved pet in the comfort of your own home is an amazing final gift for your pet. Dr Tarley aims to allow pets to pass peacefully surrounded by their human and furry loved ones while also celebrating their life together.<br/><br/>In addition to facilitating peaceful passing of pets at home, Dr Tarley works in a GP practice and has a keen interest in palliative and hospice care.',
    image: '/vets/aisha.jpg',
  },
  {
    name: 'Dr Taylah Locastro',
    description:
      'Dr Taylah is a kind and gentle veterinarian who is passionate about creating a meaningful & peaceful environment for your pet’s goodbye. She is friendly and calm in her approach, helping to ease any fear or stress during this time. Dr Taylah takes her time to get to know you and your precious furbaby, so there is no need to feel rushed.<br/><br/>When Dr Taylah isn’t helping with peaceful goodbyes, she works within the local veterinary community assisting in emergency, providing in-home palliative care, holistic veterinary options such as CBD oil, and volunteers for those in need with Pets In The Park.',
    image: '/vets/aisha.jpg',
  },
  {
    name: 'Dr Thomas Andrew',
    description:
      'Dr Tom graduated from James Cook University in 2017. He started his career working in mixed practice in South Gippsland where he worked with large and small animals for over 2 years. He then went far and wide to pursue further training in busy referral practices in Queensland and Western Australia. For several years he has been working in emergency and specialist referral clinics.Throughout his time working in the hospital environment, Tom saw the opportunity for less stressful end of life care for pets and their owners. This led Dr Tom to start working with TKG, where he now works passionately to provide the most peaceful euthanasia care for pets in the comfort of their own home. Tom has a keen interest in pain management in geriatric pets, managing chronic diseases and palliative care.Pictured is Tom with his best friend Barney, gone but never forgotten.',
    image: '/vets/aisha.jpg',
  },
  {
    name: 'Dr Josh',
    description:
      'Josh is a small animal veterinarian with a passion for geriatric medicine and end of life care. He works to ensure the wellbeing and comfort of both his clients and their pets. Outside of work you can find him gardening or catching a flight',
    image: '/vets/aisha.jpg',
  },
  {
    name: 'Dr Beck Whiting',
    description:
      'Beck graduated from The University of Melbourne and is a Geelong local. Caring for pets is her passion, and after recently becoming a mum, she has been reminded of the vital relationships pets create in a family.<br/><br/>Early in her career Beck grasped the significance of a peaceful euthanasia process, both for pets and their families, and feels it is privileged to be able to provide this service in what is often a difficult moment.',
    image: '/vets/aisha.jpg',
  },
  {
    name: 'Dr Sandra Macheroux',
    description:
      'Dr Sandra graduated in 1993 from the University of Sydney. She has attained her Memberships in Small Animal Medicine (ANZCVS) and a Diploma in Professional Photography.<br/><br/>She has travelled and lived all over the world. She has practised vet science in the UK, Hong Kong, Singapore, Thailand and Australia.<br/><br/>She has a passion for philosophy, animal welfare and end of life care for pets. She is also a proud mum of two teenagers and Buddy, an adopted and much loved dog.<br/><br/>Favourite quote: “Do what you can, with what you have, where you are.” ―Theodore Roosevelt.',
    image: '/vets/aisha.jpg',
  },
  {
    name: 'Dr Mel Hayde',
    description:
      'Dr Mel has been caring for Melbourne’s pets for over 20 years, and has always enjoyed seeing the special bonds and love that people share with their furry friends.<br/><br/>She knows how heartbreaking it is when we have to say goodbye to them, so hopes to make the end-of-life journey a little bit easier by providing a gentle and peaceful passing for your beloved pet, allowing you to be together in the comfort of your own home during this very sad time.',
    image: '/vets/aisha.jpg',
  },
  {
    name: 'Dr Melissa Closter',
    description:
      'Melissa Closter graduated from university then spent some time working in Canberra before moving back to her home town Melbourne with her dog, Luna. She enjoys working with dogs and cats as well as other small creatures such as birds, rabbits and reptiles.<br/><br/>Dr Melissa feels privileged to be able to provide love and care for pets and their families at all stages of life, and is deeply passionate about creating peace and comfort when it is time to say goodbye.',
    image: '/vets/aisha.jpg',
  },
  {
    name: 'Dr Sam Marzouk',
    description:
      'Sam received a Bachelor of Veterinary Science (Hons) from the University of QLD.<br/><br/>After working in mixed practice for seven years, he moved to Sydney where as well as performing peaceful home euthanaisa for pets, he works as an emergency vet in both general practice and specialist hospitals.<br/><br/>In his spare time, I enjoy spending time with family & friends and his 1-year-old cat Tiger!',
    image: '/vets/aisha.jpg',
  },
];

const Ourvets = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Meet Our Vets
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {vets.map((vet, index) => (
          <div
            key={index}
            className=" overflow-hidden transform transition hover:scale-105 duration-300"
          >
            <div className="relative w-full h-56">
              <Image
                src={vet.image}
                alt={vet.name}
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                {vet.name}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{vet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourvets;
