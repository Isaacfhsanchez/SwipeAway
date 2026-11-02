import Link from 'next/link';
import { ArrowRight, BadgeCheck, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-grid" />
      <div className="container-shell relative grid items-center gap-12 pb-20 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:pt-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
            <Sparkles size={14} />
            Social debt relief marketplace
          </div>

          <h1 className="max-w-xl text-5xl font-black tracking-tight text-navy sm:text-6xl">
            Swipe Right. <span className="text-blue-500">Change a Life.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Discover real people. Support verified debt relief. Help someone take their next step toward financial freedom.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/how-it-works" className="btn-primary">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/#stories" className="btn-secondary">Explore Stories</Link>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex -space-x-3">
              {['A', 'B', 'C', 'D'].map((letter, index) => (
                <div
                  key={index}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-blue-200 to-blue-500 text-xs font-bold text-white"
                >
                  {letter}
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600">
              Trusted by <span className="font-semibold text-slate-800">1,200+ donors</span> building real financial momentum.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto max-w-md rounded-[32px] border border-slate-200 bg-white p-4 shadow-soft">
            <div className="absolute -left-6 top-20 h-20 w-20 rounded-full bg-blue-100 blur-2xl" />
            <div className="absolute -right-6 bottom-8 h-24 w-24 rounded-full bg-sky-100 blur-2xl" />

            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
                alt="Profile"
                className="h-[470px] w-full object-cover"
              />
            </div>

            <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-card backdrop-blur">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-navy">Ayesha</h3>
                    <BadgeCheck className="h-4 w-4 text-blue-500" />
                  </div>
                  <p className="text-sm text-slate-500">Chicago, IL • Credit card debt</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-600">
                  Verified
                </span>
              </div>

              <div className="mt-4">
                <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                  <span>Debt relief progress</span>
                  <span>54%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[54%] rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm">
                <div>
                  <div className="text-slate-500">Raised</div>
                  <div className="font-semibold text-navy">$11,100</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-500">Goal</div>
                  <div className="font-semibold text-navy">$18,700</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
