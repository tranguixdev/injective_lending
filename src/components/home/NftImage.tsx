import Image from "next/image";

const NftImage = ({ path }: { path: string }) => {
  return (
    <>
      <div className="aspect-square relative">
        <Image src={path} alt="nft image" fill className="object-cover"></Image>
      </div>
    </>
  );
};

export default NftImage;
