import React from 'react';
import { Col } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import img from "./12328954.jpg"

const Info = () => {
  const {product, user} = useAuth
    return (
        <div className="info" style={{background:`url(${img})`, height:"80vh", backgroundSize:"cover", backgroundPosition:"center"}}></div>
    );
};

export default Info;