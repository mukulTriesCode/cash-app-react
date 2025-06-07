import AddAmount from "@/components/AddAmount";
import TotalData from "@/components/TotalData";
import TransactionList from "@/components/TransactionList";
import useLoader from "@/hooks/useLoader";
import { useGetEntriesQuery } from "@/services/entryService";
import React from "react";

const AddEntry: React.FC = () => {
  const { data, isLoading } = useGetEntriesQuery("");
  useLoader(isLoading);
  const totalAmount = data?.totalAmount;
  const lastEntry = data?.data?.length > 0 ? {
    amount: data.data[data.data.length - 1]?.amount,
    notes: data.data[data.data.length - 1]?.notes
  } : null;

  return (
    <div className="p-4 xs:p-7 grid grid-cols-7 xl:grid-cols-4 gap-4 xs:gap-7">
      <div className="col-span-7 lg:col-span-2 xl:col-span-1">
        <TotalData totalAmount={totalAmount} lastEntry={lastEntry} />
        <AddAmount />
      </div>
      <div className="col-span-7 lg:col-span-5 xl:col-span-3">
        <TransactionList />
      </div>
    </div>
  );
};

export default AddEntry;
