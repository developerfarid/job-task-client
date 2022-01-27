import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import './Footer.css';


const Footer = () => {
    const { register, reset, handleSubmit } = useForm();
    const { trySuccessAlart } = useAuth()

    const onSubmit = data => {
        axios.post("https://shrouded-reaches-91656.herokuapp.com/newsLetter", data)
            .then(res => {
                if (res.data.insertedId) {
                    trySuccessAlart("Congratulations!", "Your data successfully Added", "success")
                    reset()
                }
                else {
                    trySuccessAlart("Opps!", "Something Worng", "error")
                }
            })
    };

    return (
        <footer style={{zIndex:"11111111111111111111"}} className="bg-black  py-5 text-white">
            <Container>
                <Row xs={1} sm={2} md={3}>
                    <Col>
                        <div className="footer-item">
                            <h1 className='logo'>Travel Gang</h1>
                            <p>pustfarid333@gmail.com</p>
                            <p>01629094984</p>
                            <p>Manikgonj Dhaka</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-item">
                            <h3>Our Recent Posts</h3>
                            <ul className="list-unstyled">
                                <li>Bali Kuala Lumpur And Genting Highland Tour Package From Dhaka </li>
                                <small>September 10, 2021</small>
                                <li>Kuakata Package</li>
                                <small>September 19, 2021</small>
                                <li>Dhaka – Srimongal – Sylhet – Dhaka Tour Package</li>
                                <small>September 27, 2021</small>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-item">
                            <h3>Subscribe to our Newsletter</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                                <input className="my-3" placeholder="Email" type="email" {...register("email")} />
                                <input className="btn btn-success" type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;