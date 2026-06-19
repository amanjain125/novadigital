import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';
import { Parallax } from './Parallax';

const founders = [
  {
    name: "Kalyani Birajdar",
    role: "Founder & Technical Lead",
    description: "Handles overall technical execution, backend systems, and technological strategy to power our digital solutions.",
    initials: "KB",
    imageUrl: "/kalyani.jpeg",
    linkedin: "https://www.linkedin.com/in/kalyani-birajdar-558749355/"
  },
  {
    name: "Aman R Jain",
    role: "Founder & Operations Lead",
    description: "Handles editing, social media strategy, and technical development across all core services.",
    initials: "AJ",
    imageUrl: "/aman.jpeg",
    linkedin: "https://www.linkedin.com/in/aman-r-jain-342006356/"
  },
  {
    name: "Mansi",
    role: "Founder & Creative Lead",
    description: "Spearheads video editing, social media handling, and creative brand design for clients.",
    initials: "M",
    imageUrl: "/mansi.jpeg",
    linkedin: "https://www.linkedin.com/in/mansi-42a743355/"
  }
];

export const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-navy-950 text-gray-300 relative overflow-hidden">
      {/* Background decoration with Parallax */}
      <Parallax offset={90} className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[120px] animate-pulse" />
      </Parallax>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <ScrollReveal delay={0}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Meet the Founders</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The passionate team of creators and engineering students driving digital growth for your business.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="glass-card p-8 rounded-2xl text-center border border-white/5 hover:border-neon-blue/30 hover:shadow-[0_0_20px_rgba(38,125,255,0.25)] transition-all duration-300 group flex flex-col items-center h-full"
              >
                <div className="w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-navy-800 to-navy-700 flex items-center justify-center text-3xl font-bold border-2 border-white/10 group-hover:border-neon-blue transition-all duration-300 relative overflow-hidden shadow-inner">
                  {founder.imageUrl ? (
                    <img src={founder.imageUrl} alt={founder.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/10 to-neon-purple/10 backdrop-blur-sm" />
                      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">{founder.initials}</span>
                    </>
                  )}
                </div>
                <div className="flex-1 flex flex-col justify-start">
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block group-hover:underline">
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-neon-blue transition-colors">
                      {founder.name}
                    </h3>
                  </a>
                  <p className="text-neon-blue text-sm font-semibold tracking-wider uppercase mb-4">
                    {founder.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {founder.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
