import React from "react";
import Category from "../assets/Category.png";
import { emojis } from "@/lib/utils";

const CategoryCard: React.FC<{
  category: { name: string };
  categoryTotal: number;
  index: number;
  length: number;
}> = ({ category, categoryTotal, index, length }) => {
  return (
    <div className="bg-gradient-to-bl from-gradient-red/20 to-gradient-blue/20 p-[1px] rounded-xl shadow-lg">
      <div className="p-4 rounded-xl bg-black">
        <img
          src={Category}
          alt="Artwork"
          className="max-w-[242px] w-full h-40 object-cover rounded-lg"
        />
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold capitalize">
              {category?.name?.length >= 17 ? category?.name?.slice(0, 17) + "..." : category?.name}
              {emojis[length > emojis.length ? length - emojis.length : index]}
            </h3>
          </div>
          <p className="text-sm text-gray-400 mt-2">Total amount</p>
          <p className="text-lg font-bold">₹ {categoryTotal}</p>
          <button className="transition-all mt-4 w-full py-2 bg-gradient-to-bl from-purple-500 !to-gradient-blue/50 !from-gradient-red/50 text-white font-semibold rounded-lg hover:opacity-90 border border-transparent hover:border-white/40">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};
export default CategoryCard;
