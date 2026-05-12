import React, { useState } from "react";
import BlogCard from "../components/blog-card";
import { blogs } from "../data/blogs";
import Search from "../components/search";

export default function BlogPlatform() {
  const [query, setQuery] = useState("");

  const filteredBlogs = blogs.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div className="container mx-auto">
      <div className="my-5 mx-5">
        <Search query={query} setQuery={setQuery} placeholder="Search Blogs" />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredBlogs.map((blog) => {
          return <BlogCard key={blog.id} blog={blog} />;
        })}
      </div>
    </div>
  );
}
