import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section id="hero" className="hero-section d-flex align-items-center">
      <Container>
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="hero-section__eyebrow">
                Apps web, móviles e intranets
              </span>
              <h1 className="display-4 fw-bold mt-3 mb-4">
                Desarrollo de software a medida para empresas que necesitan algo
                más que una web.
              </h1>
              <p className="lead mb-4">
                Diseñamos y desarrollamos aplicaciones web, apps móviles,
                portales privados e intranets orientadas a procesos reales de
                negocio.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button href="#contact" size="lg">
                  Solicitar propuesta
                </Button>
                <Button href="#services" variant="outline-light" size="lg">
                  Ver servicios
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
