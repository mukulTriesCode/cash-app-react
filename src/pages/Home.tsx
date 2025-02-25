import React, { useEffect } from "react";
import Dashboard from "../components/Dashboard";
import axios from "axios";
// const ChatBot = React.lazy(() => import("react-chatbotify"));
// import { Params } from "react-chatbotify";

const Home: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL || "");
        console.log("data :>> ", response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
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
