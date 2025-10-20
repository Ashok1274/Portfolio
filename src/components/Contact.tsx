import { Mail, Phone, Github, Linkedin, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-slate-300 mb-16 text-lg">
          Let's discuss how we can work together
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              I'm currently looking for new opportunities and my inbox is always open.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:nallaashok74@gmail.com"
                className="flex items-center gap-4 p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors group"
              >
                <div className="p-3 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="font-medium">nallaashok74@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:7337200509"
                className="flex items-center gap-4 p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors group"
              >
                <div className="p-3 bg-emerald-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="font-medium">+91 7337200509</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg">
                <div className="p-3 bg-orange-600 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="font-medium">Rajam, Andhra Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold mb-4 text-lg">Connect with me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Ashok1274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://linkedin.com/in/nallaashok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all transform hover:scale-105"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Ashok Nalla. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
