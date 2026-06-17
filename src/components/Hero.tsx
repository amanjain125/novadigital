import { motion } from 'framer-motion';
import { FaInstagram, FaChartLine, FaArrowRight } from 'react-icons/fa';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden perspective-2000">

      {/* Breathing Background Glow */}
      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/20 rounded-full blur-[120px] -z-10"
      />

      {/* 3D Visual Content (Placed Before Text) */}
      <div className="relative w-full max-w-6xl mx-auto h-[350px] md:h-[500px] mb-8 md:mb-12 perspective-1000">
        <motion.div
          className="relative w-full h-full flex items-center justify-center transform-style-3d"
          initial={{ rotateX: 20, opacity: 0 }}
          animate={{ rotateX: 10, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Main Website Interface */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[85%] sm:w-[75%] md:w-[850px] aspect-[16/10] bg-navy-900 rounded-xl border border-white/10 shadow-2xl overflow-hidden ring-1 ring-white/5 relative z-20"
          >
            {/* Browser Bar */}
            <div className="h-10 bg-[#0B0F19] border-b border-white/5 flex items-center px-4 gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 bg-navy-800/50 rounded h-6 w-1/2 mx-auto border border-white/5" />
            </div>
            {/* Mockup Content */}
            <div className="p-8 flex flex-col items-center justify-center h-full bg-[#050505]">
              <div className="relative flex items-center justify-center mb-10 mt-4">
                {/* Outer faint ring */}
                <div className="absolute w-[140px] h-[140px] md:w-[200px] md:h-[200px] rounded-full border-[2px] border-[#151B2B]" />
                {/* Inner faint ring */}
                <div className="absolute w-[110px] h-[110px] md:w-[150px] md:h-[150px] rounded-full border-[2px] border-[#151B2B]" />
                {/* Central gradient circle */}
                <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-gradient-to-b from-[#8B5CF6] to-[#2563EB] z-10" />
              </div>
              {/* Faint bars below */}
              <div className="w-[85%] md:w-[60%] h-8 md:h-6 bg-[#151B2B] rounded-2xl mb-3 md:mb-4" />
              <div className="w-[60%] md:w-[40%] h-5 md:h-4 bg-[#151B2B] rounded-2xl" />
            </div>
          </motion.div>

          {/* Floating Element 1: Analytics (Separated & Larger) */}
          <motion.div
            className="absolute top-[-5%] sm:top-0 md:top-16 right-[5%] md:-right-24 w-auto min-w-[180px] md:w-80 p-4 md:p-8 bg-[#0a0f1c]/90 backdrop-blur-md border border-neon-cyan/30 rounded-2xl shadow-[0_0_30px_rgba(0,240,255,0.15)] z-30"
            animate={{
               y: [0, 25, 0],
               opacity: [0.9, 1, 0.9]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="flex items-center justify-between mb-4 md:mb-6 gap-4 md:gap-6">
              <div className="flex items-center gap-3 md:gap-5">
                <div className="p-2 md:p-4 bg-neon-cyan/20 rounded-xl text-neon-cyan">
                  <FaChartLine className="text-lg md:text-3xl" />
                </div>
                <div>
                  <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider whitespace-nowrap mb-0.5">Reach</div>
                  <div className="text-base md:text-xl text-white font-bold whitespace-nowrap">Analytics</div>
                </div>
              </div>
              <span className="text-sm md:text-xl text-neon-cyan font-bold whitespace-nowrap">+145%</span>
            </div>
            <div className="h-2 md:h-3 w-full bg-[#151B2B] rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-neon-cyan to-blue-500" />
            </div>
          </motion.div>

          {/* Floating Element 2: Instagram (Separated & Larger) */}
          <motion.div
            className="absolute bottom-[-5%] sm:bottom-0 md:bottom-auto md:top-[40%] left-[5%] md:-left-24 w-auto min-w-[180px] md:w-80 p-4 md:p-8 bg-[#0a0f1c]/90 backdrop-blur-md border border-neon-purple/30 rounded-2xl shadow-[0_0_30px_rgba(176,38,255,0.15)] z-30"
            animate={{
              y: [0, -25, 0],
              opacity: [0.9, 1, 0.9]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="flex items-center gap-3 md:gap-5 mb-4 md:mb-6">
              <div className="p-2 md:p-4 bg-neon-purple/20 rounded-xl text-neon-purple">
                <FaInstagram className="text-lg md:text-3xl" />
              </div>
              <div>
                <div className="text-base md:text-xl text-white font-bold whitespace-nowrap">@enhancemarketing</div>
                <div className="text-xs md:text-sm text-gray-400 whitespace-nowrap">Social Growth</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 md:gap-5">
              <div className="aspect-square bg-[#151B2B] rounded-xl border border-white/5" />
              <div className="aspect-square bg-[#151B2B] rounded-xl border border-white/5" />
              <div className="aspect-square bg-[#151B2B] rounded-xl border border-white/5" />
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Text Content (Placed After Visual) */}
      <div className="text-center space-y-8 max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-7xl font-display font-bold leading-tight tracking-tight mb-6">
            We Build <span className="text-gradient">Digital Empires</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Complete digital transformation. From high-performance websites to viral social strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-neon-blue hover:bg-blue-600 text-white font-bold rounded-lg shadow-[0_0_30px_rgba(38,125,255,0.3)] transition-all flex items-center gap-2 group"
            >
              Get a Free Strategy Call
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="px-8 py-4 text-gray-300 hover:text-white font-medium transition-colors border border-white/10 rounded-lg hover:bg-white/5"
            >
              View Our Work
            </button>
          </div>
        </motion.div>
      </div>

    </section>
  );
};
