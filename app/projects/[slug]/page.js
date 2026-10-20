import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export const instant = false;

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Khang's Project Lab",
    };
  }

  return {
    title: `${project.title} | Khang's Project Lab`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  // Find the matching project from the data source
  const project = projects.find((p) => p.slug === slug);

  // Trigger Next.js 404 page if project is not found
  if (!project) {
    notFound();
  }

  return (
    <article className="project-detail">
      {/* Navigation back to all projects */}
      <nav className="detail-nav">
        <Link href="/projects" className="back-link">
          ← Back to Projects
        </Link>
      </nav>

      {/* Project Header */}
      <header className="detail-header">
        <span className="detail-category">{project.category}</span>
        <h1 className="detail-title">{project.title}</h1>
        <p className="detail-description">{project.description}</p>

        {/* Technologies List */}
        <div className="detail-tech-list">
          {project.technologies &&
            project.technologies.map((tech) => (
              <span key={tech} className="detail-tech-badge">
                {tech}
              </span>
            ))}
        </div>
      </header>

      {/* About This Project */}
      <section className="detail-section">
        <h2 className="detail-section-title">About This Project</h2>
        <p className="detail-text">{project.description}</p>
      </section>

      {/* What I Learned */}
      <section className="detail-section">
        <h2 className="detail-section-title">What I Learned</h2>
        <p className="detail-text detail-placeholder">
          More technical notes will be added as this project is documented.
        </p>
      </section>

      {/* Links */}
      <section className="detail-section">
        <h2 className="detail-section-title">Links</h2>
        {project.github || project.demo ? (
          <div className="detail-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                GitHub Repository
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            )}
          </div>
        ) : (
          <p className="detail-text detail-placeholder">
            Links will be added once this project is published.
          </p>
        )}
      </section>
    </article>
  );
}
