import { useAppDispatch } from '@/hooks/redux';
import { addToOrder } from '@/store/kiosk/orderSlice';
import { MenuItem } from '@/types';
import { Button } from '@headlessui/react';
import { Plus } from 'lucide-react';
import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '600', '900'],
  subsets: ['latin']
});

export default function DocumentItem(item: MenuItem) {
  const dispatch = useAppDispatch();
  return (
    <div key={item.id} className="rounded-2xl bg-gray-200">
      <div className="flex h-full flex-col items-center justify-between p-4 py-10">
        <div className="text-center">
          <h3
            className={`font-semibold text-black ${poppins.className} text-lg font-semibold`}
          >
            {item.name}
          </h3>
          <p className={`text-lg  ${poppins.className} font-medium opacity-60`}>
            ₱{item.price.toFixed(2)}
          </p>
        </div>
        <Button className="my-2" onClick={() => dispatch(addToOrder(item))}>
          <Plus
            className=" rounded-full bg-black p-1"
            color="#ffffff"
            size={30}
          />
        </Button>
      </div>
    </div>
  );
}
