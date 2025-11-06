import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-neutral-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-neutral-900">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 grid place-items-center text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">Horizon Network</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
          <a href="#services" className="hover:text-neutral-900 transition-colors">Services</a>
          <a href="#partners" className="hover:text-neutral-900 transition-colors">Partners</a>
          <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center rounded-lg bg-neutral-900 text-white px-4 h-10 text-sm font-medium hover:bg-neutral-800 transition-colors"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
