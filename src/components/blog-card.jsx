import { useNavigate } from "react-router-dom";

export default function BlogCard({ blog }) {
  const navigate = useNavigate();

  if (!blog) return null;
  return (
    <div className="relative border p-4 m-2 rounded-lg h-100 cursor-pointer" onClick={() => navigate(`/blog/${blog.id}`)}>
      <img src={blog.image} className="w-60 h-auto object-contain" />
      <div className="w-full max-w-60  pt-5">
      <h2 className="font-semibold text-lg">{blog.title}</h2>
      <p className="font-normal text-md">{blog.description}</p>
      </div>
      <p className="absolute bottom-3 left-3 text-sm text-gray-500 pt-5">By {blog.author}</p>
    </div>
  );
}
