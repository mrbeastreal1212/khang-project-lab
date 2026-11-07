import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <Link href="/" className="nav-brand">
          {"TESTING"}
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/projects" className="nav-link">
            Projects
          </Link>
          <a
            href="#"
            className="nav-link"
            aria-label="GitHub Repository (coming soon)"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
