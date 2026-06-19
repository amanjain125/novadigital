import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';
import { Parallax } from './Parallax';

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-navy-900 text-gray-300 overflow-hidden">
      {/* Background Glows with Parallax */}
      <Parallax offset={80} className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse animation-delay-4000" />
      </Parallax>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal delay={0}>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-3 text-white">About Enhance Marketing</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg md:text-xl text-gray-400">Enhance Your Presence. Accelerate Your Growth.</p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left Column: Story */}
          <div className="md:col-span-3 space-y-6 text-gray-300 text-lg leading-relaxed">
            <ScrollReveal delay={0}>
              <p className="font-semibold text-white text-xl">
                At Enhance Marketing, we believe every business deserves a strong digital presence that drives real growth.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p>
                Founded by a team of passionate engineering students and digital creators, Enhance Marketing helps brands stand out online through strategic social media management, high-quality content creation, professional website development, and performance-driven digital marketing.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                Our mission is simple: turn ideas into impactful digital experiences. Whether it's growing your brand on social media, creating engaging video content, building a modern website, or generating quality leads, we focus on delivering measurable results that help businesses scale.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p>
                We combine creativity, technology, and data-driven strategies to create marketing solutions tailored to each client's goals. From local businesses to growing startups, we work as an extension of your team to build visibility, engagement, and long-term success.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4} className="border-l-4 border-neon-blue pl-6 py-3 my-8 bg-navy-800/20 rounded-r-lg">
              <span className="block text-sm uppercase tracking-wider text-neon-blue font-bold mb-1">Our Motto</span>
              <p className="font-display text-2xl text-white font-semibold italic">
                "Enhance Your Presence. Accelerate Your Growth." 🚀
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Cards */}
          <div className="md:col-span-2 space-y-8">
            {/* What We Do Card with Staggered ScrollReveal */}
            <ScrollReveal delay={0.1}>
              <motion.div whileHover={{ y: -5 }} className="glass-card p-6 rounded-xl border border-white/5 hover:border-neon-blue/30 hover:shadow-[0_0_20px_rgba(38,125,255,0.25)] transition-all duration-300">
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
            </ScrollReveal>

            {/* Our Vision Card with Staggered ScrollReveal */}
            <ScrollReveal delay={0.25}>
              <motion.div whileHover={{ y: -5 }} className="glass-card p-6 rounded-xl border border-white/5 hover:border-neon-blue/30 hover:shadow-[0_0_20px_rgba(38,125,255,0.25)] transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-neon-purple mr-3 text-2xl">◆</span>
                  Our Vision
                </h3>
                <p className="text-sm leading-relaxed">
                  To become a trusted digital growth partner for businesses worldwide by delivering innovative marketing solutions that create lasting impact.
                </p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
