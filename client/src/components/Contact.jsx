import React, { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';


export default function Contact() {

    const [formData,setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [loading,setLoading] = useState(false);

    const handleChange = (e)=>{
        setFormData((p)=>({...p,[e.target.name]:e.target.value}))      
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true);
        try{
            const res = await axios.post("https://rajabanni-server.vercel.app/",formData);

            if(res.data && res.data.success){
                toast.success("Message sent successfully!");
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            }else{
                toast.error("Failed to send message!");
            }
        }catch(err){
            console.log(err);
            toast.error("Something went wrong!");
        } finally{
            setLoading(false);
        }
    }

    return (
        <>
            <div id='Contact' className="container-fluid py-5">
                <div className="container">
                    <div className="text-center wow fadeIn" data-wow-delay="0.1s">
                        <h1 className="font-dancing-script text-primary">Contact</h1>
                        <h1 className="mb-5">Have Any Query? Contact Us</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <p className="text-center mb-4">The contact form is currently inactive. Get a functional and working
                                contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code
                                and you're done.</p>
                            <div className="wow fadeIn" data-wow-delay="0.3s">
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name"  name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" name='subject' placeholder="Subject" value={formData.subject} onChange={handleChange}/>
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="message" name="message" value={formData.message} onChange={handleChange} style={{ height: 150 }} defaultValue={""} />
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3 ms-0" type="submit" disabled={loading}> {loading ? "Saving..." : "SEND MESSAGE"}</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}