'use client';
import React, { useState } from 'react';
import { Tab, Dialog, DialogBackdrop, DialogPanel, DialogTitle, Button } from '@headlessui/react';
import { Poppins } from 'next/font/google';
import YourOrder from '../order-confirmation/your-order';
import ShippingOptions from '../order-confirmation/shipping-options';
import Address from '../order-confirmation/address';
import Schedule from '../order-confirmation/schedule';
import PaymentMethod from '../order-confirmation/payment-method';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { cleanUpOrder } from '@/store/kiosk/orderSlice';
import { useAppDispatch } from '@/hooks/redux';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '900'],
  subsets: ['latin']
});

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function OrderConfirmation(props: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNextClick = () => {
    setSelectedIndex((prevIndex) => prevIndex + 1);
  };

  const handleBackClick = () => {
    setSelectedIndex((prevIndex) => prevIndex - 1);
  };

  const onClickConfirm = () => {
    props.onClose();
    Swal.fire({
      title: 'Confirm Payment',
      text: 'How would you like to proceed?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Pay Now',
      cancelButtonText: 'Pay Later',
      customClass: {
        container: `${poppins.className}`,
        confirmButton: ` bg-blue-600 text-white hover:bg-blue-700 ${poppins.className} rounded-lg p-3 font-normal`,
        cancelButton: ` bg-blue-600 text-white hover:bg-blue-700 ${poppins.className} rounded-lg p-3 font-normal`,
        title: `${poppins.className}`,
        validationMessage: `${poppins.className}`
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle Pay Now
        Swal.fire({
          title: 'Please wait...',
          text: 'Redirecting to Payment Gateway...',
          icon: 'info',
          confirmButtonText: 'OK',
          customClass: {
            container: `${poppins.className}`,
            title: `${poppins.className}`,
            confirmButton: ` bg-blue-600 text-white hover:bg-blue-700 ${poppins.className} rounded-lg p-3 font-normal`
          }
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(cleanUpOrder());
            router.push('/kiosk');
            Swal.fire({
              title: 'Thank your for using our service!',
              icon: 'success',
              customClass: {
                container: `${poppins.className}`,
                title: `${poppins.className}`,
                confirmButton: ` bg-blue-600 text-white hover:bg-blue-700 ${poppins.className} rounded-lg p-3 font-normal`
              }
            });
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Handle Pay Later
        Swal.fire({
          title: 'Pay Later',
          text: 'Payment Link has been sent to your email and is also available in the mobile application. You have 24 hours to complete the payment.',
          icon: 'info',
          confirmButtonText: 'OK',
          customClass: {
            container: `${poppins.className}`,
            title: `${poppins.className}`,
            confirmButton: ` bg-blue-600 text-white hover:bg-blue-700 ${poppins.className} rounded-lg p-3 font-normal`
          }
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(cleanUpOrder());
            router.push('/kiosk');
            Swal.fire({
              title: 'Thank your for using our service!',
              icon: 'success',
              customClass: {
                container: `${poppins.className}`,
                title: `${poppins.className}`,
                confirmButton: ` bg-blue-600 text-white hover:bg-blue-700 ${poppins.className} rounded-lg p-3 font-normal`
              }
            });
          }
        });
      }
    });
  };

  const tabs = ['Your Order', 'Shipping Options', 'Address', 'Schedule', 'Payment Methods'];

  return (
    <Dialog
      open={props.open}
      onClose={() => {
        props.onClose();
        setSelectedIndex(0);
      }}
      className="relative z-10 "
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
        <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0 ">
          <DialogPanel
            transition
            className="data-[closed]:transform-[scale(95%)] w-full max-w-4xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0 "
          >
            <DialogTitle as="h3" className={` text-lg font-medium text-black ${poppins.className} mb-12 font-semibold`}>
              Confirm Your Order
            </DialogTitle>

            <Tab.Group selectedIndex={selectedIndex}>
              <Tab.List className="flex space-x-1 rounded-xl p-1">
                {tabs.map((tab, index) => (
                  <Tab
                    key={index}
                    className={({ selected }) => {
                      return classNames(
                        'w-full rounded-lg  text-sm font-semibold opacity-80',
                        ' border-none outline-none',
                        poppins.className,
                        selected
                          ? ' text-sm text-blue-500 underline underline-offset-8'
                          : ' text-black hover:bg-white/[0.12] hover:text-blue-500'
                      );
                    }}
                  >
                    {tab}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel className="rounded-xl bg-white p-3">
                  <YourOrder />
                </Tab.Panel>

                <Tab.Panel className="rounded-xl bg-white p-3">
                  <ShippingOptions />
                </Tab.Panel>

                <Tab.Panel className="rounded-xl bg-white p-3">
                  <Address />
                </Tab.Panel>

                <Tab.Panel className="rounded-xl bg-white p-3">
                  <Schedule />
                </Tab.Panel>

                <Tab.Panel className="rounded-xl bg-white p-3">
                  <PaymentMethod />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>

            <div className="mt-4 flex justify-end gap-2">
              <Button
                className={`inline-flex items-center gap-2 rounded-md bg-gray-100 px-5 py-2 text-sm/6 font-medium text-black shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-200 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white ${poppins.className} font-semibold`}
                onClick={() => {
                  props.onClose();
                  setSelectedIndex(0);
                }}
                type="button"
              >
                Cancel
              </Button>
              {selectedIndex >= 1 && (
                <Button
                  onClick={handleBackClick}
                  className={`inline-flex items-center gap-2 rounded-md bg-blue-500 px-5 py-2 text-sm/6 font-medium text-white shadow-inner  focus:outline-none data-[hover]:bg-blue-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white ${poppins.className} font-semibold`}
                >
                  Back
                </Button>
              )}

              {selectedIndex === 4 ? (
                <Button
                  className={`inline-flex items-center gap-2 rounded-md bg-blue-500 px-5 py-2 text-sm/6 font-medium text-white shadow-inner  focus:outline-none data-[hover]:bg-blue-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white ${poppins.className} font-semibold`}
                  onClick={onClickConfirm}
                >
                  Confirm
                </Button>
              ) : (
                <Button
                  onClick={handleNextClick}
                  className={`inline-flex items-center gap-2 rounded-md bg-blue-500 px-5 py-2 text-sm/6 font-medium text-white shadow-inner  focus:outline-none data-[hover]:bg-blue-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white ${poppins.className} font-semibold`}
                >
                  Next
                </Button>
              )}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
