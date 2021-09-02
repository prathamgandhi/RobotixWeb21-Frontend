import {Form,Button,Container,Row,Col} from 'react-bootstrap';
import {useState} from 'react';
import '../../assets/css/recruitForm.css';

const RecruitForm = ()=>{
    const[name,setName] = useState("");
    return(
        <Container className="my-5">
            <Row>
                <Col>
                    <img alt="RobotImg" src="../assets/images/robot2.png"/>
                </Col>
                <Col className="p-3" style={{border:"3px solid #FFD700",borderRadius:"10px",width:"50%"}}>
                    <header>
                        <h1 style={{textAlign:"center",fontWeight:"bold"}}>Recruitment Form</h1>
                    </header>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Enter your name</Form.Label>
                            <Form.Control type="Text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out one"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out two"/>
                        </Form.Group>
                        <div style={{textAlign:"center"}}>
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                        </div>
                </Form>
            </Col>
        </Row>
    </Container>
    )
}
export default RecruitForm