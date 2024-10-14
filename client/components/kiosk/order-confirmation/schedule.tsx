import { X } from 'lucide-react';
import { Poppins } from 'next/font/google';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '900'],
  subsets: ['latin']
});

export default function Schedule() {
  const [value, setValue] = useState<Date | null>(new Date());
  const disabledDates = [
    new Date(2023, 9, 10), // October 10, 2023
    new Date(2023, 9, 15), // October 15, 2023
    new Date(2023, 9, 20) // October 20, 2023
  ];

  const isDisabledDate = (date: Date) => {
    return disabledDates.some(
      (disabledDate) =>
        date.getFullYear() === disabledDate.getFullYear() &&
        date.getMonth() === disabledDate.getMonth() &&
        date.getDate() === disabledDate.getDate()
    );
  };
  console.log(value);
  return (
    <>
      <div className="mb-12 mt-4">
        <h3 className="text-lg font-semibold">Shipping Options</h3>
        <p className="mb-4 text-xs text-black opacity-60">
          Please verify your order before you proceed
        </p>
      </div>
      <div className="space-y-2">
        <Calendar
          onChange={(e) => setValue(e as any)}
          value={value}
          tileDisabled={({ date, view }) =>
            view === 'month' && isDisabledDate(date)
          }
        />
      </div>
    </>
  );
}
