
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Category from "../assets/Category.png";

const CategorySlider: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current?.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current?.swiper.slideNext();
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.on("slideChange", () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }
  }, []);

  return (
    <div className="col-span-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Categories</h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <button
              className={`transition-all p-2 rounded-xl border border-white/15 ${
                isBeginning ? "bg-transparent" : "bg-white/15"
              }`}
              onClick={handlePrev}
              disabled={isBeginning}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className={`transition-all p-2 rounded-xl border border-white/15 ${
                isEnd ? "bg-transparent" : "bg-white/15"
              }`}
              onClick={handleNext}
              disabled={isEnd}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Swiper
        className="mt-6"
        ref={swiperRef}
        spaceBetween={26}
        slidesPerView={"auto"}
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide className="max-w-[242px]" key={index}>
            <CategoryCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;

const CategoryCard: React.FC = () => {
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
            <h3 className="text-lg font-bold">Ready Players</h3>
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
          <p className="text-sm text-gray-400 mt-2">Last Bid</p>
          <p className="text-lg font-bold">1.57 ETH</p>
          <button className="transition-all mt-4 w-full py-2 bg-gradient-to-bl from-purple-500 !to-gradient-blue/50 !from-gradient-red/50 text-white font-semibold rounded-lg hover:opacity-90 border border-transparent hover:border-white/40">
            Place a bid
          </button>
        </div>
      </div>
    </div>
  );
};
