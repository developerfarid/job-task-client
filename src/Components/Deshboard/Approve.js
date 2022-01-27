import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const Approve = () => {
    const { postAll, trySuccessAlart, setPostAll, setPost } = useAuth()
    const data = {
        find:"done"
    }
    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/addPost/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(ress => ress.json())
            .then(res => {
                console.log("okkk");
                if (res.modifiedCount) {
                    fetch(`http://localhost:5000/addPost/pre`)
                        .then(res => res.json())
                        .then(data => {
                            setPostAll(data)
                            trySuccessAlart("Congratulations!", "You has been successfully Update", "success")
                        })
                }

            })
    }

    const handleCancel = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addPost/${id}`, {
                    method: "DELETE"
                })
                    .then(ress => ress.json())
                    .then(res => {

                        const re = postAll.filter(item => item._id !== id)
                        setPostAll(re);
                    })
                trySuccessAlart("Congratulations!", "Your data successfully Delete", "success")
            }
        })
    }

    return (
        <Container >

        <Table responsive="xl" className='text-white' striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tour Name</th>
                    <th>Update</th>
                   
                </tr>
            </thead>
            <tbody className='text-white'>

                {
                    postAll.map((item, i) => <>
                    <tr >
                    <td  className='text-white'>{i+1}</td>
                   
                  
                            <td  className='text-white'>{item?.title }</td>

                            <td className='text-white'><button className="btn btn-outline-success" onClick={() => handleUpdate(item?._id)}>Approve Now</button></td>
                            <td><button className="btn btn-danger" onClick={()=> handleCancel(item?._id)}>Cancel</button></td>
                            
                            
                    </tr>
                    </>)
                }
           
            </tbody>
        </Table>
    </Container>
    );
};

export default Approve;