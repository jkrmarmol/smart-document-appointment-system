import Calendar from 'react-calendar';
import '@/public/styles/Calender.css';
import { Poppins } from 'next/font/google';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setOrderDataSchedule } from '@/store/kiosk/orderSlice';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '900'],
  subsets: ['latin']
});

export default function Schedule() {
  const dispatch = useAppDispatch();
  const selectOrderDataSchedule = useAppSelector((state) => state.kioskOrder.orderData.schedule);
  const disabledDates = [new Date(2024, 9, 10), new Date(2024, 9, 20), new Date(2024, 9, 3)];

  const isDisabledDate = (date: Date) => {
    return (
      date < new Date() ||
      disabledDates.some(
        (disabledDate) =>
          date.getFullYear() === disabledDate.getFullYear() &&
          date.getMonth() === disabledDate.getMonth() &&
          date.getDate() === disabledDate.getDate()
      )
    );
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0;
  };

  return (
    <>
      <div className="mb-12 mt-4">
        <h3 className="text-lg font-semibold">Shipping Options</h3>
        <p className={`mb-4 text-sm text-black/30 ${poppins.className} font-medium`}>
          Please verify your order before you proceed
        </p>
      </div>
      <div className="h-[50vh] space-y-2 overflow-y-auto overflow-x-hidden p-5">
        <Calendar
          onChange={(e) => dispatch(setOrderDataSchedule(e as any))}
          value={selectOrderDataSchedule}
          tileDisabled={({ date, view }) => (view === 'month' && isDisabledDate(date)) || isWeekend(date)}
        />
      </div>
    </>
  );
}
