'use client';

import React, { useState } from 'react';
import Button from '@/components/Button';
import Link from 'next/link';

const totalSteps = 11;

const stepsContent = [
  {
    type: 'intro',
    title: 'Journeys Quality of Life Scale',
    description: `For each variable there is an assigned value of 5 points with an example for scores of 1, 3 and 5 as guidance. Use your judgment to decide how your pet scores. Example: E – Eating and Drinking, if your pet “only eats treats” you may assign a value of 2 or 3 - higher than 1 which is not eating at all, but less than 4 which is eating slightly less of their regular food than is normal for them.`,
  },
  {
    type: 'question',
    title: 'J: Jumping or Mobility',
    points: [
      { score: 1, text: ' Your pet cannot walk or stand without assistance.' },
      {
        score: 3,
        text: ' Your pet can move around as long as he/she has their pain medication. They can do about half the activities they did when they were healthier, or can get about half the distance on a walk, or spend half the time doing their activities (chasing a Frisbee, swimming, hunting) as they used to.',
      },
      {
        score: 5,
        text: 'Your pet is fully active and enjoying all their activities.',
      },
    ],
  },
  {
    type: 'question',
    title: 'O: Ouch or Pain',
    points: [
      {
        score: 1,
        text: 'Your pet seems painful (whining, crying, not willing to move) even while taking pain medication. Note: many animals will hide pain or weakness as a survival trait.',
      },
      {
        score: 3,
        text: ' Your pet is on pain medications and they are helping at least 75% of the time.',
      },
      { score: 5, text: ' Your pet is pain free.' },
    ],
  },
  {
    type: 'question',
    title: 'U: Uncertainty and Understanding (factors that affect YOU)',
    points: [
      {
        score: 1,
        text: 'Your pet has a diagnosis (medical condition) that cannot be predicted. You may not understand the diagnosis, or the problem may be prone to sudden, catastrophic events.',
      },
      {
        score: 3,
        text: 'Your pet has a medical condition that can change over time, is currently stable, and you are able to monitor it (with the help of your veterinarian) and make adjustments when necessary. You understand what to watch for, the treatment plan, and when your pet needs medical attention.',
      },
      {
        score: 5,
        text: 'Your pet is happy and healthy; there are no medical issues beyond routine preventative care.',
      },
    ],
  },
  {
    type: 'question',
    title: 'R: Respiration or Breathing',
    points: [
      {
        score: 1,
        text: ' Your pet has severe episodes of difficulty breathing, coughing or open mouth breathing. They are not eating or drinking in an effort to breathe. At this point you should seek immediate medical attention for your pet.',
      },
      {
        score: 3,
        text: ' Your pet has occasional bouts of coughing, wheezing, or exercise intolerance. They are short (less than 2 minutes) and they are on medication from your veterinarian that can be adjusted to help.',
      },
      {
        score: 5,
        text: 'Your pet has no coughing, wheezing, or exercise intolerance.',
      },
    ],
  },
  {
    type: 'question',
    title: 'N: Neatness or Hygiene',
    points: [
      {
        score: 1,
        text: 'Your pet spends time laying in their urine and/or feces. They may be unable to control their elimination, or be unable to move after elimination. Your pet may have an external tumor or mass that is bleeding, foul smelling, and infected, and you are unable to keep it clean and/or bandaged. Your pet may have pressure sores (bed sores) from lying down and being unable to move.',
      },
      {
        score: 3,
        text: 'Your pet may need assistance to urinate/defecate but they do not spend time lying in their waste. They are able to hold their urine/feces until they get assistance. They may have an external tumor or mass, but it can be kept clean and/or bandaged and it is not infected. They groom themselves, but may need assistance in some areas (example-rear end).',
      },
      {
        score: 5,
        text: ' Your pet can urinate, defecate, and groom themselves without assistance. They have no medical issues that are causing them to have a bad odor. You can provide any care issues to address their hygiene (baths, trip to the groomer, anal gland expression, teeth cleaning, etc.)',
      },
    ],
  },
  {
    type: 'question',
    title: 'E: Eating and Drinking',
    points: [
      {
        score: 1,
        text: ' Your pet is refusing food and water. They may be vomiting or having diarrhea (or both). They may be nauseous. Cats may “hang out” at the water bowl, next to it, or with their heads hanging over it.',
      },
      {
        score: 3,
        text: 'Your pet is eating more slowly, and is not as interested in food as they used to be. They may go back several times before they finish a meal. They are eating slightly less than usual, but are eating their regular food.',
      },
      { score: 5, text: ' Your pet is eating and drinking normally.' },
    ],
  },
  {
    type: 'question',
    title: 'Y: You',
    points: [
      {
        score: 1,
        text: ' You are constantly worried about your pet. You may not understand what is happening to them. You feel overwhelmed and stressed trying to provide for their needs. You may feel you are unable to provide for their needs physically, emotionally, or financially. You may be worried about how they will fare when you are away on an upcoming trip. There may be tension in the family and disagreement on how to proceed.',
      },
      {
        score: 3,
        text: 'You understand your pet’s condition, and are able, with some effort, to meet their needs. You may have concerns, but they are manageable.',
      },
      {
        score: 5,
        text: ' You are easily able to meet your pet’s needs, and not worried about any aspect of their care.',
      },
    ],
  },
  {
    type: 'question',
    title: 'S: Social Ability',
    points: [
      {
        score: 1,
        text: 'Your pet does not spend time with the family. They may hide, become irritable or snippy if bothered. Some pets that do not enjoy being petted may not seem to care if they are petted. Perhaps your pet is unable physically to get to the room where they usually spend time with others.',
      },
      {
        score: 3,
        text: 'Your pet spends at least half the time with the family. They are not irritable or snippy. They happily greet you when you come home.',
      },
      {
        score: 5,
        text: 'Your pet enjoys you, the family, and others (including other animals they may know), greets you at the door when you arrive home, and seeks out company.',
      },
    ],
  },
  {
    type: 'total',
    title: 'JOURNEYS Quality of Life Scale - Total',
    description: `There are no hard and fast rules to how to interpret the score, although in general a higher score is obviously better. A score of 40 is a happy, healthy pet. A score of 8 is a pet that is really suffering, however a low score on any of the individual areas of assessment may be a reason to consider euthanasia.`,
  },
  {
    type: 'Next Steps',
  },
];

export default function Journey() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedScores, setSelectedScores] = useState<{
    [key: number]: number;
  }>({});
  const [showButtons, setShowButtons] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const step = stepsContent[currentStep - 1];
  const progress = Math.round((currentStep / totalSteps) * 100);

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSelectScore = (score: number) => {
    setSelectedScores({ ...selectedScores, [currentStep]: score });
  };

  const getTotalScore = () => {
    return Object.entries(selectedScores)
      .filter(([stepNum]) => parseInt(stepNum) >= 2 && parseInt(stepNum) <= 9)
      .reduce((sum, [, score]) => sum + score, 0);
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    option: number
  ) => {
    if (option === 1) {
      setShowButtons(e.target.checked);
      if (e.target.checked) setShowForm(false); // Uncheck the other option
    } else if (option === 2) {
      setShowForm(e.target.checked);
      if (e.target.checked) setShowButtons(false); // Uncheck the other option
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-6 py-10">
      <div className="w-full max-w-3xl">
        {/* Progress Bar */}
        <p className="text-sm font-sans mb-2">
          Step {currentStep} of {totalSteps}
        </p>
        <div className="w-full bg-[#e5f2f2] h-5 rounded-full overflow-hidden mb-10">
          <div
            className="bg-[#0e797d] h-full flex items-center justify-center text-white text-[13px] transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>

        {/* Main Content */}
        {step.type === 'intro' && (
          <>
            <h1 className="text-[22px] md:text-[32px] font-serif text-[#404040] mb-6">
              {step.title}
            </h1>
            <p className=" font-sans text-[#404040] text-sm leading-relaxed">
              <span className="font-bold font-sans text-[#404040] text-sm">
                Instructions:&nbsp;
              </span>
              {step.description}
            </p>
          </>
        )}

        {step.type === 'question' && (
          <>
            <h2 className="text-[17.5px] font-sans text-[#404040] mb-6">
              {step.title}
            </h2>
            <p className="font-sans text-[#404040] text-[13px] leading-relaxed pb-1">
              Scale point to consider.
            </p>
            <div className="font-sans text-[#404040] text-sm leading-relaxed space-y-4">
              {step.points &&
                step.points.map((point) => (
                  <p key={point.score}>
                    <span className="font-sans text-[#404040] text-sm font-bold m-0">
                      {point.score}pt:{' '}
                    </span>
                    {point.text}
                  </p>
                ))}
            </div>

            <div className="flex gap-4 mb-6 pt-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => handleSelectScore(num)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold
                    ${
                      selectedScores[currentStep] === num
                        ? 'bg-[#0e797d] text-white'
                        : 'bg-[#0e797d33] text-[#404040] hover:bg-gray-300'
                    }
                  `}
                >
                  {num}
                </button>
              ))}
            </div>
          </>
        )}
        {/* total pet journey */}
        {step.type === 'total' && (
          <>
            <h2 className="text-[25px] md:text-[32px] font-serif text-[#404040] mb-4">
              {step.title}
            </h2>
            <p className="text-sm font-sans text-[#404040] mb-6 leading-relaxed">
              {step.description}
            </p>
            <p className="text-sm font-sans text-[#404040] pb-4">
              Total for my pet
            </p>
            <p className="text-sm font-sans text-[#404040]">
              {getTotalScore()}
            </p>
          </>
        )}

        {step.type === 'Next Steps' && (
          <>
            <h2 className="text-[17px] font-sans text-[#404040] mb-4">
              Next Steps
            </h2>
            <div className="text-gray-700 mb-6 space-y-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showButtons}
                  onChange={(e) => handleCheckboxChange(e, 1)}
                  className="form-checkbox h-5 w-5 text-teal-700"
                />
                <span className="text-sm font-sans text-[#404040]">
                  Book a home euthanasia for your pet
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showForm}
                  onChange={(e) => handleCheckboxChange(e, 2)}
                  className="form-checkbox h-5 w-5 text-teal-700"
                />
                <span className="text-sm font-sans text-[#404040] pl-2 md:pl-0 leading-6">
                  Organise a callback from one of our team to discuss your pet's
                  quality of life
                </span>
              </label>
            </div>

            {showButtons && (
              <div className="flex flex-wrap items-center  gap-2 md:gap-4 mb-6">
                <Link href="/uk" aria-label="Request an appointment">
                  <Button
                    label="REQUEST AN APPOINTMENT"
                    className="hover:gap-2 hover:opacity-80 bg-[#0e797d] transition text-white text-[13px] lg:text-[15px] font-medium px-4 py-3 lg:px-6 lg:py-3"
                  />
                </Link>

                <p className="text-sm text-gray-700">or</p>

                <Link href="tel:0330 2366 999" aria-label="Call us">
                  <Button
                    label="CALL US"
                    className="hover:gap-2 hover:opacity-80 bg-[#0e797d] transition text-white text-[13px] lg:text-[15px] font-medium px-4 py-3 lg:px-6 lg:py-3"
                  />
                </Link>
              </div>
            )}

            {showForm && (
              <div className="mb-6 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
                <button className="px-6 py-2 bg-teal-700 text-white rounded hover:bg-teal-800 transition">
                  SUBMIT
                </button>
              </div>
            )}
          </>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8">
          {currentStep > 1 && (
            <Button
              onClick={handlePrevious}
              label="PREVIOUS"
              className="px-6 py-3 bg-[#FEFBF8] border border-[#0e797d] text-[#0e797d] rounded hover:bg-teal-800 transition"
            />
          )}
          {currentStep < totalSteps && (
            <Button
              onClick={handleNext}
              label="NEXT"
              className="px-6 py-3 bg-teal-700 text-white rounded hover:bg-teal-800 transition"
            />
          )}
        </div>
      </div>
    </div>
  );
}
