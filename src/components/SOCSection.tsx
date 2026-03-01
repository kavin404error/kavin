import { useState } from 'react';
import { X, Shield, Activity, Zap } from 'lucide-react';

interface ModalData {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

export default function SOCSection() {
  const [activeModal, setActiveModal] = useState<ModalData | null>(null);

  const socLevels = [
    {
      title: 'SOC L1',
      icon: <Shield className="w-12 h-12" />,
      description: 'SOC L1 analysts monitor security alerts, analyze logs, and escalate real threats to higher levels.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'SOC L2',
      icon: <Activity className="w-12 h-12" />,
      description: 'SOC L2 analysts investigate escalated incidents, perform deeper analysis, and validate threats.',
      gradient: 'from-cyan-500 to-teal-500',
      bgGradient: 'from-cyan-500/20 to-teal-500/20',
    },
    {
      title: 'SOC L3',
      icon: <Zap className="w-12 h-12" />,
      description: 'SOC L3 analysts handle advanced threats, threat hunting, malware analysis, and major incident response.',
      gradient: 'from-teal-500 to-emerald-500',
      bgGradient: 'from-teal-500/20 to-emerald-500/20',
    },
  ];

  const openModal = (level: typeof socLevels[0]) => {
    setActiveModal({
      title: level.title,
      description: level.description,
      icon: level.icon,
      gradient: level.gradient,
    });
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section id="soc-section" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            SOC Levels Explained
          </h2>
          <p className="text-gray-400 text-lg">
            Click on each card to learn more about different SOC analyst roles
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {socLevels.map((level, index) => (
            <div
              key={index}
              onClick={() => openModal(level)}
              className="group relative cursor-pointer"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${level.gradient} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500`}></div>

              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${level.bgGradient} rounded-bl-full opacity-50`}></div>

                <div className={`inline-block p-4 bg-gradient-to-br ${level.gradient} rounded-xl mb-6 relative z-10`}>
                  {level.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                  {level.title}
                </h3>

                <p className="text-gray-400 line-clamp-3 relative z-10">
                  {level.description}
                </p>

                <div className="mt-6 text-cyan-400 font-semibold flex items-center gap-2 relative z-10">
                  Learn More
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative bg-gray-900/95 backdrop-blur-xl border-2 border-gray-700/50 rounded-2xl p-8 max-w-lg w-full transform transition-all duration-300 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${activeModal.gradient} rounded-2xl blur opacity-50`}></div>

            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-400 hover:text-white" />
              </button>

              <div className={`inline-block p-4 bg-gradient-to-br ${activeModal.gradient} rounded-xl mb-6`}>
                {activeModal.icon}
              </div>

              <h3 className="text-3xl font-bold text-white mb-6">
                {activeModal.title}
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                {activeModal.description}
              </p>

              <button
                onClick={closeModal}
                className={`mt-8 w-full px-6 py-3 bg-gradient-to-r ${activeModal.gradient} rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
