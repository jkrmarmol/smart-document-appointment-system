"use client";
import React from "react";
import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle, Input } from "@headlessui/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "900"],
  subsets: ["latin"],
});

export default function StartTransaction(props: {
  modal: { checkStatus: boolean; startTransaction: boolean };
  setModal: React.Dispatch<React.SetStateAction<{ checkStatus: boolean; startTransaction: boolean }>>;
}) {
  return (
    <Dialog
      open={props.modal.startTransaction}
      onClose={() => props.setModal((prev) => ({ ...prev, startTransaction: false }))}
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
            className="w-full max-w-2xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 "
          >
            <DialogTitle
              as="h3"
              className={`text-2xl text-center font-medium text-black ${poppins.className} font-semibold`}
            >
              Student Number
            </DialogTitle>
            <p className={`mt-1 text-xs text-black/30 ${poppins.className} font-medium text-center mb-4`}>
              Please enter your student number before to proceed.
            </p>
            <Input
              minLength={3}
              maxLength={15}
              name="studentNumber"
              type="text"
              className={`bg-blue-100 w-full h-14 data-[focus]:bg-blue-100 rounded-xl focus:outline-1 text-black text-center ${poppins.className} font-semibold uppercase focus:outline-none caret-blue-500 caret text-2xl`}
            />
            <div className="mt-4 gap-2 flex justify-end">
              <Button
                className={`inline-flex items-center gap-2 rounded-md bg-gray-100 py-2 px-5 text-sm/6 font-medium text-black shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-200 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700 ${poppins.className} font-semibold`}
                onClick={() => props.setModal((prev) => ({ ...prev, startTransaction: false }))}
                type="button"
              >
                Cancel
              </Button>
              <Button
                className={`inline-flex items-center gap-2 rounded-md bg-blue-500 py-2 px-5 text-sm/6 font-medium text-white shadow-inner  focus:outline-none data-[hover]:bg-blue-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700 ${poppins.className} font-semibold`}
                onClick={() => props.setModal((prev) => ({ ...prev, startTransaction: false }))}
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
