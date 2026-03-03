import { useEffect, useRef, useState } from 'react';
import { Heart } from 'lucide-react';

export default function WhyBlueTeam() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const reasons = [
    "I enjoy analyzing security alerts and identifying patterns.",
    "I am passionate about defending systems and preventing breaches.",
    "Blue Team gives me the opportunity to protect organizations and respond to real-world threats.",
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-transparent to-blue-900/10"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Why Blue Team?
          </h2>
          <p className="text-gray-400 text-lg">
            My passion for defensive security
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

          <div
            className={`relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 md:p-12 transform transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="flex justify-center mb-8">
              <div className="inline-block p-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-full">
                <Heart className="w-8 h-8 text-white fill-white" />
              </div>
            </div>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 transform transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                      <span className="text-white text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed md:text-xl">
                    {reason}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-700/50">
              <p className="text-center text-gray-400 italic">
                Defending organizations and protecting systems is my commitment to cybersecurity excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
