import { Award, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'CompTIA Security+',
      status: 'Preparing',
      gradient: 'from-blue-500 to-cyan-500',
      icon: <Award className="w-8 h-8" />,
      description: 'Industry-standard certification for cybersecurity professionals',
    },
    {
      title: 'TryHackMe Blue Team Practice',
      status: 'In Progress',
      gradient: 'from-cyan-500 to-teal-500',
      icon: <CheckCircle2 className="w-8 h-8" />,
      description: 'Hands-on defensive security training platform',
    },
    {
      title: 'SIEM Log Monitoring Practice',
      status: 'In Progress',
      gradient: 'from-teal-500 to-emerald-500',
      icon: <CheckCircle2 className="w-8 h-8" />,
      description: 'Advanced security monitoring and analysis skills',
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-gray-400 text-lg">
            Industry-recognized credentials and ongoing learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="group relative">
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${cert.gradient} rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500`}
              ></div>

              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 h-full transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-3">
                <div
                  className={`inline-block p-4 bg-gradient-to-br ${cert.gradient} rounded-xl mb-6`}
                >
                  {cert.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${cert.gradient}`}></div>
                  <span className={`text-sm font-semibold bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent`}>
                    {cert.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
