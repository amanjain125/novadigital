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
      <div className="relative w-full max-w-6xl mx-auto h-[500px] mb-12 perspective-1000">
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
            className="w-[700px] aspect-[16/10] bg-navy-900 rounded-xl border border-white/10 shadow-2xl overflow-hidden ring-1 ring-white/5 relative z-20"
          >
            {/* Browser Bar */}
            <div className="h-10 bg-[#0F1629] border-b border-white/5 flex items-center px-4 gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 bg-navy-800/50 rounded h-6 w-1/2 mx-auto border border-white/5" />
            </div>
            {/* Mockup Content */}
            <div className="p-8 flex flex-col items-center justify-center h-full bg-gradient-to-b from-navy-900 to-black">
              <div className="w-32 h-32 rounded-full border-4 border-white/5 mb-6 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-neon-blue to-neon-purple opacity-50" />
              </div>
              <div className="w-3/4 h-8 bg-white/5 rounded-lg mb-4" />
              <div className="w-1/2 h-4 bg-white/5 rounded-lg" />
            </div>
          </motion.div>

          {/* Floating Element 1: Analytics (Separated & Larger) */}
          <motion.div
            className="absolute top-10 right-[10%] w-64 p-5 bg-navy-800/90 backdrop-blur-md border border-neon-cyan/30 rounded-xl shadow-[0_0_30px_rgba(0,240,255,0.15)] z-30"
            animate={{
              y: [0, 25, 0],
              opacity: [0.9, 1, 0.9]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-neon-cyan/20 rounded-lg text-neon-cyan">
                  <FaChartLine className="text-xl" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Reach</div>
                  <div className="text-white font-bold">Analytics</div>
                </div>
              </div>
              <span className="text-neon-cyan font-bold">+145%</span>
            </div>
            <div className="h-2 w-full bg-navy-900 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-neon-cyan to-blue-500" />
            </div>
          </motion.div>

          {/* Floating Element 2: Instagram (Separated & Larger) */}
          <motion.div
            className="absolute bottom-20 left-[10%] w-72 p-5 bg-navy-800/90 backdrop-blur-md border border-neon-purple/30 rounded-xl shadow-[0_0_30px_rgba(176,38,255,0.15)] z-30"
            animate={{
              y: [0, -25, 0],
              opacity: [0.9, 1, 0.9]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2.5 bg-neon-purple/20 rounded-lg text-neon-purple">
                <FaInstagram className="text-xl" />
              </div>
              <div>
                <div className="text-white font-bold">@novadigital</div>
                <div className="text-xs text-gray-400">Social Growth</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square bg-white/5 rounded-md border border-white/5" />
              <div className="aspect-square bg-white/5 rounded-md border border-white/5" />
              <div className="aspect-square bg-white/5 rounded-md border border-white/5" />
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
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight mb-6">
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
