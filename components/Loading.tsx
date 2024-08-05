import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex space-x-2 justify-center items-center bg-white h-screen">
        <span className="sr-only">Loading...</span>
        <div className="h-8 w-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loading;
