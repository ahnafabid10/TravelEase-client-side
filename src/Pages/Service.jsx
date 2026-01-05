import React from 'react';
import { FaCar, FaShieldAlt, FaHeadset, FaMapMarkedAlt, FaClock, FaMoneyBillWave, FaUserTie, FaTools } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: FaCar,
            title: 'Wide Vehicle Selection',
            description: 'Choose from our diverse fleet of sedans, SUVs, luxury cars, and electric vehicles to match your travel needs.',
            color: 'text-primary',
            bgColor: 'bg-primary/10',
            gradient: 'from-primary/20 to-primary/5'
        },
        {
            icon: FaShieldAlt,
            title: 'Comprehensive Insurance',
            description: 'Travel with confidence knowing every rental includes full coverage insurance and 24/7 roadside assistance.',
            color: 'text-success',
            bgColor: 'bg-success/10',
            gradient: 'from-success/20 to-success/5'
        },
        {
            icon: FaHeadset,
            title: '24/7 Customer Support',
            description: 'Our dedicated support team is always available to assist you with any questions or concerns during your rental.',
            color: 'text-info',
            bgColor: 'bg-info/10',
            gradient: 'from-info/20 to-info/5'
        },
        {
            icon: FaMapMarkedAlt,
            title: 'Multiple Locations',
            description: 'Pick up and drop off your vehicle at any of our convenient locations across major cities and airports.',
            color: 'text-warning',
            bgColor: 'bg-warning/10',
            gradient: 'from-warning/20 to-warning/5'
        },
        {
            icon: FaClock,
            title: 'Flexible Rental Periods',
            description: 'Rent for a day, week, or month. We offer flexible booking options to suit your schedule and budget.',
            color: 'text-purple-600',
            bgColor: 'bg-purple-100',
            gradient: 'from-purple-200 to-purple-50'
        },
        {
            icon: FaMoneyBillWave,
            title: 'Best Price Guarantee',
            description: 'Get the most competitive rates in the market with transparent pricing and no hidden fees.',
            color: 'text-green-600',
            bgColor: 'bg-green-100',
            gradient: 'from-green-200 to-green-50'
        },
        {
            icon: FaUserTie,
            title: 'Professional Service',
            description: 'Experience top-notch service from our trained staff who ensure every vehicle is pristine and ready.',
            color: 'text-blue-600',
            bgColor: 'bg-blue-100',
            gradient: 'from-blue-200 to-blue-50'
        },
        {
            icon: FaTools,
            title: 'Well-Maintained Fleet',
            description: 'All our vehicles undergo regular maintenance and safety inspections to ensure reliability and performance.',
            color: 'text-orange-600',
            bgColor: 'bg-orange-100',
            gradient: 'from-orange-200 to-orange-50'
        }
    ];

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-base-200 via-base-100 to-base-200 py-20 px-4">
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(177,31,36,0.03),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(177,31,36,0.02),transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-base-content">
                        Why Choose <span className="text-primary">TravelEase</span>?
                    </h2>
                    
                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
                        We provide exceptional vehicle rental services with a focus on quality, safety, and customer satisfaction
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-base-100 rounded-3xl p-6 shadow-lg border border-base-300/50 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            
                            {/* Content */}
                            <div className="relative z-10 space-y-4">
                                {/* Icon */}
                                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                                    <service.icon className={`w-8 h-8 ${service.color}`} />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-base-content/70 leading-relaxed text-sm">
                                    {service.description}
                                </p>

                                {/* Decorative Line */}
                                <div className="pt-4">
                                    <div className={`h-1 w-12 ${service.bgColor} rounded-full group-hover:w-full transition-all duration-500`}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 md:p-12 shadow-2xl border border-primary/20 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
                    </div>

                    <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-white">500+</div>
                            <div className="text-white/90 font-medium">Vehicles Available</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-white">10K+</div>
                            <div className="text-white/90 font-medium">Happy Customers</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-white">25+</div>
                            <div className="text-white/90 font-medium">Cities Covered</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-white">4.9★</div>
                            <div className="text-white/90 font-medium">Average Rating</div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-base-100 rounded-3xl p-8 md:p-12 shadow-xl border border-base-300/50 max-w-4xl mx-auto">
                        <div className="space-y-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                                <FaCar className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-base-content">
                                Ready to Hit the Road?
                            </h3>
                            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                                Browse our collection of premium vehicles and book your perfect ride today
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <button className="btn btn-primary btn-lg gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                                    <FaCar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                    <span>Browse Vehicles</span>
                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                </button>
                                <button className="btn btn-outline btn-primary btn-lg gap-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                    <FaHeadset className="w-5 h-5" />
                                    <span>Contact Support</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;