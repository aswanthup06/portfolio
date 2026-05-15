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
    avatar: "/gokul.png",
    quote:
      "As a co-founder, I’ve had the opportunity to work closely with Aswanth on multiple projects, and his contribution has always been exceptional. He has a strong eye for UI/UX, excellent frontend development skills, and a deep understanding of creating modern, user-friendly digital experiences. What impressed me most was his dedication, creativity, and ability to turn ideas into polished products with precision. He consistently brings professionalism, clear communication, and a problem-solving mindset to every project. Any team would benefit from having someone as talented and committed as Aswanth.",
    name: "Gokul Hari",
    role: "Co-Founder of Chaavie Solutions",
  },
  {
    avatar: "/Musthafa.png",
    quote:
      "Working with Aswanth has been a great experience. His UI/UX skills, creative thinking, and development knowledge help transform ideas into practical and user-friendly digital products. He has a professional approach and consistently delivers quality results.",
    name: "Muhammadh Musthafa",
    role: "Managing Director at G tec Kunnumpuram ",
  },
  {
    avatar: "/bav.png",
    quote:
      "An exceptional UI developer who consistently delivered clean, modern, and user-friendly designs. His attention to detail, creativity, and understanding of user experience greatly improved the quality of projects. As a full-stack developer, working with him made development smoother and the final product much more polished and professional.",
    name: "Bhavana Raj",
    role: "MERN Stack Developer at Chaavie Solutions",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col h-full hover:shadow-md transition-shadow duration-200">
      {/* Top */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover"
        />
      </div>

      {/* Quote */}
      <p className="text-sm text-gray-700 leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Bottom */}
      <div className="mt-auto pt-6">
        <div className="w-full h-px bg-gray-100 mb-4" />

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
import { FaBehance, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

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

      <div className="grid grid-cols-3 grid-rows-[1fr_auto_1fr] gap-5 w-full max-w-6xl mt-12">
        {/* Box 1 */}
        <div className="bg-white row-span-3 border border-gray-200 rounded-xl p-6 hover:shadow-xl flex flex-col justify-between">
          <div>
            <div className="w-20 h-20 border border-gray-200 rounded-full flex items-center justify-center mb-4 overflow-hidden">
              <img
                src="/me2.png"
                alt="Aswanth"
                className="w-full h-full object-cover scale-110"
              />
            </div>

            <h2 className="text-gray-900 font-bold text-xl leading-tight mb-2">
              Aswanth UP
            </h2>

            <p className="text-blue-600 text-sm font-medium mb-4">
              UI Developer • React Frontend
            </p>

            <p className="text-gray-500 text-sm leading-relaxed">
              UI Developer with 3+ years of experience building scalable,
              responsive, and pixel-perfect interfaces using React, Next.js,
              Tailwind CSS, and Figma Dev Mode.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-sm bg-gray-100 text-xs text-gray-700">
                React
              </span>

              <span className="px-3 py-1 rounded-sm bg-gray-100 text-xs text-gray-700">
                Next.js
              </span>

              <span className="px-3 py-1 rounded-sm bg-gray-100 text-xs text-gray-700">
                Tailwind
              </span>

              <span className="px-3 py-1 rounded-sm bg-gray-100 text-xs text-gray-700">
                Figma
              </span>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-400">Based in Kerala, India</p>

            <p className="text-sm text-gray-900 font-medium mt-1">
              Open to Remote Opportunities
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl flex flex-col justify-between row-span-2  h-full">
          <div>
            <p className="text-8xl font-black text-gray-900 tracking-tighter leading-none">
              500+
            </p>

            <p className="text-gray-900 font-bold text-xl mt-2">
              Screens Developed
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">
                Responsive UI Systems
              </span>

              <span className="text-gray-900 font-semibold">100%</span>
            </div>

            <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
              <div className="w-full h-full bg-black rounded-full" />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Built scalable dashboards, SaaS platforms, healthcare interfaces,
              and reusable component systems across web and mobile applications.
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="bg-white border rounded-xl border-gray-200 hover:shadow-xl p-6 flex items-center gap-3 h-fit">
          <div className="min-w-10 h-10  rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
            ⚡
          </div>

          <div>
            <p className="text-gray-900 font-bold text-lg">Fast Delivery</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Rapid Figma-to-code workflow
            </p>
          </div>
        </div>

        {/* Box 4 */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl h-full">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-900 font-bold text-lg">Figma to Code</p>

              <p className="text-gray-400 text-sm">Design Accuracy</p>
            </div>

            <div className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold">
              Verified
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-6xl font-black text-gray-900 tracking-tight">
              99%
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              Pixel-perfect implementation using Figma Dev Mode, Auto Layout,
              and scalable component systems.
            </p>
          </div>
        </div>

        {/* Box 5 */}
        <div className="bg-white rounded-xl px-6 py-5 border border-gray-200 hover:shadow-xl flex items-center justify-between col-span-2">
          <div>
            <p className="text-gray-900 font-bold text-lg">Follow Me</p>

            <p className="text-gray-400 text-sm mt-1">
              Let’s connect and build something amazing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              h-8 w-8
              rounded-full
              bg-gray-100
              flex items-center justify-center
              text-gray-600
              hover:bg-blue-500 hover:text-white
              transition
            "
            >
              <FaLinkedinIn size={14} />
            </a>

            <a
              href="https://wa.me/XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="
              h-8 w-8
              rounded-full
              bg-gray-100
              flex items-center justify-center
              text-gray-600
              hover:bg-green-500 hover:text-white
              transition
            "
            >
              <IoLogoWhatsapp size={14} />
            </a>

            <a
              href="https://www.behance.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              h-8 w-8
              rounded-full
              bg-gray-100
              flex items-center justify-center
              text-gray-600
              hover:bg-blue-500 hover:text-white
              transition
            "
            >
              <FaBehance size={14} />
            </a>
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
  

         <div className="bg-white rounded-xl border border-gray-200 shadow-xl">
          <div className="p-4">
            <h2 className="text-gray-900 font-bold text-lg">ENVOCC</h2>
            <p className="text-gray-400 text-sm mt-2">
              UX Designer passionate about crafting intuitive user journeys and
              meaningful digital experiences.
            </p>
          </div>
          <img
            className="rounded-lg w-full h-64 object-cover "
              src="/nvo.webp"
            alt="profile2"
          />
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-xl">
          <div className="p-4">
            <h2 className="text-gray-900 font-bold text-lg">Happy ERP</h2>
            <p className="text-gray-400 text-sm mt-2">
              UX Designer passionate about crafting intuitive user journeys and
              meaningful digital experiences.
            </p>
          </div>
          <img
            className="rounded-lg w-full h-64 object-cover "
            src="/happy2.webp"
            alt="profile2"
          />
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-xl">
          <div className="p-4">
            <h2 className="text-gray-900 font-bold text-lg">Doctor One</h2>
            <p className="text-gray-400 text-sm mt-2">
              UX Designer passionate about crafting intuitive user journeys and
              meaningful digital experiences.
            </p>
          </div>
          <img
            className="rounded-lg w-full h-64 object-cover "
            src="/blo8.png"
            alt="profile2"
          />
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

      <section className="py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-3 grid-rows-[1fr_auto] gap-6">
          {/* Left */}
          <div className="row-span-2 flex flex-col justify-between rounded-xl bg-gradient-to-br from-gray-900 to-black p-8 text-white">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-6">
                <div className="flex -space-x-2">
                  <img
                    src="/gokul.png"
                    alt=""
                    className="w-7 h-7 rounded-full border-2 border-black object-cover"
                  />
                  <img
                    src="/Musthafa.png"
                    alt=""
                    className="w-7 h-7 rounded-full border-2 border-black object-cover"
                  />
                  <img
                    src="/bav.png"
                    alt=""
                    className="w-7 h-7 rounded-full border-2 border-black object-cover"
                  />
                </div>

                <span className="text-xs text-gray-300">
                  Trusted by founders & developers
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight w-[80%]">
                Real feedback from people I worked with
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed mt-6 max-w-sm">
                UI Developer focused on building scalable, modern, and
                pixel-perfect frontend experiences with React, Tailwind, and
                Figma workflows.
              </p>
            </div>

            <div className="pt-8">
              <div className="flex items-center gap-3 mb-6">
                <div>
                  <p className="text-3xl font-bold">4.9/5</p>
                  <p className="text-sm text-gray-400">
                    Based on professional collaborations
                  </p>
                </div>
              </div>

              <button className="w-full bg-white text-black text-sm font-semibold px-6 py-4 rounded-2xl hover:bg-gray-200 transition-colors duration-200">
                Let’s Work Together
              </button>
            </div>
          </div>

          {/* Top Large Card */}
          <div className="col-span-2">
            <TestimonialCard testimonial={testimonials[0]} />
          </div>

          {/* Bottom Small Card */}
          <div className="h-full">
            <TestimonialCard testimonial={testimonials[1]} />
          </div>

          {/* Bottom Wide Card */}
          <div className="h-full">
            <TestimonialCard testimonial={testimonials[2]} />
          </div>
        </div>
      </section>

      <div className="container relative w-6xl mb-24 mt-16">
        {/* Main content */}
        <div className="h-80 rounded-2xl bg-white border-gray-200 border relative flex items-center justify-center overflow-hidden">
          {/* Circular elements */}
          <div className="absolute">
            <div className="relative h-64 w-64 md:h-96 md:w-96 border border-gray-800/10 rounded-full">
              <img
                className="scale-90 absolute border-8 border-white/10 md:top-12 md:left-1 rounded-full h-16 w-16 object-cover"
                src="https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>

          <div className="absolute">
            <div className="relative h-[36rem] w-[38rem] border border-gray-800/10 rounded-full">
              <img
                className="absolute border-8 border-white/10 top-[22rem] right-[-1.1rem] rounded-full h-16 w-16 object-cover"
                src="https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <img
                className="absolute border-8 border-white/10 top-80 left-[-1.6rem] rounded-full h-16 w-16 object-cover"
                src="https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>

          <div className="absolute">
            <div className="relative h-[52rem] w-[52rem] border border-gray-800/10 rounded-full">
              <img
                className="absolute border-8 border-white/10 top-[22rem] right-[-2rem] rounded-full h-16 w-16 object-cover"
                src="https://images.unsplash.com/photo-1514626585111-9aa86183ac98?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <img
                className="absolute border-8 border-white/10 top-80 left-[-1.6rem] rounded-full h-16 w-16 object-cover"
                src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>

          <div className="absolute flex flex-col items-center">
            <h1 className="text-2xl text-black font-semibold">
              Let's <span className="text-indigo-500">Create </span>Something
            </h1>
            <h1 className="text-2xl text-black font-light">
              Amazing <span className="text-indigo-500">Together!</span>
            </h1>
            <button className="mt-6 h-12 w-36 bg-blue-500 text-white rounded-md hover:bg-white/90 transition-colors">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
