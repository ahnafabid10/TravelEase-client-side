import { motion } from "framer-motion";

const customers = [
  {
    name: "Rahim Uddin",
    location: "Dhaka",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "I rented a Toyota for my Cox’s Bazar trip. Smooth booking and very clean car!",
  },
  {
    name: "Nusrat Jahan",
    location: "Chattogram",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "The booking process was super easy and customer support was very helpful.",
  },
  {
    name: "Tanvir Ahmed",
    location: "Sylhet",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    review:
      "No hidden fees and very professional service. I will book again!",
  },
  {
    name: "Farzana Islam",
    location: "Rajshahi",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "Loved the experience! The car was fresh and the pickup was smooth.",
  },
];

const CustomerReview = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-base-content"
        >
          What Our Customers Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base-content/70 mt-3 mb-12"
        >
          Trusted by thousands of travelers across Bangladesh
        </motion.p>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {customers.map((c, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-base-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-20 h-20 rounded-full border-4 border-primary mb-4"
                />

                <p className="text-base-content/70 italic mb-4">
                  “{c.review}”
                </p>

                <h4 className="font-bold text-base-content">{c.name}</h4>
                <span className="text-primary text-sm">{c.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
