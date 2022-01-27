import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const PostCard = () => {
  const [data, setData] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://shrouded-reaches-91656.herokuapp.com/addPost/${id}`).then(re=> re.json()).then(res => setData(res))
    },[])
    console.log(data);
    return (
        <Container>
            <Row>
                <Col>
                    <div className="postCard">
                        <div className="img-div">
                            <img className='img-fulid w-100' src={data.url} alt="" />
                            <span className='left-span'>{data.address }</span>
                            <span className='span'>{data.time}</span>
                            <span className='right-span'>{data.address2 }</span>
                        </div>
                        <h3 className='py-4'>{data.title}</h3>
                        <p>{data.description }</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PostCard;