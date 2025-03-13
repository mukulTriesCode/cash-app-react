export const SWIPER_CONFIG = {
  slidesPerView: 4,
  virtual: {
    enabled: true,
    addSlidesAfter: 2,
    addSlidesBefore: 2,
  },
  className: "px-4 w-full max-h-[352px] min-h-[250px] xl:min-h-[352px] h-full rounded-xl bg-black",
  direction: "vertical" as const,
};

export const MAX_ENTRIES = 20;