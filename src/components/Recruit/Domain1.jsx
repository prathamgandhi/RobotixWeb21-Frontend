import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Domain1 = ({ questions }) => {
  let que;

  que = questions.ALL.map((element) => {
    console.log(element.question);
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
          <Col xs={12} md={6}>
            <Link to={"/recruitment_form"}>
              <Button variant="primary">Go back</Button>
            </Link>
            {que}
          </Col>

          <Col xs={12} md={6}>
            <Row style={{ padding: "10px" }}></Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Domain1;
