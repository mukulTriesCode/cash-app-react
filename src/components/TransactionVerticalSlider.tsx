import React, { lazy, Suspense } from "react";
import { Entry } from "@/features/cashCountSlice";

// Lazy load the VerticalSwiper component
const VerticalSwiper = lazy(() => import("./swiper/VerticalSwiper"));

interface TransactionVerticalSliderProps {
  filteredEntries: Entry[];
}

const LoadingFallback = () => (
  <div className="px-4 w-full min-h-[250px] max-h-[372px] h-full rounded-xl bg-black grid place-items-center">
    Loading transactions...
  </div>
);

const EmptyState = () => (
  <div className="px-4 w-full min-h-[250px] max-h-[372px] h-full rounded-xl bg-black grid place-items-center text-xl">
    No Transactions found
  </div>
);

const TransactionVerticalSlider: React.FC<TransactionVerticalSliderProps> = ({
  filteredEntries,
}) => {
  if (!filteredEntries?.length) {
    return <EmptyState />;
  }

  return (
    <Suspense fallback={<LoadingFallback />}>
      <VerticalSwiper entries={filteredEntries} />
    </Suspense>
  );
};

export default TransactionVerticalSlider;
