import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { TopTitleSection } from "../lib/content/topTitle";
import { NFTImageSection } from "../lib/content/nftimage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-10 md:p-24 ${inter.className}`}
    >
      <div className={`text-center lg:text-5xl md:text-4xl text-2xl`}>
        {TopTitleSection.title.map((paragraph, i) => (
          <p className="md:mt-5 mt-2">{paragraph}</p>
        ))}
      </div>
      <div className="flex content-center mt-5">
        <Link href="/lend">
          <button className={`common-outline-btn sm:text-2xl text-xl`}>
            Lend
          </button>
        </Link>
        <Link href="/borrow" className="ml-5">
          <button className={`common-btn sm:text-2xl text-xl`}>Borrow</button>
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
        {NFTImageSection.paths.map((item, i) => (
          <div className="">
            <Image
              src={item}
              alt="nft image"
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={200}
              height={200}
            ></Image>
          </div>
        ))}
      </div>
      <div className=""></div>
    </main>
  );
}
