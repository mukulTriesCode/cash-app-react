import React from "react";
import GridLayout from "react-grid-layout";

const DraggableGrid: React.FC = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 6, h: 4},
    { i: "b", x: 7, y: 0, w: 6, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 3, y: 0, w: 3, h: 2 },
    { i: "d", x: 0, y: 4, w: 3, h: 3},
    { i: "e", x: 3, y: 4, w: 3, h: 3},
    { i: "f", x: 6, y: 4, w: 3, h: 3},
    { i: "g", x: 9, y: 4, w: 3, h: 3},
  ];
  return (
    <section>
      <GridLayout layout={layout} cols={12} rowHeight={30} width={1200}>
        <div className="rounded-lg flex justify-center items-center bg-gray-400/50 hover:bg-gray-400/70 transition-colors p-5" key="a">a</div>
        <div className="rounded-lg flex justify-center items-center bg-gray-400/50 hover:bg-gray-400/70 transition-colors p-5" key="b">b</div>
        <div className="rounded-lg flex justify-center items-center bg-gray-400/50 hover:bg-gray-400/70 transition-colors p-5" key="c">c</div>
        <div className="rounded-lg flex justify-center items-center bg-gray-400/50 hover:bg-gray-400/70 transition-colors p-5" key="d">d</div>
        <div className="rounded-lg flex justify-center items-center bg-gray-400/50 hover:bg-gray-400/70 transition-colors p-5" key="e">e</div>
        <div className="rounded-lg flex justify-center items-center bg-gray-400/50 hover:bg-gray-400/70 transition-colors p-5" key="f">f</div>
        <div className="rounded-lg flex justify-center items-center bg-gray-400/50 hover:bg-gray-400/70 transition-colors p-5" key="g">g</div>
      </GridLayout>
    </section>
  );
};

export default DraggableGrid;
