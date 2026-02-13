import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import profilePhoto from '../assets/images/perfil.jpg';
import '../styles/sections/About.css';

const aboutBlocks = [
  {
    title: '¿Quién soy?',
    body:
      'Soy Maicol Leonel Almirón, desarrollador web y freelancer especializado en crear landing pages y sitios web ligeros para negocios y profesionales. Con base en Tucumán, Argentina, me dedico a transformar ideas en páginas claras, visuales y fáciles de navegar.',
  },
  {
    title: '¿En qué estoy trabajando?',
    body:
      'Actualmente trabajo como freelancer diseñando y desarrollando landing pages enfocadas en conversión, sitios one-page y pequeñas webs informativas. También dedico tiempo a proyectos personales para seguir puliendo detalles de diseño, performance y experiencia de usuario.',
  },
  {
    title: '¿Qué tipo de proyectos busco?',
    body:
      'Busco principalmente proyectos de landing pages y sitios web pequeños para marcas personales, negocios locales y emprendimientos que necesitan una presencia clara y profesional en internet. Me interesa trabajar en proyectos donde pueda aportar orden, diseño y una estructura pensada para generar resultados reales.',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="sobre-mi" className="about-section" ref={ref}>
      <Container>
        <SectionTitle
          eyebrow="Perfil"
          title="Sobre mí"
          subtitle="Combino diseño, código y automatización para construir experiencias digitales enfocadas en resultados."
          align="left"
        />

        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="about-portrait" variants={itemVariants}>
            <div className="portrait-frame">
              <img src={profilePhoto} alt="Maicol Leonel Almirón - TukCode" className="profile-photo" />
              <Badge tone="accent" className="portrait-badge">
                Disponible para proyectos
              </Badge>
            </div>
          </motion.div>

          <motion.div className="about-details" variants={itemVariants}>
            <div className="about-grid-panels">
              {aboutBlocks.map((block) => (
                <Card key={block.title} className="about-card">
                  <h3>{block.title}</h3>
                  <p>{block.body}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
