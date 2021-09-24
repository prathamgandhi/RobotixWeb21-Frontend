import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Check } from "@material-ui/icons";
const Domain1 = ({ questions }) => {
  useEffect(() => {
    document.getElementById("a_step2").classList.add("r_active");
    document.getElementById("a_step1").classList.remove("r_active");
    document.getElementById("a_step3").classList.remove("r_active");
  });

  const check = (id) => {
    var items = [];
    var counter = 0;

    for (var a = 0; a < 4; a++) {
      alert("multi" + id + a.toString());
      var cb = document.getElementById("multi" + id + a.toString());
      if (cb.checked === true) {
        items[counter] = "option" + a;
        counter++;
      }
      localStorage.setItem(id, items);
      alert(localStorage.getItem(id));
    }
  };

  let que;

  que = questions.ALL.map((element) => {
    console.log(element);
    let muc = 0;
    let slc = 0;
    let law = 0;

    if (element.question_type === "MultipleChoice") {
      muc++;
      return (
        <div>
          <div className="ques">
            <li id={element.question_id}>{element.question}</li>

            <div className="options">
              <input
                id={"multi" + element.question_id + "1"}
                value="option1"
                type="checkbox"
                onClick={() => check(element.question_id)}
              />{" "}
              {element.option1} <br />
              <input
                id={"multi" + muc + "2"}
                value="option2"
                type="checkbox"
              />{" "}
              {element.option2} <br />
              <input
                id={"multi" + muc + "3"}
                value="option3"
                type="checkbox"
              />{" "}
              {element.option3} <br />
              <input
                id={"multi" + muc + "4"}
                value="option4"
                type="checkbox"
              />{" "}
              {element.option4} <br />
            </div>
          </div>
        </div>
      );
    } else if (element.question_type === "SingleChoice") {
      slc++;
      return (
        <div>
          <div>
            <div className="ques">
              <li id={"slc" + slc}>{element.question}</li>
              <div className="options">
                <form style={{ width: "100%", float: "left" }}>
                  <table>
                    <tr>
                      <td>
                        <input
                          style={{ height: "14px", width: "14px" }}
                          type="radio"
                          id={"slc" + slc + "1"}
                          name="age"
                          value="60"
                        />
                      </td>
                      <td>
                        {" "}
                        <label
                          style={{ lineHeight: "1", marginLeft: "10px" }}
                          htmlFor={"slc" + slc + "1"}
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
                          id={"slc" + slc + "2"}
                          name="age"
                          value="60"
                        />
                      </td>{" "}
                      <td>
                        <label
                          style={{ lineHeight: "1", marginLeft: "10px" }}
                          htmlFor={"slc" + slc + "2"}
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
                          id={"slc" + slc + "3"}
                          name="age"
                          value="60"
                        />
                      </td>
                      <td>
                        {" "}
                        <label
                          style={{ lineHeight: "1", marginLeft: "10px" }}
                          htmlFor={"slc" + slc + "3"}
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
                          id={"slc" + slc + "4"}
                          name="age"
                          value="60"
                        />
                      </td>
                      <td>
                        <label
                          style={{ lineHeight: "1", marginLeft: "10px" }}
                          htmlFor={"slc" + slc + "4"}
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
      law++;
      return (
        <div>
          <div>
            <li id={element.question_id}>{element.question}</li>
          </div>
          <br />
          <textarea className="textarea" id={"law" + law + "1"}></textarea>
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
