import { RootState } from "@/store";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";

const TransactionList: React.FC = () => {
  const { totalAmount, entries } = useSelector(
    (state: RootState) => state?.root
  );
  return (
    <div className="p-4 h-full border border-white/15 rounded-md bg-[#131313] text-base">
      <TList className="text-white/80 text-sm pt-0 border-white/50">
        <li className="col-span-2">Transaction ID</li>
        <li className="col-span-4">Note</li>
        <li className="col-span-2">Date</li>
        <li className="col-span-2">Category</li>
        <li className="col-span-2">Amount</li>
      </TList>
      <ul data-lenis-prevent className="h-[590px] overflow-y-scroll">
        {entries?.map((val) => (
          <li key={val?.id}>
            <TList>
              <li className="col-span-2">{val?.id}</li>
              <li className="col-span-4">{val?.notes ? val?.notes : "--"}</li>
              <li className="col-span-2">
                {val?.date ? new Date(val?.date).toLocaleDateString() : "--"}
              </li>
              <li className="col-span-2">
                {val?.category ? val?.category : "--"}
              </li>
              <li
                className={`col-span-2 ${
                  val?.isCashIn ? "text-green-500" : "text-red-500"
                }`}
              >
                ₹ {val?.amount ? val?.amount : "--"}
              </li>
            </TList>
          </li>
        ))}
      </ul>
      <TList className="text-white/80 py-3 bg-[#232323] border-none rounded-md">
        <li className="">Total</li>
        <li className="col-start-11 col-end-12">₹ {totalAmount}</li>
      </TList>
    </div>
  );
};

export default TransactionList;

export const TList: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <ul
    className={`${className} grid gap-2 grid-cols-12 py-3 px-2 border-b border-white/15`}
  >
    {children}
  </ul>
);
