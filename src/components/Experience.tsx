import { Briefcase, Award, Users, BookOpen } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Java Full Stack Development Internship',
      company: 'ByteXL',
      location: 'GMR Institute of Technology, Rajam, Andhra Pradesh',
      period: 'Jul 2025 – Present',
      type: 'Intern',
      description: [
        'Learning and hands-on training in Java, Spring Boot, React.js, REST APIs, and databases to build end-to-end web applications',
        'Working in teams to design scalable, efficient solutions for real-world projects',
        'Gaining practical experience in full-stack development workflows'
      ],
      icon: Briefcase,
      color: 'blue'
    },
    {
      title: 'Community Project – Tech Education for Rural Schools',
      company: 'Volunteer Educator',
      location: 'Santhakaviti, Andhra Pradesh',
      period: 'May 2024 – June 2024',
      type: 'Volunteer',
      description: [
        'Conducted interactive sessions on computer fundamentals, Artificial Intelligence, internet safety, and digital literacy importance',
        'Created simple learning materials and delivered engaging, interactive presentations',
        'Helped bridge the digital divide by empowering students with essential tech knowledge'
      ],
      icon: Users,
      color: 'emerald'
    }
  ];

  const certifications = [
    'Core Java Specialization – Coursera',
    'Introduction to Generative AI – Coursera',
    'Full-Stack Software Engineering – L&T EduTech'
  ];

  const professionalTrades = [
    'Team Collaboration & Communication',
    'Problem Solving & Debugging',
    'Time Management & Organization',
    'Adaptability & Continuous Learning'
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Experience & Achievements
        </h2>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-slate-900 flex items-center gap-3">
            <Briefcase className="text-blue-600" size={32} />
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-${exp.color}-50 to-${exp.color}-100 rounded-xl p-6 shadow-md border-l-4 border-${exp.color}-600`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 bg-${exp.color}-600 rounded-lg`}>
                    <exp.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900">{exp.title}</h4>
                    <p className="text-slate-700 font-medium">{exp.company}</p>
                    <p className="text-slate-600 text-sm">{exp.location}</p>
                    <p className="text-slate-500 text-sm mt-1">{exp.period}</p>
                  </div>
                  <span className={`px-3 py-1 bg-${exp.color}-600 text-white rounded-full text-sm font-medium`}>
                    {exp.type}
                  </span>
                </div>
                <ul className="space-y-2 ml-16">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
              <Award className="text-emerald-600" size={32} />
              Certifications
            </h3>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 shadow-md">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700">
                    <Award className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                    <span className="font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
              <BookOpen className="text-blue-600" size={32} />
              Professional Traits
            </h3>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-md">
              <ul className="space-y-3">
                {professionalTrades.map((trait, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700">
                    <BookOpen className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="font-medium">{trait}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
