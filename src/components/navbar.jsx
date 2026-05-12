import { ChevronLeft } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const getPageName = (path) => {
    switch (path) {
      case "/":
        return "Zervvo Tasks";
      case "/single-page-application":
        return "Single Page Application";
      case "/weather-dashboard":
        return "Weather Dashboard";
      case "/blogs":
        return "Blogs";
      default:
        if (path.startsWith("/blog")) {
          return "Blog Detail";
        }
    }
  };

  return (
    <div className="bg-gray-900 w-full sticky top-0 z-20">
      <div className="flex items-center justify-between py-6 px-6 text-white">
        {location.pathname !== "/" ? (
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </button>
        ) : (
          <div></div>
        )}
        <h1 className="text-md md:text-2xl font-semibold">
          {getPageName(location.pathname)}
        </h1>
        <div></div>
      </div>
    </div>
  );
}
