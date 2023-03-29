import React, { useEffect } from "react";
import { Row, Col, Card, ListGroup, Container } from "react-bootstrap";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";

const About = ({ title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    navigate("/about/founder");
  }, []);

  return (
    <Container>
      <Row>
        <h1>About {title}</h1>
        <Col sm={5}>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <NavLink className="nav-link" to="company/webdeveloperbd">
                  Company
                </NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <NavLink className="nav-link" to="founder">
                  Founder
                </NavLink>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col sm={7}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
