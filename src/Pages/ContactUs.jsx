import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { toast, ToastContainer } from 'react-toastify';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form submitted:', formData);
        toast.success('Message sent successfully! We will get back to you soon.');
        
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    const contactInfo = [
        {
            icon: <FaPhone />,
            title: 'Phone',
            details: ['+880 1234-567890', '+880 9876-543210'],
            color: 'text-primary'
        },
        {
            icon: <FaEnvelope />,
            title: 'Email',
            details: ['support@travelease.com', 'info@travelease.com'],
            color: 'text-primary'
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Address',
            details: ['123 Main Street', 'Dhaka 1000, Bangladesh'],
            color: 'text-primary'
        },
        {
            icon: <FaClock />,
            title: 'Working Hours',
            details: ['Mon - Fri: 9:00 AM - 8:00 PM', 'Sat - Sun: 10:00 AM - 6:00 PM'],
            color: 'text-primary'
        }
    ];

    return (
        <div className="min-h-screen bg-base-200">
            <div className="bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {contactInfo.map((info, index) => (
                        <div 
                            key={index}
                            className="bg-base-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className={`${info.color} text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block`}>
                                {info.icon}
                            </div>
                            <h3 className="text-xl font-bold text-base-content mb-3">
                                {info.title}
                            </h3>
                            {info.details.map((detail, idx) => (
                                <p key={idx} className="text-base-content/70 mb-1">
                                    {detail}
                                </p>
                            ))}
                        </div>
                    ))}
                    
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                        <div className="text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                            <FaWhatsapp />
                        </div>
                        <h3 className="text-xl font-bold text-base-content mb-3">
                            WhatsApp Support
                        </h3>
                        <p className="text-base-content/70 mb-3">
                            Get instant support via WhatsApp
                        </p>
                        <button className="btn btn-sm bg-primary hover:bg-primary/90 text-white border-none">
                            Chat Now
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3">
                        <div className="bg-base-100 rounded-2xl shadow-2xl overflow-hidden">
                            <div className="bg-gradient-to-r from-primary to-primary/80 p-8">
                                <h2 className="text-3xl font-bold text-white mb-2">Send Us a Message</h2>
                                <p className="text-white/90">Fill out the form below and our team will get back to you within 24 hours</p>
                            </div>

                            <div className="p-8">
                                <div onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">Full Name</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="input input-bordered w-full focus:input-primary transition-all"
                                                required
                                            />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">Email Address</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                className="input input-bordered w-full focus:input-primary transition-all"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">Phone Number</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+880 1234-567890"
                                                className="input input-bordered w-full focus:input-primary transition-all"
                                            />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">Subject</span>
                                            </label>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="select select-bordered w-full focus:select-primary transition-all"
                                                required
                                            >
                                                <option value="">Choose a subject</option>
                                                <option>General Inquiry</option>
                                                <option>Booking Support</option>
                                                <option>Technical Issue</option>
                                                <option>Feedback</option>
                                                <option>Partnership</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-control mb-6">
                                        <label className="label">
                                            <span className="label-text font-semibold">Message</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="6"
                                            placeholder="Tell us how we can help you..."
                                            className="textarea textarea-bordered w-full focus:textarea-primary transition-all resize-none"
                                            required
                                        />
                                    </div>

                                    <button 
                                        onClick={handleSubmit}
                                        className="btn bg-primary hover:bg-primary/90 text-white border-none w-full text-lg h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <FaPaperPlane className="mr-2" />
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-base-100 rounded-2xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-base-content mb-6">
                                Connect With Us
                            </h3>
                            <p className="text-base-content/70 mb-6">
                                Follow us on social media for the latest updates, offers, and travel inspiration
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 bg-base-200 hover:bg-primary hover:text-white p-4 rounded-xl transition-all duration-300 group"
                                >
                                    <FaFacebookF className="text-2xl" />
                                    <span className="font-semibold">Facebook</span>
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 bg-base-200 hover:bg-primary hover:text-white p-4 rounded-xl transition-all duration-300 group"
                                >
                                    <FaInstagram className="text-2xl" />
                                    <span className="font-semibold">Instagram</span>
                                </a>
                                <a
                                    href="https://x.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 bg-base-200 hover:bg-primary hover:text-white p-4 rounded-xl transition-all duration-300 group"
                                >
                                    <FaXTwitter className="text-2xl" />
                                    <span className="font-semibold">Twitter</span>
                                </a>
                                <a
                                    href="https://wa.me/8801234567890"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 bg-base-200 hover:bg-primary hover:text-white p-4 rounded-xl transition-all duration-300 group"
                                >
                                    <FaWhatsapp className="text-2xl" />
                                    <span className="font-semibold">WhatsApp</span>
                                </a>
                            </div>
                        </div>

                        <div className="bg-base-100 rounded-2xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-base-content mb-4">
                                Visit Our Office
                            </h3>
                            <div className="aspect-video bg-base-200 rounded-xl overflow-hidden mb-4">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9085716618143!2d90.39169931498195!3d23.750881594586845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Office Location"
                                />
                            </div>
                            <p className="text-base-content/70 text-sm">
                                Our office is conveniently located in the heart of Dhaka. Drop by for a visit or schedule an appointment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ContactUs;