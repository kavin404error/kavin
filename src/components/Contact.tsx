import { useState } from 'react';
import { Mail, Phone, Instagram, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-blue-900/10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Let's connect and discuss cybersecurity opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <a
                      href="mailto:kavin@gmail.com"
                      className="text-white font-semibold hover:text-cyan-400 transition-colors"
                    >
                      kavin@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <a
                      href="tel:7604958974"
                      className="text-white font-semibold hover:text-cyan-400 transition-colors"
                    >
                      7604958974
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Instagram</div>
                    <a
                      href="https://instagram.com/bad_boy_think__"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold hover:text-pink-400 transition-colors"
                    >
                      @bad_boy_think__
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>

            <form
              onSubmit={handleSubmit}
              className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full group relative px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    <span className="font-semibold">
                      {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send Message'}
                    </span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
