import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  {
    category: "Programming Languages & Core Skills",
    items: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    ]
  },
  {
    category: "Machine Learning & AI",
    items: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo.svg" },
      { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "Keras", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
      { name: "LangChain", icon: "https://python.langchain.com/img/brand/wordmark.png" },
      { name: "LangGraph", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
      { name: "LangSmith", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.47.0/files/dark/langsmith-color.png" },
      { name: "RAG", icon: "https://cdn.iconscout.com/icon/premium/png-512-thumb/rag-11275260-9339095.png?f=webp&w=256" },
      { name: "AI Agents", icon: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png" },
      { name: "MCP", icon: "https://cdn.hugeicons.com/icons/mcp-server-stroke-standard.svg" }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Swagger", icon: "https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" },
      { name: "Kaggle", icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/189_Kaggle_logo_logos-512.png" },
      { name: "Google Colab", icon: "https://colab.research.google.com/img/colab_favicon_256px.png" },
      { name: "AWS Bedrock", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.47.0/files/dark/bedrock-color.png" },
      { name: "AWS SageMaker", icon: "https://icon.icepanel.io/AWS/svg/Machine-Learning/SageMaker.svg" },
      { name: "n8n", icon: "https://docs.n8n.io/favicon.ico" },
      { name: "Gradio", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.47.0/files/dark/gradio-color.png" }
      
    ]
  },
  {
    category: "Development Environment",
    items: [
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Cursor", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.47.0/files/light/cursor.png" },
      { name: "Anaconda", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" },
      { name: "Jupyter Notebook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "PyCharm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
      { name: "Atmel Studio", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103658.png" }
    ]
  }
];

const SkillCard = ({ name, icon, index }: { name: string; icon: string; index: number }) => {
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
      className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
    >
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
          <img 
            src={icon} 
            alt={name} 
            className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" 
            onError={(e) => {
              // Fallback to a generic icon if the image fails to load
              e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/2103/2103658.png";
            }}
          />
        </div>
        <h3 className="text-sm font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300">{name}</h3>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build intelligent solutions
          </p>
        </motion.div>

        {skills.map((category, categoryIndex) => (
          <div key={category.category} className="mb-16">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="text-2xl font-semibold text-gray-800 mb-8 text-center"
            >
              {category.category}
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.items.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  index={index + categoryIndex * 4}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;