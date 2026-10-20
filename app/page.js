import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      {/* Homepage Hero */}
      <section className="hero-section">
        <h1 className="hero-title">PROJECT LAB</h1>
        <p className="hero-badges">Games • Machine Learning • Web Development</p>
        <p className="hero-description">
          A collection of projects built while learning computer science and software development.
        </p>
        <Link href="/projects" className="btn btn-primary">
          Explore Projects
        </Link>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
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
      </section>
    </>
  );
}
