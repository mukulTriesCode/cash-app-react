import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4 text-white">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg text-gray-400">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-4 px-6 py-3 bg-purple-shade hover:bg-purple-shade/90 rounded-lg transition-all"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
