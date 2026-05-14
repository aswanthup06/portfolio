"use client";

import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useContactModal } from "../context/ContactModalContext";
import { LuCircleArrowRight } from "react-icons/lu";
import Link from "next/link";

interface Testimonial {
  avatar: string;
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    avatar: "/me.jpg",
    quote:
      "As a project manager, I used to spend hours chasing updates. Now I open Workhorse and instantly know where everything stands, it saves me more time than I expected.",
    name: "Gokul Hari",
    role: "Co-Founder of Chaavie Solutions",
  },
  {
    avatar: "/me.jpg",
    quote:
      "Working with Aswanth has been a great experience. His UI/UX skills, creative thinking, and development knowledge help transform ideas into practical and user-friendly digital products. He has a professional approach and consistently delivers quality results.",
    name: "Muhammadh Musthafa",
    role: "Managing Director at G tec Kunnumpuram ",
  },
  {
    avatar: "/me.jpg",
    quote:
      "An exceptional UI developer who consistently delivered clean, modern, and user-friendly designs. His attention to detail, creativity, and understanding of user experience greatly improved the quality of projects. As a full-stack developer, working with him made development smoother and the final product much more polished and professional.",
    name: "Bhavana Raj",
    role: "MERN Stack Developer at Chaavie Solutions",
  },
  {
    avatar: "/me2.png",
    quote:
      "I was skeptical at first, but within a week I could see the difference. Tasks were clearer, updates were easier to find, and deadlines stopped slipping. It's the kind of tool you don't realize you needed until it's there.",
    name: "Marc Rowland",
    role: "Founder at Incite.io",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200">
      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center font-semibold text-sm`}
      >
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover"
        />
      </div>
      <p className="text-sm text-gray-700 leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div>
        <p className="text-sm font-semibold text-gray-900">
          {testimonial.name}
        </p>
        <p className="text-xs text-gray-500 mt-0.5">{testimonial.role}</p>
      </div>
    </div>
  );
}

import {
  IoLogoReact,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
} from "react-icons/io5";
import { SiNextdotjs, SiFigma } from "react-icons/si";

const strengths: string[] = [
  "Pixel-Perfect UI Development",
  "99% Figma to Code Accuracy",
  "Clean & Scalable Code",
  "Fast Responsive Interfaces",
  "Detail-Oriented Execution",
];

export default function Home() {
  const { openModal } = useContactModal();
  return (
    <div className="flex relative min-h-screen pt-24 flex-col items-center font-sans scroll-smooth">
      <div className="absolute inset-0 grid-bg -z-10" />
      <div className="pt-20 flex items-center flex-col">
        <div className="flex items-center justify-center text-blue-500 font-semibold">
          Personal Portfolio
        </div>

        <div className="relative">
          <div
            className="w-48 h-fit bg-blue-500 absolute top-20 -left-72 rounded -rotate-12 hover:-rotate-10  bg-linear-to-b
    from-blue-400
    to-blue-600
    text-white
    font-medium text-[14px]
    shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
    hover:from-blue-500 hover:to-blue-700
    active:translate-y-px
    transition-all duration-200
    cursor-pointer
    p-6
    "
          >
            <h1 className=" tracking-wider font-semibold mb-2">Expert In</h1>

            <div className="mt-2">UI Development</div>
            <div className="mt-2">Web Development</div>
            <div className="mt-2">UI UX Design</div>
          </div>

          <h1 className="text-6xl text-center font-semibold text-gray-700">
            Building <span className="text-blue-500">User-Centric</span>
          </h1>

          <h1 className="text-6xl text-center font-semibold  mb-4 text-gray-700">
            Web Experiences
          </h1>
        </div>

        <div className="flex justify-center">
          <p className="text-md text-center text-gray-500  w-7/12 ">
            Bridging UI/UX excellence with clean, performant code. I specialize
            in transforming complex workflows into intuitive, user-centric web
            applications
          </p>
        </div>

        <div className="flex items-center justify-center mt-6 ">
          <button
            onClick={openModal}
            className="
    bg-gradient-to-b
    from-blue-400
    to-blue-600
    rounded-md
    text-white
    h-10 w-36
    font-medium text-[14px]
    flex items-center gap-2 justify-center
    shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
    hover:from-blue-500 hover:to-blue-700
    active:translate-y-[1px]
    transition-all duration-200
    cursor-pointer
  "
          >
            Get in Touch <MdOutlineArrowOutward />
          </button>
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <IoLogoReact className="text-blue-500 text-lg" />
              ReactJS
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <SiNextdotjs className="text-black text-lg" />
              Next.js
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <SiFigma className="text-red-500 text-lg" />
              Figma
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <IoLogoHtml5 className="text-orange-500 text-lg" />
              HTML
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <IoLogoCss3 className="text-blue-600 text-lg" />
              CSS
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <IoLogoJavascript className="text-yellow-400 text-lg" />
              JavaScript
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="flex items-center justify-center w-full">
        <div className="bg-blue-200 mt-36 w-[70%] border-4 border-blue-200 rounded-xl">
          <img src="./dash.png" alt="" />
        </div>
      </div> */}

      <div className="mt-28  flex items-end justify-between w-6xl">
        <div>
          <h1 className="font-bold text-sm md:text-base ">About Me</h1>
          <h1 className="text-3xl text-slate-500/60">
            Designing Seamless User Experiences
          </h1>
        </div>

        <button
          className="
    bg-gradient-to-b
    from-blue-400
    to-blue-600
    rounded-md
    text-white
    h-10 w-36
    font-medium text-[14px]
    flex items-center gap-2 justify-center
    shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
    hover:from-blue-500 hover:to-blue-700
    active:translate-y-px
    transition-all duration-200
    cursor-pointer
  "
        >
          <Link href="/about">Learn More</Link>

          <MdOutlineArrowOutward />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-6xl mt-12">
        {/* Card 1 - Zapier Integration */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl flex flex-col justify-between min-h">
          <div>
            <div className="w-20 h-20 border border-gray-200 rounded-full flex items-center justify-center mb-4">
              <img
                src="/me2.png"
                alt="Aswanth"
                className="relative w-full h-full md:w-40  object-cover rounded-full scale-110  shadow-lg"
              />
            </div>
            <h2 className="text-gray-900 font-bold text-lg leading-tight mb-2">
              Aswanth UP
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              I design and develop clean, responsive, and user-focused digital
              experiences with a strong focus on modern UI development. With
              experience in React, Tailwind CSS, Flutter, and UI/UX design, I
              bridge the gap between creativity and functionality to build
              interfaces that are visually appealing, scalable, and easy to use.
            </p>
          </div>
          <div className="flex items-center justify-between mt-6">
            <button className="flex items-center gap-1.5 text-gray-500 text-sm font-medium hover:text-gray-700 transition">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Configure
            </button>
            {/* Toggle */}
            <button
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none  "bg-blue-500" : "bg-gray-200"}`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300  "translate-x-6" : "translate-x-0"}`}
              />
            </button>
          </div>
        </div>

        {/* Middle column: 3 stacked cards */}
        <div className="flex flex-col gap-4">
          {/* Trackers Connected */}
          <div className="bg-white border rounded-xl border-gray-200 hover:shadow-xl p-5 ">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-900 font-bold text-base">
                  Trackers Connected
                </p>
                <p className="text-gray-400 text-xs mt-0.5">
                  09 Active Integrations
                </p>
              </div>
              <div className="flex gap-1.5">
                {/* Teams icon */}
                <div className="w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                {/* Slack icon */}
                <div className="w-7 h-7 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                {/* Jira icon */}
                <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">J</span>
                </div>
              </div>
            </div>
          </div>

          {/* Focusing */}
          <div className="bg-white rounded-xl  p-5 border border-gray-200 hover:shadow-xl">
            <div className="flex items-start justify-between mb-1">
              <div>
                <p className="text-gray-900 font-bold text-base">Focusing</p>
                <p className="text-gray-400 text-xs">Productivity Analytics</p>
              </div>
              <span className="text-blue-500 text-xs font-semibold bg-blue-50 px-2 py-0.5 rounded-xs">
                Range Ratio
              </span>
            </div>
            <p className="text-5xl font-extrabold text-gray-900 mt-3 tracking-tight">
              99%
            </p>
            <div className="flex justify-between mt-2">
              <span className="text-gray-400 text-xs">Maximum of focus</span>
              <span className="text-gray-500 text-xs font-semibold">
                Monthly Focus
              </span>
            </div>
          </div>

          {/* Shortcut Keys */}
          <div className="bg-white rounded-xl px-5 py-4 border border-gray-200 hover:shadow-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-sm">
                  Shortcut Keys
                </p>
                <p className="text-gray-400 text-xs">
                  Faster easier way to access the features.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded-lg">
                ⌘
              </kbd>
              <span className="text-gray-400 text-xs">+</span>
              <kbd className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded-lg">
                ⌥
              </kbd>
              <span className="text-gray-400 text-xs">+</span>
              <kbd className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded-lg">
                M
              </kbd>
            </div>
          </div>
        </div>

        {/* Card 3 - 10X + Team Productivity */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl flex flex-col justify-between min-h-">
          <div>
            <p className="text-8xl font-black text-gray-900 tracking-tighter leading-none">
              500 +
            </p>
            <p className="text-gray-900 font-bold text-lg">Screens Developed</p>
          </div>
          <div className="mt-6">
            <p className="text-gray-900 font-bold text-lg">
              Team's Productivity
            </p>
            <p className="text-gray-400 text-sm mt-1 leading-relaxed">
              Boost your team's efficiency with our next-gen productivity
              solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-28  flex items-end justify-between w-6xl">
        <div>
          <h1 className="font-bold text-sm md:text-base ">Projects</h1>
          <h1 className="text-3xl  text-slate-500/60">
            Featured Work Showcase
          </h1>
        </div>

        <button
          className="
    bg-gradient-to-b
    from-blue-400
    to-blue-600
    rounded-md
    text-white
    h-10 w-36
    font-medium text-[14px]
    flex items-center gap-2 justify-center
    shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
    hover:from-blue-500 hover:to-blue-700
    active:translate-y-px
    transition-all duration-200
    cursor-pointer
  "
        >
          <Link href="/about">Learn More</Link>

          <MdOutlineArrowOutward />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mt-12 gap-6">
        {/* Card 1 */}
        <div>
          <img
            className="rounded-lg w-full h-64 object-cover border border-gray-400"
            src="/nvo.webp"
            alt="profile1"
          />
          <h2 className="text-gray-900 font-bold text-lg mt-4">Aswanth UP</h2>
          <p className="text-gray-400 text-sm mt-2">
            UI Developer & Designer focused on building clean, scalable
            interfaces using React and Tailwind CSS.
          </p>
        </div>

        {/* Card 2 */}
        <div>
          <img
            className="rounded-lg w-full h-64 object-cover "
            src="/happy2.webp"
            alt="profile2"
          />
          <h2 className="text-gray-900 font-bold text-lg mt-4">Anjali Nair</h2>
          <p className="text-gray-400 text-sm mt-2">
            UX Designer passionate about crafting intuitive user journeys and
            meaningful digital experiences.
          </p>
        </div>

        {/* Card 3 */}
        <div>
          <img
            className="rounded-lg w-full h-64 object-cover"
            src="blo8.png"
            alt="profile3"
          />
          <h2 className="text-gray-900 font-bold text-lg mt-4">Rahul Menon</h2>
          <p className="text-gray-400 text-sm mt-2">
            Frontend Engineer specializing in performance optimization and
            modern JavaScript frameworks.
          </p>
        </div>
      </div>

      <div className="w-6xl mt-20">
        <h1 className="font-bold text-sm md:text-base ">Why Aswanth?</h1>
        <h1 className="text-3xl  text-slate-500/60">
          Blending UI design and development into seamless products.
        </h1>
      </div>

      <div className="min-h-120 bg-gray-600/10  w-6xl mt-10 p-2 grid grid-cols-3 gap-2 rounded-lg">
        <div className="bg-white rounded-lg overflow-hidden relative">
          <div className="absolute p-4 text-white bg-black/10 h-full hover:backdrop-blur-xs duration-300">
            <h1 className="text-lg mb-2 ">Work Approach</h1>
            <h6>
              I focus on creating interfaces that are not only visually strong
              but also practical, user-friendly, and performance-oriented. Every
              project is approached with attention to usability, consistency,
              and smooth user interaction.
            </h6>
            <div className="mt-6 flex flex-col gap-2">
              {strengths.map((item: string, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <LuCircleArrowRight className="text-blue-300" />
                  <h1>{item}</h1>
                </div>
              ))}
            </div>
          </div>
          <img src="/bg2.jpg" alt="" className="h-full w-full object-cover" />
        </div>

        <div className=" rounded-lg grid grid-rows-2 gap-4">
          <div className="bg-amber-200 rounded-lg overflow-hidden">
            <img src="/1.jpg" alt="" />
          </div>
          <div className="bg-amber-200 rounded-lg overflow-hidden">
            <img src="/1.jpg" alt="" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-4">
          <img src="/bg.jpg" alt="" />
        </div>
      </div>

      <section className=" py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: heading + badge + CTA */}
          <div className="shrink-0 lg:w-64">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
              Customers love <br />
              Workhorse{" "}
              <span role="img" aria-label="heart">
                ❤️
              </span>
            </h2>

            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2">
              <span className="text-xs text-gray-500">
                Rated 4.97/5 from over 100+ verified reviews
              </span>
            </div>

            <button className="mt-10 bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-gray-700 transition-colors duration-200">
              Request a demo
            </button>
          </div>

          {/* Right: 2-column testimonial grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <div className="h-80 mt-36">Comming soon..</div>
    </div>
  );
}
