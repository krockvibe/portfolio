"use client";

import { useState } from "react";

const skills = [
  "HTML/CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "Git/GitHub",
  "VS Code",
  "Figma",
];

const projects = [
  {
    title: "Personal Portfolio",
    description: "My portfolio website showcasing my work and skills",
    tech: ["Next.js", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Weather App",
    description: "A weather application that displays forecasts based on location",
    tech: ["React", "API"],
    link: "#",
  },
  {
    title: "Todo List",
    description: "A task management app for organizing daily activities",
    tech: ["JavaScript", "HTML/CSS"],
    link: "#",
  },
  {
    title: "Blog Website",
    description: "A simple blog platform for sharing thoughts and articles",
    tech: ["Next.js", "Markdown"],
    link: "#",
  },
];

const navLinks = ["About", "Skills", "Projects", "Contact"];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight">
            RB<span className="text-indigo-500">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 border-t border-white/10">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-zinc-400 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-4xl text-center">
          <p className="text-indigo-500 font-medium mb-4">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
            Raymond Baba-Maiyaki
          </h1>
          <h2 className="text-2xl md:text-3xl text-zinc-400 mb-8">
            Web Developer & Designer
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
            I'm a passionate web developer and designer crafting beautiful,
            user-friendly websites. I specialize in building modern web
            applications with clean code and intuitive interfaces. When I'm not
            coding, I'm exploring new design trends and learning new
            technologies.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-medium transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-white/20 hover:border-white/40 rounded-full font-medium transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Skills</h2>
          <p className="text-zinc-400 text-center mb-12">
            Technologies I'm learning and working with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
          <p className="text-zinc-400 text-center mb-12">
            Some of my recent work (More coming soon!)
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-indigo-500/50 transition-all hover:transform hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-6xl opacity-50">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-zinc-400 mb-8">
            I'm always open to new opportunities and collaborations
          </p>
          <a
            href="mailto:raymondbaba76@gmail.com"
            className="inline-block px-10 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-full font-medium text-lg transition-colors"
          >
            raymondbaba76@gmail.com
          </a>
          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://github.com/krockvibe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Raymond Baba-Maiyaki. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
