import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import background from "../assets/Dashboard-min (1).webp";

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
        <Dashboard />
      </main>
    </div>
  );
};

export default Home;
