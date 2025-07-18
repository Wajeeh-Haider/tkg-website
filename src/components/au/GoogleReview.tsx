'use client';

import React, { useRef } from 'react';

const reviews = [
    {
        id: 1,
        name: 'Emily Maguire',
        date: "2025-05-27",
        rating: 4,
        text: 'Dr Claire was absolutely amazing in the support that she offered me and my very old cat as she was put down. She bought treats with her, and explained the process really clearly. The service was easy to book and they had a really good pre-attendance questionnaire that asked about preferences during the euthenasia process.'
    },
    {
        id: 2,
        name: 'Suzie Bull',
        date: "2025-05-26",
        rating: 5,
        text: 'The staff on the phone as well as the vet who attended were compassionate, sensitive, caring, understanding, patient, empathetic and made me feel listened to. They genuinely cared for my fur baby and made the experience of saying goodbye in my home a warm and loving experience. Such an amazing eye for detail too for both my fur baby and myself. Big shout out and heartfelt thank you to Aoibhean, Andrea and Tom. Highly highly recommend the team.'
    },
    {
        id: 3,
        name: 'Maia Smyth',
        date: "2025-05-24",
        rating: 5,
        text: 'Dr Sha Singh was such a wonderful presence and made sure our cat Zeus was comfortable and peaceful the whole way through the process. She made it a lot easier for us, explained how he was feeling and what would happen. It was a nice way to go, on his bed with his family around. Thank you'
    },
    {
        id: 4,
        name: 'Vicki Dunne',
        date: "2025-05-18",
        rating: 5,
        text: 'I have put off this review for a while now because it seemed a little strange but the team at the Kindest Goodbye and the amazing Louise Grey deserve the highest praise for the work they do. When our family came to the time of saying goodbye to our beautiful Elly, we had a beautiful but solemn time brought about by the caring assistance of Louise. I cannot thank the team enough for their care.'
    },
    {
        id: 5,
        name: 'Sahra Ashford',
        date: "2025-05-11",
        rating: 5,
        text: 'Highly recommend The kindest goodbye.. We had Dr Sha Singh and she was so incredibly warm, caring and kind. The whole experience was so peaceful and she did an amazing job at sending off our beautiful 16yo Bentley boy. Thank you!'
    },
    {
        id: 6,
        name: 'Anoushka Roman',
        date: "2025-05-2",
        rating: 5,
        text: 'After a heartbreaking decision on Christmas Eve, we had to make a painful decision to say goodbye to our beautiful Kira who was 14 years and 9 months old. The kindest Goodbye was recommended by 2 of my closest friends who had used the service. Dr Elbaali Was amazing, he was caring and reassured me that it was her time, which made me feel at ease. He took the time to explain everything to us. He was so gentle with her when he picked her up to take her away. The service was amazing and our beloved Kira was returned back home after a few short weeks Thank you to the team at The Kindest Goodbye'
    },
    {
        id: 7,
        name: 'Monica Keskitalo',
        date: "2025-03-28",
        rating: 5,
        text: 'Thank you to the team at The Kindest Goodbye. Your service is outstanding. A HUGE thank you to Dr. Sha Singh, I really could not have asked for a more beautiful soul to assist me with this heartbreaking procedure. Your compassion, patience, empathy, professionalism and kindness will be remembered forever and a day. Thank you Dr.Sha. I hope I can request you when I need you again. Peace and love to you, you are an angel.'
    },
    {
        id: 8,
        name: 'Melissa Thang',
        date: "2025-03-18",
        rating: 5,
        text: 'A heartfelt thank you to Dr. Chad Elbaali and the entire team for their incredible care from start to finish. Dr. Chad was exceptionally patient, gentle, and compassionate - not only with our beloved Maxy but with our entire family throughout the process. It was clear that Maxy felt comfortable with him, which made our goodbye even more meaningful. The team was also incredibly responsive to all of our questions, and we couldn’t be more grateful for the beautiful service they provided.'
    },
];

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.567-.955L10 0l2.945 5.955 6.567.955-4.756 4.635 1.122 6.545z" />
  </svg>
);

const GoogleReviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">What Our Customers Say</h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          &lt;
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth px-10"
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-[300px] max-w-[300px] flex-shrink-0 bg-gray-100 rounded-xl p-4 shadow-md"
            >
              <div className="flex flex-col space-y-1 mb-3">
                <h3 className="font-semibold text-md text-gray-800">{review.name}</h3>
                <span className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} filled={i < review.rating} />
                ))}
              </div>
              <p className="text-gray-700 text-sm line-clamp-5">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default GoogleReviews;
