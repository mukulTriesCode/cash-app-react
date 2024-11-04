import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import CategoryCard from "./CategoryCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/cashStore";
import { NextSVG, PreviousSVG } from "@/lib/Svgs";

const CategorySlider: React.FC = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const { categories, entries } = useSelector(
    (state: RootState) => state?.root
  );
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
              id="prev-category"
              aria-label="prev-category"
              className={`transition-all p-2 rounded-xl border border-white/15 ${
                isBeginning || categories?.length === 0
                  ? "bg-transparent"
                  : "bg-white/15 hover:bg-white/20"
              }`}
              onClick={handlePrev}
              disabled={isBeginning || categories?.length === 0}
            >
              <PreviousSVG />
            </button>
            <button
              id="next-category"
              aria-label="next-category"
              className={`transition-all p-2 rounded-xl border border-white/15 ${
                isEnd || categories?.length === 0
                  ? "bg-transparent"
                  : "bg-white/15 hover:bg-white/20"
              }`}
              onClick={handleNext}
              disabled={isEnd || categories?.length === 0}
            >
              <NextSVG />
            </button>
          </div>
        </div>
      </div>
      {categories && categories?.length > 0 ? (
        <Swiper
          className="mt-6"
          ref={swiperRef}
          spaceBetween={26}
          slidesPerView={"auto"}
        >
          {categories?.map((category, index) => {
            const categoryTotal = entries
              ?.filter((entry) => entry?.category === category?.name)
              .reduce((total, val) => total + (val?.amount || 0), 0);
            return (
              <SwiperSlide className="max-w-[242px]" key={index}>
                <CategoryCard
                  category={category}
                  categoryTotal={categoryTotal}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div className="w-full h-[370px] mt-6 grid place-items-center text-xl">
          No Categories found
        </div>
      )}
    </div>
  );
};

export default CategorySlider;
