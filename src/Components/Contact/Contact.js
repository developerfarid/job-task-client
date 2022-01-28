import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "./Contact.css"
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mt82hy2', 'template_1urcpa7', form.current, 'user_cKgbE80VqOVlLKlhO7S97')
            .then((result) => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your Message Has Been Sent',
                    showConfirmButton: false,
                    timer: 1500
                })
            }, (error) => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'OPS! Something Wrong. Your Message Has Been Not Sent',
                    showConfirmButton: false,
                    timer: 1500
                })
            });
    };
    return (
        <div className="wrapper mt-5 py-5">
            <div className="inner">
                <form ref={form} onSubmit={sendEmail}>
                    <h3 className='text-white'>Contact Us</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <label className="form-group">
                        <input type="text" className="form-control" name='user_name' required />
                        <span>Your Name</span>
                        <span className="border"></span>
                    </label>
                    <label className="form-group">
                        <input type="email" className="form-control" name='user_email' required />
                        <span for="">Your Mail</span>
                        <span className="border"></span>
                    </label>
                    <label className="form-group">
                        <input type="number" className="form-control" name='user_number' required />
                        <span for="">Your Phone Number</span>
                        <span className="border"></span>
                    </label>
                    <label className="form-group">
                        <textarea id="" className="form-control" name="user_sms" required></textarea>
                        <span for="">Your Message</span>
                        <span className="border"></span>
                    </label>
                    <button>Submit
                        <i className="zmdi zmdi-arrow-right"></i>
                    </button>
                </form>
            </div>
        </div>

    );
};

export default Contact;