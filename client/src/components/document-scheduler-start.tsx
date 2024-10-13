import { CalendarCheck, CheckSquare, Search } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "600", "900"],
  subsets: ["latin"],
});

export default function DocumentSchedulerStart() {
  return (
    <div className="bg-blue-500 min-h-screen  text-white">
      <div className="max-w-6xl mx-auto overflow-hidden">
        <header className="flex justify-between items-center h-[10vh]">
          <div className={`bg-white text-blue-500 font-bold py-1 px-3 rounded ${poppins.className} font-semibold`}>
            ICCT Colleges
          </div>
          <div className="text-sm">
            <span className={`mr-4 ${poppins.className} font-medium`}>{new Date().toDateString()}</span>
          </div>
        </header>

        <main className="flex flex-col md:flex-row   h-[90vh]">
          <div className="md:mb-0 md:mr-8  top-40 relative">
            <h1 className={`text-6xl md:text-6xl font-bold ${poppins.className} font-semibold tracking-wide`}>
              <span className=" text-white/50">Hi!</span> Schedule your document here.
            </h1>
            <p className={`text-lg text-foreground ${poppins.className} font-light tracking-wide opacity-55`}>
              Select on the right side document what you wanna do!
            </p>
            <Image src="/images/calendar.png" height={700} width={700} alt={"Calendar Images"} />
          </div>

          <div className="space-y-6  align-middle self-center">
            <button className="w-full bg-white text-blue-500 rounded-2xl p-6 flex items-center justify-between hover:bg-blue-50 transition-colors">
              <span className={`text-3xl font-semibold ${poppins.className} text-left`}>Check Status</span>
              <Search size={60} />
            </button>
            <button className="w-full bg-white text-blue-500 rounded-2xl p-6 flex items-center justify-between hover:bg-blue-50 transition-colors">
              <span className={`text-3xl font-semibold ${poppins.className} text-left`}>Start Transaction</span>
              <CalendarCheck size={60} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
