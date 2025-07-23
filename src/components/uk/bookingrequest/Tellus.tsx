// app/components/StepOneForm.tsx (or wherever you're organizing your components)
'use client';

import { useState } from 'react';

export default function Tellus() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    postcode: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    city: '',
    postcode: '',
    email: '',
    phone: '',
  });

  const validate = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.city.trim()) newErrors.city = 'City/County is required';
    if (!formData.postcode.trim()) newErrors.postcode = 'Postcode is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // proceed to next step
      console.log('Validated data:', formData);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="flex justify-center mb-10 w-full">
        <div className="w-full flex gap-6 justify-center items-center bg-[#e5f2f2] p-3 rounded-md">
          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 rounded-full border-2 border-teal-600 flex items-center justify-center text-sm font-medium">
              1
            </div>
            <span className="text-sm font-medium text-teal-800">Me</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium text-gray-500">
              2
            </div>
            <span className="text-sm text-gray-500">My Pet</span>
          </div>
        </div>
      </div>

      <h2 className="text-center  text-[#404040] text-[40px] font-bold font-sans mb-12">
        Tell us about you
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-[#404040] text-sm font-sans">
            My name is <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            className={`border-b w-full py-2 focus:outline-none ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* City */}
        <div>
          <label className="block text-gray-700">
            I live in the county/city of <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="city"
            className={`border-b w-full py-2 focus:outline-none ${
              errors.city ? 'border-red-500' : 'border-gray-300'
            }`}
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>

        {/* Postcode */}
        <div>
          <label className="block text-gray-700">
            and my postcode is <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="postcode"
            className={`border-b w-full py-2 focus:outline-none ${
              errors.postcode ? 'border-red-500' : 'border-gray-300'
            }`}
            value={formData.postcode}
            onChange={handleChange}
          />
          {errors.postcode && (
            <p className="text-red-500 text-sm mt-1">{errors.postcode}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700">
            My best contact email is <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={`border-b w-full py-2 focus:outline-none ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700">
            or you can call me on <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className={`border-b w-full py-2 focus:outline-none ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-teal-700 text-white px-6 py-2 rounded hover:bg-teal-800 transition"
          >
            NEXT
          </button>
        </div>
      </form>
    </div>
  );
}
