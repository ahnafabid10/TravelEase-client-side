import React, { useState } from 'react';
import { FaCalendar, FaUser, FaClock, FaArrowRight, FaSearch, FaTag } from 'react-icons/fa';

const BlogSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const blogPosts = [
        {
            id: 1,
            title: 'Top 10 Road Trip Destinations in Bangladesh',
            excerpt: 'Discover the most scenic routes and hidden gems perfect for your next adventure. From coastal highways to mountain passes, explore Bangladesh like never before.',
            image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
            author: 'Sarah Johnson',
            date: 'December 15, 2024',
            readTime: '5 min read',
            category: 'Travel Tips'
        },
        {
            id: 2,
            title: 'Essential Car Maintenance Tips for Renters',
            excerpt: 'Learn how to keep your rental vehicle in perfect condition and avoid unnecessary charges. Basic maintenance knowledge every renter should have.',
            image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
            author: 'Michael Chen',
            date: 'December 10, 2024',
            readTime: '7 min read',
            category: 'Maintenance'
        },
        {
            id: 3,
            title: 'Electric Vehicles: The Future of Car Rentals',
            excerpt: 'Explore why electric vehicles are becoming the preferred choice for eco-conscious travelers and how they are revolutionizing the rental industry.',
            image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
            author: 'Emma Davis',
            date: 'December 5, 2024',
            readTime: '6 min read',
            category: 'Technology'
        },
        {
            id: 4,
            title: 'How to Choose the Perfect Vehicle for Your Trip',
            excerpt: 'A comprehensive guide to selecting the right car based on your destination, group size, and travel needs for maximum comfort and efficiency.',
            image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
            author: 'David Martinez',
            date: 'November 28, 2024',
            readTime: '8 min read',
            category: 'Travel Tips'
        },
        {
            id: 5,
            title: 'Understanding Rental Insurance: What You Need to Know',
            excerpt: 'Navigate the complex world of rental insurance with our detailed breakdown of coverage options, what is included, and what you should consider.',
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
            author: 'Lisa Anderson',
            date: 'November 20, 2024',
            readTime: '10 min read',
            category: 'Insurance'
        },
        {
            id: 6,
            title: 'Budget-Friendly Travel: Maximizing Your Rental Experience',
            excerpt: 'Smart strategies to save money on car rentals without compromising quality. Tips for finding deals and avoiding hidden fees.',
            image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
            author: 'James Wilson',
            date: 'November 15, 2024',
            readTime: '5 min read',
            category: 'Budget'
        }
    ];

    const categories = ['All', 'Travel Tips', 'Maintenance', 'Technology', 'Insurance', 'Budget'];

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-base-200">
            <div className="bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Our Blog
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Tips, guides, and insights to make your rental experience exceptional
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative flex-1 max-w-md w-full">
                            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/40" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="input input-bordered w-full pl-12 focus:input-primary transition-all"
                            />
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
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
                </div>

                {filteredPosts.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <div
                                key={post.id}
                                className="bg-base-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                            >
                                <div className="relative overflow-hidden h-56">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                            <FaTag className="text-xs" />
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-base-content mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-base-content/70 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-base-content/60 mb-4 pb-4 border-b border-base-300">
                                        <div className="flex items-center gap-2">
                                            <FaUser className="text-primary" />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaClock className="text-primary" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm text-base-content/60">
                                            <FaCalendar className="text-primary" />
                                            <span>{post.date}</span>
                                        </div>
                                        <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                            Read More
                                            <FaArrowRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="bg-base-100 rounded-2xl p-12 max-w-md mx-auto">
                            <FaSearch className="text-6xl text-base-content/20 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-base-content mb-2">
                                No articles found
                            </h3>
                            <p className="text-base-content/60">
                                Try adjusting your search or filter to find what you are looking for
                            </p>
                        </div>
                    </div>
                )}

                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
                            Stay Updated with Our Latest Posts
                        </h2>
                        <p className="text-base-content/70 mb-6 max-w-2xl mx-auto">
                            Subscribe to our newsletter and never miss an update on travel tips, vehicle guides, and exclusive offers
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered flex-1 focus:input-primary"
                            />
                            <button className="btn bg-primary hover:bg-primary/90 text-white border-none px-8">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;