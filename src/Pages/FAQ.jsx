import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaCar, FaMoneyBillWave, FaShieldAlt, FaKey, FaSearch } from 'react-icons/fa';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const faqData = [
        {
            category: 'Booking',
            icon: <FaCar />,
            questions: [
                {
                    question: 'How do I book a vehicle?',
                    answer: 'Booking a vehicle is simple. Browse our available vehicles, select your preferred car, choose your rental dates, and complete the booking process. You will receive a confirmation email with all the details.'
                },
                {
                    question: 'Can I modify or cancel my booking?',
                    answer: 'Yes, you can modify or cancel your booking up to 24 hours before the rental start time. Log in to your account, go to My Bookings, and select the booking you wish to change. Cancellation fees may apply depending on how close to the rental date you cancel.'
                },
                {
                    question: 'What documents do I need to rent a vehicle?',
                    answer: 'You will need a valid driver license, a government-issued ID, and a credit or debit card for the security deposit. International renters may need to provide their passport and an international driving permit.'
                },
                {
                    question: 'How far in advance should I book?',
                    answer: 'We recommend booking at least 3-7 days in advance, especially during peak seasons and holidays. However, same-day bookings are available subject to vehicle availability.'
                }
            ]
        },
        {
            category: 'Pricing',
            icon: <FaMoneyBillWave />,
            questions: [
                {
                    question: 'What is included in the rental price?',
                    answer: 'The rental price includes the vehicle, basic insurance coverage, and standard mileage allowance. Additional services like GPS, child seats, or extra insurance can be added for an additional fee.'
                },
                {
                    question: 'Are there any hidden fees?',
                    answer: 'No, we believe in transparent pricing. All fees including taxes, insurance, and any additional services are clearly displayed before you confirm your booking. The price you see is the price you pay.'
                },
                {
                    question: 'Do you require a security deposit?',
                    answer: 'Yes, a refundable security deposit is required at the time of vehicle pickup. The amount varies depending on the vehicle category. The deposit is fully refunded after the vehicle is returned in good condition.'
                },
                {
                    question: 'What payment methods do you accept?',
                    answer: 'We accept all major credit cards, debit cards, and digital payment methods including mobile banking. Payment must be made in full at the time of booking or vehicle pickup.'
                }
            ]
        },
        {
            category: 'Insurance',
            icon: <FaShieldAlt />,
            questions: [
                {
                    question: 'Is insurance included in the rental?',
                    answer: 'Basic insurance coverage is included in all rentals. This covers third-party liability and basic damage protection. You can upgrade to comprehensive coverage for additional protection at the time of booking.'
                },
                {
                    question: 'What does the insurance cover?',
                    answer: 'Our basic insurance covers third-party liability, collision damage with a deductible, and theft protection. Comprehensive insurance reduces the deductible to zero and includes personal accident coverage.'
                },
                {
                    question: 'What happens if the vehicle is damaged?',
                    answer: 'If the vehicle is damaged during your rental period, please contact us immediately. Depending on your insurance coverage, you may be responsible for the deductible amount. Our team will guide you through the claims process.'
                }
            ]
        },
        {
            category: 'Vehicle Usage',
            icon: <FaKey />,
            questions: [
                {
                    question: 'Can I drive the vehicle outside the city?',
                    answer: 'Yes, you can drive anywhere within Bangladesh. However, if you plan to travel to remote areas or cross regional boundaries, please inform us in advance. Some vehicle categories may have restrictions.'
                },
                {
                    question: 'What is the fuel policy?',
                    answer: 'All vehicles are provided with a full tank of fuel. You are required to return the vehicle with a full tank. If the vehicle is returned without a full tank, a refueling charge plus a service fee will be applied.'
                },
                {
                    question: 'Is there a mileage limit?',
                    answer: 'Most rentals include unlimited mileage for local trips. Long-distance rentals may have mileage caps, which are clearly stated in your booking confirmation. Additional mileage can be purchased if needed.'
                },
                {
                    question: 'Can someone else drive the rental vehicle?',
                    answer: 'Additional drivers can be added to your rental agreement for a small fee. All drivers must meet the age and license requirements and must be present during vehicle pickup to provide their documents.'
                },
                {
                    question: 'What should I do in case of an accident?',
                    answer: 'In case of an accident, first ensure everyone is safe and call emergency services if needed. Then contact us immediately. Document the incident with photos, exchange information with other parties, and file a police report if required.'
                }
            ]
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const categories = ['All', ...faqData.map(cat => cat.category)];

    const filteredFAQs = faqData.filter(category => {
        const matchesCategory = selectedCategory === 'All' || category.category === selectedCategory;
        if (!matchesCategory) return false;

        if (searchTerm) {
            return category.questions.some(q => 
                q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                q.answer.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        return true;
    });

    let questionIndex = -1;

    return (
        <div className="min-h-screen bg-base-200">
            <div className="bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex justify-center mb-6">
                        <FaQuestionCircle className="text-7xl text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Find answers to common questions about our vehicle rental services
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-12">
                <div className="mb-12">
                    

                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                                    selectedCategory === category
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-base-100 text-base-content hover:bg-base-300'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {filteredFAQs.length > 0 ? (
                    <div className="space-y-8">
                        {filteredFAQs.map((category) => {
                            const filteredQuestions = searchTerm 
                                ? category.questions.filter(q => 
                                    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    q.answer.toLowerCase().includes(searchTerm.toLowerCase())
                                  )
                                : category.questions;

                            if (filteredQuestions.length === 0) return null;

                            return (
                                <div key={category.category} className="bg-base-100 rounded-2xl shadow-lg overflow-hidden">
                                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-4 border-b border-base-300">
                                        <h2 className="text-2xl font-bold text-base-content flex items-center gap-3">
                                            <span className="text-primary text-2xl">{category.icon}</span>
                                            {category.category}
                                        </h2>
                                    </div>
                                    <div className="divide-y divide-base-300">
                                        {filteredQuestions.map((faq) => {
                                            questionIndex++;
                                            const currentIndex = questionIndex;
                                            const isOpen = openIndex === currentIndex;

                                            return (
                                                <div key={currentIndex} className="transition-all">
                                                    <button
                                                        onClick={() => toggleAccordion(currentIndex)}
                                                        className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-base-200 transition-colors"
                                                    >
                                                        <span className="font-semibold text-lg text-base-content flex-1">
                                                            {faq.question}
                                                        </span>
                                                        <span className={`text-primary text-xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                                            <FaChevronDown />
                                                        </span>
                                                    </button>
                                                    <div
                                                        className={`overflow-hidden transition-all duration-300 ${
                                                            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                        }`}
                                                    >
                                                        <div className="px-6 pb-5 text-base-content/70 leading-relaxed">
                                                            {faq.answer}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="bg-base-100 rounded-2xl p-12 max-w-md mx-auto">
                            <FaQuestionCircle className="text-6xl text-base-content/20 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-base-content mb-2">
                                No questions found
                            </h3>
                            <p className="text-base-content/60">
                                Try adjusting your search or filter to find what you are looking for
                            </p>
                        </div>
                    </div>
                )}

                <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
                        Still Have Questions?
                    </h2>
                    <p className="text-base-content/70 mb-6 max-w-2xl mx-auto">
                        Our support team is here to help you with any questions or concerns you may have
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="btn bg-primary hover:bg-primary/90 text-white border-none px-8">
                            Contact Support
                        </button>
                        <button className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white px-8">
                            Live Chat
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;