import { emojis } from '@/lib/utils';
import React from 'react'
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Entry } from "@/features/cashCountSlice";
import "swiper/css";

const VerticalSwiper: React.FC<{ entries: Entry[] }> = ({ entries }) => {
    return (
        <Swiper
            data-lenis-prevent
            modules={[Mousewheel]}
            direction={"vertical"}
            className="px-4 w-full max-h-[352px] min-h-[250px] xl:min-h-[352px] h-full rounded-xl bg-black"
            slidesPerView={4}
            mousewheel={true}
        >
            {entries.slice(0, 20).map((val, i, arr) => (
                <SwiperSlide
                    key={val?.id}
                    className={`[&&]:flex items-center h-[auto] gap-2 py-2 px-4 border-b border-white/15 ${i !== 0 && i === arr.length - 1 ? "border-none" : ""
                        }`}
                >
                    <div className="w-[40px] flex-none h-[40px] rounded-full bg-white/15 flex items-center justify-center">
                        {
                            emojis[
                            val?.notes?.length > emojis.length
                                ? val?.notes?.length - emojis.length
                                : val?.notes?.length
                            ]
                        }
                    </div>
                    <div className="flex justify-between w-full items-center">
                        <div className="flex flex-col justify-center gap-2">
                            <p>{val?.notes || "--"}</p>
                            {val?.date ? new Date(val?.date).toLocaleDateString() : "--"}
                        </div>
                        <div
                            className={`text-lg ${val?.isCashIn ? "text-green-500" : "text-red-500"
                                }`}
                        >
                            <p>₹ {val?.amount}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default VerticalSwiper;