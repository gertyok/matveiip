import MyCard from './MyCard';
import { useEffect } from 'react';
import { Col, Row} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from '../store/UserSlice';

function Main(){

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

    const User = useSelector((state) => state.User.User);
    console.log("Состояние хранилища Redux:", User);


    return(
        <div className="d-flex, p-3">
            {User.length === 0 ? (
            <p>Loading...</p>
            ) : (
            <Row md={40} className="g-4">
                {User.map((product, id) => (
                    <Col key={id}>
                        <MyCard {...product} />
                    </Col>
                ))}
            </Row>
            )}
        </div>
    );
}

export default Main;

