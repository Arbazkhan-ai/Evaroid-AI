import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 text-lg font-bold text-slate-900">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-fuchsia-600 text-xs font-black text-white shadow-sm">
              E
            </span>
            Evaroid.AI
          </div>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed">
            Intelligent AI automation and modern web engineering for fast-growing businesses.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Company
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
            <li><Link href="/about" className="hover:text-slate-900 transition-colors">About</Link></li>
            <li><Link href="/work" className="hover:text-slate-900 transition-colors">Case Studies</Link></li>
            <li><Link href="/careers" className="hover:text-slate-900 transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Offerings
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
            <li><Link href="/services" className="hover:text-slate-900 transition-colors">AI Automation</Link></li>
            <li><Link href="/services" className="hover:text-slate-900 transition-colors">Autonomous AI Agents</Link></li>
            <li><Link href="/services" className="hover:text-slate-900 transition-colors">Modern Web Platforms</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Contact
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
            <li><a href="mailto:arbazkhanofficial140@gmail.com" className="hover:text-slate-900 transition-colors">arbazkhanofficial140@gmail.com</a></li>
            <li><a href="https://wa.me/923135300649" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">+92 313 5300649</a></li>
            <li>San Francisco, CA</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200/60 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Evaroid.AI. All rights reserved.
      </div>
    </footer>
  );
}
