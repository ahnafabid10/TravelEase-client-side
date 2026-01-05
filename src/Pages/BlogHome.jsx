import React from "react";
import { FaCalendar, FaUser, FaArrowRight, FaTag } from "react-icons/fa";
import { Link } from "react-router";

const HomeMiniBlog4 = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Road Trip Destinations in Bangladesh",
      excerpt: "Discover scenic routes and hidden gems for your next road adventure.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      category: "Travel Tips",
    },
    {
      id: 2,
      title: "Essential Car Maintenance Tips for Renters",
      excerpt: "Learn how to keep your rental vehicle in great condition.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      author: "Michael Chen",
      date: "Dec 10, 2024",
      category: "Maintenance",
    },
    {
      id: 3,
      title: "Electric Vehicles: The Future of Rentals",
      excerpt: "Why EVs are becoming the top choice for eco-friendly travelers.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
      author: "Emma Davis",
      date: "Dec 5, 2024",
      category: "Technology",
    },
    {
      id: 4,
      title: "Understanding Rental Insurance",
      excerpt: "Everything you need to know before choosing your coverage.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      author: "Lisa Anderson",
      date: "Nov 20, 2024",
      category: "Insurance",
    },
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-base-content">
              Latest Blogs
            </h2>
            <p className="text-base-content/70 mt-2">
              Guides & tips to make your rental experience better
            </p>
          </div>

          <Link to={'/blog'} className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white mt-4 md:mt-0">
            View All Blogs
          </Link>
        </div>

        {/* 4 Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((post) => (
            <div
              key={post.id}
              className="bg-base-100 rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <FaTag className="text-xs" />
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-base-content mb-2 line-clamp-2 group-hover:text-primary transition">
                  {post.title}
                </h3>

                <p className="text-sm text-base-content/70 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex justify-between items-center text-xs text-base-content/60 border-t pt-3">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-primary" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-primary" />
                    {post.date}
                  </div>
                </div>

                <button className="mt-3 text-primary text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Read More <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeMiniBlog4;
