import React, { useMemo } from "react";

import { LendSection } from "@/lib/content/index";
import { LendTableFieldSection } from "@/lib/content/index";
import { ColumnDef } from "@tanstack/react-table";

// import SearchForm from "@/components/global/form/SearchForm";
import { filterFns } from "@/components/global/table/FilterFn";

import { Table } from "@/components/global/table/Table";
const Lend = () => {
  const { title, description } = LendSection;
  type Item = {
    name: string;
    price: number;
    quantity: number;
  };
  const cols = useMemo<ColumnDef<Item>[]>(
    () => [
      {
        header: "Name",
        cell: (row) => row.renderValue(),
        accessorKey: "name",
      },
      {
        header: "Price",
        cell: (row) => row.renderValue(),
        accessorKey: "price",
      },
      {
        header: "Quantity",
        cell: (row) => row.renderValue(),
        accessorKey: "quantity",
      },
    ],
    []
  );
  const dummyData = () => {
    const items = [];
    for (let i = 0; i < 100; i++) {
      items.push({
        id: i,
        name: `Item ${i}`,
        price: 100,
        quantity: 1,
      });
    }
    return items;
  };
  return (
    <div className="flex flex-col  items-center gap-3 p-8">
      <div className="max-w-[1024px]">
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
        <div className="my-5 text-center text-slate-300">{description}</div>
        {/* <SearchForm></SearchForm> */}
        {/* <Table fields={LendTableFieldSection.columns}></Table> */}
        <Table
          columns={cols}
          data={dummyData()}
          showFooter={true}
          showNavigation={true}
          showGlobalFilter={true}
          filterFn={filterFns.contains}
        ></Table>
      </div>
    </div>
  );
};

export default Lend;
