import { FooterSection } from "@/lib/content";
const HomeFooter = () => {
  const { title, description, buttonTxt } = FooterSection;
  return (
    <>
      <div className="flex flex-col items-center gap-7 w-full max-w-[800px] p-5 mt-9  ">
        <h1 className="text-[32px] text-center sm:text-2xl text-xl">{title}</h1>
        <p className="text-xl text-center">{description}</p>
        <div className="relative flex flex-row justify-center items-center py-2 px-5 min-w-[120px] border border-solid border-slate-400  sm:text-base text-sm cursor-pointer">
          {buttonTxt}
        </div>
      </div>
    </>
  );
};

export default HomeFooter;
