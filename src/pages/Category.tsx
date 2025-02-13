import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";

const Category: React.FC = () => {
  const state = useSelector((state: RootState) => state?.root);
  return (
    <div className="p-7">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-4">
        {state?.categories?.map((category, i) => (
          <div key={i} className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold">{category?.name}</h3>
            {state?.entries
              ?.filter((val) => val?.category === category?.name)
              .map((filteredEntry, index) => (
                <div key={index}>
                  <div className="">{filteredEntry?.amount}</div>
                  <div className="">{filteredEntry?.notes}</div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
