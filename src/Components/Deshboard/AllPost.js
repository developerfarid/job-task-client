import React from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const AllPost = () => {
   const {post}= useAuth()
    return (
        <Container >
        <Table responsive="xl" striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Tour Name</th>
                    <th>Email</th> 
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>

                {
                    post.map((item, i) => <>
                    <tr>
                    <td>{i+1}</td>
                   
                  
                            <td>{item?.name }</td>
                            <td>{item?.title }</td>
                   
                            <td>{item?.email }</td>
                            <td>{item?.number }</td>
                            <td>{item?.address }</td>
                            <td>{item?.status}</td>

                            <td><button className="btn btn-outline-success" onClick={()=> handleUpdate(item?._id)}>Approve Now</button></td>
                            
                            <td><button className="btn btn-danger" onClick={()=> handleCancel(item?._id)}>Cancel</button></td>
                    </tr>
                    </>)
                }
           
            </tbody>
        </Table>
    </Container>
    );
};

export default AllPost;