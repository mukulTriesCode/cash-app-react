import React, { useEffect, useRef } from "react";
import ScrollMagic from "scrollmagic";

const LinePath: React.FC = () => {
  const activePathRef = useRef<SVGPathElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const activePath = activePathRef.current;
      if (activePath) {
        const lineLength = activePath.getTotalLength();
        activePath.style.strokeDasharray = `${lineLength}`;
        activePath.style.strokeDashoffset = `${lineLength}`;

        const controller = new ScrollMagic.Controller({ refreshInterval: 0 });

        const scene = new ScrollMagic.Scene({
          triggerElement: wrapRef.current,
          duration: "100%",
          triggerHook: 0.5,
        })
          //@ts-expect-error assdf
          .on("progress", (e: { progress: number }) => {
            const drawLength = lineLength * e.progress;
            activePath.style.strokeDashoffset = String(lineLength - drawLength);
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
    <div ref={wrapRef} className="relative w-full min-h-[1200px] mb-[110px]">
      <svg
        className="absolute w-[600px] top-[50px] left-1/2 overflow-visible -translate-x-full z-[1]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 1200"
      >
        <path
          ref={activePathRef}
          className="active-path"
          d="M300 0 V1200"
          fill="none"
          stroke="green"
          strokeWidth="2px"
        />
      </svg>
      <svg
        className="absolute w-[600px] top-[50px] left-1/2 overflow-visible -translate-x-full z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 1200"
      >
        <path
          d="M300 0 V1200"
          fill="none"
          stroke="#e8e8e8"
          strokeWidth="2px"
        />
      </svg>
    </div>
  );
};

export default LinePath;
