import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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

const cardHover = {
  hover: { 
    y: -5,
    boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
    transition: { duration: 0.3 }
  }
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
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-display font-bold mb-3 text-white">About NovaDigital</motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400">Built by engineers. Driven by creativity.</motion.p>
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
            <p>
              NovaDigital is a digital agency built by three school friends who shared a common interest in technology, creativity, and building meaningful digital experiences.
            </p>
            <p>
              What started during our second year of engineering quickly turned into a serious mission — helping businesses grow online with clarity, consistency, and modern digital systems.
            </p>
            <p>
              Coming from an engineering background, we don’t rely on guesswork. We build structured, growth-focused solutions that combine strategy, design, and execution.
            </p>
            <p className="font-display text-2xl text-white font-semibold italic border-l-4 border-neon-blue pl-6 py-2">
              “Good digital presence isn’t optional anymore — it’s essential.”
            </p>
          </motion.div>

          {/* Right Column: Visual Cards */}
          <motion.div 
            variants={containerVariants}
            className="md:col-span-2 space-y-8"
          >
            <motion.div variants={itemVariants} whileHover="hover" className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-neon-blue mr-3 text-2xl">◆</span>
                What Drives Us
              </h3>
              <ul className="space-y-3">
                <li>Building real digital value, not just visuals.</li>
                <li>Helping brands grow with strategy, not trends.</li>
                <li>Creating systems that scale with time.</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} whileHover="hover" className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-neon-purple mr-3 text-2xl">◆</span>
                Our Team
              </h3>
              <p className="text-sm mb-4">NovaDigital is led by three founders with a shared vision of building meaningful digital solutions.</p>
              <div className="space-y-3 text-sm">
                <p><strong className="font-semibold text-gray-200 block">Aman R Jain</strong><span className="text-gray-400">Founder | Tech & Strategy</span></p>
                <p><strong className="font-semibold text-gray-200 block">Kalyani Birajdar</strong><span className="text-gray-400">Founder | Content & Social Media</span></p>
                <p><strong className="font-semibold text-gray-200 block">Mansi</strong><span className="text-gray-400">Founder | Design & Creative</span></p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
