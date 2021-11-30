import React from "react";
import "./Bootstrap.css";

import { Container, Row, Col, Carousel, Accordion, Table } from "react-bootstrap";

export default function Bootstrap() {
  return (
    <section className="Bootstrap">
      <main>
        <Container fluid>
            <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Task</th>
                    <th>Description</th>
                    <th>Due by</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Grocery shopping</td>
                    <td>Buy milk, eggs, bread and butter at Price Chopper.</td>
                    <td>11/30/21</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Bootstrap coding</td>
                    <td>
                      Style and code website with react bootstrap components
                    </td>
                    <td>12/1/21</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Property search</td>
                    <td>Suggest properties for showing MJ</td>
                    <td>12/2/21</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </main>
    </section>
  );
}
