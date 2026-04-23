import { useEffect, useState } from "react";
import { CV } from "./data";

const getAssetPath = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

export function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="brand">
          <span className="brand-dot" />
          <span>JUAN AYLWIN - CV 2026</span>
        </div>
        <nav className="topnav">
          <a href="#about">Sobre mi</a>
          <a href="#skills">Habilidades</a>
          <a href="#experience">Experiencia</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>
        <a className="topbar-cta" href="#contact">
          Hablemos <span>-&gt;</span>
        </a>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <div className="shell">
        <div className="hero-grid">
          <div>
            <div className="hero-tagline">
              <span className="pulse" />
              {CV.statusLine}
            </div>
            <h1>
              Datos con <span className="ital">criterio</span>,
              <br /> codigo con <span className="ital">proposito</span>.
            </h1>
            <p className="hero-role">
              <strong>{CV.fullName}</strong> - {CV.role} (UAI). {CV.pitch}
            </p>
            <div className="hero-meta">
              <span className="chip">
                <span className="ico">◎</span> {CV.location}
              </span>
              <span className="chip">
                <span className="ico">✉</span> {CV.contact.email}
              </span>
              <span className="chip">
                <span className="ico">⌁</span> {CV.contact.phone}
              </span>
              <a
                className="chip"
                href={`https://${CV.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ico">↗</span> LinkedIn
              </a>
              <a
                className="chip"
                href={`https://${CV.contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ico">↗</span> GitHub
              </a>
            </div>
          </div>
          <aside className="hero-side">
            <div className="portrait">
              <img
                src={`${import.meta.env.BASE_URL}profile-photo.jpg`}
                alt="Juan Aylwin"
                className="portrait-img"
              />
              <div className="portrait-stripes" />
            </div>
            <div className="hero-marquee">
              <span>Santiago - CL</span>
              <span>26 anos</span>
              <span>Analytics / Product</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="eyebrow">01 / Sobre mi</span>
            <h2 className="section-title">
              Curioso por naturaleza,
              <br />
              <em>analitico por entrenamiento.</em>
            </h2>
          </div>
          <div className="meta">PERFIL - 2026</div>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            {CV.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="about-stats">
            {CV.stats.map((s) => (
              <div className="stat" key={s.lbl}>
                <div className="num">
                  {s.num}
                  <span className="unit"> {s.unit}</span>
                </div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const entries = Object.entries(CV.skills);

  return (
    <section className="section" id="skills">
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="eyebrow">02 / Habilidades</span>
            <h2 className="section-title">
              Herramientas <em>que uso a diario.</em>
            </h2>
          </div>
          <div className="meta">STACK - 2026</div>
        </div>
        <div className="skills-wrap">
          {entries.map(([cat, list]) => (
            <div className="skill-col" key={cat}>
              <h3>{cat}</h3>
              {list.map((s) => (
                <div className="skill" key={s.k}>
                  <span className="skill-name">{s.k}</span>
                  <span className="skill-level">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span
                        key={n}
                        className={`dot${n <= s.lvl ? " on" : ""}`}
                      />
                    ))}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="eyebrow">03 / Experiencia</span>
            <h2 className="section-title">
              Donde he <em>puesto las manos.</em>
            </h2>
          </div>
          <div className="meta">3 ROLES - 2023-2025</div>
        </div>
        <div className="timeline">
          {CV.experience.map((e, i) => (
            <article className={`tl-item${e.active ? " active" : ""}`} key={i}>
              <div className="tl-date">{e.date}</div>
              <div className="tl-head">
                <div className="tl-logo-wrap">
                  <img
                    src={getAssetPath(e.logo)}
                    alt={`Logo ${e.company}`}
                    className="tl-logo"
                  />
                </div>
                <div>
                  <div className="tl-role">{e.role}</div>
                  <div className="tl-company">● {e.company}</div>
                </div>
              </div>
              <div className="tl-body">
                <ul>
                  {e.body.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section className="section" id="education">
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="eyebrow">04 / Formacion</span>
            <h2 className="section-title">
              Base <em>academica.</em>
            </h2>
          </div>
          <div className="meta">2008 - 2025</div>
        </div>
        <div className="edu-grid">
          {CV.education.map((e) => (
            <article className="edu-card" key={e.school}>
              <span className="badge">{e.badge}</span>
              <div className="edu-period">{e.period}</div>
              <div className="edu-top">
                <img
                  src={getAssetPath(e.logo)}
                  alt={`Logo ${e.school}`}
                  className="edu-logo"
                />
              </div>
              <h3>{e.school}</h3>
              <p className="edu-sub">{e.degree}</p>
              <p>{e.body}</p>
              <div className="edu-chips">
                {e.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="eyebrow">05 / Proyectos</span>
            <h2 className="section-title">
              Cosas que <em>he construido.</em>
            </h2>
            <p className="section-lead">
              Pequenos experimentos personales y proyectos de curso. Algunos
              viven en produccion, otros siguen iterando.
            </p>
          </div>
          <div className="meta">SELECTED - {CV.projects.length}</div>
        </div>
        <div className="projects-grid">
          {CV.projects.map((p) => (
            <article className="proj" key={p.idx}>
              <div className="proj-idx">PROJ - {p.idx}</div>
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
              <div className="proj-stack">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <a
                className="proj-link"
                href={`https://${p.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver en GitHub -&gt;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Hobbies() {
  const hobbies = CV.hobbies;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % hobbies.length),
      5000,
    );
    return () => clearInterval(id);
  }, [hobbies.length]);

  return (
    <section className="section" id="hobbies">
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="eyebrow">06 / Vida fuera del trabajo</span>
            <h2 className="section-title">
              La parte que <em>no esta en el CV.</em>
            </h2>
          </div>
          <div className="meta">HOBBIES - 03</div>
        </div>
        <div className="hobbies-grid">
          <div className="hobby-carousel">
            {hobbies.map((h, i) => (
              <div className={`slide${i === active ? " on" : ""}`} key={h.id}>
                <img
                  src={getAssetPath(h.image)}
                  alt={h.title}
                  className="slide-image"
                />
                <div className="slide-content">
                  <div className="slide-label">{h.title}</div>
                  <div className="slide-sub">{h.stat}</div>
                </div>
              </div>
            ))}
            <div className="carousel-nav">
              <div className="carousel-dots">
                {hobbies.map((_, i) => (
                  <button
                    key={i}
                    className={i === active ? "on" : ""}
                    onClick={() => setActive(i)}
                    aria-label={`Hobby ${i + 1}`}
                  />
                ))}
              </div>
              <div className="carousel-arrows">
                <button
                  onClick={() =>
                    setActive((a) => (a - 1 + hobbies.length) % hobbies.length)
                  }
                >
                  ‹
                </button>
                <button
                  onClick={() => setActive((a) => (a + 1) % hobbies.length)}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
          <div className="hobby-list">
            {hobbies.map((h, i) => (
              <div
                key={h.id}
                className={`hobby-card${i === active ? " active" : ""}`}
                onClick={() => setActive(i)}
              >
                <div className="hobby-glyph">{h.glyph}</div>
                <div>
                  <h4>{h.title}</h4>
                  <p>{h.long}</p>
                </div>
                <div className="arrow">0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const c = CV.contact;

  return (
    <section className="section" id="contact">
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="eyebrow">07 / Ubicacion y contacto</span>
            <h2 className="section-title">
              Trabajamos <em>juntos?</em>
            </h2>
            <p className="section-lead">
              Estoy abierto a conversar sobre roles de analisis de datos,
              product analytics o ingenieria aplicada a producto.
            </p>
          </div>
          <div className="meta">GMT-3 - SANTIAGO</div>
        </div>
        <div className="contact-grid">
          <div className="map-card">
            <iframe
              className="map-iframe"
              src="https://maps.google.com/maps?q=Escuela%20Militar%2C%20Las%20Condes%2C%20Santiago%2C%20Chile&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion - Escuela Militar, Las Condes"
            ></iframe>
            <div className="map-label">
              {c.address}
              <br />
              Santiago
            </div>
          </div>
          <div className="contact-card">
            <h3>Hablemos por aqui.</h3>
            <div>
              <div className="contact-row">
                <span className="k">Email</span>
                <span className="v">
                  <a href={`mailto:${c.email}`}>{c.email}</a>
                </span>
              </div>
              <div className="contact-row">
                <span className="k">Telefono</span>
                <span className="v">{c.phone}</span>
              </div>
              <div className="contact-row">
                <span className="k">LinkedIn</span>
                <span className="v">
                  <a
                    href={`https://${c.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {c.linkedin}
                  </a>
                </span>
              </div>
              <div className="contact-row">
                <span className="k">GitHub</span>
                <span className="v">
                  <a
                    href={`https://${c.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {c.github}
                  </a>
                </span>
              </div>
              <div className="contact-row">
                <span className="k">Ubicacion</span>
                <span className="v">{c.address}</span>
              </div>
            </div>
            <a className="contact-cta" href={`mailto:${c.email}`}>
              Escribeme un correo <span>-&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Foot() {
  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot-inner">
          <h2 className="foot-name">
            Juan <em>Aylwin</em>
          </h2>
          <div className="foot-meta">
            <div>© 2026 - Hecho en React</div>
            <div>Ultima actualizacion - Abr 2026</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
