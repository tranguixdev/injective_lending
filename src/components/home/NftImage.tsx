import Image from "next/image";

const NftImage = ({ path }: { path: string }) => {
  return (
    <>
      <div className="aspect-square relative">
        <Image
          src={path}
          alt="nft image"
          fill
          className="object-cover rounded-xl"
        ></Image>
      </div>
    </>
  );
};

export default NftImage;
