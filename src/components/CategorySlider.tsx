import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import CategoryCard from "./CategoryCard";
import { NextSVG, PreviousSVG } from "@/lib/Svgs";
import { useGetCategoryQuery } from "@/services/entryService";
import useLoader from "@/hooks/useLoader";

const CategorySlider: React.FC = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [categories, setCategories] = useState([]);
  const { data, isLoading } = useGetCategoryQuery("");
  if (isLoading) {
    useLoader(true);
    console.log("isLoadingC", isLoading);
  } else {
    useLoader(false);
  }
  // useEffect(() => {
  // }, [isLoading]);
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

  useEffect(() => {
    setCategories(data?.data);
  }, [data]);

  return (
    <>
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
      {isLoading ? (
        <div className="w-full h-[370px] mt-6 grid place-items-center text-xl">
          {/* Getting Categories */}
        </div>
      ) : categories && categories?.length > 0 ? (
        <Swiper
          className="mt-6"
          ref={swiperRef}
          spaceBetween={26}
          slidesPerView={"auto"}
        >
          {categories?.map(
            (category: { name: string; _id: string }, index, arr) => {
              return (
                <SwiperSlide className="max-w-[242px]" key={category._id}>
                  <CategoryCard
                    category={category}
                    categoryTotal={80}
                    index={index}
                    length={arr?.length}
                  />
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      ) : (
        <div className="w-full h-[370px] mt-6 grid place-items-center text-xl">
          No Categories found
        </div>
      )}
    </>
  );
};

export default CategorySlider;
