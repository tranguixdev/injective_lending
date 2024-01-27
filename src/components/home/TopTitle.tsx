import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { TopTitleSection } from "@/lib/content/home";

const TopTitle = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const { title, buttons } = TopTitleSection;
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <>
      <div
        className={`text-center text-3xl md:text-5xl max-w-[1000px] leading-snug p-3`}
      >
        {title.map((item, i) => (
          <p className="mt-4">{item}</p>
        ))}
      </div>
      <div className="flex content-center item-center mt-5 relative">
        <Image
          src={`/line.svg`}
          alt="line"
          className="absolute top-5"
          width={300}
          height={1}
        />
        <Link href="/lend">
          <button className={` rounded-xl border text-white px-7 py-2 text-sm`}>
            {buttons[0]}
          </button>
        </Link>
        <Link href="/borrow" className="ml-5">
          <button className={` rounded-xl border text-white px-5 py-2 text-sm`}>
            {buttons[1]}
          </button>
        </Link>
      </div>
    </>
  ) : (
    <></>
  );
};

export default TopTitle;
