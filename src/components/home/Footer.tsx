import { FooterSection } from "@/lib/content/home";
const HomeFooter = () => {
  const { title, description, buttonTxt } = FooterSection;
  return (
    <>
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-[#191919] w-full max-w-[800px] p-5 mt-9 border border-zinc-800">
        <h1 className="text-[32px] text-center sm:text-2xl text-xl">{title}</h1>
        <p className="text-xl text-center">{description}</p>
        <div className="relative flex flex-row justify-center items-center py-1.5 px-5 min-w-[120px] gap-2.5 border-2 border-solid border-white rounded-[26.5px] font-semibold sm:text-xl text-base cursor-pointer">
          {buttonTxt}
        </div>
      </div>
    </>
  );
};

export default HomeFooter;
