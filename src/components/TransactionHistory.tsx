import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const TransactionHistory: React.FC = () => {
  const { entries } = useSelector((state: RootState) => state?.root);
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold leading-[2.375rem]">
        Transaction History
      </h2>
      <div className="bg-gradient-to-bl from-gradient-red/40 to-gradient-blue/40 p-[2px] rounded-xl shadow-lg h-full">
        {entries?.length > 0 ? (
          <Swiper
            data-lenis-prevent
            modules={[Mousewheel]}
            direction={"vertical"}
            className="px-4 w-full max-h-[372px] h-full rounded-xl bg-black"
            slidesPerView={"auto"}
            mousewheel={true}
          >
            {entries.map((val, i, arr) => (
              <SwiperSlide
                key={val?.id}
                className={`flex items-center h-[auto] gap-2 py-2 px-1 border-b border-white/15 ${
                  i !== 0 && i === arr.length - 1 ? "border-none" : ""
                }`}
              >
                <div className="w-[40px] flex-none h-[40px] rounded-full bg-white/15 flex items-center justify-center">
                  <span>{`🎉`}</span>
                </div>
                <div className="flex justify-between w-full items-center">
                  <div className="flex flex-col justify-center gap-2">
                    <p>{val?.notes || "--"}</p>
                    {val?.date
                      ? new Date(val?.date).toLocaleDateString()
                      : "--"}
                  </div>
                  <div
                    className={`text-lg text-white ${
                      val?.isCashIn ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    <p>₹ {val?.amount}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="px-4 w-full max-h-[372px] h-full rounded-xl bg-black grid place-items-center text-xl">
            No Transactions found
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;
