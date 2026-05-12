import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white mt-10">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h1 className="text-xl font-bold">Zervvo Tasks</h1>
          <p className="text-sm text-gray-400">
            Built with React & Tailwind
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/blogs" className="hover:text-white">Blogs</a>
          <a href="/weather-dashboard" className="hover:text-white">Weather</a>
          <a href="/single-page-application" className="hover:text-white">SPA</a>
        </div>

        <div className="text-sm text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} Zervvo. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
