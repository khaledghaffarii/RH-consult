import React from "react";
import ChartistGraph from "react-chartist";
import styled from "styled-components";
import { Link} from "react-router-dom";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { transform } from "typescript";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row className="mt-5">
          <Col lg="5" sm="6">
            <Link to="request">
              <Wrap>
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="4 ">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-chart text-warning"></i>
                        </div>
                      </Col>
                      <Col xs="8">
                        <h4>Demande d'absences</h4>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr />
                    <div
                      className="stats"
                      style={{
                        fontSize: 15,
                        color: "black",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      Déposez vos jours de congés et consultez vos soldes de
                      congés
                      <i class="fas fa-arrow-right ml-5"></i>
                    </div>
                  </Card.Footer>
                </Card>
              </Wrap>
            </Link>
          </Col>
          <Col lg="5" sm="6">
            <a href="#">
              <Wrap>
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="4 ">
                        <div className="icon-big text-center icon-warning">
                          <i class="fas fa-clipboard-list text-success"></i>
                        </div>
                      </Col>
                      <Col xs="8">
                        <h4>Planning</h4>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr />
                    <div
                      className="stats"
                      style={{
                        fontSize: 15,
                        color: "black",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      consultez vos soldes de Renseignez votre planning mensuel
                      <i class="fas fa-arrow-right ml-5"></i>
                    </div>
                  </Card.Footer>
                </Card>
              </Wrap>
            </a>
          </Col>
          <Col lg="5" sm="6">
            <a href="#">
              <Wrap>
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="4 ">
                        <div className="icon-big text-center icon-warning">
                          <i class="far fa-calendar-alt text-danger"></i>
                        </div>
                      </Col>
                      <Col xs="8">
                        <h4>Calendrier</h4>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr />
                    <div
                      className="stats"
                      style={{
                        fontSize: 15,
                        color: "black",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      Consultez votre calendrier personnel,les periodes scolaire
                      et entreprise.
                      <i class="fas fa-arrow-right mt-2 " style={{}}></i>
                    </div>
                  </Card.Footer>
                </Card>
              </Wrap>
            </a>
          </Col>
          <Col lg="5" sm="6">
            <a href="#">
              <Wrap>
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="4 ">
                        <div className="icon-big text-center icon-warning">
                          <i class="fas fa-comment-dollar text-success"></i>
                        </div>
                      </Col>
                      <Col xs="8">
                        <h4>Soldes collaborateurs</h4>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr />
                    <div
                      className="stats"
                      style={{
                        fontSize: 15,
                        color: "black",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      Consultez les soldes collaborateur sous votre
                      responsabilité
                      <i class="fas fa-arrow-right ml-5"></i>
                    </div>
                  </Card.Footer>
                </Card>
              </Wrap>
            </a>
          </Col>
          <Col lg="5" sm="6">
            <a href="#">
              <Wrap>
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="4 ">
                        <div className="icon-big text-center icon-warning">
                          <i class="fas fa-folder-plus text-danger"></i>
                        </div>
                      </Col>
                      <Col xs="8">
                        <h4>Dossier personnel</h4>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr />
                    <div
                      className="stats"
                      style={{
                        fontSize: 15,
                        color: "black",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      Mettez a jour votre situation personnelle.
                      <i class="fas fa-arrow-right ml-5"></i>
                    </div>
                  </Card.Footer>
                </Card>
              </Wrap>
            </a>
          </Col>
          <Col lg="5" sm="6">
            <a href="#">
              <Wrap>
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="4 ">
                        <div className="icon-big text-center icon-warning">
                          <i class="fas fa-money-check-alt text-danger"></i>
                        </div>
                      </Col>
                      <Col xs="8">
                        <h4>Préparation de paie</h4>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr />
                    <div
                      className="stats"
                      style={{
                        fontSize: 15,
                        color: "black",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      Saisissez vos bordereaux de préparation de paie
                      <i class="fas fa-arrow-right ml-5"></i>
                    </div>
                  </Card.Footer>
                </Card>
              </Wrap>
            </a>
          </Col>
          <Col lg="5" sm="6">
            <a href="#">
              <Wrap>
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="4 ">
                        <div className="icon-big text-center icon-warning">
                          <i class="fas fa-briefcase text-success"></i>
                        </div>
                      </Col>
                      <Col xs="8">
                        <h4>Catalogue des stages</h4>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr />
                    <div
                      className="stats"
                      style={{
                        fontSize: 15,
                        color: "black",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      Consultez le catalogue des stages
                      <i class="fas fa-arrow-right ml-5"></i>
                    </div>
                  </Card.Footer>
                </Card>
              </Wrap>
            </a>
          </Col>
          <Col lg="5" sm="6">
            <a href="#">
              <Wrap>
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="4 ">
                        <div className="icon-big text-center icon-warning">
                          <i class="fas fa-handshake text-warning"></i>
                        </div>
                      </Col>
                      <Col xs="8">
                        <h4>Entretiens</h4>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr />
                    <div
                      className="stats"
                      style={{
                        fontSize: 15,
                        color: "black",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      Préparez votre entretien ou évaluez vos collaborateurs.
                      <i class="fas fa-arrow-right ml-5"></i>
                    </div>
                  </Card.Footer>
                </Card>
              </Wrap>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;

const Wrap = styled.div`

  border-radius: 10px;
 
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


  &:hover {
  
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;