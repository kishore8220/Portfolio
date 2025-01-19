import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Lung Cancer Analysis Using Machine Learning",
    description: "A machine learning project focused on breast cancer detection and analysis using advanced algorithms.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Machine Learning", "Data Analysis"],
    links: {
      github: "https://github.com/kishore8220/Lung_Cancer_Prediction",
      live: "https://github.com/kishore8220/Lung_Cancer_Prediction"
    }
  },
  {
    title: "Waste Segregation Robot Using Atmega2560",
    description: "An automated waste segregation system using robotics and microcontroller technology.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Robotics", "C", "Hardware"],
    links: {
      github: "https://github.com/kishore8220/Waste-Segregation-Robot-Using-Atmega2560",
      live: "https://github.com/kishore8220/Waste-Segregation-Robot-Using-Atmega2560"
    }
  },
  {
    title: "Smart Waste Management System Using IOT",
    description: "An IoT-based solution for efficient waste management and monitoring.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["IoT", "Python", "Hardware"],
    links: {
      github: "https://github.com/kishore8220/Smart_Waste_Management_System",
      live: "https://github.com/kishore8220/Smart_Waste_Management_System"
    }
  },
  {
    title: "AI-Assisted Radiology Using Deep Learning",
    description: "A deep learning application for automated radiology image analysis and diagnosis assistance.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Deep Learning", "Python", "Healthcare"],
    links: {
      github: "https://github.com/kishore8220/Chest_X_Ray-Detection",
      live: "https://github.com/kishore8220/Chest_X_Ray-Detection"
    }
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>Code</span>
          </a>
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;