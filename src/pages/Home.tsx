import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import background from "../assets/Dashboard-min (1).webp";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <main className="relative">
        <div className="absolute z-[-1] top-0 left-0 w-full h-screen opacity-10">
          <img
            className="w-full h-full object-cover"
            src={background}
            alt="bg"
          />
        </div>
        <Sidebar />
        <div className="ms-[88px]">
          <Navbar />
          <div className="pt-[95px]">
            <Dashboard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
