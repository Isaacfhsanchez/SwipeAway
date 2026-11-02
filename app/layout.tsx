import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'SwipeAway | Social Debt Relief Marketplace',
  description:
    'Discover real people. Support verified debt relief. Help someone take their next step toward financial freedom.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white text-slate-900">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
