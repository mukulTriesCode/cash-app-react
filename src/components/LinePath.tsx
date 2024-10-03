import React, { useEffect, useRef, useState } from "react";
import ScrollMagic from "scrollmagic";

const LinePath: React.FC = () => {
  const activePathRef = useRef<SVGPathElement | null>(null);
  const progressLineRef = useRef<HTMLDivElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const activePath = activePathRef.current;
      const progressLine = progressLineRef.current;

      if (activePath && progressLine) {
        const lineLength = activePath.getTotalLength();
        activePath.style.strokeDasharray = `${lineLength}`;
        activePath.style.strokeDashoffset = `${lineLength}`;

        const controller = new ScrollMagic.Controller({ refreshInterval: 0 });

        const scene = new ScrollMagic.Scene({
          triggerElement: wrapRef.current,
          duration: "100%",
          triggerHook: 0.5,
        })
          // @ts-ignore
          .on("progress", (e: { progress: number }) => {
            const drawLength = lineLength * e.progress;
            activePath.style.strokeDashoffset = String(lineLength - drawLength);
            // Update progress line scale
            progressLine.style.transform = `scaleY(${e.progress})`;

            // Update visible items based on scroll progress
            const itemCount = 5;
            const visibleCount = Math.ceil(e.progress * itemCount);
            setVisibleItems(
              Array.from({ length: visibleCount }, (_, i) => i + 1)
            );
          })
          .addTo(controller);

        return () => {
          scene.destroy();
          controller.destroy(true);
        };
      }
    }
  }, []);

  return (
    <>
      <div
        ref={wrapRef}
        className="relative w-full md:min-h-[1200px] my-[110px]"
      >
        {/* Desktop SVG paths */}
        <>
          <svg
            className="absolute w-[600px] top-[50px] left-1/2 overflow-visible -translate-x-full z-[1] hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 1200"
          >
            <path
              ref={activePathRef}
              className="active-path"
              d="M604.5 0V218.5C604.5 248.876 629.124 273.5 659.5 273.5H1150C1180.38 273.5 1205 298.124 1205 328.5V540.5C1205 570.876 1180.38 595.5 1150 595.5H56.5C26.1243 595.5 1.5 620.124 1.5 650.5V1126"
              fill="none"
              stroke="green"
              strokeWidth="2px"
            />
          </svg>
          <svg
            className="absolute w-[600px] top-[50px] left-1/2 overflow-visible -translate-x-full z-0 hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 1200"
          >
            <path
              d="M604.5 0V218.5C604.5 248.876 629.124 273.5 659.5 273.5H1150C1180.38 273.5 1205 298.124 1205 328.5V540.5C1205 570.876 1180.38 595.5 1150 595.5H56.5C26.1243 595.5 1.5 620.124 1.5 650.5V1126"
              fill="none"
              stroke="#e8e8e8"
              strokeWidth="2px"
            />
          </svg>
        </>
        {/* Mobile progress line */}
        <div className="container flex gap-4">
          <div className="relative inset-0 w-0.5 md:hidden">
            <div className="absolute inset-0 bg-[#e5e6e8]"></div>
            <div
              ref={progressLineRef}
              className="absolute inset-0 bg-gradient-to-b from-[#324eef] via-[#324eef] to-[#324eef] origin-top"
              style={{
                transform: "scaleY(0)",
                background:
                  "linear-gradient(0deg, #e5e6e8 0, #324eef 15%, #324eef 100%)",
              }}
            ></div>
          </div>
          <div className="">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className={`my-20 relative transition-opacity duration-700 ease-in-out ${
                  visibleItems.includes(item) ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-3xl">title</div>
                <div className="text-xl">
                  Lorem ipsum dolor, sit amet consectetur adipi Lorem ipsum
                  dolor, sit amet consectetur adipi
                </div>
                <div className="h-4 w-4 bg-blue-600/80 rounded-full absolute top-1/2 -translate-y-1/2 -left-[calc(16px+1px)] -translate-x-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LinePath;
