import { Download, FileText } from 'lucide-react';

export default function Resume() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-gray-400 text-lg">
            View and download my professional resume
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

          <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
            <div className="bg-gray-800/50 rounded-lg p-8 min-h-96 flex items-center justify-center border-2 border-dashed border-gray-700">
              <div className="text-center">
                <FileText className="w-20 h-20 text-blue-400 mx-auto mb-4" />
                <p className="text-gray-400 mb-6">
                  Resume PDF Preview
                </p>
                <p className="text-sm text-gray-500">
                  Upload your resume PDF to enable preview
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href="/resume.pdf"
                download="Kavin_Kumar_K_Resume.pdf"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  <span className="font-semibold">Download Resume</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
