import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AddPost = () => {
    const { trySuccessAlart, admin } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
   
    const { id } = useParams()

    
    
    // useEffect(() => {
    //     axios.get(`http://localhost:5000/addPost/61f2663ffa9d90a4c1af3a2e`).then(res=> setFindOneData(res))
    // },[id])
    console.log(`http://localhost:5000/addPost/${id}`);
    // const onSubmit = data => {
    //     data.find = "done";
    //     console.log(data);
    //     axios.post("https://shrouded-reaches-91656.herokuapp.com/post", data).then((res) => {
    //         if (res.data.insertedId) {
    //             trySuccessAlart("Done", "Your data has been added", "success")
    //             reset()

    //         }
    //         else {
    //             trySuccessAlart("Ops", "Data not Added", "error")
    //         }
    //     })
  
       
    // };
    return (
        <>
            <h1>hjhjghj</h1>
            {/* <h1 className='text-center my-4'>Add Tour Blog</h1>
            <form className='make' >
                <input type="text" defaultValue={findOneData?.title} placeholder="Travel Title" {...register("title", { required: true, maxLength: 80 })} />
                <input type="text" defaultValue={findOneData.description} placeholder="Travel Description" {...register("description", { required: true, maxLength: 1000 })} />
                <select placeholder='category' defaultValue={findOneData.category} {...register("category", { required: true })}>
                    <option value="">Category</option>
                    <option value="Event Travel">Event Travel.</option>
                    <option value="Backpacking Trip">Backpacking Trip.</option>
                    <option value="The Impromptu Trip">The Impromptu Trip.</option>
                    <option value="Solo Travel">Solo Travel.</option>
                    <option value="Family Vacation">Family Vacation.</option>
                </select>

                <input defaultValue={findOneData.Rating} type="number" placeholder="Rating (0 to 5)" {...register("Rating", { required: true, maxLength: 1 })} />
                <input defaultValue={findOneData.price} type="number" placeholder="Travel Cost" {...register("price", { required: true, maxLength: 10 })} />
                <input defaultValue={findOneData.url} type="text" placeholder="Img URL" {...register("url", { required: true, maxLength: 100 })} />
                <input defaultValue={findOneData.address} type="text" placeholder="Location address (Start)" {...register("address", { required: true, maxLength: 100 })} />
                <input defaultValue={findOneData.address2} type="text" placeholder="Location address (End)" {...register("address2", { required: true, maxLength: 100 })} />
                <input  type="submit" />
            </form> */}
        </>
    );
};

export default AddPost;