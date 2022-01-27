import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Deshboard = () => {
    const { user, admin } = useAuth()
    return (
        <div className='bg-black'>
            <Container fluid >
                <Row>
                    <Col   xs={12} md={3} lg={2}>
                    
                        <ul style={{marginTop:"120px", zIndex:"111"}}>
                            {/* <Link className='btn btn-outline-info d-block my-1  fs-5' to='/deshboard'>WelCome Info </Link> */}
                            {/* <Link className='btn btn-outline-info d-block my-1  fs-5' to='/deshboard/addPost'>Add Post</Link> */}
                            <Link className='btn btn-outline-info d-block my-1  fs-5' to='/deshboard/add'>Add Travel Experience</Link>
                            {(user?.email && admin?.role) && <Link className='btn btn-outline-info d-block my-1  fs-5' to='/deshboard/makeAdmin'>Make Admin </Link>}
                            {(user?.email && admin?.role) && <Link className='btn btn-outline-info d-block my-1  fs-5' to='/deshboard/approve'>Approve Post </Link>}
                        </ul>
            
                    </Col>
                    <Col  lg={10} md={9}>
                    <Outlet />
                    </Col>
                    
                
                </Row>
            </Container>

        </div>
    );
};

export default Deshboard;