import { useState } from 'react'
import './App.css'

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const hobbyImages = [
    { src: '/hobby-escalada-1.jpg', alt: 'Escalada en montaña', title: 'Escalada' },
    { src: '/hobby-escalada-2.jpg', alt: 'Escalada en muro', title: 'Muro de escalada' },
    { src: '/hobby-gaming-1.jpg', alt: 'Setup gaming', title: 'Gaming' },
    { src: '/hobby-programming-1.jpg', alt: 'Programación', title: 'Programación' },
    { src: '/hobby-universidad-1.jpg', alt: 'Presidente escalada UAI', title: 'Liderazgo UAI' }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === hobbyImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? hobbyImages.length - 1 : prevIndex - 1
    )
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-background"></div>
        <div className="container">
          <div className="header-content">
            <div className="header-left">
              <div className="profile-section">
                <div className="profile-image">
                  <img src="/profile-photo.jpg" alt="Juan Aylwin Varela" />
                </div>
                <div className="profile-info">
                  <h1 className="name">Juan Aylwin Varela</h1>
                  <p className="title">Ingeniero Civil Informático</p>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/juan-aylwin-314711278/" target="_blank" rel="noopener noreferrer">
                      <span>
                        <img src="/linkedin-logo.svg" alt="LinkedIn" className="social-icon" />
                        LinkedIn
                      </span>
                    </a>
                    <a href="https://github.com/jaylwin123" target="_blank" rel="noopener noreferrer">
                      <span>
                        <img src="/github-logo.svg" alt="GitHub" className="social-icon" />
                        GitHub
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-info">
                <span>📍 Cruz del Sur 757, Las Condes</span>
                <span>📞 (+56) 9 6156 4449</span>
                <span>🆔 20.428.640-k</span>
              </div>
            </div>
            <div className="header-right">
              <div className="about-header">
                <h2>Acerca de Mí</h2>
                <p>
                  Soy una persona comprometida con mis metas, con una fuerte orientación a la resolución de problemas y motivado por 
                  aprender nuevas herramientas que potencien la toma de decisiones basadas en datos. Me apasiona trabajar en equipo, 
                  compartir conocimientos y aportar ideas innovadoras que generen impacto real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>



      {/* los skills */}
      <section className="section skills">
        <div className="container">
          <h2>Habilidades Técnicas</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Idiomas</h3>
              <div className="skill-item">
                <span className="skill-name">Inglés</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="4"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Español</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="5"></div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Herramientas</h3>
              <div className="skill-item">
                <span className="skill-name">BigQuery</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="4"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Tableau</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="3"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Excel</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="3"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Word</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="4"></div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Programación</h3>
              <div className="skill-item">
                <span className="skill-name">C++</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="3"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">JavaScript</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="3"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">MySQL</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* la seccion de experiencia */}
      <section className="section experience">
        <div className="container">
          <h2>Experiencia Laboral</h2>
          <div className="experience-item">
            <div className="company-logo">
              <img src="/pedidosya-logo.png" alt="PedidosYa" />
            </div>
            <div className="experience-content">
              <h3>Analista de Datos - PedidosYa</h3>
              <span className="period">2025 (enero-septiembre)</span>
              <p>
                Enfocado en la retención de riders. Diseño y evaluación de sistemas de incentivos escalonados 
                para mejorar la permanencia de repartidores, análisis de cohorts y métricas clave para decisiones estratégicas.
              </p>
            </div>
          </div>
          <div className="experience-item">
            <div className="company-logo">
              <img src="/flores-ocoa-logo.png" alt="Flores de Ocoa" />
            </div>
            <div className="experience-content">
              <h3>Encargado de Inventario - Flores de Ocoa</h3>
              <span className="period">2024 (octubre-diciembre)</span>
              <p>
                Encargado de inventario, control, contado, exportación, importación y cuidado de flores. 
                Proceso de eliminación de mermas y limpieza de elementos tóxicos.
              </p>
            </div>
          </div>
          <div className="experience-item">
            <div className="company-logo">
              <img src="/geopark-logo.png" alt="GeoPark Limited" />
            </div>
            <div className="experience-content">
              <h3>Asistente Administrativo - GeoPark Limited</h3>
              <span className="period">2023 (diciembre)</span>
              <p>
                Despachos externos de documentos, trámites bancarios, asistencia en Notaría y Conservador 
                de Bienes Raíces, y trámites ante organismos estatales y privados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* La seccion de educacion */}
      <section className="section education">
        <div className="container">
          <h2>Formación Académica</h2>
          <div className="education-item">
            <div className="institution-logo">
              <img src="/uai-logo.png" alt="Universidad Adolfo Ibáñez" />
            </div>
            <div className="education-content">
              <h3>Universidad Adolfo Ibáñez</h3>
              <span className="period">2019-2025 (Titulado)</span>
              <p>
                La Universidad Adolfo Ibáñez me brindó una sólida formación en ingeniería informática, potenciando mi pensamiento analítico y capacidad de resolución. Cursar asignaturas como Programación Profesional, Estructura de Datos y Arquitectura en Cloud amplió mis habilidades técnicas, permitiéndome abordar con eficiencia y adaptabilidad una amplia gama de tareas.
              </p>
            </div>
          </div>
          <div className="education-item">
            <div className="institution-logo">
              <img src="/verbo-divino-logo.png" alt="Colegio del Verbo Divino" />
            </div>
            <div className="education-content">
              <h3>Colegio del Verbo Divino</h3>
              <span className="period">2008-2018</span>
              <p>
                El Colegio del Verbo Divino me entregó una formación integral basada en la disciplina, el liderazgo y los valores humanos. Su enfoque académico y social fortaleció mis habilidades interpersonales, fomentando el trabajo en equipo, la responsabilidad y el compromiso, cualidades que han sido fundamentales en mi desarrollo personal y profesional.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Seccion de hobbies */}
      <section className="section hobbies">
        <div className="container">
          <h2>Intereses y Hobbies</h2>
          <div className="carousel-container">
            <div className="carousel">
              <button className="carousel-btn prev" onClick={prevImage} aria-label="Imagen anterior">
                ‹
              </button>
              
              <div className="carousel-image-container">
                <img 
                  src={hobbyImages[currentImageIndex].src} 
                  alt={hobbyImages[currentImageIndex].alt}
                  className="carousel-image"
                />
              </div>

              <button className="carousel-btn next" onClick={nextImage} aria-label="Siguiente imagen">
                ›
              </button>
            </div>



            <div className="hobbies-description">
              <div className="hobby-text">
                <h4>🧗‍♂️ Escalada</h4>
                <p>
                  Mi pasión es la escalada, actividad que practico hace más de seis años. Me inspira superar mis límites y descubrir nuevos lugares. Domino la escalada en roca y en hielo, experiencias que fortalecen mi perseverancia, concentración y capacidad para mantener la calma en situaciones exigentes.
                </p>
                <div className="platform-links">
                  <a href="https://www.strava.com/athletes/189233395" target="_blank" rel="noopener noreferrer" className="strava-link">
                    <img src="/strava-logo.png" alt="Strava" className="platform-icon" />
                    Seguir en Strava
                  </a>
                </div>
              </div>
              <div className="hobby-text">
                <h4>🎮 Gaming & Programación</h4>
                <p>
                  Desde pequeño he sido un apasionado de los videojuegos. Con el tiempo, esa curiosidad evolucionó en un hobby de desarrollo de juegos, donde aplico mis conocimientos de programación y creatividad.
                </p>
                <div className="platform-links">
                  <a href="https://steamcommunity.com/profiles/76561198048418782/" target="_blank" rel="noopener noreferrer" className="steam-link">
                    <img src="/steam-logo.webp" alt="Steam" className="platform-icon" />
                    Conectar en Steam
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* aqui la localizacion */}
      <section className="section location">
        <div className="container">
          <h2>Ubicación</h2>
          <div className="map-container">
            <iframe
              src="https://maps.google.com/maps?q=Cruz%20del%20Sur%20757%2C%20Las%20Condes%2C%20Chile&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación - Cruz del Sur 757, Las Condes"
            ></iframe>
          </div>
          <div className="address-info">
            <p>
              <strong>📍 Cruz del Sur 757, Las Condes</strong><br />
              Región Metropolitana, Chile
            </p>
          </div>
        </div>
      </section>

      {/* el foot */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Juan Aylwin Varela. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
