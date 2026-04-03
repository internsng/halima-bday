"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import momentsData from "@/app/data/moments.json";

export default function MomentsGrid() {
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 px-4 md:px-0" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      {momentsData.map((moment) => (
        <motion.div
          key={moment.id}
          className="w-full md:w-[410px] h-[400px] md:h-[485px] bg-black/14 pt-8 md:pt-10 pl-6 md:pl-10 overflow-hidden"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.25 }}
        >
          <div className="mb-6 md:mb-10">
            <h3 className="text-black text-xs md:text-sm font-normal font-manrope">
              {moment.title}
            </h3>
            <p className="text-black font-extralight max-w-[150px] md:max-w-[216px] font-manrope text-xs md:text-sm/relaxed">
              {moment.description}
            </p>
          </div>

          <div className="w-full h-full rounded-tl-2xl overflow-hidden">
            <Image
              src={moment.image}
              alt={moment.alt}
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-tl-2xl"
              loading="eager"
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
