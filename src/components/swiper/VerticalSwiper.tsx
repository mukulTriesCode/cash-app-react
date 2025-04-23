import React, { lazy } from 'react';
import { Mousewheel, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Entry } from "@/features/cashCountSlice";
import { SWIPER_CONFIG, MAX_ENTRIES } from './SwiperConfig';
import 'swiper/css/virtual';
import 'swiper/css/mousewheel';
import SwiperItemSkeleton from './SwiperItemSkeleton';

const TransactionItem = lazy(() => import('../TransactionItem'));

interface VerticalSwiperProps {
  entries: Entry[];
}

const VerticalSwiper: React.FC<VerticalSwiperProps> = ({ entries }) => {
  const displayEntries = entries.slice(0, MAX_ENTRIES);

  return (
    <Swiper
      data-lenis-prevent
      modules={[Virtual, Mousewheel]}
      mousewheel={true}
      {...SWIPER_CONFIG}
    >
      {displayEntries.map((entry, index) => (
        <SwiperSlide key={entry?.id} virtualIndex={index} className='h-fit'>
          <React.Suspense fallback={<SwiperItemSkeleton />}>
            <TransactionItem
              entry={entry}
              isLast={index === displayEntries.length - 1}
              index={index}
            />
          </React.Suspense>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VerticalSwiper;