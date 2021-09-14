import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Domain1 = ({ questions }) => {
  for (var q in questions) {
    const que = questions[q].map((element) => {
      console.log(element.question);
      return <div>{element.question}</div>;
    });
  }

  return (
    <div>
      <Link to={"/recruitment_form"}>
        <Button variant="primary">Go back</Button>
      </Link>
      {alert(que)}
    </div>
  );
};

export default Domain1;
