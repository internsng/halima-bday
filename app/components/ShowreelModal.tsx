"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import showreelData from "@/app/data/showreel.json";

export default function ShowreelModal() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + showreelData.length) % showreelData.length);
  const next = () => setIndex((i) => (i + 1) % showreelData.length);

  return (
    <div className="mt-4 flex flex-col items-center gap-2">
      <button
        onClick={() => setOpen(true)}
        className="h-10 md:h-14 font-manrope text-black w-auto border border-black rounded-[110px] px-3 md:px-4 inline-flex items-center justify-center gap-1 md:gap-2 mt-3 md:mt-4 hover:bg-black/10 transition"
      >
        <p className="text-black font-extralight text-xs md:text-base">Play showreel</p>
        <span className="w-4 h-4 md:w-5 md:h-5 rotate-45">↗</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-xl rounded-2xl bg-white p-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 text-black text-sm z-10"
              >
                Close
              </button>
              <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Image
                      src={showreelData[index].src}
                      alt={showreelData[index].alt}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <motion.p
                key={`title-${index}`}
                className="mt-3 text-center font-manrope font-bold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {showreelData[index].alt}
              </motion.p>
              <div className="mt-3 flex justify-between text-sm font-manrope">
                <button onClick={prev} className="rounded-lg bg-black/10 px-3 py-1 hover:bg-black/20 transition">Prev</button>
                <button onClick={next} className="rounded-lg bg-black/10 px-3 py-1 hover:bg-black/20 transition">Next</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
