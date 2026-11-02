import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '#', label: 'Privacy' },
  { href: '#', label: 'Terms' },
  { href: '#', label: 'Support' },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-12 text-slate-300">
      <div className="container-shell">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500 text-lg font-bold text-white">
                S
              </div>
              <div className="text-xl font-bold text-white">SwipeAway</div>
            </div>
            <p className="mt-4 max-w-md text-sm text-slate-400">
              A premium social debt-relief marketplace designed to help people find support, dignity, and a better financial future.
            </p>
          </div>

          <div className="grid gap-8 text-sm sm:grid-cols-3">
            <div>
              <div className="mb-3 font-semibold text-white">Company</div>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/">About</Link></li>
                <li><Link href="/how-it-works">How it works</Link></li>
                <li>Partners</li>
              </ul>
            </div>

            <div>
              <div className="mb-3 font-semibold text-white">Resources</div>
              <ul className="space-y-2 text-slate-400">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Support</li>
              </ul>
            </div>

            <div>
              <div className="mb-3 font-semibold text-white">Follow</div>
              <ul className="space-y-2 text-slate-400">
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>Newsletter</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-400">
          © 2026 SwipeAway. Demo marketing content only. Real platform statistics and payment flows require approval and production setup.
        </div>
      </div>
    </footer>
  );
}
