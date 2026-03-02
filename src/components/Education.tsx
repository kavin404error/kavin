import { BookOpen, GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-transparent"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 text-lg">
            Academic background and current studies
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse"></div>

          <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-20 w-20 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Bachelor of Commerce (CA)
                </h3>
                <h4 className="text-xl text-cyan-400 font-semibold mb-4">
                  Computer Applications
                </h4>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">
                        <span className="font-semibold">Institution:</span> Government Arts and Science College, Pollachi
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 text-cyan-400 font-bold flex-shrink-0">◆</div>
                    <div>
                      <p className="text-gray-300">
                        <span className="font-semibold">Status:</span> Currently Pursuing Undergraduate Degree
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  Pursuing comprehensive knowledge in computer applications with a focus on cybersecurity, networking, and software development. Building strong fundamentals for a successful career in cybersecurity and information technology.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-gray-800/50 border border-gray-700 rounded-full text-blue-400">
                    Computer Science
                  </span>
                  <span className="px-3 py-1 text-sm bg-gray-800/50 border border-gray-700 rounded-full text-cyan-400">
                    Cybersecurity
                  </span>
                  <span className="px-3 py-1 text-sm bg-gray-800/50 border border-gray-700 rounded-full text-teal-400">
                    Networking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
