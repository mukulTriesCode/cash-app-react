import React from "react";

interface Entries {
  totalAmount: number;
  lastEntry: {
    amount: number;
    notes: string;
  } | null;
}

const TotalData: React.FC<Entries> = (entries) => {
  return (
    <div className="mb-4 xs:mb-7 w-full p-4 border border-white/15 rounded-md bg-[#131313] flex flex-col gap-3">
      <h2 className="text-2xl font-semibold">Record</h2>
      <div className="text-lg flex flex-col gap-1">
        <p>Total amount : {cashEntry?.totalAmount}</p>
        <p>
          Recent Transaction :{" "}
          {cashEntry?.entries.length > 0 && (
            <>
              {
                cashEntry?.entries?.filter(
                  (val, i, arr) => i === arr.length - 1 && val?.amount
                )[0]?.amount
              }{" "}
              {cashEntry?.entries?.filter(
                (val, i, arr) => i === arr.length - 1 && val?.notes
              )[0]?.notes && (
                `(${cashEntry?.entries?.filter(
                  (val, i, arr) => i === arr.length - 1 && val?.notes
                )[0]?.notes})`
              )}
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default TotalData;
