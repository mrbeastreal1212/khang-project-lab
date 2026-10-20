"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const categories = [
  "All",
  "Game Development",
  "Machine Learning",
  "Web Development",
  "Competitive Programming",
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="projects-section">
      <h1 className="page-title">Projects</h1>

      {/* Category Filter Buttons */}
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filtered Projects Grid or Empty State */}
      {filteredProjects.length === 0 ? (
        <p className="no-projects">No projects found.</p>
      ) : (
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              technologies={project.technologies}
              slug={project.slug}
            />
          ))}
        </div>
      )}
    </div>
  );
}
