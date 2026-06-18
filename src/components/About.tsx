import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
};

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-navy-900 text-gray-300 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse animation-delay-4000" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-display font-bold mb-3 text-white">About Enhance Marketing</motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400">Enhance Your Presence. Accelerate Your Growth.</motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid md:grid-cols-5 gap-12 items-start"
        >
          {/* Left Column: Story */}
          <motion.div variants={itemVariants} className="md:col-span-3 space-y-6 text-gray-300 text-lg leading-relaxed">
            <p className="font-semibold text-white text-xl">
              At Enhance Marketing, we believe every business deserves a strong digital presence that drives real growth.
            </p>
            <p>
              Founded by a team of passionate engineering students and digital creators, Enhance Marketing helps brands stand out online through strategic social media management, high-quality content creation, professional website development, and performance-driven digital marketing.
            </p>
            <p>
              Our mission is simple: turn ideas into impactful digital experiences. Whether it's growing your brand on social media, creating engaging video content, building a modern website, or generating quality leads, we focus on delivering measurable results that help businesses scale.
            </p>
            <p>
              We combine creativity, technology, and data-driven strategies to create marketing solutions tailored to each client's goals. From local businesses to growing startups, we work as an extension of your team to build visibility, engagement, and long-term success.
            </p>
            <div className="border-l-4 border-neon-blue pl-6 py-3 my-8 bg-navy-800/20 rounded-r-lg">
              <span className="block text-sm uppercase tracking-wider text-neon-blue font-bold mb-1">Our Motto</span>
              <p className="font-display text-2xl text-white font-semibold italic">
                "Enhance Your Presence. Accelerate Your Growth." 🚀
              </p>
            </div>
          </motion.div>

          {/* Right Column: Visual Cards */}
          <motion.div 
            variants={containerVariants}
            className="md:col-span-2 space-y-8"
          >
            {/* What We Do Card */}
            <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="glass-card p-6 rounded-xl border border-white/5 hover:border-neon-blue/30 hover:shadow-[0_0_20px_rgba(38,125,255,0.25)] transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-neon-blue mr-3 text-2xl">◆</span>
                What We Do
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-neon-blue">•</span> Social Media Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon-blue">•</span> Video Editing & Content Creation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon-blue">•</span> Website Design & Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon-blue">•</span> Branding & Creative Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon-blue">•</span> Performance Marketing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon-blue">•</span> SEO & Lead Generation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon-blue">•</span> AI-Powered Business Automation
                </li>
              </ul>
            </motion.div>

            {/* Our Vision Card */}
            <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="glass-card p-6 rounded-xl border border-white/5 hover:border-neon-blue/30 hover:shadow-[0_0_20px_rgba(38,125,255,0.25)] transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-neon-purple mr-3 text-2xl">◆</span>
                Our Vision
              </h3>
              <p className="text-sm leading-relaxed">
                To become a trusted digital growth partner for businesses worldwide by delivering innovative marketing solutions that create lasting impact.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
