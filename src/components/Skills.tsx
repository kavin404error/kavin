import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  gradient: string;
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const skills: Skill[] = [
    { name: 'Networking', level: 85, gradient: 'from-blue-500 to-cyan-500' },
    { name: 'SIEM (Splunk)', level: 80, gradient: 'from-cyan-500 to-teal-500' },
    { name: 'Log Analysis', level: 90, gradient: 'from-teal-500 to-emerald-500' },
    { name: 'Incident Response', level: 75, gradient: 'from-emerald-500 to-green-500' },
    { name: 'Linux', level: 70, gradient: 'from-green-500 to-lime-500' },
    { name: 'Python Basics', level: 65, gradient: 'from-lime-500 to-yellow-500' },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg">
            Technical competencies and proficiency levels
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>

          <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 md:p-12">
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index} className="group/skill">
                  <div className="flex justify-between mb-3">
                    <span className="text-white font-semibold text-lg">
                      {skill.name}
                    </span>
                    <span className="text-cyan-400 font-semibold">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-700/50 to-gray-800/50"></div>

                    <div
                      className={`relative h-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6 pt-8 border-t border-gray-700/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">6+</div>
                <div className="text-gray-400 text-sm">Core Skills</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Monitoring Ready</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">100%</div>
                <div className="text-gray-400 text-sm">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
