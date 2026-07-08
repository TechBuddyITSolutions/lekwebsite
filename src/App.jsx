const featuredProjects = [
  {
    title: "Brand Systems",
    category: "Design + Frontend",
    description:
      "Landing pages and product experiences built to feel sharp, modern, and commercially useful.",
  },
  {
    title: "Web Apps",
    category: "React Development",
    description:
      "Fast interfaces with clear information architecture, reliable state handling, and responsive layouts.",
  },
  {
    title: "Creative Direction",
    category: "Visual Identity",
    description:
      "Portfolio, campaign, and business websites with a stronger point of view than template-first builds.",
  },
];

const capabilities = [
  "React.js",
  "JavaScript",
  "Responsive UI",
  "Frontend Architecture",
  "Brand Presentation",
  "Performance Mindset",
];

export default function App() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="topbar">
        <a className="brand" href="#home">
          LEK
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">React Portfolio</p>
            <h1>Building portfolio experiences that feel deliberate, not generic.</h1>
            <p className="intro">
              This starter portfolio is designed for showcasing your work, services,
              and personality with a stronger visual direction. Replace the copy,
              project details, and contact links with your own information.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View Work
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <p className="panel-label">Current Focus</p>
            <ul>
              <li>Single-page React portfolio</li>
              <li>Fast load and responsive structure</li>
              <li>Editorial typography and layered visuals</li>
            </ul>
          </aside>
        </section>

        <section className="about section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>A clear starting point for your personal site.</h2>
          </div>
          <div className="about-grid">
            <p>
              Use this space to introduce yourself, your background, and the kind of
              work you want to attract. The layout is already structured for a
              concise personal summary with a skill list beside it.
            </p>
            <div className="chips">
              {capabilities.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>Show your strongest projects first.</h2>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article key={project.title} className="project-card">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Ready to turn this into your real portfolio.</h2>
            </div>
            <a className="button button-primary" href="mailto:hello@example.com">
              hello@example.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
