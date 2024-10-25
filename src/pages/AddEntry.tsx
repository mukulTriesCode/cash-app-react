import AddAmount from "@/components/AddAmount";
import TotalData from "@/components/TotalData";
import React from "react";

const AddEntry: React.FC = () => {
  return (
    <div className="p-7">
      <TotalData />
      <AddAmount />
    </div>
  );
};

export default AddEntry;
