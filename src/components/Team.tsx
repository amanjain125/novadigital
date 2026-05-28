const founders = [
  {
    name: "Aman R Jain",
    role: "Founder | Tech & Strategy",
    initials: "AJ"
  },
  {
    name: "Kalyani Birajdar",
    role: "Founder | Content & Social Media",
    initials: "KB"
  },
  {
    name: "Mansi",
    role: "Founder | Design & Creative",
    initials: "M"
  }
];

export const Team = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">Meet the Founders</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl text-center border border-white/5 hover:border-neon-blue/30 transition-colors group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-2xl font-bold border-2 border-white/10 group-hover:border-neon-blue transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                <span className="relative z-10">{founder.initials}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{founder.name}</h3>
              <p className="text-neon-blue text-sm font-medium tracking-wide uppercase">{founder.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
