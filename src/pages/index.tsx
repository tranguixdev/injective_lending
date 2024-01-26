import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-10 md:p-24 ${inter.className}`}
    >
      <div
        className={`text-center text-2xl md:text-5xl max-w-[1000px] leading-snug`}
      >
        BORROW & LEND AGAINST YOUR NFTS, INSTANTLY
      </div>
      <div className="flex content-center mt-5">
        <Link href="/lend">
          <button className={`common-outline-btn text-2xl`}>Lend</button>
        </Link>
        <Link href="/borrow" className="ml-5">
          <button className={`common-btn text-2xl`}>Borrow</button>
        </Link>
      </div>
    </main>
  );
}
