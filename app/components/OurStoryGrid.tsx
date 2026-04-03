"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import storyData from "@/app/data/ourStory.json";

export default function OurStoryGrid() {
  return (
    <motion.div className="mt-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div className="max-w-[350px] md:max-w-[1200px] mx-auto flex flex-col md:flex-row  gap-10 md:gap-4">
        {storyData.map((story) => (
          <motion.div key={story.id} className="h-auto w-full" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <Image
              src={story.image}
              alt={story.alt}
              width={700}
              height={700}
              className="w-full h-full object-cover object-center mb-2"
            />
            <p className="font-manrope text-sm font-extrabold text-black md:px-5">
              {story.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
