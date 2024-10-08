import React from "react";
import GridLayout from "react-grid-layout";

const DraggableGrid: React.FC = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2},
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];
  return (
    <section>
      <GridLayout layout={layout} cols={12} rowHeight={30} width={1200}>
        <div className="bg-pink-200 p-5" key="a">a</div>
        <div className="bg-pink-200 p-5" key="b">b</div>
        <div className="bg-pink-200 p-5" key="c">c</div>
      </GridLayout>
    </section>
  );
};

export default DraggableGrid;
