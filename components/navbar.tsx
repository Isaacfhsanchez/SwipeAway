import Link from 'next/link';
import { Menu, Sparkles } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500 text-lg font-bold text-white shadow-soft">
            S
          </div>
          <div className="text-lg font-black tracking-tight text-navy">SwipeAway</div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link href="/how-it-works" className="hover:text-slate-900">How it works</Link>
          <a href="/#stories" className="hover:text-slate-900">Stories</a>
          <a href="/#testimonials" className="hover:text-slate-900">Reviews</a>
          <a href="/#faq" className="hover:text-slate-900">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="btn-secondary hidden sm:inline-flex">Log in</button>
          <button className="btn-primary">Get Started</button>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 md:hidden">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
