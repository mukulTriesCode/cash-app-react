import React from "react";
import Dashboard from "../components/Dashboard";
import background from "../assets/Dashboard-min (1).webp";
// const ChatBot = React.lazy(() => import("react-chatbotify"));
// import { Params } from "react-chatbotify";

const Home: React.FC = () => {
  // const helpOptions = [
  //   "Quickstart",
  //   "API Docs",
  //   "Examples",
  //   "Github",
  //   "Discord",
  // ];
  // const flow = {
  //   start: {
  //     message: "Enter you name!",
  //     path: "loop",
  //   },
  //   loop: {
  //     message: (params: Params) => `Hi ${params.userInput}!`,
  //     path: "end",
  //     options: helpOptions,
  //   },
  // };
  return (
    <div>
      {/* <React.Suspense fallback={<></>}>
        <ChatBot flow={flow} />
      </React.Suspense> */}
      <main className="relative">
        <div className="absolute z-[-1] top-0 left-0 w-full h-screen opacity-10">
          <img
            className="w-full h-full object-cover"
            src={background}
            alt="bg"
          />
        </div>
        <Dashboard />
      </main>
    </div>
  );
};

export default Home;
