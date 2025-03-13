import React from 'react';

const SwiperItemSkeleton: React.FC = () => (
  <div className="flex items-center h-auto gap-2 py-2 px-4 animate-pulse">
    <div className="w-[40px] h-[40px] rounded-full bg-white/10" />
    <div className="flex justify-between w-full items-center">
      <div className="flex flex-col gap-2 w-full max-w-[200px]">
        <div className="h-4 bg-white/10 rounded w-3/4" />
        <div className="h-4 bg-white/10 rounded w-1/2" />
      </div>
      <div className="h-4 bg-white/10 rounded w-[60px]" />
    </div>
  </div>
);

export default SwiperItemSkeleton;