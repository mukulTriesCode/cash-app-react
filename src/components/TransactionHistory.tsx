import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

const TransactionHistory: React.FC = () => {
  return (
    <div data-lenis-prevent className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold leading-[2.375rem]">
        Transaction History
      </h2>
      <div className="bg-gradient-to-bl from-gradient-red/40 to-gradient-blue/40 p-[2px] rounded-xl shadow-lg h-full">
        <Swiper
          modules={[Mousewheel]}
          direction={"vertical"}
          className="px-4 w-full max-h-[372px] h-full rounded-xl bg-black"
          slidesPerView={"auto"}
          mousewheel={true}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, i, arr) => (
            <SwiperSlide
              key={item}
              className={`flex items-center h-[auto] gap-2 py-2 px-1 border-b border-white/15 ${
                i === arr.length - 1 ? "border-none" : ""
              }`}
            >
              <div className="w-[40px] flex-none h-[40px] rounded-full bg-white/15 flex items-center justify-center">
                +
              </div>
              <div className="flex justify-between w-full items-center">
                <div className="flex flex-col items-center gap-2">
                  <p>Transaction {item}</p>
                  <p>Transaction {item}</p>
                </div>
                <div className="text-lg text-white">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TransactionHistory;
