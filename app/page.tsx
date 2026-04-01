"use client";

import { useState, useEffect, useRef } from "react";

const skills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 65 },
  { name: "Next.js", level: 60 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Node.js", level: 50 },
  { name: "Python", level: 55 },
  { name: "Git/GitHub", level: 80 },
  { name: "Figma", level: 70 },
];

const projects = [
  {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio showcasing my journey as a web developer",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    emoji: "💻",
    link: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather app with beautiful data visualizations and forecasts",
    tech: ["React", "API Integration", "CSS"],
    emoji: "🌤️",
    link: "#",
  },
  {
    title: "Task Manager",
    description: "Feature-rich todo app with categories, priorities, and progress tracking",
    tech: ["JavaScript", "HTML5", "LocalStorage"],
    emoji: "✅",
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "Clean, minimalist blog with markdown support and category filtering",
    tech: ["Next.js", "Markdown", "CSS"],
    emoji: "📝",
    link: "#",
  },
];

const navItems = ["home", "about", "skills", "projects", "contact"];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(navItems[index]);
          }
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050507] text-white overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.08), transparent 40%)`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#050507]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="relative group">
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                RM
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-indigo-400 transition-all group-hover:w-full" />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`text-sm capitalize transition-all ${
                    activeSection === item
                      ? "text-violet-400"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="hidden md:inline-flex px-5 py-2 text-sm bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full hover:from-violet-500 hover:to-indigo-500 transition-all shadow-lg shadow-violet-500/20"
            >
              Hire Me
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-2 border-t border-white/5 mt-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="capitalize py-2 text-zinc-400 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-sm text-violet-300">Open to opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-zinc-300">Hello, I'm</span>
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Raymond
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-4">
            Web Developer & Designer
          </p>

          <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10">
            Passionate about crafting beautiful, user-friendly web experiences. 
            Currently on an exciting journey to become a full-stack developer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-zinc-900 font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-16 flex justify-center gap-6">
            <a href="https://github.com/krockvibe" target="_blank" rel="noopener noreferrer" className="p-3 text-zinc-500 hover:text-white hover:bg-white/5 rounded-full transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-violet-400 font-medium mb-2">About Me</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Turning Ideas Into <span className="text-violet-400">Reality</span>
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  I'm a passionate web developer and designer with a keen eye for detail 
                  and a love for creating meaningful digital experiences. My journey in 
                  web development started with curiosity and has grown into a full-fledged 
                  passion for building things that live on the internet.
                </p>
                <p>
                  I specialize in building modern, responsive websites using the latest 
                  technologies. From clean HTML/CSS to complex JavaScript applications, 
                  I enjoy every aspect of bringing ideas to life through code.
                </p>
                <p>
                  Currently, I'm focused on expanding my skills to become a full-stack 
                  developer, learning new technologies and frameworks every day.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-10">
                <div>
                  <p className="text-4xl font-bold text-violet-400">10+</p>
                  <p className="text-sm text-zinc-500">Projects Completed</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-violet-400">1+</p>
                  <p className="text-sm text-zinc-500">Year Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-violet-400">5+</p>
                  <p className="text-sm text-zinc-500">Technologies</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 blur-3xl rounded-full" />
              <div className="relative aspect-square bg-gradient-to-br from-violet-500/10 to-indigo-500/10 rounded-3xl border border-white/10 flex items-center justify-center">
                <span className="text-9xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-violet-400 font-medium mb-2">My Expertise</p>
            <h2 className="text-4xl md:text-5xl font-bold">Skills & Technologies</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-zinc-300">{skill.name}</span>
                  <span className="text-sm text-zinc-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-violet-500/50"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-violet-400 font-medium mb-2">My Work</p>
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="group relative bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-indigo-500/10 flex items-center justify-center">
                  <span className="text-7xl group-hover:scale-110 transition-transform duration-300">{project.emoji}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-violet-500/10 text-violet-300 text-xs rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-violet-400 font-medium mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">
            I'm always excited to work on new projects and challenges. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <a
            href="mailto:raymondbaba76@gmail.com"
            className="inline-block px-10 py-5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full font-semibold text-lg hover:from-violet-500 hover:to-indigo-500 transition-all shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105"
          >
            raymondbaba76@gmail.com
          </a>

          <div className="flex justify-center gap-4 mt-12">
            <a
              href="https://github.com/krockvibe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-violet-500/50 transition-all"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Raymond Baba-Maiyaki. All rights reserved.</p>
          <p>Built with passion & Next.js</p>
        </div>
      </footer>
    </div>
  );
}
