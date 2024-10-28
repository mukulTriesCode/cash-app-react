import React from "react";
import Dashboard from "../components/Dashboard";
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
    <>
      {/* <React.Suspense fallback={<></>}>
        <ChatBot flow={flow} />
      </React.Suspense> */}
      <Dashboard />
    </>
  );
};

export default Home;
