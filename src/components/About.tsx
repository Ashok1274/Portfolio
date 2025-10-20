import { GraduationCap, Code, Database, Wrench } from 'lucide-react';

export default function About() {
  const skills = {
    languages: ['Java', 'C', 'HTML', 'CSS', 'JavaScript', 'SQL'],
    frameworks: ['React.js', 'Node.js', 'Express.js'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
    tools: ['Git', 'GitHub', 'VSCode']
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Background</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I'm an enthusiastic Full-Stack Web Developer currently pursuing B.Tech in Information Technology
              at GMR Institute of Technology with a CGPA of 8.10. I'm passionate about building scalable,
              user-friendly web applications and continuously improving both front-end and back-end development skills.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              With hands-on experience in the MERN stack and currently undergoing Java Full Stack Development training,
              I'm looking for opportunities in well-structured organizations to contribute my technical skills and grow mutually.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-900">Education</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-blue-600 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="text-xl font-bold text-slate-900">B.Tech in Information Technology</h4>
                  <p className="text-slate-700 font-medium">GMR Institute of Technology</p>
                  <p className="text-slate-600">2022 – 2026 | CGPA: 8.10</p>
                  <p className="text-slate-500">Rajam, Andhra Pradesh</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-emerald-600">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-emerald-600 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Intermediate - MPC</h4>
                  <p className="text-slate-700 font-medium">Vidya Junior College</p>
                  <p className="text-slate-600">2020 – 2022 | 82.8%</p>
                  <p className="text-slate-500">Rajam, Andhra Pradesh</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-slate-600">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-slate-600 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Secondary Education</h4>
                  <p className="text-slate-700 font-medium">Government High School</p>
                  <p className="text-slate-600">2019 – 2020 | 95%</p>
                  <p className="text-slate-500">Rajam, Andhra Pradesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-900">Technical Skills</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-blue-600" size={28} />
                <h4 className="text-xl font-bold text-slate-900">Languages</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white rounded-lg text-slate-700 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-emerald-600" size={28} />
                <h4 className="text-xl font-bold text-slate-900">Frameworks & Libraries</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white rounded-lg text-slate-700 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-purple-600" size={28} />
                <h4 className="text-xl font-bold text-slate-900">Databases</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white rounded-lg text-slate-700 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="text-orange-600" size={28} />
                <h4 className="text-xl font-bold text-slate-900">Tools & Platforms</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white rounded-lg text-slate-700 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
