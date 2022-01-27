import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const AddPost = () => {
    const { trySuccessAlart, admin } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.find = "done";
        console.log(data);
        axios.post("http://localhost:5000/post", data).then((res) => {
            if (res.data.insertedId) {
                trySuccessAlart("Done", "Your data has been added", "success")
                reset()

            }
            else {
                trySuccessAlart("Ops", "Data not Added", "error")
            }
        })
        // if (admin.role) {
        //     
        //     axios.post("http://localhost:5000/post", data).then((res) => {
        //         if (res.data.insertedId) {
        //             trySuccessAlart("Done", "Your data has been added", "success")
        //             reset()
    
        //         }
        //         else {
        //             trySuccessAlart("Ops", "Data not Added", "error")
        //         }
        //     })
            
        // }
        // else {
        //     axios.post("http://localhost:5000/post", data).then((res) => {
        //         if (res.data.insertedId) {
        //             trySuccessAlart("Done", "Your data has been added", "success")
        //             reset()
    
        //         }
        //         else {
        //             trySuccessAlart("Ops", "Data not Added", "error")
        //         }
        //     })
        // }
        // console.log(data);
       
    };
    return (
        <>
            <h1 className='text-center my-4'>Add Tour Blog</h1>
            <form className='make' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Travel Title" {...register("title", { required: true, maxLength: 80 })} />
                <input type="text" placeholder="Travel Description" {...register("description", { required: true, maxLength: 1000 })} />
                <select placeholder='category' {...register("category", { required: true })}>
                    <option value="">Category</option>
                    <option value="Event Travel">Event Travel.</option>
                    <option value="Backpacking Trip">Backpacking Trip.</option>
                    <option value="The Impromptu Trip">The Impromptu Trip.</option>
                    <option value="Solo Travel">Solo Travel.</option>
                    <option value="Family Vacation">Family Vacation.</option>
                </select>

                <input type="number" placeholder="Rating (0 to 5)" {...register("Rating", { required: true, maxLength: 1 })} />
                <input type="number" placeholder="Travel Cost" {...register("cost", { required: true, maxLength: 10 })} />
                <input type="text" placeholder="Img URL" {...register("url", { required: true, maxLength: 100 })} />
                <input type="text" placeholder="Location address (Start)" {...register("address", { required: true, maxLength: 100 })} />
                <input type="text" placeholder="Location address (End)" {...register("address2", { required: true, maxLength: 100 })} />
                <input type="submit" />
            </form>
        </>
    );
};

export default AddPost;