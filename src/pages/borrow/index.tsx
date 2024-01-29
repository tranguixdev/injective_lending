import { BorrowSection } from "@/lib/content/index";
import { LendTableFieldSection } from "@/lib/content/index";

import SearchForm from "@/components/global/form/SearchForm";
import Table from "@/components/global/table/Table";
const Borrow = () => {
  const { title, description } = BorrowSection;
  return (
    <div className="flex flex-col  items-center gap-3 p-8">
      <div className="max-w-[1024px]">
        <div className="text-center">
          <h2 className="text-5xl ">
            {title.map((item, i) => (
              <span
                key={i}
                className={` mx-1 ${
                  i == 0 ? "text-blue-600 " : ""
                } font-semibold`}
              >
                {item}
              </span>
            ))}
          </h2>
        </div>
        <div className="my-5 text-center text-slate-300">{description}</div>
        <SearchForm></SearchForm>
        {/* <Table fields={LendTableFieldSection.columns}></Table> */}
      </div>
    </div>
  );
};

export default Borrow;
