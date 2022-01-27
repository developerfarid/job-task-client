import React, { useEffect, useState } from 'react';
import "./Post.css"
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as Star } from '@fortawesome/free-regular-svg-icons'
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
const full = <FontAwesomeIcon icon={faStar} />
const ementy = <FontAwesomeIcon icon={Star} />


const Post = () => {
    const [repositories, setRepositories] = useState([]);
    const [pageOffset, setPageOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const { post } = useAuth()
    const userPerPage =9;
    const pagesVisited = pageCount * userPerPage
    const number = Math.ceil(post.length / userPerPage)
    const displayPost= post.slice(pagesVisited, pagesVisited + userPerPage ).map((item) => {
        return (<Col xs={12} sm={12} md={6} lg={4}>
            <div className="product">
                <div className="product-img">
                    <img className='img-fluid' src={item.url} alt="" />

                </div>
                <div className="product-body py-3 px-4">
                    <h2>{item.title}</h2>
                    <p>{item.description.slice(0, 100) + "..."}</p>
                    <p className='d-flex justify-content-between'><span>{item.time}</span> <span>Price: { item.price}$</span></p>
                    <p className='d-flex justify-content-between'><Rating className="rating" emptySymbol={ementy} fullSymbol={full} initialRating={item.Rating} readonly stop="5" /> <span>{item.category.toUpperCase()}</span></p>
                    <p className='d-flex justify-content-between'><span>Form: {item.address }</span> <span>To:{item.address2}</span></p>
                    <Link to={`/post/${item._id}`}><button>More Info</button></Link>
                </div>
            </div>
        </Col>)
    })


  const handlePageChange = (event) => {
    console.log(event);
    // TODO Only change displayed selected page
    // when its content is loaded in useEffect.
    setPageCount(event.selected);
  };
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-center my-5'>Our Travelers Experience</h1>
                </Col>
            </Row>
            <Row className='g-4'>
                {
                   displayPost
                }
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakLabel={"..."}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    pageCount={number}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                    forcePage={pageOffset}
                />
            </Row>
        </Container>
    );
};

export default Post;