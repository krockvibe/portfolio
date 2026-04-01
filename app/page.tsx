"use client";

import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend Developer",
    subtitle: "More than 1 year",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "React", level: 65 },
      { name: "Next.js", level: 60 },
    ],
  },
  {
    title: "Designer",
    subtitle: "Learning UI/UX",
    skills: [
      { name: "Figma", level: 70 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Responsive Design", level: 80 },
    ],
  },
];

const projects = [
  {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website showcasing my journey as a web developer",
    category: "Web Development",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather app with beautiful data visualizations and forecasts",
    category: "Web Application",
  },
  {
    title: "Task Manager",
    description: "Feature-rich todo app with categories, priorities, and progress tracking",
    category: "Web Application",
  },
  {
    title: "Blog Platform",
    description: "Clean, minimalist blog with markdown support and category filtering",
    category: "Content Platform",
  },
];

const services = [
  {
    title: "Web Development",
    description: "I develop user interfaces, web page development, and create interactive elements.",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive user interfaces with focus on user experience and accessibility.",
  },
  {
    title: "Responsive Design",
    description: "Building websites that work beautifully on all devices and screen sizes.",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-2xl font-bold text-violet-500">
              RM
            </a>
            <div className="hidden md:flex items-center gap-8">
              {["home", "about", "skills", "services", "portfolio", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-sm capitalize text-zinc-400 hover:text-violet-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="hidden md:block px-6 py-2 bg-violet-600 hover:bg-violet-700 rounded-full text-sm font-medium transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-lg text-zinc-400 mb-2">Hello, I'm</h3>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Raymond Baba<span className="text-violet-500">-</span>Maiyaki
              </h1>
              <h2 className="text-2xl md:text-3xl text-violet-500 font-medium mb-6">
                Web Developer & Designer
              </h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                High level experience in web design and web development knowledge, 
                producing quality work. Currently on a journey to become a full-stack developer.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-violet-600 hover:bg-violet-700 rounded-full font-medium transition-colors"
              >
                Contact Me
              </a>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full opacity-20 blur-3xl" />
                <div className="relative w-full h-full bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-full border-2 border-violet-500/30 flex items-center justify-center">
                  <span className="text-8xl md:text-9xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-lg text-zinc-500 mb-2">Get to know me</h3>
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl opacity-20 blur-2xl" />
                <div className="relative w-full h-full bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-2xl border border-white/10 flex items-center justify-center">
                  <span className="text-8xl">🚀</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Web developer and designer, with extensive knowledge and years of experience, 
                working in web technologies and UI/UX design, delivering quality work.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <p className="text-4xl font-bold text-violet-500">1+</p>
                  <p className="text-sm text-zinc-500">Years experience</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <p className="text-4xl font-bold text-violet-500">4+</p>
                  <p className="text-sm text-zinc-500">Projects</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <p className="text-4xl font-bold text-violet-500">5+</p>
                  <p className="text-sm text-zinc-500">Technologies</p>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-violet-600 hover:bg-violet-700 rounded-full font-medium transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-lg text-zinc-500 mb-2">My Abilities</h3>
            <h2 className="text-4xl md:text-5xl font-bold">My Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-[#0f0f0f] p-8 rounded-2xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                  <p className="text-zinc-500">{category.subtitle}</p>
                </div>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-zinc-500">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-lg text-zinc-500 mb-2">What I Offer</h3>
            <h2 className="text-4xl md:text-5xl font-bold">Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-[#1a1a1a] border border-white/10 rounded-2xl hover:border-violet-500/50 transition-all group"
              >
                <div className="w-16 h-16 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-500/20 transition-colors">
                  <span className="text-3xl">
                    {index === 0 ? "💻" : index === 1 ? "🎨" : "📱"}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-lg text-zinc-500 mb-2">My Recent Work</h3>
            <h2 className="text-4xl md:text-5xl font-bold">Portfolio</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-white/10 hover:border-violet-500/50 transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-indigo-500/20 flex items-center justify-center">
                  <span className="text-7xl group-hover:scale-110 transition-transform">
                    {index === 0 ? "💻" : index === 1 ? "🌤️" : index === 2 ? "✅" : "📝"}
                  </span>
                </div>
                <div className="p-8">
                  <span className="text-sm text-violet-400 font-medium">{project.category}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-3">{project.title}</h3>
                  <p className="text-zinc-400 mb-4">{project.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">You have a new project?</h2>
          <p className="text-xl text-white/80 mb-8">
            Contact me now and let's work together!
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-white text-violet-600 font-semibold rounded-full hover:bg-zinc-100 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-lg text-zinc-500 mb-2">Get in Touch</h3>
            <h2 className="text-4xl md:text-5xl font-bold">Contact Me</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-center gap-6 p-6 bg-[#0f0f0f] rounded-xl">
                <div className="w-14 h-14 bg-violet-500/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Email</p>
                  <p className="font-medium">raymondbaba76@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 bg-[#0f0f0f] rounded-xl">
                <div className="w-14 h-14 bg-violet-500/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Location</p>
                  <p className="font-medium">Nigeria</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 bg-[#0f0f0f] rounded-xl">
                <div className="w-14 h-14 bg-violet-500/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Status</p>
                  <p className="font-medium">Open to opportunities</p>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/krockvibe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#0f0f0f] rounded-xl hover:bg-violet-500/10 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-[#0f0f0f] border border-white/10 rounded-xl focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-[#0f0f0f] border border-white/10 rounded-xl focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Project Subject"
                  className="w-full px-6 py-4 bg-[#0f0f0f] border border-white/10 rounded-xl focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-6 py-4 bg-[#0f0f0f] border border-white/10 rounded-xl focus:outline-none focus:border-violet-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-violet-600 hover:bg-violet-700 rounded-full font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
            <div>
              <p className="text-xl font-bold text-violet-500 mb-2">RM</p>
              <p className="font-medium text-white">Web Developer & Designer</p>
            </div>
            <p>&copy; {new Date().getFullYear()} Raymond Baba-Maiyaki. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
