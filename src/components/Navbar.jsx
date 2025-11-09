import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900 text-lg">
          <span className="text-blue-600">/</span> data.art
        </a>
        <nav className="flex items-center gap-4">
          <a href="#work" className="text-sm text-gray-600 hover:text-gray-900">Work</a>
          <a href="#about" className="text-sm text-gray-600 hover:text-gray-900">About</a>
          <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
          <div className="w-px h-5 bg-gray-300" />
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100 text-gray-700">
            <Github className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100 text-gray-700">
            <Linkedin className="h-5 w-5" />
          </a>
          <a aria-label="Email" href="#contact" className="p-2 rounded-md hover:bg-gray-100 text-gray-700">
            <Mail className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
