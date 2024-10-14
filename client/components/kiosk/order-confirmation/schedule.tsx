import { X } from 'lucide-react';
import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '900'],
  subsets: ['latin']
});

export default function Schedule() {
  return (
    <>
      <div className="mb-12 mt-4">
        <h3 className="text-lg font-semibold">Shipping Options</h3>
        <p className="mb-4 text-xs text-black opacity-60">
          Please verify your order before you proceed
        </p>
      </div>
      <div className="space-y-2">
        {['Summary of Grades', 'Diploma'].map((item) => (
          <div
            key={item}
            className="relative flex flex-col justify-between rounded-lg bg-blue-50 px-8 py-4"
          >
            <button className="absolute -right-2 -top-2 rounded-full bg-red-500 p-0.5">
              <X className="h-5 w-5" color="#fff" />
            </button>
            <span className={`${poppins.className} text-sm font-semibold`}>
              {item}
            </span>
            <span
              className={`${poppins.className} text-sm font-medium opacity-60`}
            >
              P100.00
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
