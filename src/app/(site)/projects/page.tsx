"use client";
import { useState } from "react";
import Link from "next/link";

export default function Projects() {
  const [active, setActive] = useState("All");

  const categories = [
    "All",
    "UI Development",
    "UI Design",
    "Case Study",
    "Illustration",
    "Drawings",
  ];

  const projects = [
    {
      title: "Doctor One",
      slug: "/projects/doctor-one",
      category: "Case Study",
      image:
        "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5",
      tech: ["ReactJS", "Tailwind CSS"],
    },
    {
      title: "Dashboard UI",
      slug: "/projects/happy-erp",
      category: "UI Design",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tech: ["Figma", "UI Design"],
    },
    {
      title: "React Web App",
      slug: "/projects/react-web-app",
      category: "UI Development",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tech: ["ReactJS", "Tailwind CSS"],
    },
    {
      title: "Character Illustration",
      slug: "/projects/character-illustration",
      category: "Illustration",
      image:
        "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5",
      tech: ["Illustrator"],
    },
    {
      title: "Sketch Art",
      slug: "/projects/sketch-art",
      category: "Drawings",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
      tech: ["Pencil Art"],
    },
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
            <Link href={item.slug} key={i}>
              <div className="group overflow-hidden transition cursor-pointer">
                <div className="rounded-2xl overflow-hidden relative">
                  <img
                    src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
                    className="w-full h-52 object-cover group-hover:scale-105 transition"
                    alt={item.title}
                  />

                  <div className="absolute w-full top-0 flex flex-col justify-between h-full">
                    {/* TECH TAGS */}
                    <div className="flex gap-2 p-4">
                      {item.tech.map((tech, index) => (
                        <h1
                          key={index}
                          className={`px-3 py-1 text-xs rounded-full ${
                            index === 0
                              ? "bg-white/50 backdrop-blur-sm text-black"
                              : "bg-black/50 text-white"
                          }`}
                        >
                          {tech}
                        </h1>
                      ))}
                    </div>

                    {/* BOTTOM CONTENT */}
                    <div className="relative overflow-hidden p-4 pt-8">
                      <div className="absolute bottom-0 left-0 w-full h-24 backdrop-blur-sm mask-[linear-gradient(to_top,black,transparent)]"></div>

                      <div className="absolute bottom-0 left-0 w-full h-20 backdrop-blur-md mask-[linear-gradient(to_top,black,transparent)]"></div>

                      <div className="absolute bottom-0 left-0 w-full h-16 backdrop-blur-xl mask-[linear-gradient(to_top,black,transparent)]"></div>

                      <h3 className="relative z-10 text-md font-semibold text-gray-100 mt-1">
                        {item.title}
                      </h3>

                      <span className="relative z-10 text-xs text-blue-500">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}