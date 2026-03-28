import { Container, Row, Col } from "react-bootstrap";
import AnimatedSection from "../components/common/AnimatedSection";
import SectionTitle from "../components/common/SectionTitle";

const steps = [
  "Analizamos tu necesidad y el proceso actual",
  "Definimos una solución realista y escalable",
  "Diseñamos la experiencia y la estructura funcional",
  "Desarrollamos por fases con validación continua",
  "Lanzamos, medimos y evolucionamos",
];

function ProcessSection() {
  return (
    <section id="process" className="section-padding">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Proceso"
            title="Trabajamos con enfoque práctico"
            subtitle="La idea es convertir una necesidad real en un producto usable, sin complicaciones innecesarias."
          />
          <Row className="g-4">
            {steps.map((step, index) => (
              <Col md={6} lg={4} key={step}>
                <div className="process-step h-100">
                  <span className="process-step__number">0{index + 1}</span>
                  <p className="mb-0">{step}</p>
                </div>
              </Col>
            ))}
          </Row>
        </AnimatedSection>
      </Container>
    </section>
  );
}

export default ProcessSection;
