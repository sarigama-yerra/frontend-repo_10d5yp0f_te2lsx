import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkGrid from "./components/WorkGrid";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <WorkGrid />
        <Contact />
        <footer id="about" className="py-12 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Data Art & Visualizations — All rights reserved.</p>
            <p className="text-sm text-gray-500">Built with love for interactive, modern storytelling.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
