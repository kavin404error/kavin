import { Target, Eye, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-cyan-900/5"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <div className="relative group mb-12">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

          <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 md:p-12">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am a dedicated and passionate <span className="text-cyan-400 font-semibold">SOC L1 Analyst</span> with a strong foundation in cybersecurity principles and practices. My journey in cybersecurity began with a deep curiosity about how systems can be protected against evolving threats.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Currently, I specialize in <span className="text-blue-400 font-semibold">security monitoring</span>, <span className="text-blue-400 font-semibold">log analysis</span>, and <span className="text-blue-400 font-semibold">incident detection</span>. I work with various SIEM tools, particularly Splunk, to identify potential security incidents and ensure rapid response to threats.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              My goal is to advance my career in cybersecurity, continually expanding my knowledge in threat intelligence, incident response, and security operations. I am committed to protecting organizations from cyber threats and contributing to a safer digital environment.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="inline-block p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mission</h3>
              <p className="text-gray-400 text-sm">
                Detect and respond to security threats with precision and speed
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="inline-block p-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg mb-4">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Vision</h3>
              <p className="text-gray-400 text-sm">
                Become a leading expert in security operations and threat analysis
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="inline-block p-3 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg mb-4">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Values</h3>
              <p className="text-gray-400 text-sm">
                Continuous learning, vigilance, and commitment to security excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
