import { LoanSection } from "@/lib/content";
import ConnectWallet from "@/components/global/buttons/ConnectWallet";

const Loans = () => {
  const { title, description } = LoanSection;
  return (
    <div className="flex flex-col items-center gap-3 p-8">
      <div className="text-center">
        <h2 className="text-5xl">
          {title.map((item, i) => (
            <span
              key={i}
              className={` mx-1 ${
                i == 1 ? "text-blue-600 " : ""
              } font-semibold`}
            >
              {item}
            </span>
          ))}
        </h2>
      </div>
      <div className="my-5 max-w-[1024px] text-center text-slate-300">
        {description}
      </div>
      <div className="">
        <ConnectWallet />
      </div>
    </div>
  );
};

export default Loans;
