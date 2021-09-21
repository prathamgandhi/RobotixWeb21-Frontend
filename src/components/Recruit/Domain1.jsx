import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
const Domain1 = ({ questions }) => {
  useEffect(() => {
    document.getElementById("a_step2").classList.add("r_active");
    document.getElementById("a_step1").classList.remove("r_active");
    document.getElementById("a_step3").classList.remove("r_active");
  });
  let que;

  que = questions.ALL.map((element) => {
    console.log(element);
    if (element.question_type === "MultipleChoice") {
      return (
        <div>
          <div className="ques">
            <li>{element.question}</li>

            <div className="options">
              <input type="checkbox" /> {element.option1} <br />
              <input type="checkbox" /> {element.option2} <br />
              <input type="checkbox" /> {element.option3} <br />
              <input type="checkbox" /> {element.option4} <br />
            </div>
          </div>
        </div>
      );
    } else if (element.question_type === "SingleChoice") {
      return (
        <div>
          <div>
            <div className="ques">
              <li>{element.question}</li>
              <div className="options">
                <form style={{ width: "100%", float: "left" }}>
                  <table>
                    <tr>
                      <td>
                        <input
                          style={{ height: "14px", width: "14px" }}
                          type="radio"
                          id="age1"
                          name="age"
                          value="60"
                        />
                      </td>
                      <td>
                        {" "}
                        <label
                          style={{ lineHeight: "1", marginLeft: "10px" }}
                          htmlFor="age3"
                        >
                          {element.option1}
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <input
                          style={{ height: "14px", width: "14px" }}
                          type="radio"
                          id="age2"
                          name="age"
                          value="60"
                        />
                      </td>{" "}
                      <td>
                        <label
                          style={{ lineHeight: "1", marginLeft: "10px" }}
                          htmlFor="age2"
                        >
                          {element.option2}
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          style={{ height: "14px", width: "14px" }}
                          type="radio"
                          id="age3"
                          name="age"
                          value="60"
                        />
                      </td>
                      <td>
                        {" "}
                        <label
                          style={{ lineHeight: "1", marginLeft: "10px" }}
                          htmlFor="age3"
                        >
                          {element.option3}
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <input
                          style={{ height: "14px", width: "14px" }}
                          type="radio"
                          id="age4"
                          name="age"
                          value="60"
                        />
                      </td>
                      <td>
                        <label
                          style={{ lineHeight: "1", marginLeft: "10px" }}
                          htmlFor="age4"
                        >
                          {element.option4}
                        </label>
                      </td>
                    </tr>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (element.question_type === "Answer") {
      return (
        <div>
          <div>
            <li>{element.question}</li>
          </div>
          <br />
          <textarea className="textarea"></textarea>
        </div>
      );
    }
  });
  // {messages.map((message,i)=><div key={i}><ChatBox message={message} name={name}/></div>)}
  return (
    <div>
      <Container className="step2">
        <Row>
          <Col xs={12} md={12}>
            <div className="rec_btn_wrap" style={{ textAlign: "left" }}>
              <Link to={"/recruitment_form"}>
                <div className="rec_btn">
                  <i className="fa fa-angle-double-left" aria-hidden="true"></i>{" "}
                  Step 1
                </div>
              </Link>
            </div>
            {que}
            <div className="rec_btn_wrap">
              <Link to={"/Submit"}>
                <div className="rec_btn">
                  Step 3{" "}
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Domain1;
