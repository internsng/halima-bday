"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import OurStoryGrid from "@/app/components/OurStoryGrid";
import NewChapterCarousel from "@/app/components/NewChapterCarousel";
import MomentsGrid from "@/app/components/MomentsGrid";
import ShowreelModal from "@/app/components/ShowreelModal";

export default function Home() {
  return (
    <motion.main
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full h-full"
    >
      <header className="bg-[#FADCD9] mt-2 md:mt-4 h-[60px] md:h-[100px] px-3 md:px-5 rounded-[12px] md:rounded-[16px] max-w-[95%] mx-auto flex items-center justify-end">
        <div className="flex items-center gap-2 md:gap-4 text-black font-normal text-xs md:text-sm font-manrope">
          <Link href="#home">Home</Link>
          <Link href="#our-story">Our Story</Link>
          <Link href="#new-chapter">The New Chapter</Link>
        </div>
      </header>

      <div className="mt-6 md:mt-10 flex justify-center px-4">
        <div className="text-center max-w-[600px]">
          <h1 className="text-xs md:text-base font-light text-black font-manrope">A small corner of the internet, built just to remind you how deeply I love you.</h1>
          <h1 className="text-2xl md:text-[72px] font-normal text-black mt-2">Happy Birthday, <span className="font-semibold">Halima</span></h1>
          <ShowreelModal />
        </div>
      </div>

      <div className="mt-6 md:mt-10 px-4">
        <div className="max-w-[350px] md:max-w-[750px] h-[200px] md:h-[541px] rounded-[30px] md:rounded-[50px] mx-auto">
          <Image src="/hero.png" alt="Our Story" width={800} height={600} className="w-full h-full object-cover rounded-[30px] md:rounded-[50px]" loading="eager" />
        </div>
          <p className="text-center font-nibpro text-black text-sm md:text-xl font-semibold mt-4 md:mt-8 px-4">You don&apos;t just change my life... you brought a new one into it.</p>
        <div className="max-w-[300px] md:max-w-[612px] mx-auto mt-3 md:mt-5 px-4">
          <p className="text-black font-manrope text-xs md:text-sm/relaxed mx-auto w-full font-extralight text-center leading-relaxed">
            You are calm in my chaos, clarity in my confusion, and light in places I didn&apos;t even know were dark.
            You took everything I thought I understood about love and gave it a deeper meaning. Now, I don&apos;t just see love in how you care for meI see it in how you hold, nurture, and protect the life we created together. And in that, you&apos;ve given me not just more to love, but a whole new reason to love even harder
          </p>
        </div>
      </div>

      <div className="mt-12 md:mt-20 px-4" id="our-story">
        <h1 className="text-center text-2xl md:text-[72px] text-black font-normal">Our Story</h1>
        <p className="text-center text-black font-light text-xs md:text-base px-4 md:px-10 max-w-[714px] mx-auto mb-6 md:mb-10 font-manrope">Loving you has always felt right. <br /> But watching you become a mother… that changed everything.</p>

        <OurStoryGrid />
      </div>

      <div className="mt-16 md:mt-24 px-4" id="new-chapter">
        <h1 className="text-center font-normal text-2xl md:text-[72px] text-black">A New Chapter</h1>
        <p className="text-xs md:text-base font-extralight text-center text-black max-w-[500px] w-full mx-auto mb-6 md:mb-10 px-4">You carried life. <br /> You nurtured her. <br /> You brought our child into this world with a strength I will never fully <br /> be able to put into words. <br />
          And somehow, you still carry love so gently. <br />
          That balance… that power… that grace… <br /> It&apos;s something I will forever be in awe of.</p>
        <NewChapterCarousel />
      </div>
      <div className="mt-32 mb-20" id="moments">
        <h1 className="text-center font-normal text-2xl md:text-[72px] text-black mb-6 md:mb-10">The Moments That Stayed</h1>

        <MomentsGrid />
      </div>
    </motion.main>
  );
}