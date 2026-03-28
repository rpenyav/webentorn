import { useState } from 'react';

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');

    try {
      await sendContactEmail(form);
      setSuccess(true);
      setForm(initialState);
    } catch {
      setError('No se ha podido enviar el formulario. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-soft">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Contacto"
            title="Cuéntanos qué necesitas desarrollar"
            subtitle="Si tienes una idea, un proceso que digitalizar o una app que mejorar, lo vemos contigo."
          />

          <Row className="justify-content-center">
            <Col lg={8}>
              <Form className="contact-form" onSubmit={onSubmit}>
                {success && <Alert variant="success">Mensaje enviado correctamente.</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}

                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control name="name" value={form.name} onChange={onChange} required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Empresa</Form.Label>
                      <Form.Control name="company" value={form.company} onChange={onChange} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" name="email" value={form.email} onChange={onChange} required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control name="phone" value={form.phone} onChange={onChange} />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>Mensaje</Form.Label>
                      <Form.Control as="textarea" rows={6} name="message" value={form.message} onChange={onChange} required />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Button type="submit" size="lg" disabled={loading}>
                      {loading ? 'Enviando...' : 'Enviar consulta'}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </AnimatedSection>
      </Container>
    </section>
  );
}

export default ContactSection;