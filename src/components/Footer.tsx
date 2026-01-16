import { FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <h2 className="text-2xl font-display font-bold mb-4">NOVA<span className="text-neon-blue">DIGITAL</span></h2>
            <p className="text-gray-400 max-w-sm mb-6">
              We help businesses stand out, scale faster, and stay relevant in the digital world.
            </p>
            <div className="flex gap-4">
              <a href="mailto:novadigital162@gmail.com" className="p-2 bg-white/5 rounded-full hover:bg-neon-blue hover:text-white transition-colors"><FaEnvelope /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-neon-blue transition-colors">Social Media Management</a></li>
              <li><a href="#services" className="hover:text-neon-blue transition-colors">Video Editing</a></li>
              <li><a href="#services" className="hover:text-neon-blue transition-colors">Website Development</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-neon-blue transition-colors">About Us</a></li>
              <li><a href="#work" className="hover:text-neon-blue transition-colors">Our Work</a></li>
              <li><a href="#contact" className="hover:text-neon-blue transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>&copy; 2026 NovaDigital. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
