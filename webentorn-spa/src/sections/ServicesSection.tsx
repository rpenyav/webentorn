import { Container, Card, Row, Col } from "react-bootstrap";
import AnimatedSection from "../components/common/AnimatedSection";
import SectionTitle from "../components/common/SectionTitle";

const services = [
  {
    title: "Aplicaciones web a medida",
    text: "Herramientas internas, paneles de gestión, CRM, backoffice y software orientado a operativa real.",
  },
  {
    title: "Apps móviles",
    text: "Aplicaciones móviles conectadas a tus sistemas para clientes, equipos internos o procesos de campo.",
  },
  {
    title: "Portales privados e intranets",
    text: "Áreas de cliente, documentación, flujos de trabajo, comunicación interna y automatización.",
  },
  {
    title: "Integraciones y evolución",
    text: "Conexión con APIs, ERPs, CRMs, bases de datos y mantenimiento evolutivo del producto.",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-soft">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Servicios"
            title="Desarrollamos aplicaciones pensadas para resolver procesos reales"
            subtitle="No solo diseñamos interfaces: construimos herramientas útiles, escalables y mantenibles."
          />
          <Row className="g-4">
            {services.map((service) => (
              <Col md={6} key={service.title}>
                <Card className="h-100 service-card">
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.text}</Card.Text>
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

export default ServicesSection;
