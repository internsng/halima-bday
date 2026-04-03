"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import newChapterData from "@/app/data/newChapter.json";

export default function NewChapterCarousel() {
  return (
    <motion.div className="mt-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div className="flex overflow-x-auto gap-3 md:gap-4 scrollbar-hide px-4 md:px-0">
        {newChapterData.map((chapter) => (
          <motion.div
            key={chapter.id}
            className="w-[280px] h-[200px] md:w-[516px] md:h-[367px] rounded-[30px] md:rounded-[50px] min-w-[280px] md:min-w-[516px]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 180 }}
          >
            <Image
              src={chapter.image}
              alt={chapter.alt}
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-[50px]"
              loading="eager"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
