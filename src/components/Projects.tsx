import { Shield, Search, Lock, Network } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Security Monitoring Dashboard',
      description: 'Built a real-time security monitoring dashboard using Splunk to track and analyze security events across the network.',
      icon: <Shield className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      tags: ['Splunk', 'SIEM', 'Monitoring'],
    },
    {
      title: 'Threat Detection System',
      description: 'Developed automated threat detection rules to identify suspicious activities and potential security breaches.',
      icon: <Search className="w-8 h-8" />,
      gradient: 'from-cyan-500 to-teal-500',
      tags: ['Python', 'Log Analysis', 'Automation'],
    },
    {
      title: 'Incident Response Playbook',
      description: 'Created comprehensive incident response procedures and playbooks for common security scenarios.',
      icon: <Lock className="w-8 h-8" />,
      gradient: 'from-teal-500 to-emerald-500',
      tags: ['IR', 'Documentation', 'Best Practices'],
    },
    {
      title: 'Network Traffic Analysis',
      description: 'Performed network traffic analysis to identify anomalies and potential security threats using various tools.',
      icon: <Network className="w-8 h-8" />,
      gradient: 'from-emerald-500 to-green-500',
      tags: ['Networking', 'Wireshark', 'Analysis'],
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Projects & Work
          </h2>
          <p className="text-gray-400 text-lg">
            Hands-on experience and practical implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500`}></div>

              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 h-full transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2">
                <div className={`inline-block p-4 bg-gradient-to-br ${project.gradient} rounded-xl mb-6`}>
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-gray-800/50 border border-gray-700 rounded-full text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
