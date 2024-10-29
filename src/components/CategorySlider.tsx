import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import CategoryCard from "./CategoryCard";

const CategorySlider: React.FC = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  // const images = [
  //   "../assets/art1.webp",
  //   "../assets/art2.webp",
  //   "../assets/art3.webp",
  // ];

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
                isBeginning ? "bg-transparent" : "bg-white/15 hover:bg-white/20"
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
                isEnd ? "bg-transparent" : "bg-white/15 hover:bg-white/20"
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
        {[...Array(8)].map((_, index) => (
          <SwiperSlide className="max-w-[242px]" key={index}>
            <CategoryCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;


