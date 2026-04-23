import { useState, useEffect, useRef } from "react";
import { CV } from "./data";

const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

// ---------- SIDEBAR ----------
function Sidebar({ activeSection, onNav }) {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const nav = [
    { id: "hero", n: "00", lbl: "Inicio", k: "H" },
    { id: "about", n: "01", lbl: "Sobre mí", k: "A" },
    { id: "skills", n: "02", lbl: "Habilidades", k: "S" },
    { id: "experience", n: "03", lbl: "Experiencia", k: "E" },
    { id: "education", n: "04", lbl: "Formación", k: "F" },
    { id: "projects", n: "05", lbl: "Proyectos", k: "P" },
    { id: "hobbies", n: "06", lbl: "Hobbies", k: "Y" },
    { id: "contact", n: "07", lbl: "Contacto", k: "C" },
  ];

  const santiagoTime = time.toLocaleTimeString("en-US", {
    timeZone: "America/Santiago",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <aside className="sidebar">
      <div className="sb-head">
        <div className="sb-avatar">
          <img src={asset("profile-photo.jpg")} alt="Juan Aylwin" />
        </div>
        <div>
          <div className="sb-name">{CV.fullName}</div>
          <div className="sb-handle">{CV.handle}</div>
        </div>
      </div>

      <div className="sb-status">
        <span className="pulse" />
        <span>{CV.statusLine}</span>
      </div>

      <div className="sb-nav">
        <div className="sb-nav-label">Secciones</div>
        {nav.map((it) => (
          <div
            key={it.id}
            className={`sb-link ${activeSection === it.id ? "active" : ""}`}
            onClick={() => onNav(it.id)}
          >
            <span className="num">{it.n}</span>
            <span>{it.lbl}</span>
            <span className="kbd">{it.k}</span>
          </div>
        ))}
      </div>

      <div className="sb-foot">
        <div className="row">
          <span>Local</span>
          <b>{santiagoTime}</b>
        </div>
        <div className="row">
          <span>TZ</span>
          <b>{CV.timezone}</b>
        </div>
        <div className="row">
          <span>Ver.</span>
          <b>2026.04</b>
        </div>
        <div className="sb-socials">
          <a
            href={`https://${CV.contact.linkedin}`}
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
          <a
            href={`https://${CV.contact.github}`}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          <a href={`mailto:${CV.contact.email}`}>Email</a>
        </div>
      </div>
    </aside>
  );
}

// ---------- THEME TOGGLE ----------
function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark",
  );
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.dataset.theme || "dark");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    window.parent.postMessage(
      { type: "__edit_mode_set_keys", edits: { theme: next } },
      "*",
    );
  };
  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      title={`Cambiar a ${theme === "dark" ? "claro" : "oscuro"}`}
    >
      <span className={`tt-track ${theme}`}>
        <span className="tt-thumb">{theme === "dark" ? "☾" : "☀"}</span>
      </span>
      <span className="tt-lbl">{theme === "dark" ? "dark" : "light"}</span>
    </button>
  );
}

// ---------- HERO ----------
function Hero() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const dateStr = time.toLocaleDateString("es-CL", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <section className="hero" id="hero" data-screen-label="00 Hero">
      <div className="hero-top">
        <div className="hero-crumb">
          <b>Juan Aylwin</b> / CV 2026 /{" "}
          <span style={{ color: "var(--lime)" }}>● en vivo</span>
        </div>
        <div className="hero-top-right">
          <ThemeToggle />
          <div className="hero-clock">
            <span className="big">{dateStr}</span>
            <span>Santiago · GMT-3</span>
          </div>
        </div>
      </div>

      <div className="hero-headline">
        <div className="hero-portrait">
          <img src={asset("profile-photo.jpg")} alt="Juan Aylwin" />
          <div className="hero-portrait-tag">
            <span className="pulse" />
            <span>Juan · 26</span>
          </div>
        </div>
        <h1 className="hero-title">
          Datos con <span className="mark">criterio</span>,<br />
          código con <span className="ital">propósito.</span>
        </h1>
      </div>

      <div className="hero-bot">
        <p className="hero-pitch">
          <b>Ingeniero Civil Informático (UAI)</b>, 26 años. Analista de datos y
          product-minded. {CV.pitch}
        </p>
        <button
          className="hero-cta"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Hablemos <span className="arr">→</span>
        </button>
        <a
          className="hero-ghost"
          href={`https://${CV.contact.github}`}
          target="_blank"
          rel="noopener"
        >
          Ver GitHub
        </a>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <span className="line" />
      </div>
    </section>
  );
}

// ---------- SECTION HEAD ----------
function SecMeta({ num, title, tag, children }) {
  return (
    <div className="sec-meta">
      <span>{num}</span>
      <span className="dash" />
      <span>{title}</span>
      {tag && <span className="tag">{tag}</span>}
      {children}
    </div>
  );
}

// ---------- ABOUT ----------
function About() {
  return (
    <section className="section" id="about" data-screen-label="01 About">
      <SecMeta num="/ 01" title="Sobre mí" tag="perfil · 2026" />
      <div className="about-grid" style={{ marginTop: 28 }}>
        <div>
          <h2 className="sec-title" style={{ margin: "0 0 32px" }}>
            Curioso por naturaleza,
            <br />
            <span className="ital">analítico</span> por entrenamiento.
          </h2>
          <div className="about-prose">
            {CV.about.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </div>
        <div className="stat-panel">
          <div className="stat-panel-head">
            <span>data.stats</span>
            <div className="dot-row">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="stat-rows">
            {CV.stats.map((s, i) => (
              <div className="stat-row" key={i}>
                <div className="lbl">{s.lbl}</div>
                <div className="num">
                  {s.num}
                  <span className="unit">{s.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SKILLS ----------
function Skills() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="section"
      id="skills"
      data-screen-label="02 Skills"
      ref={ref}
    >
      <SecMeta num="/ 02" title="Habilidades" tag="stack" />
      <h2 className="sec-title">
        Herramientas <span className="ital">que uso a diario.</span>
      </h2>
      <p className="sec-lead">
        Un stack honesto: las que uso casi todos los días arriba, las que estoy
        puliendo abajo. Sin listas infladas de tres páginas.
      </p>

      <div className="skills-stack">
        {Object.entries(CV.skills).map(([cat, list], gi) => (
          <div className="skill-group" key={cat}>
            <h3>
              {cat}
              <span className="count">{String(gi + 1).padStart(2, "0")}</span>
            </h3>
            <div className="skill-list">
              {list.map((s) => (
                <div className="skill-pill" key={s.k}>
                  <span className="skill-name">{s.k}</span>
                  <div className="skill-bar">
                    <div
                      className="fill"
                      style={{
                        width: animate ? `${(s.lvl / 5) * 100}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- EXPERIENCE ----------
function Experience() {
  const [open, setOpen] = useState(0);
  return (
    <section
      className="section"
      id="experience"
      data-screen-label="03 Experience"
    >
      <SecMeta num="/ 03" title="Experiencia" tag="2023 – 2025" />
      <h2 className="sec-title">
        Donde he <span className="ital">puesto las manos.</span>
      </h2>
      <p className="sec-lead">
        Tres roles, un hilo común: llegar con preguntas abiertas y salir con
        decisiones respaldadas en datos.
      </p>

      <div className="xp-list">
        {CV.experience.map((e, i) => (
          <article
            key={i}
            className={`xp-item ${open === i ? "open" : ""}`}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <div className="xp-date">{e.date}</div>
            <div className="xp-main">
              <div className="xp-logo">
                <img src={asset(e.logo)} alt={e.company} />
              </div>
              <div>
                <h3 className="xp-role">{e.role}</h3>
                <div className="xp-company">
                  {e.company}
                  {e.active && <span className="live">actual</span>}
                </div>
              </div>
            </div>
            <div className="xp-chip">{e.chip}</div>
            <div className="xp-arrow">›</div>
            <div className="xp-detail">
              <ul>
                {e.body.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ---------- EDUCATION ----------
function Education() {
  return (
    <section
      className="section"
      id="education"
      data-screen-label="04 Education"
    >
      <SecMeta num="/ 04" title="Formación" tag="2008 – 2025" />
      <h2 className="sec-title">
        Base <span className="ital">académica.</span>
      </h2>
      <p className="sec-lead">
        Dos instituciones que marcaron la forma en que pienso y colaboro.
      </p>

      <div className="edu-grid">
        {CV.education.map((e) => (
          <article className="edu-card" key={e.school}>
            <div className="edu-top">
              <div className="edu-logo">
                <img src={asset(e.logo)} alt={e.school} />
              </div>
              <span className={`edu-badge ${e.active ? "" : "neutral"}`}>
                {e.active && <span className="pulse" />}
                {e.badge}
              </span>
            </div>
            <div>
              <div className="edu-period">{e.period}</div>
              <h3 style={{ marginTop: 8 }}>{e.school}</h3>
              <p className="edu-sub">{e.degree}</p>
            </div>
            <p className="edu-body">{e.body}</p>
            <div className="edu-tags">
              {e.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ---------- PROJECTS ----------
function Projects() {
  return (
    <section className="section" id="projects" data-screen-label="05 Projects">
      <SecMeta
        num="/ 05"
        title="Proyectos"
        tag={`${CV.projects.length} seleccionados`}
      />
      <h2 className="sec-title">
        Cosas que <span className="ital">he construido.</span>
      </h2>
      <p className="sec-lead">
        Experimentos personales y proyectos de curso. Algunos en producción,
        otros siguen iterando en rama feature/*.
      </p>

      <div className="proj-grid">
        {CV.projects.map((p) => {
          const Wrapper = p.link ? "a" : "div";
          const wrapperProps = p.link
            ? { href: `https://${p.link}`, target: "_blank", rel: "noopener" }
            : {};
          return (
            <Wrapper className="proj-card" key={p.idx} {...wrapperProps}>
              {p.image ? (
                <div className="proj-vis" style={{ padding: 0 }}>
                  <img
                    src={asset(p.image)}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                    }}
                  />
                </div>
              ) : (
                <div className={`proj-vis ${p.vis}`} />
              )}
              <div className="proj-body">
                <div className="proj-idx">
                  <span>PROJ · {p.idx}</span>
                  <span style={p.wip ? { color: "var(--lime)" } : {}}>
                    {p.type}
                  </span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
                <div className="proj-stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                {p.wip ? (
                  <div
                    className="proj-link"
                    style={{ color: "var(--fg-2)", cursor: "default" }}
                  >
                    ⏳ En construcción · URL próximamente
                  </div>
                ) : (
                  <div className="proj-link">Ver repo →</div>
                )}
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}

// ---------- HOBBIES ----------
function Hobbies() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % CV.hobbies.length),
      5200,
    );
    return () => clearInterval(id);
  }, []);
  const cur = CV.hobbies[active];

  return (
    <section className="section" id="hobbies" data-screen-label="06 Hobbies">
      <SecMeta num="/ 06" title="Fuera del trabajo" tag="lo-fi" />
      <h2 className="sec-title">
        La parte que <span className="ital">no está en el CV.</span>
      </h2>
      <p className="sec-lead">
        Tres cosas que me ordenan la cabeza y me enseñan cosas que después
        aplico sin darme cuenta.
      </p>

      <div className="hobby-wrap">
        <div className="hobby-stage">
          {CV.hobbies.map((h, i) => (
            <div
              key={h.id}
              className={`hobby-slide ${i === active ? "on" : ""}`}
            >
              <img src={asset(h.image)} alt={h.title} />
            </div>
          ))}
          <div className="hobby-overlay">
            <div>
              <div className="lbl">{cur.lbl}</div>
              <div className="title">{cur.title}</div>
            </div>
            <div className="stat">{cur.stat}</div>
          </div>
        </div>
        <div className="hobby-list">
          {CV.hobbies.map((h, i) => (
            <div
              key={h.id}
              className={`hobby-row ${i === active ? "on" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="hobby-glyph">{h.glyph}</div>
              <div>
                <h4>{h.title}</h4>
                <p>{h.long}</p>
              </div>
              <div className="idx">0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- CONTACT ----------
function CommitCounter() {
  const [days, setDays] = useState(null);
  const [loading, setLoading] = useState(true);
  const now = new Date();
  const monthName = now.toLocaleDateString("es-CL", { month: "long" });
  const daysInMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
  ).getDate();
  const today = now.getDate();

  useEffect(() => {
    const n = new Date();
    const since = new Date(n.getFullYear(), n.getMonth(), 1).toISOString();
    fetch(
      `https://api.github.com/users/jaylwin123/repos?per_page=100&sort=pushed`,
    )
      .then((r) => (r.ok ? r.json() : []))
      .then((repos) => {
        if (!Array.isArray(repos)) {
          setLoading(false);
          return;
        }
        const activeRepos = repos
          .filter((r) => new Date(r.pushed_at) >= new Date(since))
          .slice(0, 15);
        return Promise.all(
          activeRepos.map((repo) =>
            fetch(
              `https://api.github.com/repos/jaylwin123/${repo.name}/commits?author=jaylwin123&since=${since}&per_page=100`,
            )
              .then((r) => (r.ok ? r.json() : []))
              .catch(() => []),
          ),
        );
      })
      .then((results) => {
        if (!results) return;
        const buckets = Array.from({ length: daysInMonth }, (_, i) => ({
          day: i + 1,
          count: 0,
        }));
        results.flat().forEach((c) => {
          const date = c.commit?.author?.date || c.commit?.committer?.date;
          if (!date) return;
          const d = new Date(date).getDate();
          if (buckets[d - 1]) buckets[d - 1].count += 1;
        });
        setDays(buckets);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const total = days ? days.reduce((a, b) => a + b.count, 0) : null;
  const max = days ? Math.max(...days.map((d) => d.count), 1) : 1;

  const w = 280,
    h = 56,
    gap = 1;
  const barW = Math.max(1, (w - gap * (today - 1)) / today);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span
          style={{
            fontSize: 48,
            fontWeight: 500,
            letterSpacing: "-0.03em",
            color: "var(--lime)",
            lineHeight: 1,
          }}
        >
          {loading ? "…" : (total ?? "—")}
        </span>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            color: "var(--fg-2)",
          }}
        >
          commits este mes
        </span>
      </div>
      {!loading && days && (
        <svg
          viewBox={`0 0 ${w} ${h}`}
          style={{
            width: "100%",
            height: h,
            display: "block",
            overflow: "visible",
          }}
        >
          {days.slice(0, today).map((d, i) => {
            const barH =
              d.count > 0 ? Math.max(3, (d.count / max) * (h - 2)) : 2;
            const x = i * (barW + gap);
            const isToday = d.day === today;
            return (
              <rect
                key={d.day}
                x={x}
                y={h - barH}
                width={barW}
                height={barH}
                rx={1}
                fill={
                  isToday
                    ? "var(--lime)"
                    : d.count > 0
                      ? "color-mix(in srgb, var(--lime) 55%, transparent)"
                      : "var(--ink-3)"
                }
                opacity={d.count === 0 ? 0.5 : 1}
              />
            );
          })}
        </svg>
      )}
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 10,
          color: "var(--fg-2)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {monthName} {now.getFullYear()} · GitHub público · en vivo
      </div>
    </div>
  );
}

function Contact() {
  const c = CV.contact;
  const rows = [
    { k: "Email", v: c.email, href: `mailto:${c.email}` },
    { k: "Phone", v: c.phone, href: `tel:${c.phone.replace(/\s/g, "")}` },
    { k: "LinkedIn", v: c.linkedin, href: `https://${c.linkedin}` },
    { k: "GitHub", v: c.github, href: `https://${c.github}` },
    { k: "Ubicación", v: "Las Condes · Santiago · CL" },
  ];

  return (
    <section className="section" id="contact" data-screen-label="07 Contact">
      <SecMeta num="/ 07" title="Contacto" tag="GMT-3 · Santiago" />
      <div className="contact-wrap">
        <div className="contact-card">
          <h2 className="contact-giant">
            ¿Trabajamos <span className="accent">juntos</span>?
          </h2>
          <p className="contact-copy">
            Estoy abierto a conversar sobre roles de analytics, data science
            aplicada o ingeniería de producto. La primera llamada es gratis y
            puede durar 20 minutos o dos horas — depende de qué tan entretenido
            está el problema.
          </p>
          <div className="contact-cta-row">
            <a className="hero-cta" href={`mailto:${c.email}`}>
              Escríbeme <span className="arr">?</span>
            </a>
            <a
              className="hero-ghost"
              href={`https://${c.linkedin}`}
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
          </div>
          <div className="contact-rows">
            {rows.map((r) => {
              const inner = (
                <>
                  <span className="k">{r.k}</span>
                  <span className="v">{r.v}</span>
                  <span className="arr">{r.href ? "?" : ""}</span>
                </>
              );
              return r.href ? (
                <a
                  className="contact-row"
                  key={r.k}
                  href={r.href}
                  target={r.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener"
                >
                  {inner}
                </a>
              ) : (
                <div className="contact-row" key={r.k}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        <div className="contact-side">
          <div className="mini-card">
            <span className="kicker">Disponibilidad</span>
            <div className="big-stat">Inmediata</div>
            <p>
              Abierto a full-time, contrato o proyectos de alto impacto con foco
              en data/producto.
            </p>
          </div>
          <div className="mini-card">
            <span className="kicker">
              Actividad en GitHub · este mes · en vivo
            </span>
            <CommitCounter />
          </div>
          <div className="mini-card">
            <span className="kicker">Preferencia</span>
            <h4>Remoto + 1 o 2 días presencial</h4>
            <p>
              Santiago como base. Disponible para trabajar con equipos
              distribuidos en América y Europa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- FOOT ----------
function Foot() {
  return (
    <footer className="foot">
      <div className="foot-giant">
        Juan <span className="ital">Aylwin</span> · 26
      </div>
      <div className="foot-meta">
        <span>© 2026 · Hecho en React · Diseñado por mí</span>
        <span>Última actualización · abr 2026</span>
        <span>v2026.04 – build stable</span>
      </div>
    </footer>
  );
}

export {
  Sidebar,
  Hero,
  About,
  Skills,
  Experience,
  Education,
  Projects,
  Hobbies,
  Contact,
  Foot,
};
