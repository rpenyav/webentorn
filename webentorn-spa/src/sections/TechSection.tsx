import { Container, Row, Col } from "react-bootstrap";
import AnimatedSection from "../components/common/AnimatedSection";
import SectionTitle from "../components/common/SectionTitle";

const tech = [
  "React",
  "TypeScript",
  "Node.js",
  "APIs REST",
  "React Native",
  "SQL / NoSQL",
  "Cloud",
  "Integraciones",
];

function TechSection() {
  return (
    <section id="tech" className="section-padding">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Tecnologías"
            title="Tecnología actual para productos que tienen que durar"
            subtitle="Elegimos herramientas modernas y mantenibles, siempre al servicio del negocio y no al revés."
          />
          <Row className="g-3 justify-content-center">
            {tech.map((item) => (
              <Col xs={6} md={3} key={item}>
                <div className="tech-pill text-center">{item}</div>
              </Col>
            ))}
          </Row>
        </AnimatedSection>
      </Container>
    </section>
  );
}

export default TechSection;
