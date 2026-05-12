import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-5">
      <button
        onClick={() => {
          navigate("/single-page-application");
        }}
        className="w-auto h-8 bg-white rounded-md px-5 cursor-pointer hover:bg-blue-900 hover:text-white"
      >
        Single Page Application
      </button>
      <button
        onClick={() => {
          navigate("weather-dashboard");
        }}
        className="w-auto h-8 bg-white rounded-md px-5 cursor-pointer hover:bg-blue-900 hover:text-white"
      >
        Weather Dashboard
      </button>
      <button
        onClick={() => {
          navigate("/blogs");
        }}
        className="w-auto h-8 bg-white rounded-md px-5 cursor-pointer hover:bg-blue-900 hover:text-white"
      >
        Blogs
      </button>
    </div>
  );
}
