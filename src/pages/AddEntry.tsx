import AddAmount from "@/components/AddAmount";
import TotalData from "@/components/TotalData";
import TransactionList from "@/components/TransactionList";
import React from "react";

const AddEntry: React.FC = () => {
  return (
    <div className="p-7 grid grid-cols-4 gap-7">
      <div className="col-span-1">
        <TotalData />
        <AddAmount />
      </div>
      <div className="col-span-3">
        <TransactionList />
      </div>
    </div>
  );
};

export default AddEntry;
