import React, { useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';
import { PhilippinePeso } from 'lucide-react';
import { PaymentOptions } from '@prisma/client';
import { fetchAllPaymentMethods } from '@/server/kiosk';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setOrderDataPaymentMethod } from '@/store/kiosk/orderSlice';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '900'],
  subsets: ['latin']
});

export default function PaymentMethod() {
  const [paymentOptions, setPaymentOptions] = useState<Array<PaymentOptions>>([]);
  const dispatch = useAppDispatch();
  const selectOrderDataPaymentOptions = useAppSelector((state) => state.kioskOrder.orderData.paymentMethod);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setOrderDataPaymentMethod(event.target.value));
  };

  useEffect(() => {
    (async () => {
      const payment = await fetchAllPaymentMethods();
      setPaymentOptions(payment);
    })();
  }, []);
  return (
    <>
      <div className="mb-12 mt-4">
        <h3 className="text-lg font-semibold">Payment Methods</h3>
        <p className={`mb-4 text-sm text-black/30 ${poppins.className} font-medium`}>Please select payment method</p>
      </div>
      <div className="h-[50vh] space-y-2 overflow-y-auto overflow-x-hidden p-5">
        {paymentOptions.map((item) => (
          <label
            key={item.id}
            className={`relative flex cursor-pointer flex-row items-center rounded-lg px-10 py-6 ${
              item.id === selectOrderDataPaymentOptions
                ? 'border border-blue-500 bg-blue-100'
                : 'border border-black/5 bg-white'
            }`}
          >
            <input
              type="radio"
              name="shippingOption"
              value={item.id}
              checked={selectOrderDataPaymentOptions === item.id}
              onChange={handleOptionChange}
              className="hidden"
            />
            <PhilippinePeso size={35} className="mr-4 text-blue-500" />
            <div className="flex flex-col gap-2">
              <span className={`${poppins.className} text-base font-semibold opacity-80`}>{item.name}</span>
            </div>
          </label>
        ))}
      </div>
    </>
  );
}
