import { Container, Row, Col, Card } from "react-bootstrap";
import AnimatedSection from "../components/common/AnimatedSection";
import SectionTitle from "../components/common/SectionTitle";

const useCases = [
  "Clínicas que necesitan gestión de citas, pacientes y flujos internos",
  "Despachos con portales documentales y áreas privadas",
  "Empresas con procesos todavía repartidos entre Excel, email y WhatsApp",
  "Negocios que necesitan software propio conectado a sus sistemas actuales",
];

function UseCasesSection() {
  return (
    <section id="use-cases" className="section-padding bg-soft">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Casos de uso"
            title="Qué tipo de proyectos encajan aquí"
            subtitle="Trabajamos especialmente bien cuando hay operativa real, procesos internos y necesidad de ordenar la gestión."
          />
          <Row className="g-4">
            {useCases.map((item) => (
              <Col md={6} key={item}>
                <Card className="h-100 use-case-card">
                  <Card.Body>
                    <Card.Text className="mb-0">{item}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </AnimatedSection>
      </Container>
    </section>
  );
}

export default UseCasesSection;
