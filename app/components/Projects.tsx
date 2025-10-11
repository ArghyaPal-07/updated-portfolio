"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Quotient",
    description:
      "A full stack web application built to share Quotes. Focused on developing both frontend and backend features with modern web technologies.",
    image: "",
    liveUrl: "https://quotient-app.netlify.app/",
    githubUrl: "https://github.com/ArghyaPal-07/Quotient",
  },
  {
    title: "Tomato Food Delivery",
    description:
      "A food delivery application with both user and admin panel.",
    image: "",
    liveUrl: "",
    githubUrl: "https://github.com/ArghyaPal-07/Tomato",
  },
  {
    title: "QuickAI",
    description:
      "An AI Saas App to generate images, titles, blogs and articles according to user's prompts",
    image: "",
    liveUrl: "",
    githubUrl: "https://github.com/ArghyaPal-07/QuickAi",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-10 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          My Projects
        </h2>
        <div className="w-20 h-1 bg-emerald-400 mx-auto mb-4"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto px-4 sm:px-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-lg overflow-hidden bg-[#111] border border-border/40 hover:border-emerald-400/40 transition-all duration-500"
          >
            {/* Project image (shorter height for compact cards) */}
            <div className="aspect-[21/9] relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-3">
              <h3 className="text-base font-semibold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-xs text-gray-400 mb-2 line-clamp-1">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex items-center gap-3 text-xs">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-emerald-400 hover:underline"
                >
                  <ExternalLink className="w-3 h-3" /> Live
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-emerald-400 hover:underline"
                >
                  <Github className="w-3 h-3" /> Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
