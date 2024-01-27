import { Inter } from "next/font/google";

import TopTitle from "@/components/home/TopTitle";
import NftImages from "@/components/home/NftImages";
import HomeFooter from "@/components/home/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center p-10 md:p-14 ${inter.className}`}
    >
      <TopTitle />
      <NftImages />
      <HomeFooter />
    </main>
  );
}
