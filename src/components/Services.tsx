import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHashtag, FaVideo, FaLaptopCode, FaBullhorn, FaSearch } from 'react-icons/fa';
import { Modal } from './Modal';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
  borderColor: string;
  shadowClass: string;
  details: {
    subtitle: string;
    overview: string;
    whatWeDo: string;
    ourApproach: string;
    cta: {
      text: string;
      link: string;
    };
  };
}

const services: Service[] = [
  {
    icon: <FaHashtag className="text-3xl" />,
    title: "Social Media Management",
    description: "Complete Instagram account handling, content planning, and engagement optimization.",
    color: "text-neon-purple",
    borderColor: "group-hover:border-neon-purple/50",
    shadowClass: "group-hover:shadow-[0_0_20px_theme(colors.neon-blue)]",
    details: {
      subtitle: "End-to-End Instagram & Brand Growth",
      overview: "We manage your social media presence from strategy to execution. NovaDigital handles everything so brands can focus on their business while we build visibility, engagement, and consistency.",
      whatWeDo: "– Social media strategy & planning\n– Content calendar creation\n– Instagram account handling\n– Post & reel scheduling\n– Caption writing & hashtag research\n– Visual consistency & branding\n– Engagement-focused posting\n– Performance monitoring & optimization",
      ourApproach: "We don’t believe in random posting. Every piece of content is planned, aligned with your brand, and optimized for growth.",
      cta: {
        text: "Get a Free Strategy Call",
        link: "#contact"
      }
    }
  },
  {
    icon: <FaVideo className="text-3xl" />,
    title: "Video Editing & Reels",
    description: "High-retention videos, trend-based hooks, and motion graphics that stop the scroll.",
    color: "text-pink-500",
    borderColor: "group-hover:border-pink-500/50",
    shadowClass: "group-hover:shadow-[0_0_20px_theme(colors.neon-blue)]",
    details: {
      subtitle: "High-Retention Content That Stops the Scroll",
      overview: "Short-form video is the fastest way to capture attention. NovaDigital creates high-retention reels and videos designed for modern platforms.",
      whatWeDo: "– Reel & short-form video editing\n– Trend-based hooks\n– Subtitles & motion graphics\n– Brand-aligned visual style\n– Fast-paced, retention-focused edits\n– Platform-optimized formats",
      ourApproach: "We focus on storytelling, pacing, and psychology to keep viewers watching and engaging.",
      cta: {
        text: "View Our Work",
        link: "#work"
      }
    }
  },
  {
    icon: <FaLaptopCode className="text-3xl" />,
    title: "Website Development",
    description: "Mobile-first, SEO-optimized, and fast-loading websites built to convert.",
    color: "text-neon-cyan",
    borderColor: "group-hover:border-neon-cyan/50",
    shadowClass: "group-hover:shadow-[0_0_20px_theme(colors.neon-blue)]",
    details: {
      subtitle: "Modern Websites Built to Convert",
      overview: "Your website is your digital foundation. NovaDigital designs and develops high-performance websites that look premium and work fast.",
      whatWeDo: "– Custom website design\n– Business & portfolio websites\n– Mobile-first responsive layouts\n– Clean UI/UX design\n– SEO-friendly structure\n– Fast-loading performance optimization\n– Conversion-focused layout",
      ourApproach: "We combine design, performance, and strategy to build websites that create trust and drive action.",
      cta: {
        text: "Build My Website",
        link: "#contact"
      }
    }
  },
  {
    icon: <FaBullhorn className="text-3xl" />,
    title: "Digital Marketing & Ads",
    description: "Stop wasting money on ads that don't convert. We run precision-targeted Meta and Google Ad campaigns designed to bring you high-quality leads.",
    color: "text-orange-500",
    borderColor: "group-hover:border-orange-500/50",
    shadowClass: "group-hover:shadow-[0_0_20px_theme(colors.orange-500)]",
    details: {
      subtitle: "High-ROI Paid Campaigns That Scale",
      overview: "Organic reach is great, but paid ads are faster. We design and manage high-performance ad campaigns on Facebook, Instagram, and Google to put your business in front of the right people at the right time.",
      whatWeDo: "– Meta Ads (Facebook & Instagram)\n– Google Search & Display Ads\n– Audience Targeting & Retargeting\n– Ad Creative Design & Copywriting\n– A/B Testing & Optimization\n– Monthly Performance Reports",
      ourApproach: "We focus on metrics that matter—Leads, Sales, and ROAS—not just vanity metrics like impressions.",
      cta: {
        text: "Start Scaling Today",
        link: "#contact"
      }
    }
  },
  {
    icon: <FaSearch className="text-3xl" />,
    title: "SEO & Google Listing",
    description: "Dominate your local market and get found by customers who are actively searching for your services.",
    color: "text-green-500",
    borderColor: "group-hover:border-green-500/50",
    shadowClass: "group-hover:shadow-[0_0_20px_theme(colors.green-500)]",
    details: {
      subtitle: "Be Fixed at the Top of Search Results",
      overview: "When customers search for your services, they trust the top results. We help you climb the rankings on Google Maps and Search, ensuring your business is the first one they see and the one they choose.",
      whatWeDo: "– Google My Business (GMB) Optimization\n– Local SEO Strategy\n– On-Page & Off-Page SEO\n– Keyword Research & Competitor Analysis\n– Review Management & Reputation Building\n– Citation Building & Directory Listings",
      ourApproach: "SEO is a long-term game. We build a solid foundation that keeps your business ranking high for years to come.",
      cta: {
        text: "Rank Higher Now",
        link: "#contact"
      }
    }
  }
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleCTAClick = (link: string) => {
    setSelectedService(null);
    setTimeout(() => {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <>
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">What We Do</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We don’t believe in random posting. We build growth-focused digital systems.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service: Service, index: number) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`group glass-card p-8 rounded-2xl border border-white/5 transition-all duration-300 ${service.borderColor} ${service.shadowClass} cursor-pointer`}
                onClick={() => setSelectedService(service)}
              >
                <div className={`mb-6 p-4 rounded-xl bg-white/5 w-fit ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Modal show={selectedService !== null} onClose={() => setSelectedService(null)}>
        {selectedService && (
          <div>
            <h2 className="text-3xl font-bold mb-2">{selectedService.title}</h2>
            <p className="text-lg text-gray-400 mb-6">{selectedService.details.subtitle}</p>

            <div className="space-y-6 text-gray-300">
              {selectedService.details.overview && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Overview</h3>
                  <p>{selectedService.details.overview}</p>
                </div>
              )}
              {selectedService.details.whatWeDo && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">What We Do</h3>
                  <ul className="space-y-2">
                    {selectedService.details.whatWeDo.split('\n').map((item: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="text-neon-purple mr-2 mt-1">&#8227;</span>
                        {item.replace('– ', '')}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedService.details.ourApproach && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Approach</h3>
                  <p>{selectedService.details.ourApproach}</p>
                </div>
              )}
              {selectedService.details.cta && (
                <div className="mt-8 text-center">
                  <button
                    onClick={() => handleCTAClick(selectedService.details.cta.link)}
                    className="inline-block px-8 py-3 rounded-full bg-neon-purple text-white font-semibold hover:bg-neon-blue transition-colors"
                  >
                    {selectedService.details.cta.text}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};
