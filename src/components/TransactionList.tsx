import { Entry } from "@/features/cashCountSlice";
import { getToken } from "@/lib/utils";
import { RootState } from "@/store";
import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TransactionList: React.FC = () => {
  const root = useSelector((state: RootState) => state?.root);
  const totalAmount = root?.totalAmount;
  const [entryData, setEntryData] = useState<Entry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const token = getToken();

  const fetchEntries = async () => {
    const res = await axios.get(`/api/entry/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { data } = res.data;
    setIsLoading(false);
    setEntryData(data);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchEntries();
  }, []);

  // const entries = root?.entries || [];

  return (
    <div className="w-[calc(100vw-32px)] xs:w-full overflow-auto p-4 h-full border border-white/15 rounded-md bg-[#131313] text-base">
      <div className="min-w-[640px] xs:min-w-full w-full">
        <TList className="text-white/80 text-sm pt-0 border-white/50">
          <li className="col-span-2">Transaction ID</li>
          <li className="col-span-4">Note</li>
          <li className="col-span-2">Date</li>
          <li className="col-span-2">Category</li>
          <li className="col-span-2">Amount</li>
        </TList>
        <ul data-lenis-prevent className="h-[590px] overflow-y-auto">
          {isLoading ? (
            <div className="h-full w-full flex justify-center items-center">
              <div className="ping"></div>
            </div>
          ) : (
            entryData?.map((val, i) => (
              <li key={i}>
                <TList>
                  <li className="col-span-2">{i}</li>
                  <li className="col-span-4">
                    {val?.notes ? val?.notes : "--"}
                  </li>
                  <li className="col-span-2">
                    {val?.date
                      ? new Date(val?.date).toLocaleDateString()
                      : "--"}
                  </li>
                  <li className="col-span-2 capitalize">
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
            ))
          )}
        </ul>
        <TList className="text-white/80 py-3 bg-[#232323] border-none rounded-md">
          <li className="">Total</li>
          <li className="col-start-11 col-span-2">₹ {totalAmount}</li>
        </TList>
      </div>
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
