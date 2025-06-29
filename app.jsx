import { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Простой эффект для анимации при загрузке
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Данные проектов
  const projects = [
    {
      title: "AI Chatbot",
      description: "React + Node.js чат-бот с интеграцией OpenAI API и интерфейсом в стиле терминала.",
      tags: ["React", "Node.js", "OpenAI"]
    },
    {
      title: "E-commerce Dashboard",
      description: "Панель управления магазином с аналитикой и интеграцией Stripe.",
      tags: ["Vue", "Vuex", "Firebase"]
    },
    {
      title: "Code Editor Extension",
      description: "Расширение VS Code с функцией автокомментирования и рефакторинга кода.",
      tags: ["TypeScript", "VSCode API"]
    },
    {
      title: "Fitness Tracker",
      description: "Мобильное приложение для отслеживания тренировок с использованием React Native.",
      tags: ["React Native", "Redux", "Expo"]
    }
  ];

  // Навыки
  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 92 },
    { name: "Node.js", level: 88 },
    { name: "Python", level: 85 },
    { name: "TypeScript", level: 87 },
    { name: "GraphQL", level: 80 },
    { name: "Docker", level: 78 },
    { name: "AWS", level: 75 }
  ];

  // Компонент навигационного меню
  const Nav = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-green-500/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-green-400 font-mono text-lg glow">{'SHMAKOV NIKITA'}</div>
        
        {/* Мобильное меню */}
        <button 
          className="md:hidden text-green-400 hover:text-green-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Десктоп меню */}
        <ul className="hidden md:flex space-x-8">
          {['about', 'projects', 'skills', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => {
                  setActiveSection(item);
                  setIsMenuOpen(false);
                }}
                className={`text-sm uppercase tracking-wider transition-all ${
                  activeSection === item 
                    ? 'text-green-400 border-b-2 border-green-400 pb-1' 
                    : 'text-gray-400 hover:text-green-300'
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Мобильное меню контент */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-green-500/20">
          <ul className="flex flex-col space-y-4 p-4">
            {['about', 'projects', 'skills', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    setActiveSection(item);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left py-2 px-4 rounded transition-colors ${
                    activeSection === item 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'text-gray-400 hover:bg-green-500/10 hover:text-green-300'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );

  // Компонент секции About
  const AboutSection = () => (
    <section className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-green-400 mb-6 glitch" data-text="I'm a Full Stack Developer">
            I'm a Full Stack Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            Создаю современные веб-приложения и цифровые решения. Специализируюсь на разработке высоконагруженных систем,
            автоматизации процессов и создании пользовательских интерфейсов нового поколения.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-green-500/20">
              <div className="text-green-400 text-2xl font-bold">+5</div>
              <div className="text-gray-400 text-sm">лет опыта</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-green-500/20">
              <div className="text-green-400 text-2xl font-bold">+30</div>
              <div className="text-gray-400 text-sm">проектов реализовано</div>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#contact" className="px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-medium rounded-lg transition-colors">
              Hire Me
            </a>
            <a href="#" className="px-6 py-3 border border-green-500 hover:border-green-400 text-green-400 hover:text-green-300 font-medium rounded-lg transition-colors">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  // Компонент секции Projects
  const ProjectsSection = () => (
    <section id="projects" className="min-h-screen pt-20 pb-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-green-500/20 hover:border-green-500/40 transition-all group"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-900/50 border-t border-green-500/10">
                <button className="text-green-400 hover:text-green-300 text-sm font-medium flex items-center">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Компонент секции Skills
  const SkillsSection = () => (
    <section id="skills" className="min-h-screen pt-20 pb-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-green-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-1000 ease-out group-hover:from-green-400 group-hover:to-green-300"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-green-400 mb-6">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-4">
            {[
              "React", "Vue", "Angular", "Node.js", "Express", "MongoDB", 
              "PostgreSQL", "Redis", "GraphQL", "REST API", "Docker", 
              "Kubernetes", "AWS", "Git", "CI/CD", "Webpack", "Vite"
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-green-400 border border-green-500/20 hover:border-green-500/40 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // Компонент секции Contact
  const ContactSection = () => {
    const [formState, setFormState] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Здесь можно добавить логику отправки формы
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    };

    return (
      <section id="contact" className="min-h-screen pt-20 pb-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-12">Contact</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-8">
                Готов к новым вызовам! Если у вас есть интересный проект или вы хотите обсудить сотрудничество — напишите мне.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-medium mb-1">Phone</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-medium mb-1">Email</h4>
                    <p className="text-gray-400">developer@example.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-medium mb-1">Location</h4>
                    <p className="text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-green-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 backdrop-blur-sm border border-green-500/20 focus:border-green-500 text-white px-4 py-3 rounded-lg outline-none focus:ring-1 focus:ring-green-500 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-green-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 backdrop-blur-sm border border-green-500/20 focus:border-green-500 text-white px-4 py-3 rounded-lg outline-none focus:ring-1 focus:ring-green-500 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-green-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 backdrop-blur-sm border border-green-500/20 focus:border-green-500 text-white px-4 py-3 rounded-lg outline-none focus:ring-1 focus:ring-green-500 transition-all"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-medium rounded-lg transition-colors"
                >
                  Send Message
                </button>
                
                {submitted && (
                  <div className="text-green-400 animate-fade-in">
                    Сообщение успешно отправлено!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="font-sans text-gray-200 bg-gray-950 min-h-screen relative overflow-hidden">
      {/* Фоновые эффекты */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10"></div>
      </div>

      {/* Анимация загрузки */}
      <div className="loading-overlay fixed inset-0 bg-gray-950 z-50 flex items-center justify-center transition-opacity duration-500 loaded:opacity-0">
        <div className="text-center">
          <div className="relative inline-block h-24 w-24 mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-green-500/30"></div>
            <div className="absolute inset-0 rounded-full border-4 border-t-green-500 animate-spin"></div>
          </div>
          <h1 className="text-3xl font-bold text-green-400 mb-2">Loading Portfolio</h1>
          <p className="text-green-400/70">Initializing digital presence...</p>
        </div>
      </div>

      {/* Навигация */}
      <Nav />

      {/* Основной контент */}
      <main className="relative z-10">
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'skills' && <SkillsSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>

      {/* Подвал */}
      <footer className="py-8 border-t border-green-500/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-green-400 font-mono text-sm mb-4 md:mb-0">{'<developed_by_me />'}</div>
            <div className="text-gray-500 text-sm">© {new Date().getFullYear()} All rights reserved</div>
          </div>
        </div>
      </footer>

      {/* CSS стили */}
      <style jsx>{`
        @keyframes glitch {
          0% {
            transform: translate(0) skew(0deg);
            opacity: 1;
          }
          20% {
            transform: translate(-2px, -2px) skew(-1deg);
            opacity: 0.9;
          }
          40% {
            transform: translate(2px, 2px) skew(1deg);
            opacity: 0.8;
          }
          60% {
            transform: translate(-2px, 2px) skew(-1deg);
            opacity: 0.9;
          }
          80% {
            transform: translate(2px, -2px) skew(1deg);
            opacity: 0.95;
          }
          100% {
            transform: translate(0) skew(0deg);
            opacity: 1;
          }
        }

        .glitch {
          position: relative;
          animation: glitch 1.5s infinite;
        }

        .glow {
          text-shadow: 0 0 5px #00ff80, 0 0 10px #00ff80, 0 0 20px #00ff80;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(0,255,128,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,255,128,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .loaded .loading-overlay {
          display: none !important;
        }
      `}</style>
    </div>
  );
}