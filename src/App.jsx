import React from "react";
import SinglePageApplication from "./pages/single-page-application";
import WeatherDashboard from "./pages/weather-dashboard";
import BlogPlatform from "./pages/blog-platform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import BlogDetail from "./components/blog-detail";
import AppLayout from "./pages/app-layout";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/single-page-application"
              element={<SinglePageApplication />}
            />
            <Route path="/weather-dashboard" element={<WeatherDashboard />} />
            <Route path="/blogs" element={<BlogPlatform />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
