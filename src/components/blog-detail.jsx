import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function BlogDetail() {
  const { id } = useParams();

  const blog = blogs.find((b) => b.id === Number(id));
  return (
    <div className="container mx-auto p-5">
      <img src={blog.image} className="w-full max-w-2xl" />

      <h1 className="text-2xl font-bold mt-4">{blog.title}</h1>
      <p className="mt-2 text-gray-600">{blog.description}</p>

      <p className="mt-3 text-sm">By {blog.author}</p>
      <p className="text-sm text-gray-400">{blog.date}</p>
    </div>
  );
}
