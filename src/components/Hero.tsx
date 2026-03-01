import { Instagram, FileText, Info } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <img
              src="/profile.svg"
              alt="Kavin Kumar K"
              className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500/50 object-cover"
            />
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-fade-in">
          KAVIN KUMAR K
        </h1>

        <div className="text-2xl md:text-3xl text-cyan-400 mb-4 font-semibold tracking-wider">
          SOC L1 Analyst
        </div>

        <div className="text-xl md:text-2xl text-blue-300 mb-6 font-light italic">
          "Monitoring. Detecting. Defending."
        </div>

        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate SOC L1 Analyst focused on security monitoring and incident detection.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
          <a
            href="https://instagram.com/bad_boy_think__"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-medium">Instagram</span>
          </a>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span className="font-semibold">View Resume</span>
            </div>
          </a>

          <button
            onClick={() => document.getElementById('soc-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-gray-800/50 backdrop-blur-sm border-2 border-blue-500/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-2">
              <Info className="w-5 h-5" />
              <span className="font-semibold">Learn About SOC</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
