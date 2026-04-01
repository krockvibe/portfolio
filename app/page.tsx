"use client";

import { useState, useEffect } from "react";

const skills = {
  Frontend: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Python"],
  Tools: ["Git/GitHub", "VS Code", "Figma"],
};

const projects = [
  {
    title: "Personal Portfolio",
    description: "A modern portfolio website showcasing my journey as a web developer",
    tech: ["Next.js", "Tailwind CSS"],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Weather App",
    description: "Real-time weather forecasts with beautiful visualizations",
    tech: ["React", "API"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Todo List",
    description: "Task management app with intuitive drag and drop",
    tech: ["JavaScript", "HTML/CSS"],
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Blog Website",
    description: "A clean blog platform for sharing insights and tutorials",
    tech: ["Next.js", "Markdown"],
    color: "from-orange-500 to-amber-500",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/5" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              RM
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-zinc-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden md:block px-5 py-2 text-sm bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      <section id="about" className="min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-violet-400">Available for work</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Raymond
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-zinc-400">
                Web Developer & Designer
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed max-w-lg">
                Passionate about creating beautiful, user-friendly web experiences. 
                Currently on an exciting journey to become a full-stack developer, 
                learning something new every day.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 rounded-full font-medium transition-all shadow-lg shadow-violet-500/25"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border border-white/20 hover:bg-white/5 rounded-full font-medium transition-all"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl" />
              <div className="relative w-80 h-80 mx-auto bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-white/10">
                <span className="text-8xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  RB
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-violet-400 font-medium mb-3">What I Work With</p>
            <h2 className="text-4xl md:text-5xl font-bold">Skills & Technologies</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-violet-500/50 transition-all group"
              >
                <h3 className="text-xl font-semibold mb-6 group-hover:text-violet-400 transition-colors">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-violet-500/10 text-violet-300 text-sm rounded-full border border-violet-500/20 hover:bg-violet-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-violet-400 font-medium mb-3">My Work</p>
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-violet-500/50 transition-all"
              >
                <div className={`h-56 bg-gradient-to-br ${project.color} opacity-80`} />
                <div className="p-8 -mt-16 relative">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                    <span className="text-2xl font-bold">{project.title.charAt(0)}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-white/10 text-sm rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-violet-400 font-medium mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">
            I'm always open to new opportunities and collaborations. 
            Feel free to reach out if you'd like to connect!
          </p>
          <a
            href="mailto:raymondbaba76@gmail.com"
            className="inline-block px-10 py-5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 rounded-full font-medium text-lg transition-all shadow-lg shadow-violet-500/25"
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
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Raymond Baba-Maiyaki. Built with passion.</p>
        </div>
      </footer>
    </div>
  );
}
