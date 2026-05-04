"use client"
import { useState } from "react";

export default function Projects() {
  const [active, setActive] = useState("All");

  const categories = [
    "All",
    "UI Development",
    "UI Design",
    "Case Study",
    "Illustration",
    "Drawings"
  ];

  const projects = [
    {
      title: "Doctor One",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1581090700227-1e8e0c1f8f9b",
    },
    {
      title: "Dashboard UI",
      category: "UI Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      title: "React Web App",
      category: "UI Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "Character Illustration",
      category: "Illustration",
      image: "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5",
    },
    {
      title: "Sketch Art",
      category: "Drawings",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
    }
  ];

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="relative min-h-screen px-6 py-24">
      <div className="absolute inset-0 grid-bg z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">

        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-10 mt-6">
          My Works
        </h1>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm rounded-full transition ${
                active === cat
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="group bg-white/80 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="overflow-hidden">
                <img
                  src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
                  className="w-full h-52 object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-4">
                <span className="text-xs text-blue-500">
                  {item.category}
                </span>

                <h3 className="text-md font-semibold text-gray-800 mt-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}