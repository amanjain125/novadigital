import { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal } from './Modal';

interface Project {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  details: {
    overview: string;
    challenge: string;
    solution: string;
    delivered: string;
    impact: string;
    cta: {
      text: string;
      link: string;
    };
  };
}

const projects: Project[] = [
  {
    category: "Website Development",
    title: "Baklavachi — Turkish Sweets Website",
    description: "A modern business website designed to showcase premium Turkish sweets and improve online presence.",
    imageUrl: "/baklavachi.png",
    details: {
      overview: "Baklavachi is a Turkish sweets brand specializing in traditional desserts such as baklava. The brand needed a professional website to establish a strong online presence and showcase its premium products.",
      challenge: "– No professional website\n– Limited online credibility\n– Products not presented clearly online",
      solution: "NovaDigital designed and developed a custom business website focused on:\n– Clean, premium UI/UX\n– Mobile-first responsiveness\n– Clear product presentation",
      delivered: "– Custom business website\n– Modern UI/UX design\n– Responsive layout\n– Optimized structure",
      impact: "– Stronger brand credibility\n– Professional digital identity",
      cta: {
        text: "View Live Website",
        link: "https://baklavachi.in/"
      }
    }
  },
  {
    category: "Social Media Management",
    title: "Alankruti House of Designs",
    description: "Instagram account handling with reels, content strategy, and brand-consistent visuals.",
    imageUrl: "/alankruti.png",
    details: {
      overview: "Alankruti House of Designs is a fashion brand focused on designer wear and custom outfits. The goal was to improve Instagram presence and brand consistency.",
      challenge: "– Inconsistent posting\n– Low visual consistency\n– Engagement improvement needed",
      solution: "NovaDigital managed the Instagram account with:\n– Content planning\n– Reels editing\n– Brand-aligned visuals",
      delivered: "– Instagram account handling\n– Reels & post editing\n– Content calendar\n– Engagement strategy",
      impact: "– Improved visual identity\n– Better engagement quality",
      cta: {
        text: "View Instagram Profile",
        link: "https://www.instagram.com/nainaboutiqueblr/"
      }
    }
  },
  {
    category: "Social Media Management",
    title: "Taj Prop Estates",
    description: "Strategic social media management for a real estate business, focusing on property showcases and brand trust.",
    imageUrl: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder image for Taj Prop Estates
    details: {
      overview: "Taj Prop Estates is a premium real estate firm. We manage their digital presence on Instagram and Facebook to connect with potential buyers and investors.",
      challenge: "Real estate is competitive. The challenge was to stand out, showcase properties effectively, and build trust with a digital-first audience.",
      solution: "We implemented a content strategy featuring high-quality property walkthroughs, market insights, and consistent branding across both Instagram and Facebook.",
      delivered: "– Instagram & Facebook Management\n– Property Showcase Reels\n– Lead Generation Strategy\n– Brand Consistency",
      impact: "– Increased engagement and inquiries\n– Established Taj Prop Estates as a trusted name",
      cta: {
        text: "View Instagram Profile",
        link: "https://www.instagram.com/tajpropestates?igsh=Y3ZoZmh2cTlqMWgx"
      }
    }
  },
  {
    category: "Website Development · Brand Identity",
    title: "NovaDigital — Agency Website & Brand System",
    description: "The NovaDigital website was designed and built as an internal project to represent the agency’s capabilities, standards, and approach to modern digital experiences.",
    imageUrl: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder image for NovaDigital website
    details: {
      overview: "The NovaDigital website was designed and built as an internal project to represent the agency’s capabilities, standards, and approach to modern digital experiences.\n\nRather than using templates, the website was created from scratch to showcase premium UI/UX, performance-focused development, and strong brand positioning — the same quality we deliver to clients.",
      challenge: "As a digital agency, NovaDigital needed a website that:\n\nLooked premium and credible\nCommunicated services clearly\nDemonstrated modern UI/UX standards\nReflected a high-end, technology-driven brand\n\nThe website had to stand out while remaining clean and conversion-focused.",
      solution: "NovaDigital designed and developed its own website with a product-level mindset, combining strategy, design, and technology.\n\nThe solution focused on:\n\nModern dark-themed UI with glassmorphism\nClean typography and layout hierarchy\nInteractive elements and micro-animations\nStrong storytelling through visuals\nOptimized performance and responsiveness",
      delivered: "Custom-designed agency website\nBrand identity & visual system\nResponsive, mobile-first layout\nInteractive sections and animations\nPerformance-optimized structure\nConversion-focused content flow",
      impact: "Clear and professional agency positioning\nStrong first impression for potential clients\nDemonstration of real-world capabilities\nA scalable platform for showcasing future work\n\nWhy This Case Study Matters:\n\nThis project reflects how NovaDigital approaches every client website — with strategy, attention to detail, and a focus on long-term growth.\n\nWhat you see here is exactly what clients can expect when working with us.",
      cta: {
        text: "Build a Website Like This for Your Business",
        link: "#" // Link to NovaDigital's contact or services page
      }
    }
  }
];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="work" className="py-24 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Work</h2>
              <p className="text-gray-400">Real projects. Real results. Real growth.</p>
            </div>
            <button className="text-neon-blue border-b border-neon-blue pb-1 hover:text-white hover:border-white transition-colors">
              View All Projects
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project: Project, index: number) => (
              <div key={index} onClick={() => setSelectedProject(project)}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer group-hover:shadow-[0_0_20px_theme(colors.neon-blue)]"
                >
                  <img src={project.imageUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="text-neon-blue text-sm font-bold mb-2 uppercase tracking-wider">{project.category}</div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal show={selectedProject !== null} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div>
            <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-6" />
            <div className="text-neon-blue text-sm font-bold mb-2 uppercase tracking-wider">{selectedProject.category}</div>
            <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>

            <div className="space-y-6 text-gray-300">
              {selectedProject.details.overview && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Project Overview</h3>
                  {selectedProject.details.overview.split('\n').map((line: string, i: number) => (
                    <p key={i} className="mb-1">{line}</p>
                  ))}
                </div>
              )}
              {selectedProject.details.challenge && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">The Challenge</h3>
                  {selectedProject.details.challenge.split('\n').map((line: string, i: number) => (
                    <p key={i} className="mb-1">{line}</p>
                  ))}
                </div>
              )}
              {selectedProject.details.solution && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Solution</h3>
                  {selectedProject.details.solution.split('\n').map((line: string, i: number) => (
                    <p key={i} className="mb-1">{line}</p>
                  ))}
                </div>
              )}
              {selectedProject.details.delivered && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">What We Delivered</h3>
                  {selectedProject.details.delivered.split('\n').map((line: string, i: number) => (
                    <p key={i} className="mb-1">{line}</p>
                  ))}
                </div>
              )}
              {selectedProject.details.impact && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Impact</h3>
                  {selectedProject.details.impact.split('\n').map((line: string, i: number) => (
                    <p key={i} className="mb-1">{line}</p>
                  ))}
                </div>
              )}

              {selectedProject.details.cta && (
                <div className="mt-6 text-center">
                  <a
                    href={selectedProject.details.cta.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-full bg-neon-purple text-white font-semibold hover:bg-neon-blue transition-colors"
                  >
                    {selectedProject.details.cta.text}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};
