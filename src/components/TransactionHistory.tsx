import React, { Suspense, useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import type { Entry } from "@/features/cashCountSlice";
import { FilterSVG } from "@/lib/Svgs";
import { lazy } from "react";
import { useGetEntriesQuery } from "@/services/entryService";
import useLoader from "@/hooks/useLoader";
const TransactionVerticalSlider = lazy(
  () => import("./TransactionVerticalSlider")
);

const TransactionHistory: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [filteredEntries, setFilteredEntries] = useState<Entry[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [isFilterSelected, setIsFilterSelected] = useState(false);
  const filterItems = [
    { label: "Cash In", id: "cash-in" },
    { label: "Cash Out", id: "cash-out" },
  ];

  const { data, isLoading } = useGetEntriesQuery("");
  // console.log("isLoadingT", isLoading);
  // useLoader(isLoading);
  // useEffect(() => {
  // }, [isLoading]);

  useEffect(() => {
    setEntries(data?.data);
    setFilteredEntries(data?.data);
  }, [data]);

  const handleFilterChange = (filterId: string) => {
    const filteredEntry = entries.filter((entry) =>
      filterId === "cash-in"
        ? entry.isCashIn
        : filterId === "cash-out"
        ? !entry.isCashIn
        : null
    );
    setFilteredEntries(filteredEntry);
    setFilterOpen(false);
    setIsFilterSelected(true);
  };

  const handleClearFilter = () => {
    setFilteredEntries(entries);
    setIsFilterSelected(false);
  };

  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex justify-between pe-3">
        <h2 className="text-2xl font-bold leading-[2.375rem]">
          Transaction History
        </h2>
        <div className="flex items-center gap-3">
          {isFilterSelected && (
            <p
              onClick={handleClearFilter}
              className="hover:underline underline-offset-8 cursor-pointer text-red-500"
            >
              ( Clear )
            </p>
          )}
          <Popover open={filterOpen} onOpenChange={setFilterOpen}>
            <PopoverTrigger asChild>
              <div className="flex items-center w-6 cursor-pointer relative">
                <FilterSVG className="w-full h-auto" />
              </div>
            </PopoverTrigger>
            <PopoverContent
              className="border-none p-0 text-white text-xl bg-none"
              align="start"
            >
              <div className="z-20 absolute bottom-0 right-0 translate-y-full -translate-x-1/4 rounded-md border border-white/15 bg-[#131313]">
                {filterItems?.map((val, i, arr) => (
                  <div
                    key={val?.id}
                    className={`cursor-pointer px-5 py-2 hover:bg-[#232323] transition ${
                      i === arr.length - 1 ? "" : "border-b border-white/15"
                    }`}
                    onClick={() => handleFilterChange(val?.id)}
                  >
                    {val?.label}
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="bg-gradient-to-bl from-gradient-red/40 to-gradient-blue/40 p-[2px] rounded-xl shadow-lg h-full">
        {isLoading ? (
          <div className="w-full max-h-[372px] h-full rounded-xl bg-black grid place-items-center">
            <div className="ping"></div>
          </div>
        ) : (
          <Suspense
            fallback={
              <div className="w-full max-h-[372px] h-full rounded-xl bg-black grid place-items-center">
                <div className="ping"></div>
              </div>
            }
          >
            <TransactionVerticalSlider filteredEntries={filteredEntries} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;
