import Link from "next/link";

export default function ProjectCard({ title, category, description, technologies, slug }) {
  const techDisplay = Array.isArray(technologies)
    ? technologies.join(" • ")
    : technologies;

  return (
    <article className="project-card">
      <div className="project-card-header">
        <span className="project-card-category">{category}</span>
        <h3 className="project-card-title">{title}</h3>
      </div>
      <p className="project-card-description">{description}</p>
      <div className="project-card-technologies">
        <span>{techDisplay}</span>
      </div>
      {slug && (
        <div className="project-card-action">
          <Link href={`/projects/${slug}`} className="project-card-link">
            View Project →
          </Link>
        </div>
      )}
    </article>
  );
}
