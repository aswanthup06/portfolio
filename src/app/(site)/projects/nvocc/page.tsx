import React from "react";


export default function Nvocc() {
  return (
    <main className="min-h-screen bg-white text-black">
      
      {/* PROJECT HEADER */}
      <div className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Portfolio</span>
            <span>→</span>
            <span className="text-gray-600">NVOCC Platform</span>
          </div>
        </div>
      </div>

      {/* HERO SECTION - Project Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Project info */}
          <div>
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 bg-gray-900 text-white text-xs rounded-full">Case Study</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">2024</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              NVOCC Platform
            </h1>
            <p className="text-xl text-gray-500 mt-4">Non-Vessel Operating Common Carrier</p>
            
            <div className="h-1 w-12 bg-gray-900 mt-8"></div>
            
            <p className="text-gray-600 leading-relaxed mt-8">
              This web application simplifies maritime container shipment management by 
              digitizing tracking, scheduling, and documentation. It provides real-time 
              container status updates, efficient vessel routing, and centralized document 
              storage for global shipping operations.
            </p>
            
            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-6 mt-10 pt-6 border-t border-gray-100">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Duration</p>
                <p className="font-medium text-gray-800 mt-1">4 Months</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">My Role</p>
                <p className="font-medium text-gray-800 mt-1">UI Development</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Tech Stack</p>
                <p className="font-medium text-gray-800 mt-1">Next.js, Tailwind CSS</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Screens</p>
                <p className="font-medium text-gray-800 mt-1">50+ Pages</p>
              </div>
            </div>
          </div>
          
          {/* Right: Hero image */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
              alt="Container ship ocean freight"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Overview</h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              The NVOCC platform was contracted to our company by 6solve IT Services, 
              involving the development of three core modules for a full-stack web application.
            </p>
            <p className="text-gray-500 mt-4 leading-relaxed">
              With cloud-based data access, historical records, and analytics, the system 
              enhances operational efficiency, reduces costs, and ensures compliance. The 
              intuitive interface supports quick decision-making while maintaining security 
              and scalability for global shipping operations.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <p className="text-3xl font-bold text-gray-900">50+</p>
              <p className="text-sm text-gray-500 mt-1">Pages Developed</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <p className="text-3xl font-bold text-gray-900">3</p>
              <p className="text-sm text-gray-500 mt-1">Core Modules</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <p className="text-3xl font-bold text-gray-900">90%</p>
              <p className="text-sm text-gray-500 mt-1">Figma Accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* MY ROLE SECTION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight text-center">My Role</h2>
          <p className="text-gray-500 text-center mt-3 max-w-2xl mx-auto">
            End-to-end UI development of the NVOCC platform
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-800">Figma to Code</h3>
              <p className="text-sm text-gray-500 mt-2">Converted 50+ pages with 90% accuracy</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1.5 4 4 4h8c2.5 0 4-2 4-4V7" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <h3 className="font-semibold text-gray-800">SVG Optimization</h3>
              <p className="text-sm text-gray-500 mt-2">Reusable React components</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5m0 0V8m0 5h5m-5 0H7" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" /></svg>
              </div>
              <h3 className="font-semibold text-gray-800">Responsive Design</h3>
              <p className="text-sm text-gray-500 mt-2">Mobile, tablet & desktop</p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES / MODULES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight text-center">Core Modules</h2>
          <p className="text-gray-500 text-center mt-3">The platform consists of three main modules</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Module 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">Module 1 - Export</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Manages export-bound containers, ensuring efficient size and type selection, 
                optimal stuffing, and data storage for logistics tracking from allocation to documentation.
              </p>
            </div>

            {/* Module 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21h6M12 13v8" /></svg>
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">Module 2 - Import</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Handles imported containers arriving at ports, managing all steps from receipt 
                until destuffing, including routing empty containers to maintenance.
              </p>
            </div>

            {/* Module 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">Module 3 - Maintenance & Repair</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Manages container maintenance and repair, documenting all details including 
                damage assessment and sound condition status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN GALLERY */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight text-center">Screens & Interfaces</h2>
          <p className="text-gray-500 text-center mt-3">A selection of key screens from the NVOCC platform</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1586528116497-da4c0e83a9b0?q=80&w=2000&auto=format&fit=crop" 
                alt="Export Module Dashboard" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 border-t border-gray-100">
                <p className="font-medium text-gray-800">Export Module Dashboard</p>
                <p className="text-sm text-gray-400">Container allocation and tracking</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop" 
                alt="Import Module Interface" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 border-t border-gray-100">
                <p className="font-medium text-gray-800">Import Module Interface</p>
                <p className="text-sm text-gray-400">Port arrival and destuffing management</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2000&auto=format&fit=crop" 
                alt="Maintenance & Repair" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 border-t border-gray-100">
                <p className="font-medium text-gray-800">Maintenance & Repair</p>
                <p className="text-sm text-gray-400">Container condition tracking</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2000&auto=format&fit=crop" 
                alt="Analytics Dashboard" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 border-t border-gray-100">
                <p className="font-medium text-gray-800">Analytics Dashboard</p>
                <p className="text-sm text-gray-400">Performance metrics and insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MY RESPONSIBILITY DETAIL */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">My Responsibility</h2>
              <div className="h-1 w-12 bg-gray-900 mt-4 mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                As part of my role, I successfully converted a Figma design into a high-performance 
                Next.js application using Tailwind CSS, meticulously translating 50+ pages with 
                90% accuracy to match the original design specifications.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                To optimize performance, I converted all SVG assets into reusable React components, 
                reducing load times and improving maintainability. Additionally, I ensured the 
                application was fully responsive across all devices, rigorously testing layouts on 
                mobile, tablet, and desktop screens.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                By leveraging Next.js features and Tailwind's utility-first approach, I delivered 
                a scalable, efficient, and visually consistent web application that aligns perfectly 
                with the design vision.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" 
                  alt="Development work" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop" 
                  alt="Code and design" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-900 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white tracking-tight">The Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div>
                <p className="text-4xl font-bold text-white">50+</p>
                <p className="text-gray-400 text-sm mt-2">Pages Developed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">90%</p>
                <p className="text-gray-400 text-sm mt-2">Figma Accuracy</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">100%</p>
                <p className="text-gray-400 text-sm mt-2">Responsive Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium shadow-sm">Next.js</span>
            <span className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium shadow-sm">Tailwind CSS</span>
            <span className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium shadow-sm">Node.js</span>
            <span className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium shadow-sm">PostgreSQL</span>
            <span className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium shadow-sm">Sequelize ORM</span>
            <span className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium shadow-sm">AWS</span>
          </div>
        </div>
      </section>

      
    
    </main>
  );
}