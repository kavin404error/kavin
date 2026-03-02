import { useEffect, useState, useRef } from 'react';
import { AlertCircle, AlertTriangle, Activity, Shield } from 'lucide-react';

interface StatCard {
  label: string;
  value: number;
  icon: React.ReactNode;
  gradient: string;
  color: string;
}

export default function SOCDashboard() {
  const [counts, setCounts] = useState({
    alerts: 0,
    critical: 0,
    investigating: 0,
    blocked: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targets = { alerts: 12, critical: 2, investigating: 4, blocked: 245 };
    const duration = 1500;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        alerts: Math.floor(targets.alerts * progress),
        critical: Math.floor(targets.critical * progress),
        investigating: Math.floor(targets.investigating * progress),
        blocked: Math.floor(targets.blocked * progress),
      });

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats: StatCard[] = [
    {
      label: 'Active Alerts',
      value: counts.alerts,
      icon: <AlertCircle className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      color: 'text-cyan-400',
    },
    {
      label: 'Critical Alerts',
      value: counts.critical,
      icon: <AlertTriangle className="w-8 h-8" />,
      gradient: 'from-red-500 to-orange-500',
      color: 'text-orange-400',
    },
    {
      label: 'Investigating',
      value: counts.investigating,
      icon: <Activity className="w-8 h-8" />,
      gradient: 'from-yellow-500 to-amber-500',
      color: 'text-amber-400',
    },
    {
      label: 'Blocked Today',
      value: counts.blocked,
      icon: <Shield className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-500',
      color: 'text-emerald-400',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Live SOC Dashboard
          </h2>
          <p className="text-gray-400 text-lg">
            Real-time security monitoring metrics and statistics
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="group relative">
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`}
              ></div>

              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2">
                <div
                  className={`inline-block p-4 bg-gradient-to-br ${stat.gradient} rounded-xl mb-6`}
                >
                  {stat.icon}
                </div>

                <div className={`text-5xl font-bold ${stat.color} mb-3`}>
                  {stat.value}
                </div>

                <p className="text-gray-400 font-semibold">{stat.label}</p>

                <div className="mt-6 h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${stat.gradient} w-full rounded-full animate-pulse`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-center">
          <p className="text-gray-400 text-sm">
            Last updated: <span className="text-cyan-400 font-semibold">Just now</span>
          </p>
        </div>
      </div>
    </section>
  );
}
