'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@headlessui/react';
import { Poppins } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { cleanUpOrder } from '@/store/kiosk/orderSlice';
import { MenuItem } from '@/types';
import DocumentItem from '@/components/kiosk/order/document-item';
import SelectedItem from '@/components/kiosk/order/selected-item';
import OrderConfirmation from '@/components/kiosk/dialog/order-confirmation';
import { setOpenModalConfirmationOrder } from '@/store/kiosk/orderSlice';
import { tr } from 'date-fns/locale';

const menuItems: MenuItem[] = [
  { id: '1', name: 'Summary of Grades', price: 10 },
  { id: '2', name: 'Certificate of Good Moral', price: 30 },
  { id: '3', name: 'Certificate of Good Moral', price: 40 },
  { id: '4', name: 'Certificate of Grades', price: 80 },
  { id: '5', name: 'Diploma', price: 100 },
  { id: '6', name: 'Diploma', price: 100 },
  { id: '7', name: 'TOR', price: 100 },
  { id: '8', name: 'Summary of Grades', price: 780 },
  { id: '9', name: 'Summary of Grades', price: 120 },
  { id: '10', name: 'Summary of Grades', price: 100 },
  { id: '11', name: 'Summary of Grades', price: 100 },
  { id: '12', name: 'Summary of Grades', price: 100 },
  { id: '13', name: 'Summary of Grades', price: 100 },
  { id: '14', name: 'Summary of Grades', price: 100 },
  { id: '15', name: 'Summary of Grades', price: 100 },
  { id: '16', name: 'Summary of Grades', price: 100 },
  { id: '17', name: 'Summary of Grades', price: 100 },
  { id: '18', name: 'Summary of Grades', price: 100 },
  { id: '19', name: 'Summary of Grades', price: 100 },
  { id: '20', name: 'Summary of Grades', price: 100 },
  { id: '20', name: 'Summary of Grades', price: 100 }
];

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '600', '900'],
  subsets: ['latin']
});

export default function Component() {
  const [modalConfirmation, setModalConfirmation] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const selectUserOrder = useAppSelector(
    (state) => state.kioskOrder.order
  ).toReversed();
  const selectOpenModalConfirmationOrder = useAppSelector(
    (state) => state.kioskOrder.openModalConfirmationOrder
  );
  const totalCost = selectUserOrder.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex h-screen bg-gray-100">
      <OrderConfirmation
        open={selectOpenModalConfirmationOrder}
        onClose={() => dispatch(setOpenModalConfirmationOrder(false))}
      />
      <div className="flex-1 overflow-auto p-8">
        <div className="mb-6">
          <Image
            src="/images/icct-logo.png"
            alt="ICCT Logo"
            className="h-12 w-auto"
            width={90}
            height={90}
          />
        </div>
        <h2
          className={`mb-4 text-2xl font-bold text-black ${poppins.className} font-semibold`}
        >
          Choose Documents
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {menuItems.map((item, index) => (
            <DocumentItem key={index} {...item} />
          ))}
        </div>
      </div>

      <div className="w-1/3 overflow-y-auto bg-gray-900 p-8 text-white">
        <h2 className="mb-4 text-2xl font-bold">My Order</h2>
        <div className="mb-4 space-y-2">
          {selectUserOrder.map((item, index) => (
            <SelectedItem key={index} {...item} />
          ))}
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className={`text-xl  ${poppins.className} font-medium`}>
            Total
          </span>
          <span className={`text-xl  ${poppins.className} font-medium`}>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'PHP'
            }).format(totalCost)}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            disabled={selectUserOrder.length === 0}
            className={`w-full bg-blue-600 text-white hover:bg-blue-700 ${
              poppins.className
            } rounded-xl p-3 font-semibold ${
              selectUserOrder.length === 0 && 'opacity-50'
            }`}
            onClick={() => dispatch(setOpenModalConfirmationOrder(true))}
          >
            Confirm
          </Button>
          <Button
            onClick={() => {
              dispatch(cleanUpOrder());
              return router.push('/kiosk');
            }}
            className={`w-full bg-gray-300 text-black hover:bg-gray-500 ${poppins.className} rounded-xl p-3 font-semibold`}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
