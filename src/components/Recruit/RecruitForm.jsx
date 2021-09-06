import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "../../assets/css/recruitForm.css";

const RecruitForm = () => {
  const [name, setName] = useState("");
  function step2(value) {
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
    if (value === 1) {
      document.getElementById("step2_1").innerHTML =
        "<h3>Wooho You clicked radio 1</h3>";
    } else {
      document.getElementById("step2_1").innerHTML =
        "<h3>Wooho You clicked radio 2</h3>";
    }
  }
  return (
    <div>
      <div className="r_back"></div>
      <div className="back_glass">
        <div id="step1">
          <div className="r_topnav">
            <Container>
              <Row>
                <Col xs={12} md={3}>
                  <div className="r_txt1">Join us at RobotiX Club!</div>
                </Col>
                <Col style={{ padding: "0px" }}>
                  <div className="r_link r_active">
                    Step1{" "}
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </Col>
                <Col style={{ padding: "0px" }}>
                  <div className="r_link">
                    Step2{" "}
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </Col>
                <Col style={{ padding: "0px" }}>
                  <div className="r_link">
                    Step3{" "}
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </Col>
                <Col xs={12} md={3}></Col>
              </Row>
            </Container>
          </div>

          <Container>
            <Row>
              <Col xs={12} md={6}>
                <Container style={{ padding: "10px" }}>
                  <Row>
                    <Col xs={4}>
                      <label htmlFor="name">Name</label>
                    </Col>
                    <Col xs={8}>
                      <input
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
                  <form
                    style={{ width: "100%", display: "flex", float: "left" }}
                  >
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
                      onClick={() => step2(1)}
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
                      onClick={() => step2(2)}
                    />
                    <label style={{ lineHeight: "1" }} for="age2">
                      radio2
                    </label>
                  </form>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="step2">
          <div className="r_topnav">
            <Container>
              <Row>
                <Col xs={12} md={3}>
                  <div className="r_txt1">Join us at RobotiX Club!</div>
                </Col>
                <Col style={{ padding: "0px" }}>
                  <div className="r_link ">
                    Step1{" "}
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </Col>
                <Col style={{ padding: "0px" }}>
                  <div className="r_link r_active">
                    Step2{" "}
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </Col>
                <Col style={{ padding: "0px" }}>
                  <div className="r_link">
                    Step3{" "}
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </Col>
                <Col xs={12} md={3}></Col>
              </Row>
            </Container>
          </div>
          <div id="step2_1"></div>
        </div>
      </div>
    </div>
  );
};
export default RecruitForm;
/*
  <Container className="my-5">
          <Row>
             <Col>
              <img alt="RobotImg" src="../assets/images/robot2.png" />
            </Col>
           
           <Col
           className="p-3"
           style={{
             border: "3px solid #FFD700",
             borderRadius: "10px",
             width: "50%",
           }}
         >
           <header>
             <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
               Recruitment Form
             </h1>
           </header>
           <Form>
             <Form.Group className="mb-3" controlId="formBasicText">
               <Form.Label>Enter your name</Form.Label>
               <Form.Control
                 type="Text"
                 placeholder="Name"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
               />
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" />
               <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
               </Form.Text>
             </Form.Group>
             <Form.Group
               className="mb-3"
               controlId="exampleForm.ControlTextarea1"
             >
               <Form.Label>Example textarea</Form.Label>
               <Form.Control as="textarea" rows={3} />
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Check me out one" />
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Check me out two" />
             </Form.Group>
             <div style={{ textAlign: "center" }}>
               <Button variant="primary" type="submit">
                 Submit
               </Button>
             </div>
           </Form>
         </Col>
       </Row>
     </Container>
*/
