import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import api from "../../service";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingForm from "./LandingForm";
import Domain1 from "./Domain1";
import Submit from "./Submit.jsx";
import "../../assets/css/recruitForm.css";
import { WhatsApp } from "@material-ui/icons";
import axios from "axios";

const RecruitForm = () => {
  const [questions, setQuestion] = useState(null);
  const [values, setValues] = useState(null);
  const [domainValues, setDomainValues] = useState([]);

  useEffect(() => {
    api
      .get("/recruitment/response")
      .then((response) => {
        setQuestion(response.data);
        console.log(questions);
      })
      .catch((error) => {});
  }, []);

  const getValues = (values) => {
    console.log(values);
    setValues(values);
  };

  const getDomainValues = (values) => {
    console.log(values);
    setDomainValues(values);
  };

  return (
    <div>
      <div className="r_back"></div>

      <div className="back_glass">
        <div className="r_top_back"></div>
        <div id="step1">
          <div className="r_topnav">
            <Container>
              <Row>
                <Col xs={12} md={3}>
                  <div className="r_txt1">Join us at RobotiX Club!</div>
                </Col>
                <Col style={{ padding: "0px" }}>
                  <div className="r_link " id="a_step1">
                    Step1{" "}
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </Col>
                <Col style={{ padding: "0px" }}>
                  <div className="r_link " id="a_step2">
                    Step2{" "}
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </Col>
                <Col style={{ padding: "0px" }}>
                  <div className="r_link " id="a_step3">
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
        </div>
        <BrowserRouter>
          <Switch>
            <Route path="/recruitment_form">
              <LandingForm getValues={getValues} placeValues={values} />
            </Route>
            <Route path="/Domain1">
              <Domain1
                questions={questions}
                domainValues={domainValues}
                getDomainValues={getDomainValues}
                DomainFilter="ALL"
              />
            </Route>
            <Route path="/submit">
              <Submit />
            </Route>
          </Switch>
        </BrowserRouter>
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
