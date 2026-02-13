import { motion } from 'framer-motion';
import Typewriter from '../components/ui/Typewriter';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Container from '../components/ui/Container';
import '../styles/sections/Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-grid-overlay" aria-hidden />
      <Container className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge tone="accent">TukCode — Desarrollador Web</Badge>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Maicol Leonel Almirón
          </motion.h1>
          <motion.div
            className="hero-role"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Typewriter
              texts={[
                'Diseñador de Landing Pages',
                'Landing pages que convierten visitas en clientes',
                'Especialista en React & MySQL',
                'Sitios one-page rápidos y claros',
              ]}
              speed={90}
              deleteSpeed={50}
              delay={2000}
            />
          </motion.div>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Desarrollador web especializado en landing pages y sitios ligeros para negocios y profesionales.
            Me enfoco en combinar diseño claro, buen código y estrategia para que tu proyecto tenga una presencia
            digital que comunique, cargue rápido y genere contactos reales.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <Button variant="primary" onClick={() => scrollToSection('proyectos')}>
              Ver proyectos
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('contacto')}>
              Contactarme
            </Button>
          </motion.div>
          <div className="hero-tags">
            <Badge tone="ghost">Landing pages optimizadas</Badge>
            <Badge tone="ghost">React &amp; MySQL</Badge>
            <Badge tone="ghost">Diseño responsive</Badge>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          <div className="hero-visual-card">
            <motion.div
              className="floating-icon"
              animate={{
                y: [0, -16, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <svg width="240" height="240" viewBox="0 0 200 200" aria-hidden>
                <circle cx="100" cy="100" r="80" fill="url(#gradient1)" opacity="0.3" />
                <path d="M100 40L140 80H120V140H80V80H60L100 40Z" fill="url(#gradient2)" />
                <defs>
                  <linearGradient id="gradient1" x1="0" y1="0" x2="200" y2="200">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="60" y1="40" x2="140" y2="140">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            <div className="hero-meta">
              <div className="hero-meta-item">
                <span className="label">Ubicación</span>
                <span className="value">Tucumán, AR</span>
              </div>
              <div className="hero-meta-item">
                <span className="label">Servicios</span>
                <span className="value">Landing pages, sitios one-page y pequeñas webs</span>
              </div>
              <div className="hero-meta-item">
                <span className="label">Disponibilidad</span>
                <span className="value status">Abierto a nuevos proyectos</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="scroll-pill">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
