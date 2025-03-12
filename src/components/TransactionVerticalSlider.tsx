import React, { lazy, Suspense } from "react";
import { Entry } from "@/features/cashCountSlice";

// Lazy load the VerticalSwiper component
const VerticalSwiper = lazy(() => import("./VerticalSwiper"));

const TransactionVerticalSlider: React.FC<{ filteredEntries: Entry[] }> = ({
  filteredEntries,
}) => {
  return (
    <>
      {filteredEntries?.length > 0 ? (
        <Suspense fallback={<div>Loading transactions...</div>}>
          <VerticalSwiper entries={filteredEntries} />
        </Suspense>
      ) : (
        <div className="px-4 w-full min-h-[250px] max-h-[372px] h-full rounded-xl bg-black grid place-items-center text-xl">
          No Transactions found
        </div>
      )}
    </>
  );
};

export default TransactionVerticalSlider;
