import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className="w-full h-full ">
      <header className="bg-[#FADCD9] mt-4 h-[50px] px-5 rounded-[16px] max-w-[95%] mx-auto flex items-center justify-end">
        <div className="flex items-center gap-4 text-black font-normal text-xs md:text-base">
          <Link href="/">Home</Link>
          <Link href="/">Our Story</Link>
          <Link href="/">The New Chapter</Link>
        </div>
      </header>

      <div className="mt-10 flex justify-center">
        <div className="text-center">
          <h1 className="text-base md:text-2xl font-light text-black ">A small corner of the internet, built just to remind you how deeply I love you</h1>
          <h1 className="text-[40px] md:text-[72px] font-normal text-black mt-2">Happy Birthday, <span className="font-semibold">Halima</span></h1>
          <div className="h-14 text-black w-auto border border-black  rounded-[110px] px-4 inline-flex items-center justify-center">
            <p className="text-black font-extralight text-2xl ">Play showreel</p>
            <Icon icon="solar:arrow-up-linear" className="w-6 h-6 rotate-45" />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="max-w-[350px] md:max-w-[750px] h-[250px] md:h-[541px] bg-red-500 rounded-[50px] mx-auto">

        </div>
        <p className="text-center text-black text-[18px] md:text-[28px] font-normal mt-5">You didn't just change my life... you brought a new one into it.</p>
        <div className="max-w-[300px] md:max-w-[612px] mx-auto mt-5">
          <p className="text-black text-sm md:text-xl font-extralight text-center">
            You are calm in my chaos, clarity in my confusion, and light in places i didn't even know were dark.
            You took everything i thought i understood about love and gave it a deeper meaning.
            Noe, I don't just see love in how you care for me, I see it in how you hold, nurture, and protect the life we created together.
            And in that, you've given me not just more to love, but a whole new reason to love even harder.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-center text-[40px] md:text-[72px] text-black font-normal">Our Story</h1>
        <p className="text-center text-black  font-light text-base md:text-xl px-10 max-w-[714px] mx-auto mt-2">A love story that began in the heart of a city, and blossomed into something truly special.</p>

        <div className="mt-5">
          <div className="max-w-[350px] md:max-w-[1200px] h-[250px] md:h-[541px] bg-red-500 rounded-[50px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-500 rounded-[50px] h-[493px] w-full">
              {/* <Image src="/images/our-story-1.jpg" alt="Our Story" width={500} height={500} /> */}
            </div>
            <div className="bg-blue-500 rounded-[50px] h-[493px] w-full">
              {/* <Image src="/images/our-story-2.jpg" alt="Our Story" width={500} height={500} /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-center font-normal text-[72px] text-black">A New Chapter</h1>
        <p className="text-2xl font-extralight text-center text-black"></p>
        <div className="mt-5">
          <div className="flex overflow-x-auto gap-4 scrollbar-hide">
            <div className="w-[516px] h-[367px] bg-red-500 rounded-[50px] min-w-[516px]"></div>
            <div className="w-[516px] h-[367px] bg-red-500 rounded-[50px] min-w-[516px]"></div>
            <div className="w-[516px] h-[367px] bg-red-500 rounded-[50px] min-w-[516px]"></div>
          </div>
        </div>


      </div>
      <div className="mt-10">
        <h1 className="text-center font-normal text-[72px] text-black">The Moments That Stayed</h1>

        <div className="flex justify-between gap-5">
          <div className="w-[410px] h-[485px] bg-black/14 pt-10 pl-10 overflow-hidden">
            <div className="mb-10">
              <h3>Yada 1</h3>
              <p>The way you held our child for the first time</p>
            </div>

            <div className="w-full h-full bg-red-500 rounded-tl-2xl overflow-hidden"></div>

          </div>

          <div className="w-[410px] h-[485px] bg-black/14 pt-10 pl-10 overflow-hidden">
            <div className="mb-10">
              <h3>Yada 1</h3>
              <p>The way you held our child for the first time</p>
            </div>

            <div className="w-full h-full bg-red-500 rounded-tl-2xl overflow-hidden"></div>

          </div>
          <div className="w-[410px] h-[485px] bg-black/14 pt-10 pl-10 overflow-hidden">
            <div className="mb-10">
              <h3>Yada 1</h3>
              <p>The way you held our child for the first time</p>
            </div>

            <div className="w-full h-full bg-red-500 rounded-tl-2xl overflow-hidden"></div>

          </div>
        </div>
      </div>
    </div>
  );
}
