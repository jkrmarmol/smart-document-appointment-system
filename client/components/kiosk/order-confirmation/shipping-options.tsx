import { fetchAllDeliveryMethods } from '@/server/kiosk';
import { DeliveryOptions } from '@prisma/client';
import { Package } from 'lucide-react';
import { Poppins } from 'next/font/google';
import React, { useEffect, useState } from 'react';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '900'],
  subsets: ['latin']
});

export default function ShippingOptions() {
  const [deliveryOptions, setDeliveryOptions] = useState<Array<DeliveryOptions>>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    (async () => {
      const deliveryOptions = await fetchAllDeliveryMethods();
      setDeliveryOptions(deliveryOptions);
    })();
  }, []);

  return (
    <>
      <div className="mb-12 mt-4">
        <h3 className="text-lg font-semibold">Shipping Options</h3>
        <p className={`mb-4 text-sm text-black/30 ${poppins.className} font-medium`}>Please select logistic partner</p>
      </div>
      <div className="h-[50vh] space-y-2 overflow-y-auto overflow-x-hidden p-5">
        {deliveryOptions.map((item) => (
          <label
            key={item.id}
            className={`relative flex cursor-pointer flex-row items-center rounded-lg px-10 py-6 ${
              item.id === selectedOption ? 'border border-blue-500 bg-blue-100' : 'border border-black/5 bg-white'
            }`}
          >
            <input
              type="radio"
              name="shippingOption"
              value={item.id}
              checked={selectedOption === item.id}
              onChange={handleOptionChange}
              className="hidden"
            />
            <Package size={35} className="mr-4 text-blue-500" />
            <div className="flex flex-col gap-2">
              <span className={`${poppins.className} text-base font-semibold opacity-80`}>{item.name}</span>
            </div>
          </label>
        ))}
      </div>
    </>
  );
}
