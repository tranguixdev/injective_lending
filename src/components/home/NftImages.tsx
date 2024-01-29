import { NFTImageSectionType } from "@/lib/types/section";
import NftImage from "./NftImage";
import { NFTImageSection } from "@/lib/content";

const NftImages = () => {
  const { paths } = NFTImageSection;
  return (
    <>
      <div className="grid gap-5 grid-cols-auto-232 mt-10 w-full justify-center">
        {paths.map((item, i) => (
          <NftImage path={item} key={i} />
        ))}
      </div>
    </>
  );
};

export default NftImages;
