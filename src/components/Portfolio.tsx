import { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal } from './Modal';

interface Project {
  category: string;
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  techStack?: string[];
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
    category: "Personal Brand Growth",
    title: "Aman R Jain(@duffer_16._) — Tech & AI Content Creator",
    description: "Technology-focused Instagram page simplifying AI tools, coding concepts, and productivity hacks for students.",
    imageUrl: "/aman_cover_page.jpeg",
    techStack: ["Content Strategy", "Video Editing", "Thumbnail Design"],
    details: {
      overview: "Duffer is a technology-focused Instagram page created to simplify AI tools, coding concepts, productivity hacks, and emerging tech trends for students and aspiring developers. Through short-form educational content, the page consistently reaches and engages a tech-savvy audience.",
      challenge: "Standing out in the crowded tech and AI niche, maintaining consistent growth, and delivering high-value educational content in an engaging short-form format.",
      solution: "NovaDigital provided comprehensive content strategy, short-form video editing, and thumbnail design to optimize audience growth and organic reach.",
      delivered: "– Content Strategy & Planning\n– Short-Form Video Editing\n– Thumbnail & Visual Design\n– Audience Growth Optimization\n– Organic Reach Enhancement",
      impact: "– 181,000+ views on the highest-performing reel\n– 11.8K+ profile visits in the last 30 days\n– 920+ followers with organic growth\n– Multiple reels crossing 80K+ views",
      cta: {
        text: "View Instagram Profile",
        link: "https://www.instagram.com/duffer_16._?igsh=MXRodGFwdmZoNm4ybw=="
      }
    }
  },
  {
    category: "Personal Brand Growth",
    title: "Mansi (@mansiii_this_side28) — Motivational Content Creator",
    description: "Motivational content creator inspiring students with relatable life experiences and self-improvement lessons.",
    imageUrl: "/mansi_cover_page.jpeg",
    techStack: ["Content Strategy", "Storytelling", "Community Building"],
    details: {
      overview: "Mansi is a personal brand focused on inspiring students and young audiences through motivational content, relatable life experiences, and self-improvement lessons. By sharing authentic stories, mindset shifts, and insights from her engineering journey, she encourages her audience to stay consistent, overcome challenges, and keep growing every day.",
      challenge: "Standing out in the motivational niche while maintaining authentic storytelling, relatable messaging for students, and consistent community-focused engagement.",
      solution: "Implemented a content strategy centered on authentic storytelling through short-form videos, sharing relatable life lessons, and building an engaged community of students and young professionals.",
      delivered: "– Authentic Storytelling & Short-Form Videos\n– Educational & Motivational Content\n– Relatable Messages for Students\n– Organic Audience Building",
      impact: "– 98.8K+ views on the highest-performing reel\n– 46.1K+ views generated in the last 30 days\n– 3.8K+ interactions in the last 30 days\n– 370+ organically grown followers",
      cta: {
        text: "View Instagram Profile",
        link: "https://www.instagram.com/mansiii_this_side28?igsh=bzdwczMxeTAwZ3U5&utm_source=qr"
      }
    }
  },
  {
    category: "Video Production",
    title: "Promotional Video",
    description: "A high-energy product showcase and service commercial highlighting premium smartphone unboxing and high-precision UV screen protector installation.",
    imageUrl: "https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    videoUrl: "/promotional_video.mp4",
    techStack: ["Speed Ramping", "Sound Design", "Visual Transitions"],
    details: {
      overview: "A high-energy product showcase and service commercial highlighting premium smartphone unboxing and high-precision UV screen protector installation.",
      challenge: "Showing step-by-step tech maintenance can easily become slow, clinical, and boring to watch. The challenge was to take routine, manual tasks and turn them into an exciting, premium visual experience that holds viewer attention.",
      solution: "Dynamic Speed Ramping: Fast-forwarded through mundane tasks while snapping back to real-time for high-impact moments (like liquid pouring or UV light curing) to keep the pacing sharp.\nSlick Floating Transitions: Engineered creative, gravity-defying product transitions to give the shop a modern, high-tech aesthetic right from the start.\nImmersive Sound Design: Built a crisp, tactical soundscape where every cut, unboxing rip, and mechanical click syncs perfectly with the beat to maximize sensory engagement.",
      delivered: "– Dynamic Speed Ramping\n– Slick Floating Transitions\n– Immersive Sound Design",
      impact: "Turned routine, manual tasks into an exciting, premium visual experience that holds viewer attention.",
      cta: {
        text: "Close Project",
        link: "#"
      }
    }
  },
  {
    category: "Video Editing",
    title: "OSCode GCU (@oscode_gcu) — Event Storytelling",
    description: "Engaging short-form content and event recaps capturing the energy of community tech events.",
    imageUrl: "/oscode.png",
    techStack: ["Video Editing", "Content Creation", "Storytelling"],
    details: {
      overview: "OSCode GCU is a student-led technology community at Garden City University that promotes hackathons, open-source contributions, workshops, and innovation. As part of the social media team, I create engaging visual content that captures the energy of community events and communicates them effectively through short-form videos and social media posts.",
      challenge: "Documenting key moments, increasing the appeal of community events, and strengthening the organization's digital presence while making technical initiatives more accessible and engaging for students.",
      solution: "Crafted engaging short-form content with smooth transitions, synced visuals with music and motion graphics, and maintained a consistent visual identity aligned with the OSCode brand.",
      delivered: "– Edited event recap reels and promotional videos\n– Selected and organized raw event footage\n– Synced visuals with music, text overlays, and motion graphics\n– Optimized videos for Instagram Reels",
      impact: "Transformed raw event footage into engaging reels that showcased OSCode GCU’s activities in a professional and relatable way, strengthening their digital presence.",
      cta: {
        text: "View Instagram Profile",
        link: "https://www.instagram.com/oscode_gcu?igsh=a241dXRuYXgyZHZh&utm_source=qr"
      }
    }
  },
  {
    category: "Short-Form Content",
    title: "Motivational Video — Time Management",
    description: "A motivational short-form video combining cinematic clips with a meaningful message about planning and productivity.",
    imageUrl: "/mansi28.jpeg",
    techStack: ["Video Editing", "Cinematic Storytelling", "Social Media"],
    details: {
      overview: "A motivational short-form video created by combining cinematic clips with a meaningful message about time management and planning.",
      challenge: "Creating engaging short-form content that conveys a deep, meaningful message without losing the audience's attention.",
      solution: "Combined high-quality cinematic clips with a strong narrative focus to visually communicate the importance of planning.",
      delivered: "– Short-form video editing\n– Cinematic clip sourcing and arrangement\n– Narrative and messaging alignment",
      impact: "The content effectively highlights how having a clear plan can lead to better productivity and personal growth than merely being occupied.",
      cta: {
        text: "View Reel",
        link: "https://www.instagram.com/reel/DZbq5vXCM_0/?igsh=MWZnbHBsOG53Z20zdw=="
      }
    }
  },
  {
    category: "Website Development",
    title: "Baklavachi — Turkish Sweets Website",
    description: "A modern business website designed to showcase premium Turkish sweets and improve online presence.",
    imageUrl: "/baklavachi.png",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    details: {
      overview: "Baklavachi is a Turkish sweets brand specializing in traditional desserts such as baklava. The brand needed a professional website to establish a strong online presence and showcase its premium products.",
      challenge: "– No professional website\n– Limited online credibility\n– Products not presented clearly online",
      solution: "Enhance Marketing designed and developed a custom business website focused on:\n– Clean, premium UI/UX\n– Mobile-first responsiveness\n– Clear product presentation",
      delivered: "– Custom business website\n– Modern UI/UX design\n– Responsive layout\n– Optimized structure",
      impact: "– Stronger brand credibility\n– Professional digital identity",
      cta: {
        text: "View Live Website",
        link: "https://baklavachi.in/"
      }
    }
  },
  {
    category: "Full-Stack Development",
    title: "PETGO — All-in-One Pet Care Platform",
    description: "A multi-service platform simplifying pet care through ride booking, ambulance support, and food delivery.",
    imageUrl: "/petgo_preview.png",
    techStack: ["Node.js", "Express.js", "SQLite", "HTML/CSS", "JavaScript"],
    details: {
      overview: "PETGO is a major milestone project—a complete web application built from scratch to simplify pet care. It integrates essential services like pet ride booking, ambulance support, and food delivery into one seamless experience.",
      challenge: "Building a multi-service system required designing a scalable architecture that could handle diverse needs while maintaining a cohesive user experience.",
      solution: "We developed a robust full-stack solution with a Node.js/Express backend and a modern, video-based UI to create an engaging startup-style feel.",
      delivered: "– Video-based interactive UI\n– Integrated Pet Ride & Ambulance booking\n– Pet food delivery system integration\n– RESTful API system\n– Responsive & real-time frontend",
      impact: "Showcases expertise in full-stack architecture, problem-solving, and building user-focused applications. Looking forward to building more impactful projects.",
      cta: {
        text: "View Live Project",
        link: "https://pet-go.onrender.com/"
      }
    }
  },
  {
    category: "Full-Stack Development",
    title: "NaturalCare — Natural Wellness Platform",
    description: "A full-stack application providing personalized natural remedies for skin and hair care based on skin type.",
    imageUrl: "/naturalcare_preview.png",
    techStack: ["Python", "Flask", "SQLite", "Git", "Render"],
    details: {
      overview: "NaturalCare is a full-stack web application focused on providing simple, natural home remedies for skin and hair care. Inspired by modern wellness platforms, it offers a clean and calm user experience.",
      challenge: "Organizing complex remedy data (ingredients, preparation, precautions) into a clean, easy-to-navigate interface for different skin types.",
      solution: "Built using Python (Flask) and SQLite, the platform guides users through natural treatments based on their specific skin and hair concerns.",
      delivered: "– Personalized skin type selection\n– Repository of common skin & hair problems\n– Step-by-step remedies (ingredients, preparation, usage, precautions)\n– Clean, minimalist wellness UI",
      impact: "Provides an accessible digital solution for natural self-care and holistic wellness.",
      cta: {
        text: "View Live Project",
        link: "https://natural-skin.onrender.com/"
      }
    }
  },
  {
    category: "Social Media Management",
    title: "Alankruti House of Designs",
    description: "Instagram account handling with reels, content strategy, and brand-consistent visuals.",
    imageUrl: "/alankruti.png",
    techStack: ["Instagram", "Content Strategy", "Reels Editing"],
    details: {
      overview: "Alankruti House of Designs is a fashion brand focused on designer wear and custom outfits. The goal was to improve Instagram presence and brand consistency.",
      challenge: "– Inconsistent posting\n– Low visual consistency\n– Engagement improvement needed",
      solution: "Enhance Marketing managed the Instagram account with:\n– Content planning\n– Reels editing\n– Brand-aligned visuals",
      delivered: "– Instagram account handling\n– Reels & post editing\n– Content calendar\n– Engagement strategy",
      impact: "– Improved visual identity\n– Better engagement quality",
      cta: {
        text: "View Instagram Profile",
        link: "https://www.instagram.com/nainaboutiqueblr/"
      }
    }
  },
  {
    category: "Website Development · Brand Identity",
    title: "Enhance Marketing — Agency Website & Brand System",
    description: "The Enhance Marketing website was designed and built as an internal project to represent the agency’s capabilities, standards, and approach to modern digital experiences.",
    imageUrl: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder image for Enhance Marketing website
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    details: {
      overview: "The Enhance Marketing website was designed and built as an internal project to represent the agency’s capabilities, standards, and approach to modern digital experiences.\n\nRather than using templates, the website was created from scratch to showcase premium UI/UX, performance-focused development, and strong brand positioning — the same quality we deliver to clients.",
      challenge: "As a digital agency, Enhance Marketing needed a website that:\n\nLooked premium and credible\nCommunicated services clearly\nDemonstrated modern UI/UX standards\nReflected a high-end, technology-driven brand\n\nThe website had to stand out while remaining clean and conversion-focused.",
      solution: "Enhance Marketing designed and developed its own website with a product-level mindset, combining strategy, design, and technology.\n\nThe solution focused on:\n\nModern dark-themed UI with glassmorphism\nClean typography and layout hierarchy\nInteractive elements and micro-animations\nStrong storytelling through visuals\nOptimized performance and responsiveness",
      delivered: "Custom-designed agency website\nBrand identity & visual system\nResponsive, mobile-first layout\nInteractive sections and animations\nPerformance-optimized structure\nConversion-focused content flow",
      impact: "Clear and professional agency positioning\nStrong first impression for potential clients\nDemonstration of real-world capabilities\nA scalable platform for showcasing future work\n\nWhy This Case Study Matters:\n\nThis project reflects how Enhance Marketing approaches every client website — with strategy, attention to detail, and a focus on long-term growth.\n\nWhat you see here is exactly what clients can expect when working with us.",
      cta: {
        text: "Build a Website Like This for Your Business",
        link: "#" // Link to Enhance Marketing's contact or services page
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
                  {project.videoUrl && !project.imageUrl ? (
                    <video src={project.videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <img src={project.imageUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                  )}
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
            {selectedProject.videoUrl ? (
              <video src={selectedProject.videoUrl} autoPlay controls playsInline className="w-full max-h-[400px] object-cover rounded-lg mb-6" />
            ) : (
              <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-6" />
            )}
            <div className="text-neon-blue text-sm font-bold mb-2 uppercase tracking-wider">{selectedProject.category}</div>
            <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>

            {selectedProject.techStack && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-navy-700 text-neon-blue text-xs font-bold rounded-full border border-neon-blue/30">
                    {tech}
                  </span>
                ))}
              </div>
            )}

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
