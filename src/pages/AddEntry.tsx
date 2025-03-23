import AddAmount from "@/components/AddAmount";
import TotalData from "@/components/TotalData";
import TransactionList from "@/components/TransactionList";
import React from "react";

const AddEntry: React.FC = () => {
  return (
    <div className="p-4 xs:p-7 grid grid-cols-7 xl:grid-cols-4 gap-4 xs:gap-7">
      <div className="col-span-7 lg:col-span-2 xl:col-span-1">
        <TotalData />
        <AddAmount />
      </div>
      <div className="col-span-7 lg:col-span-5 xl:col-span-3">
        <TransactionList />
      </div>
    </div>
  );
};

export default AddEntry;
