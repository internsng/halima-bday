import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full bg-[#F9F1F0]">
      <header className="bg-[#FADCD9] mt-4 h-[50px] px-5 rounded-[16px] max-w-[95%] mx-auto flex items-center justify-end">
        <div className="flex items-center gap-4 text-black font-normal text-base">
          <Link href="/">Home</Link>
          <Link href="/">Our Story</Link>
          <Link href="/">The New Chapter</Link>
        </div>
      </header>

      <div className="mt-10">
        <div className="text-center">
          <h1 className="text-2xl font-light text-black ">A small corner of the internet, built just to remind you how deeply I love you</h1>
          <h1 className="text-[72px] font-normal text-black mt-2">Happy Birthday, <span className="font-semibold">Halima</span></h1>
        </div>
      </div>

      <div className="mt-10">
        <div className="max-w-[750px] h-[541px] bg-red-500 rounded-[50px] mx-auto">
          
        </div>
        <p className="text-center text-black text-[28px] font-normal mt-5">You didn't just change my life... you brought a new one into it.</p>
        <div className="max-w-[612px] mx-auto mt-5">
          <p className="text-black text-xl font-extralight text-center">
          You are calm in my chaos, clarity in my confusion, and light in places i didn't even know were dark.
          You took everything i thought i understood about love and gave it a deeper meaning.
          Noe, I don't just see love in how you care for me, I see it in how you hold, nurture, and protect the life we created together. 
          And in that, you've given me not just more to love, but a whole new reason to love even harder.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-center text-black text-[72px] font-normal">Our Story</h1>
      </div>
    </div>
  );
}
