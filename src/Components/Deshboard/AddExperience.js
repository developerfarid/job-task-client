import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const AddExperience = () => {
    const { trySuccessAlart, admin } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        console.log(data);
        if (admin.role) {
            console.log(data);
            data.find = "done";
            axios.post("https://shrouded-reaches-91656.herokuapp.com/addPost", data).then((res) => {
            if (res.data.insertedId) {
                trySuccessAlart("Done", "Your data has been added", "success")
                reset()

            }
            else {
                trySuccessAlart("Ops", "Data not Added", "error")
            }
        })
        }
        else {
            data.find="pre"
            axios.post("https://shrouded-reaches-91656.herokuapp.com/addPost", data).then((res) => {
            if (res.data.insertedId) {
                trySuccessAlart("Done", "Your data has been added", "success")
                reset()

            }
            else {
                trySuccessAlart("Ops", "Data not Added", "error")
            }
        })
        }
        
    };
    return (
        <>
            <h1 className='text-center my-4'>Share Your Experience</h1>
            <form className='make' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Travel Title" {...register("title", { required: true, maxLength: 80 })} />
                <input type="text" placeholder="Travel Description" {...register("description", { required: true, maxLength: 1000 })} />
                <select className='my-2' placeholder='category' {...register("category", { required: true })}>
                    <option value="">Category</option>
                    <option value="Event Travel">Event Travel.</option>
                    <option value="Backpacking Trip">Backpacking Trip.</option>
                    <option value="The Impromptu Trip">The Impromptu Trip.</option>
                    <option value="Solo Travel">Solo Travel.</option>
                    <option value="Family Vacation">Family Vacation.</option>
                </select>
                <select placeholder='Time Need' {...register("time", { required: true })}>
                    <option value="">Time Need</option>
                    <option value="3 Days and 2 Night">3 Days and 2 Night</option>
                    <option value="2 Days and One Night">2 Days and One Night</option>
                    <option value="3 Days and 2 Night">3 Days and 2 Night</option>
                    <option value="2 Days and One Night">2 Days and One Night</option>
            
                </select>

                <input type="number" placeholder="Rating (0 to 5)" {...register("Rating", { required: true, maxLength: 1 })} />
                <input type="number" placeholder="Price" {...register("price", { required: true, maxLength: 10000 })} />
                <input type="text" placeholder="Img URL" {...register("url", { required: true, maxLength: 100 })} />
                <input type="text" placeholder="Location address (Start)" {...register("address", { required: true, maxLength: 100 })} />
                <input type="text" placeholder="Location address (End)" {...register("address2", { required: true, maxLength: 100 })} />
                <input type="submit" />
            </form>
        </>
    );
};

export default AddExperience;