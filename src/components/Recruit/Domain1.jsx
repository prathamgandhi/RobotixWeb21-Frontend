import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const Domain1 = () => {
    return (
        <div>
            <Link to={"/recruitment_form"}>
            <Button variant="primary">Go back</Button>
            </Link>
        </div>
    )
}

export default Domain1
