import { Database, Monitor, Terminal, Search, Radar } from 'lucide-react';

interface Tool {
  name: string;
  icon: React.ReactNode;
  gradient: string;
  description: string;
}

export default function Tools() {
  const tools: Tool[] = [
    {
      name: 'Splunk',
      icon: <Database className="w-10 h-10" />,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'SIEM platform for security monitoring',
    },
    {
      name: 'Wireshark',
      icon: <Monitor className="w-10 h-10" />,
      gradient: 'from-cyan-500 to-teal-500',
      description: 'Network protocol analyzer',
    },
    {
      name: 'Linux',
      icon: <Terminal className="w-10 h-10" />,
      gradient: 'from-teal-500 to-emerald-500',
      description: 'Operating system and administration',
    },
    {
      name: 'VirusTotal',
      icon: <Search className="w-10 h-10" />,
      gradient: 'from-emerald-500 to-green-500',
      description: 'Malware analysis platform',
    },
    {
      name: 'Nmap',
      icon: <Radar className="w-10 h-10" />,
      gradient: 'from-green-500 to-lime-500',
      description: 'Network reconnaissance tool',
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Tools I Work With
          </h2>
          <p className="text-gray-400 text-lg">
            Professional tools and technologies for security monitoring and analysis
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="group relative h-full">
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${tool.gradient} rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500`}
              ></div>

              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full flex flex-col items-center text-center transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                <div
                  className={`inline-block p-4 bg-gradient-to-br ${tool.gradient} rounded-xl mb-4`}
                >
                  {tool.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {tool.name}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {tool.description}
                </p>

                <div className={`mt-4 h-1 w-8 bg-gradient-to-r ${tool.gradient} rounded-full group-hover:w-12 transition-all duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
