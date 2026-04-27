export const CV = {
  name: "Juan Aylwin",
  fullName: "Juan Aylwin Varela",
  role: "Data & Product Engineer",
  roleEs: "Ingeniero de Datos & Producto",
  handle: "@jaylwin",
  age: 26,
  pitch:
    "Traduzco preguntas difusas de negocio en modelos, dashboards y decisiones medibles. Me gusta la intersección entre datos, código y producto.",
  location: "Santiago · Chile",
  timezone: "GMT-3",
  statusLine: "Disponible para nuevos proyectos",

  contact: {
    email: "aylwin1221@gmail.com",
    phone: "+56 9 6156 4449",
    linkedin: "linkedin.com/in/juan-aylwin-314711278",
    github: "github.com/jaylwin123",
  },

  about: [
    "Me formé como <b>Ingeniero Civil Informático en la UAI</b> con una obsesión sana por entender el <em>por qué</em> detrás de los números. En los últimos años mezclé código, producto y análisis: ahí encontré un lenguaje para tomar mejores decisiones.",
    "Funciono bien en equipos pequeños, tolerantes a la ambigüedad, donde las primeras versiones se discuten en voz alta. Fuera del computador suelo estar <em>escalando</em> — roca, hielo, lo que aparezca — y esa disciplina se filtra en cómo trabajo.",
  ],

  stats: [
    { num: "6", unit: "años", lbl: "escalando roca y hielo" },
    { num: "9", unit: "meses", lbl: "analista en PedidosYa" },
    { num: "3", unit: "roles", lbl: "experiencia profesional" },
    { num: "25", unit: "'", lbl: "titulado UAI" },
  ],

  skills: {
    Data: [
      { k: "BigQuery", lvl: 4 },
      { k: "SQL / MySQL", lvl: 4 },
      { k: "Tableau", lvl: 3 },
      { k: "Excel avanzado", lvl: 4 },
    ],
    Engineering: [
      { k: "JavaScript / React", lvl: 3 },
      { k: "C++", lvl: 3 },
      { k: "Git + GitHub", lvl: 4 },
      { k: "GCP / Cloud", lvl: 3 },
    ],
    "Soft + idiomas": [
      { k: "Análisis de negocio", lvl: 4 },
      { k: "Trabajo en equipo", lvl: 5 },
      { k: "Español (nativo)", lvl: 5 },
      { k: "Inglés (profesional)", lvl: 4 },
    ],
  },

  experience: [
    {
      active: true,
      date: "ENE — SEP 2025",
      role: "Analista de Datos",
      company: "PedidosYa",
      chip: "9 meses",
      logo: "pedidosya-logo.png",
      body: [
        "Diseñé y evalué esquemas de incentivos escalonados para mejorar la retención de riders.",
        "Construí análisis de cohortes y métricas de permanencia que orientaron decisiones estratégicas del equipo.",
        "Armé dashboards en Tableau sobre BigQuery para monitorear experimentos en producción.",
      ],
    },
    {
      date: "OCT — DIC 2024",
      role: "Encargado de Inventario",
      company: "Flores de Ocoa",
      chip: "3 meses",
      logo: "flores-ocoa-logo.png",
      body: [
        "Responsable de control, conteo, importación y exportación de inventario florístico.",
        "Optimización del proceso de eliminación de mermas y manejo seguro de elementos tóxicos.",
      ],
    },
    {
      date: "DIC 2023",
      role: "Asistente Administrativo",
      company: "GeoPark Limited",
      chip: "1 mes",
      logo: "geopark-logo.png",
      body: [
        "Gestión de despachos, trámites bancarios y representación en Notaría y Conservador de Bienes Raíces.",
        "Coordinación con organismos estatales y privados para mantener operaciones al día.",
      ],
    },
  ],

  education: [
    {
      badge: "Titulado",
      active: true,
      period: "2019 — 2025",
      school: "Universidad Adolfo Ibáñez",
      logo: "uai-logo.png",
      degree: "Ingeniería Civil Informática",
      body: "Formación sólida en pensamiento analítico y resolución de problemas. Enfoque práctico en programación profesional, estructuras de datos y arquitectura cloud.",
      tags: [
        "Prog. profesional",
        "Estructuras de datos",
        "Cloud",
        "Bases de datos",
      ],
    },
    {
      badge: "Ed. media",
      period: "2008 — 2018",
      school: "Colegio del Verbo Divino",
      logo: "verbo-divino-logo.png",
      degree: "Enseñanza básica y media",
      body: "Formación integral basada en disciplina, liderazgo y trabajo en equipo. Participación activa en actividades deportivas y comunitarias.",
      tags: ["Liderazgo", "Disciplina", "Equipo"],
    },
  ],

  projects: [
    {
      idx: "01",
      type: "IN PROGRESS",
      title: "REMP",
      blurb:
        "Portal que conecta colegios con profesores disponibles para reemplazos — un problema real y no resuelto en Chile. 5 meses en desarrollo, con proyección de ingresos.",
      stack: ["React", "Node.js", "MongoDB"],
      link: null,
      vis: "v3",
      image: "REMP.png",
      wip: true,
    },
    {
      idx: "02",
      type: "SHIPPED",
      title: "Game Feed",
      blurb:
        "Noticiero gamer automatizado con IA: publica actualizaciones, ofertas, reviews y noticias de último momento sin intervención manual.",
      stack: ["Python", "AI", "Automatización"],
      link: "gamefeed-nine.vercel.app/dashboard",
      vis: "v2",
      image: "gamefeed-preview.png",
    },
    {
      idx: "03",
      type: "TOOLING",
      title: "Automatización de Reportes",
      blurb:
        "Reducción de tareas repetitivas en flujos administrativos vía scripts ligeros y APIs, con trazabilidad clara.",
      stack: ["JavaScript", "APIs", "Excel"],
      link: "github.com/jaylwin123",
      vis: "v1",
    },
  ],

  hobbies: [
    {
      id: "climb",
      glyph: "△",
      title: "Escalada",
      image: "hobby-escalada-1.jpg",
      short: "Roca y hielo",
      long: "Mi deporte desde hace más de seis años. Aprendí a mantener la calma en lugares incómodos — un hábito que traigo al trabajo sin darme cuenta.",
      stat: "6+ años",
      lbl: "SPORT · OUTDOOR",
    },
    {
      id: "dev",
      glyph: "◇",
      title: "Game dev & gaming",
      image: "hobby-universidad-1.jpg",
      short: "Creación y juego",
      long: "Empezó por curiosidad y terminó siendo un espacio donde mezclo programación, diseño y narrativa. Prototipos rápidos, fines de semana largos.",
      stat: "Unity · JS",
      lbl: "CREATIVE",
    },
    {
      id: "lead",
      glyph: "○",
      title: "Liderazgo UAI",
      image: "hobby-escalada-2.jpg",
      short: "Presidente de Escalada",
      long: "Presidí el ramo de escalada en la UAI: organizar salidas, formar a nuevos y mantener la comunidad viva.",
      stat: "Ramo UAI",
      lbl: "COMMUNITY",
    },
  ],
};
