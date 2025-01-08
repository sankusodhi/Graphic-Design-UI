
import { motion } from 'framer-motion';

// FeaturesSection.tsx
function FeaturesSection() {
    const features = [
      {
        title: "Punctuality Meets Perfection ⏰ ",
        description: "We deliver creatives, precise designs on schedule, ensuring excellence for your brand every time.",
        icon: "/assets/punctual.png", // Replace with actual icon paths if needed
      },
      {
        title: "Showcase Your Brand’s Personality 🌟",
        description: "Whether it’s minimalist elegance or bold statements, we tailor designs that resonate with your audience.",
        icon: "/assets/watch.svg", // Replace with actual icon paths if needed
      },
      {
        title: "Engage with Strategic Visuals 📈 ",
        description: "From social media posts to digital ads, our graphics are crafted to drive engagement and action.",
        icon: "/assets/grap.svg", // Replace with actual icon paths if needed
      },
    ];

    return (
      <motion.section
        id="features"
      
        className="bg-[#070324] text-white sm:py-16 sm:px-20 pt-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="container mx-auto  px-4">
          <motion.h2
            className="text-3xl md:text-7xl sm:max-w-[800px] sm:ml-80  text-center  mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Engaging Visual Creatives That Drive Results
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className=" p-6 rounded-lg  flex flex-col "
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              >
                <img src={feature.icon} alt={feature.title} className="w-16 h-16 mb-4" />
                <h3 className="text-4xl  mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  }

  export default FeaturesSection;