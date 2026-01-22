"use client";
import { useEffect,useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");
  const [openPostId, setOpenPostId] = useState<number | null>(null);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const postFunc = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.error(error);
        }
      }
    };

    postFunc();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="mb-4 text-3xl font-bold">Posts</h1>

      <input
        type="text"
        placeholder="Search by title..."
        className="mb-6 w-full rounded border px-3 py-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => {
          const isOpen = openPostId === post.id;

          return (
            <div
              key={post.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              {/* Gradient top line */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <h2 className="mb-3 text-lg font-bold text-gray-900">
                {post.title}
              </h2>

              <p
                className={`text-sm text-gray-600 transition-all duration-300 ${
                  isOpen ? "" : "line-clamp-4"
                }`}
              >
                {post.body}
              </p>

              <button
                onClick={() => setOpenPostId(isOpen ? null : post.id)}
                className="mt-4 text-sm font-medium text-indigo-600 hover:underline"
              >
                {isOpen ? "Show less" : "Read more"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}