import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Bot, Brain, Zap, FileText } from 'lucide-react';

const projects = [
  {
    title: "GenAI Chatbot using LLM",
    description: "An intelligent conversational AI chatbot powered by Large Language Models with advanced natural language understanding and context awareness.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["LLM", "GenAI", "Python", "LangChain", "Streamlit"],
    icon: <Bot className="w-8 h-8 text-blue-500" />,
    gradient: "from-blue-500 to-cyan-500",
    links: {
      github: "https://github.com/kishore8220/GenAI-Chatbot.git",
      live: "https://github.com/kishore8220/GenAI-Chatbot.git"
    }
  },
  {
    title: "MCQ Generator using LLM",
    description: "An automated Multiple Choice Question generator that creates intelligent assessments from any text content using advanced language models.",
    image: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["LLM", "NLP", "Education", "Python", "AI"],
    icon: <Brain className="w-8 h-8 text-purple-500" />,
    gradient: "from-purple-500 to-pink-500",
    links: {
      github: "https://github.com/kishore8220/MCQ-Generator.git",
      live: "https://github.com/kishore8220/MCQ-Generator.git"
    }
  },
  {
    title: "Smart Waste Management System Using IoT",
    description: "An IoT-based solution for efficient waste management and monitoring with real-time data analytics and smart routing optimization.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["IoT", "Python", "Hardware", "Analytics"],
    icon: <Zap className="w-8 h-8 text-green-500" />,
    gradient: "from-green-500 to-emerald-500",
    links: {
      github: "https://github.com/kishore8220/Smart_Waste_Management_System.git",
      live: "https://github.com/kishore8220/Smart_Waste_Management_System.git"
    }
  },
  {
    title: "Hybrid-RAG-Assistant",
    description: "A versatile RAG (Retrieval-Augmented Generation) assistant that supports all file formats for intelligent document processing and question answering.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["RAG", "LLM", "Document Processing", "Python", "AI"],
    icon: <FileText className="w-8 h-8 text-orange-500" />,
    gradient: "from-orange-500 to-red-500",
    links: {
      github: "https://github.com/kishore8220/Hybrid-RAG-Assistant.git",
      live: "https://github.com/kishore8220/Hybrid-RAG-Assistant.git"
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
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
          {project.icon}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm px-3 py-1 rounded-full border border-blue-200 font-medium"
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
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors group/link"
          >
            <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
            <span className="font-medium">Code</span>
          </a>
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group/link"
          >
            <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
            <span className="font-medium">Live Demo</span>
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
    <section id="projects" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my expertise in AI, Machine Learning, and innovative technology solutions
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