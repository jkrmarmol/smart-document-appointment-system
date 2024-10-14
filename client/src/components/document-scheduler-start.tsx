"use client";
import { CalendarCheck, Search } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import StartTransaction from "./dialog/start-transaction";
import CheckStatus from "./dialog/check-status";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "600", "900"],
  subsets: ["latin"],
});

export default function DocumentSchedulerStart() {
  const [modal, setModal] = useState<{
    checkStatus: boolean;
    startTransaction: boolean;
  }>({
    checkStatus: false,
    startTransaction: false,
  });
  return (
    <div className="bg-blue-500 min-h-screen  text-white">
      <div className="max-w-6xl mx-auto overflow-hidden">
        <header className="flex justify-between items-center h-[10vh]">
          <Image
            src="/images/icct-logo.png"
            height={60}
            width={60}
            alt="ICCT Colleges"
            className="bg-white rounded-full"
          />
          <div className="text-sm">
            <span className={`mr-4 ${poppins.className} font-medium`}>{new Date().toDateString()}</span>
          </div>
        </header>

        <main className="flex flex-col md:flex-row   h-[90vh]">
          <div className="md:mb-0 md:mr-8  top-40 relative">
            <h1 className={`text-6xl md:text-6xl font-bold ${poppins.className} font-semibold tracking-wide`}>
              <span className=" text-white/50">Hi!</span> Schedule your document here.
            </h1>
            <p className={`text-lg text-foreground ${poppins.className} font-light tracking-wide opacity-75 my-10`}>
              Select on the right side document what you wanna do!
            </p>
            <Image src="/images/calendar.png" height={700} width={700} alt={"Calendar Images"} />
          </div>

          <div className="space-y-6  align-middle self-center">
            <button className="relative" onClick={() => setModal((prev) => ({ ...prev, checkStatus: true }))}>
              <Image src="/images/document-style.png" height={250} width={250} alt="Document Style's" />
              <span
                className={`absolute top-[25%] left-[10%]  font-semibold ${poppins.className}  text-blue-500 w-[80%]`}
              >
                <p className="text-left text-4xl">Check Status</p>
                <Search size={70} className="text-blue-500 absolute right-0 mt-6" />
              </span>
            </button>

            <CheckStatus modal={modal} setModal={setModal} />

            <button className="relative" onClick={() => setModal((prev) => ({ ...prev, startTransaction: true }))}>
              <Image src="/images/document-style.png" height={250} width={250} alt="Document Style's" />
              <span
                className={`absolute top-[25%] left-[5%]  font-semibold ${poppins.className}  text-blue-500 w-[90%]`}
              >
                <p className="text-left text-4xl">Start Transaction</p>
                <CalendarCheck size={70} className="text-blue-500 absolute right-0 mt-6" />
              </span>
            </button>

            <StartTransaction modal={modal} setModal={setModal} />
            {/* <button className="w-full bg-white text-blue-500 rounded-2xl p-6 flex items-center justify-between hover:bg-blue-50 transition-colors">
              <span className={`text-3xl font-semibold ${poppins.className} text-left`}>Start Transaction</span>
              <CalendarCheck size={60} />
            </button> */}
          </div>
        </main>
      </div>
    </div>
  );
}
