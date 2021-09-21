import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/recruitForm.css";

const LandingForm = ({getValues,placeValues}) => {
  const [name, setName] = useState(placeValues?placeValues.name:"");
  const [email, setEmail] = useState(placeValues?placeValues.email:"");
  const [contact, setContact] = useState(placeValues?placeValues.contact:"");
  const [whatsapp, setWhatsapp] = useState(placeValues?placeValues.whatsapp:"");
  const [sem, setSem] = useState(placeValues?placeValues.sem:0);
  const setValue = ()=>{
    let values ={
      name,
      email,
      contact,
      whatsapp,
      sem
    };
    getValues(values);
  }
  return (
    <Container className="step1">
      <Row>
        <Col xs={12} md={6}>
          <Container style={{ padding: "10px" }}>
            <Row>
              <Col xs={4}>
                <label htmlFor="name">Name</label>
              </Col>
              <Col xs={8}>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  id="name"
                  placeholder="Your name..."
                  autoComplete="off"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <label htmlFor="email">Email</label>
              </Col>
              <Col xs={8}>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  id="email"
                  placeholder="Your email..."
                  autoComplete="off"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <label htmlFor="phone">Contact</label>
              </Col>
              <Col xs={8}>
                <input
                  onChange={(e) => setContact(e.target.value)}
                  value={contact}
                  type="text"
                  id="phone"
                  placeholder="Your phone no..."
                  autoComplete="off"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <label htmlFor="whatsapp">Whatsapp</label>
              </Col>
              <Col xs={8}>
                <input
                  onChange={(e) => setWhatsapp(e.target.value)}
                  value={whatsapp}
                  type="text"
                  id="whatsapp"
                  placeholder="Your Whatsapp no..."
                  autoComplete="off"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <label htmlFor="semester">Semester</label>
              </Col>
              <Col xs={8}>
                <Form>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Control
                      as="select"
                      onChange={(e) => setSem(e.target.value)}
                      value={sem}
                      custom
                      style={{
                        backgroundColor: "rgba(0, 212, 201, 0)",
                        color: "rgba(250,250,250,0.7)",
                        border: "none",
                        borderBottom: "2px solid rgba(195, 0, 255, 0.5)",
                        marginTop: "15px",
                      }}
                    >
                      <option style={{ background: "#4424b2" }}>
                        1st Semester
                      </option>
                      <option style={{ background: "#4424b2" }}>
                        3rd Semester
                      </option>
                      <option style={{ background: "#4424b2" }}>
                        5th Semester
                      </option>
                      <option style={{ background: "#4424b2" }}>
                        7th Semester
                      </option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        </Col>

        <Col xs={12} md={6}>
          <Row style={{ padding: "10px" }}>
            <label htmlFor="whatsapp">
              Why do you want to join robotix club??
            </label>
            <textarea
              className="textarea"
              placeholder="Write here..."
              autoComplete="off"
            />
            <br />
            Select an option and see the dynamic mature of this form!!
            <br />
            <br />
            <form style={{ width: "100%", display: "flex", float: "left" }}>
              <input
                style={{
                  height: "15px",
                  margin: "0px",
                  float: "left",
                  width: "40px",
                }}
                type="radio"
                id="age1"
                name="age"
                value="30"
              />

              <label style={{ lineHeight: "1" }} for="age1">
                radio1
              </label>

              <input
                style={{ height: "15px", margin: "0px", width: "40px" }}
                type="radio"
                id="age2"
                name="age"
                value="60"
              />
              <label style={{ lineHeight: "1" }} for="age2">
                radio2
              </label>
            </form>
          </Row>
        </Col>
      </Row>
      <Row>
        <Link to={"/Domain1"}>
          <Button style={{ float: "right" }} variant="info" onClick={()=>setValue()}>
            Next
          </Button>
        </Link>
      </Row>
    </Container>
  );
};

export default LandingForm;
