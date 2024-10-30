import React from "react";
import Category from "../assets/Category.png";

const CategoryCard: React.FC<{ category: { name: string } }> = ({
  category,
}) => {
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
            <h3 className="text-lg font-bold capitalize">{category?.name}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="none"
              className="w-6 h-6 text-[#FF5858]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-400">@Debbie111</p>
          <p className="text-sm text-gray-400 mt-2">Total amount</p>
          <p className="text-lg font-bold">₹ 1.57 ETH</p>
          <button className="transition-all mt-4 w-full py-2 bg-gradient-to-bl from-purple-500 !to-gradient-blue/50 !from-gradient-red/50 text-white font-semibold rounded-lg hover:opacity-90 border border-transparent hover:border-white/40">
            Place a bid
          </button>
        </div>
      </div>
    </div>
  );
};
export default CategoryCard;
