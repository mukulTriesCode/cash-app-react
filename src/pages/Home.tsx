import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import background from "../assets/Dashboard-min (1).webp";
import Navbar from "../components/Navbar";
import ChatBot from "react-chatbotify";
import { Params } from "react-chatbotify";

const Home = () => {
  const helpOptions = [
    "Quickstart",
    "API Docs",
    "Examples",
    "Github",
    "Discord",
  ];
  const flow = {
    start: {
      message: "Enter you name!",
      path: "loop",
    },
    loop: {
      message: (params: Params) => `Hi ${params.userInput}!`,
      path: "end",
      options: helpOptions,
    },
  };
  return (
    <div>
      <ChatBot flow={flow} />
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
