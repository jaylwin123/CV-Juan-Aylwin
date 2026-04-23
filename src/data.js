export const CV = {
  name: "Juan Aylwin",
  fullName: "Juan Aylwin Varela",
  role: "Ingeniero Civil Informatico",
  pitch:
    "Analista de datos e ingeniero civil informatico. Traduzco preguntas de negocio en modelos, dashboards y decisiones medibles.",
  location: "Las Condes, Santiago - Chile",
  statusLine: "Disponible desde mayo - Proyectos de data y producto",

  contact: {
    email: "juan.aylwin@mail.com",
    phone: "+56 9 6156 4449",
    address: "Las Condes, Escuela Militar",
    linkedin: "linkedin.com/in/juan-aylwin-314711278",
    github: "github.com/jaylwin123",
    rut: "20.428.640-k",
  },

  about: [
    "Me forme como Ingeniero Civil Informatico en la UAI con una obsesion sana por entender el por que detras de los numeros. Durante los ultimos anos combine el codigo con el analisis de datos, y encontre ahi un lenguaje para tomar mejores decisiones.",
    "Trabajo bien en equipos pequenos, con tolerancia a la ambiguedad y gusto por las primeras versiones que se pueden discutir. Fuera del computador suelo estar escalando: llevo mas de seis anos en la roca y en el hielo, y esa disciplina se filtra a como trabajo.",
  ],

  stats: [
    { num: "6+", unit: "anos", lbl: "escalando en roca y hielo" },
    { num: "3", unit: "", lbl: "experiencias profesionales" },
    { num: "9", unit: "meses", lbl: "como analista en PedidosYa" },
    { num: "2025", unit: "", lbl: "titulado UAI" },
  ],

  skills: {
    Datos: [
      { k: "BigQuery", lvl: 4 },
      { k: "SQL / MySQL", lvl: 4 },
      { k: "Tableau", lvl: 3 },
      { k: "Excel avanzado", lvl: 4 },
    ],
    Desarrollo: [
      { k: "JavaScript / React", lvl: 3 },
      { k: "C++", lvl: 3 },
      { k: "Git y GitHub", lvl: 4 },
      { k: "Cloud (GCP)", lvl: 3 },
    ],
    "Soft e Idiomas": [
      { k: "Analisis de negocio", lvl: 4 },
      { k: "Trabajo en equipo", lvl: 5 },
      { k: "Espanol (nativo)", lvl: 5 },
      { k: "Ingles (profesional)", lvl: 4 },
    ],
  },

  experience: [
    {
      active: true,
      date: "Ene - Sep 2025",
      role: "Analista de Datos",
      company: "PedidosYa",
      logo: "pedidosya-logo.png",
      body: [
        "Diseno y evaluacion de esquemas de incentivos escalonados para mejorar la retencion de riders.",
        "Analisis de cohortes y metricas de permanencia para orientar decisiones estrategicas del equipo.",
        "Construccion de dashboards en Tableau sobre BigQuery para monitorear experimentos en produccion.",
      ],
    },
    {
      date: "Oct - Dic 2024",
      role: "Encargado de Inventario",
      company: "Flores de Ocoa",
      logo: "flores-ocoa-logo.png",
      body: [
        "Responsable de control, conteo, importacion y exportacion de inventario floristico.",
        "Optimizacion del proceso de eliminacion de mermas y manejo seguro de elementos toxicos.",
      ],
    },
    {
      date: "Dic 2023",
      role: "Asistente Administrativo",
      company: "GeoPark Limited",
      logo: "geopark-logo.png",
      body: [
        "Gestion de despachos, tramites bancarios y representacion en Notaria y Conservador de Bienes Raices.",
        "Coordinacion con organismos estatales y privados para mantener operaciones al dia.",
      ],
    },
  ],

  education: [
    {
      badge: "Titulado",
      period: "2019 - 2025",
      school: "Universidad Adolfo Ibanez",
      logo: "uai-logo.png",
      degree: "Ingenieria Civil Informatica",
      body: "Formacion solida en pensamiento analitico y resolucion de problemas. Enfoque practico en programacion profesional, estructuras de datos y arquitectura en la nube.",
      tags: [
        "Programacion Profesional",
        "Estructura de Datos",
        "Cloud",
        "Bases de Datos",
      ],
    },
    {
      badge: "Ed. Media",
      period: "2008 - 2018",
      school: "Colegio del Verbo Divino",
      logo: "verbo-divino-logo.png",
      degree: "Ensenanza basica y media",
      body: "Formacion integral basada en disciplina, liderazgo y trabajo en equipo. Participacion activa en actividades deportivas y comunitarias.",
      tags: ["Liderazgo", "Disciplina", "Trabajo en equipo"],
    },
  ],

  projects: [
    {
      idx: "01",
      title: "CV Web Personal",
      blurb:
        "Sitio responsive propio, desde la maquetacion hasta el deploy en GitHub Pages. Iteracion continua sobre diseno y copy.",
      stack: ["React", "Vite", "CSS"],
      link: "github.com/jaylwin123/CV-Juan-Aylwin",
    },
    {
      idx: "02",
      title: "Analisis de Indicadores",
      blurb:
        "Exploracion de datos sobre un set publico con foco en visualizar patrones utiles para decisiones de negocio.",
      stack: ["SQL", "BigQuery", "Tableau"],
      link: "github.com/jaylwin123",
    },
    {
      idx: "03",
      title: "Automatizacion de Reportes",
      blurb:
        "Reduccion de tareas repetitivas en flujos administrativos mediante scripts ligeros y APIs, con trazabilidad clara.",
      stack: ["JavaScript", "APIs", "Excel"],
      link: "github.com/jaylwin123",
    },
  ],

  hobbies: [
    {
      id: "climb",
      glyph: "△",
      title: "Escalada",
      image: "hobby-escalada-1.jpg",
      short: "Roca y hielo, +6 anos",
      long: "Mi deporte desde hace mas de seis anos. Aprendi a mantener la calma en lugares incomodos, un habito que traigo al trabajo sin darme cuenta.",
      stat: "+6 anos",
    },
    {
      id: "dev",
      glyph: "◇",
      title: "Gaming y game dev",
      image: "hobby-universidad-1.jpg",
      short: "Creacion y juego",
      long: "Empezo por curiosidad y termino siendo un espacio donde mezclo programacion, diseno y narrativa. Prototipos rapidos, fines de semana largos.",
      stat: "Unity - JS",
    },
    {
      id: "lead",
      glyph: "○",
      title: "Liderazgo UAI",
      image: "hobby-escalada-2.jpg",
      short: "Presidente de Escalada",
      long: "Presidi el ramo de escalada en la UAI: organizar salidas, formar a nuevos y mantener la comunidad viva.",
      stat: "Ramo UAI",
    },
  ],
};
