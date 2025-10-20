import { ExternalLink, Code2, Brain, FileText, Calendar } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'QuickPrep',
      subtitle: 'AI-Powered E-Learning Platform',
      date: 'Dec 2024',
      description: 'An AI-based platform designed for comprehensive job interview preparation with integrated coding practice.',
      features: [
        'Built-in code editor using Judge0 API for coding practice and problem-solving',
        'Leveraged OpenAI APIs to dynamically generate personalized learning material',
        'Dynamic interview question generation tailored to user needs',
        'Real-time code execution and testing environment'
      ],
      tech: ['React.js', 'PostgreSQL', 'OpenAI API', 'Judge0 API'],
      icon: Brain,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Dynamic Resume Builder',
      subtitle: 'Full-Stack Resume Platform',
      date: 'Apr 2024',
      description: 'A comprehensive full-stack application that enables users to create professional resumes with ease.',
      features: [
        'Secure user authentication and authorization system',
        'Dynamic CRUD operations for seamless resume creation and editing',
        'RESTful APIs for efficient data management',
        'Real-time resume previews as users type',
        'Multi-template PDF export functionality'
      ],
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
      icon: FileText,
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Featured Projects
        </h2>
        <p className="text-center text-slate-600 mb-16 text-lg">
          Building innovative solutions with modern technologies
        </p>

        <div className="max-w-6xl mx-auto space-y-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className={`md:w-1/3 bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <Icon size={80} className="mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/90 text-sm">{project.subtitle}</p>
                      <div className="flex items-center justify-center gap-2 mt-4 text-sm">
                        <Calendar size={16} />
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3 p-8">
                    <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <Code2 size={20} className="text-blue-600" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-700">
                            <ExternalLink size={16} className="text-emerald-600 flex-shrink-0 mt-1" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
