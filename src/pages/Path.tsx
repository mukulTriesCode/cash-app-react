import DraggableGrid from "../components/DraggableGrid";
import LinePath from "../components/LinePath";

const Path = () => {
  return (
    <div>
      <DraggableGrid />
      <div className="h-[800px] w-52 mx-auto bg-white"></div>
      <LinePath />
      <div className="h-[800px] w-52 mx-auto bg-white"></div>
    </div>
  );
};

export default Path;
