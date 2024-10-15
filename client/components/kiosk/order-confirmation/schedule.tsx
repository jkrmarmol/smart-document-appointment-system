import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '@/public/styles/Calender.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '900'],
  subsets: ['latin']
});

export default function Schedule() {
  const [value, setValue] = useState<Date | null>(new Date());
  const disabledDates = [
    new Date(2024, 9, 10),
    new Date(2024, 9, 20),
    new Date(2024, 9, 3)
  ];

  const isDisabledDate = (date: Date) => {
    return disabledDates.some(
      (disabledDate) =>
        date.getFullYear() === disabledDate.getFullYear() &&
        date.getMonth() === disabledDate.getMonth() &&
        date.getDate() === disabledDate.getDate()
    );
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0;
  };

  console.log(value);
  return (
    <>
      <div className="mb-12 mt-4">
        <h3 className="text-lg font-semibold">Shipping Options</h3>
        <p
          className={`mb-4 text-sm text-black/30 ${poppins.className} font-medium`}
        >
          Please verify your order before you proceed
        </p>
      </div>
      <div className="h-[50vh] space-y-2 overflow-y-auto overflow-x-hidden p-5">
        <Calendar
          onChange={(e) => setValue(e as any)}
          value={value}
          tileDisabled={({ date, view }) =>
            (view === 'month' && isDisabledDate(date)) || isWeekend(date)
          }
        />
      </div>
    </>
  );
}
