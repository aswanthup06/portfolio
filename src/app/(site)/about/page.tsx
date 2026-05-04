export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center pt-36 px-6">
      <div className="absolute inset-0 z-0 grid-bg" />

      <div className="relative z-10 max-w-5xl w-full">

        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-400 blur-2xl opacity-20"></div>
            <img
              src="/me2.png"
              alt="Aswanth"
              className="relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-2 border-white  scale-110 "
            />
          </div>
        </div>

        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
          I'm Aswanth, a UI Developer and Designer focused on building
          user-centric, high-performance web applications. I combine design
          thinking with clean code to create seamless digital experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Who I Am</h2>
              <p className="text-gray-500 text-sm mt-2">
                A passionate UI Engineer with 2+ years of experience designing
                and developing web applications. I specialize in React-based
                architectures and modern UI systems.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800">What I Do</h2>
              <p className="text-gray-500 text-sm mt-2">
                I design intuitive user interfaces, build scalable frontend
                systems, and optimize user experiences with performance-focused
                development.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800">Experience</h2>
              <p className="text-gray-500 text-sm mt-2">
                2+ years working as a UI Developer & Designer, handling complete
                UI development for real-world applications including healthcare
                platforms and web systems.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Skills & Tools
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind",
                "Figma",
                "UI/UX Design"
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* JOURNEY SECTION START */}
        <div className="mt-24">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-16">
            My Journey
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

            <div className="space-y-16">

              {[
                {
                  date: "June 2023 – Present",
                  title: "Chaavie Solutions",
                  location: "Kozhikode, Kerala",
                  desc: "Worked across UI/UX design, frontend development, and branding. Led UI development for healthcare platforms and mentored junior developers."
                },
                {
                  date: "Jan 2025 – Aug 2025",
                  title: "6solve IT Services",
                  location: "Tirunelveli, Tamil Nadu",
                  desc: "Collaborated on Next.js projects, improving performance and scalability. Strengthened modern frontend architecture skills."
                },
                {
                  date: "Nov 2022 – Mar 2023",
                  title: "Futura Labs",
                  location: "Kozhikode, Kerala",
                  desc: "Started journey in UI/UX design and frontend basics including HTML, CSS, and Figma."
                },
                {
                  date: "July 2016 – March 2019",
                  title: "BSc Computer Science",
                  location: "Hi-Tech Arts and Science College, Kallachi, Kerala",
                  desc: "I completed my BSc in Computer Science from Hi-Tech Arts and Science College. During my studies, I also worked on academic projects to enhance my practical skills alongside theoretical knowledge."
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="w-full md:w-[45%] bg-white p-6 rounded-xl shadow-md">
                    <span className="text-sm text-blue-500 font-medium">
                      {item.date}
                    </span>
                    <h3 className="text-lg font-semibold mt-1 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 mb-2">
                      {item.location}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.desc}
                    </p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
        {/* JOURNEY SECTION END */}

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">
            Interested in working together?
          </p>

          <button className="px-6 h-10 rounded-md text-white bg-gradient-to-b from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 transition">
            Contact Me
          </button>
        </div>

      </div>
    </div>
  );
}