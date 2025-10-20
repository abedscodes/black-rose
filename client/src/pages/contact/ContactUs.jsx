import React, { useState } from "react";
import "./ContactUs.css";
import { assets } from "../../assets/assets";



const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        reason: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for contacting us. We will get back to you soon.");
        setFormData({ firstName: "", lastName: "", email: "", reason: "", message: "" });
    };

    return (
        <div className="contact-body ">
            <div className="contact-us">
                <div className="contact-form-left">
                    <img className="contact_img h-56" src={assets.contact_img} alt="contact_img" />
                    <div className="contact-text">
                        <h1 className="text-2xl pt-5 pb-2 align-middle">Contact Us</h1>
                        <p className="text-lg">
                            We'd love to hear from you! Whether you have a question, feedback, or just want to say hello,
                            feel free to reach out to us. We will respond to you in 2-5 business days.
                        </p>
                    </div>
                </div>
                <div className="contact-form-container">
                    <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name <span className="required-asterisk">*</span></label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name <span className="required-asterisk">*</span></label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email <span className="required-asterisk">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="reason">Reason for Contact <span className="required-asterisk">*</span></label>
                                <select
                                    id="reason"
                                    name="reason"
                                    value={formData.reason}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a reason</option>
                                    <option value="question">I have a question about a product</option>
                                    <option value="publish">How do I review a product?</option>
                                    <option value="pictures">Can I use pictures from the website?</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message <span className="required-asterisk">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div className="address_container">
                <div className="address">
                    <h1 className="font-bold text-xl text-gray-600">Our Office</h1>
                    <p className="text-gray-500"> Darwin Innovation Hub Level 1,<br />48-50 Smith Street Mall,<br />Darwin City NT 0800</p>
                </div>

                <div className="hours">
                    <h1 >Office Hours</h1>
                    <p className="text-gray-500"> Monday<br />Tuesday<br />Wednesday<br />Thursday<br />Friday<br />Saturday<br />Sunday<br /></p>
                    <p className="text-base text-gray-500">8:00 am – 5:00 pm<br />8:00 am – 5:00 pm<br />8:00 am – 5:00 pm<br />8:00 am – 5:00 pm<br />8:00 am – 5:00 pm<br />Closed<br />Closed<br /></p>
                </div>
                <div className="address" style={{ gridColumn:"10/span 2" }}>
                    <h1 className="font-bold text-xl text-gray-600">Contact Details</h1>
                    <p className="text-gray-500"> <b>Email:</b> support@blackrose.com.au<br /><b>Phone:</b> +61 412 345 678 </p>
                </div>
            </div>


        </div>
    );
};

export default ContactUs;
