import React from 'react';
import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Input
} from '@headlessui/react';
import { Poppins } from 'next/font/google';
import { useRouter } from 'next/navigation';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '900'],
  subsets: ['latin']
});

export default function StartTransaction(props: {
  modal: { checkStatus: boolean; startTransaction: boolean };
  setModal: React.Dispatch<
    React.SetStateAction<{ checkStatus: boolean; startTransaction: boolean }>
  >;
}) {
  const router = useRouter();
  return (
    <Dialog
      open={props.modal.startTransaction}
      onClose={() =>
        props.setModal((prev) => ({ ...prev, startTransaction: false }))
      }
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
            className="data-[closed]:transform-[scale(95%)] w-full max-w-2xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0 "
          >
            <DialogTitle
              as="h3"
              className={`text-center text-2xl font-medium text-black ${poppins.className} font-semibold`}
            >
              Student Number
            </DialogTitle>
            <p
              className={`mt-1 text-xs text-black/30 ${poppins.className} mb-4 text-center font-medium`}
            >
              Please enter your student number before to proceed.
            </p>
            <Input
              minLength={3}
              maxLength={15}
              name="studentNumber"
              type="text"
              className={`h-14 w-full rounded-xl bg-blue-100 text-center text-black focus:outline-1 data-[focus]:bg-blue-100 ${poppins.className} caret text-2xl font-semibold uppercase caret-blue-500 focus:outline-none`}
            />
            <div className="mt-4 flex justify-end gap-2">
              <Button
                className={`inline-flex items-center gap-2 rounded-md bg-gray-100 px-5 py-2 text-sm/6 font-medium text-black shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-200 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white ${poppins.className} font-semibold`}
                onClick={() =>
                  props.setModal((prev) => ({
                    ...prev,
                    startTransaction: false
                  }))
                }
                type="button"
              >
                Cancel
              </Button>
              <Button
                className={`inline-flex items-center gap-2 rounded-md bg-blue-500 px-5 py-2 text-sm/6 font-medium text-white shadow-inner  focus:outline-none data-[hover]:bg-blue-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white ${poppins.className} font-semibold`}
                onClick={() => {
                  props.setModal((prev) => ({
                    ...prev,
                    startTransaction: false
                  }));
                  return router.push('/kiosk/order');
                }}
              >
                Confirm
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
