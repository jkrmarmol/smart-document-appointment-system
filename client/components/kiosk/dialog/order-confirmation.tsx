import React from 'react';
import {
  Tab,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Button,
  Input
} from '@headlessui/react';
import { X } from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '900'],
  subsets: ['latin']
});

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function OrderConfirmation() {
  const tabs = [
    'Your Order',
    'Shipping Options',
    'Address',
    'Schedule',
    'Payment Methods'
  ];

  return (
    <Dialog open onClose={() => {}} className="relative z-10 ">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
        <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0 ">
          <DialogPanel
            transition
            className="data-[closed]:transform-[scale(95%)] w-full max-w-2xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0 "
          >
            <DialogTitle
              as="h3"
              className={` text-lg font-medium text-black ${poppins.className} mb-12 font-semibold`}
            >
              Confirm Your Order
            </DialogTitle>

            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl  p-1">
                {tabs.map((tab) => (
                  <Tab
                    key={tab}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-lg  text-sm font-medium',
                        ' border-none outline-none',
                        poppins.className,
                        selected
                          ? ' text-sm text-blue-500 underline underline-offset-8'
                          : ' text-black hover:bg-white/[0.12] hover:text-blue-500'
                      )
                    }
                  >
                    {tab}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel className="rounded-xl bg-white p-3">
                  <div className="mb-12 mt-4">
                    <h3 className="text-lg font-semibold">Your Order</h3>
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
                        <span
                          className={`${poppins.className} text-sm font-semibold`}
                        >
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
                </Tab.Panel>

                <Tab.Panel className="rounded-xl bg-white p-3">
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
                        <span
                          className={`${poppins.className} text-sm font-semibold`}
                        >
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
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>

            <div className="mt-4 flex justify-end gap-2">
              <Button
                className={`inline-flex items-center gap-2 rounded-md bg-gray-100 px-5 py-2 text-sm/6 font-medium text-black shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-200 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white ${poppins.className} font-semibold`}
                onClick={() => {}}
                type="button"
              >
                Cancel
              </Button>
              <Button
                className={`inline-flex items-center gap-2 rounded-md bg-blue-500 px-5 py-2 text-sm/6 font-medium text-white shadow-inner  focus:outline-none data-[hover]:bg-blue-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white ${poppins.className} font-semibold`}
              >
                Next
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
