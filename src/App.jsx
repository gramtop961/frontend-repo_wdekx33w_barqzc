import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Partners from "./components/Partners";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="font-sans text-neutral-900 bg-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Partners />
        <CTA />
        <footer className="py-12 border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Horizon Network. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-neutral-900">Privacy</a>
              <a href="#" className="hover:text-neutral-900">Terms</a>
              <a href="#" className="hover:text-neutral-900">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
