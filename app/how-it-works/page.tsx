import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, WalletCards } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const steps = [
  {
    title: 'Create your profile',
    description: 'Register as a donor or applicant and choose the type of support that fits your goals.',
  },
  {
    title: 'Get verified',
    description: 'Applicants submit documentation privately, and the admin review workflow checks identity and debt details.',
  },
  {
    title: 'Discover and contribute',
    description: 'Browse verified stories, swipe through profiles, and fund debt relief in a clear, transparent flow.',
  },
];

const trustPoints = [
  'Private document uploads stored in protected storage',
  'Role-based access control and verification checks',
  'Transparent fees and consent-first payment experience',
  'Audit-friendly review and dispute process',
];

export default function HowItWorksPage() {
  return (
    <main className="container-shell py-16 md:py-24">
      <SectionHeading
        eyebrow="How it works"
        title="Built to feel premium, safe, and human."
        subtitle="SwipeAway blends secure financial workflows with an empathetic discovery experience built for people seeking relief and people ready to help."
        centered
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-card">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-lg font-bold text-blue-700">
              {index + 1}
            </div>
            <h3 className="text-xl font-bold text-navy">{step.title}</h3>
            <p className="mt-3 text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 grid gap-10 rounded-[32px] border border-slate-200 bg-slate-50 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Trust & security</p>
          <h3 className="mt-4 text-3xl font-bold tracking-tight text-navy">Built with responsible financial safeguards.</h3>
          <p className="mt-4 text-slate-600">
            We never expose private account details or sensitive documents on public cards. Applications are reviewed, donors are guided with transparent fees, and payment architecture is designed for approval-first compliance.
          </p>

          <div className="mt-8 space-y-4">
            {trustPoints.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-emerald-50 p-1 text-emerald-600">
                  <CheckCircle2 size={18} />
                </div>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-card">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="text-lg font-bold text-navy">Compliance-first experience</div>
              <div className="text-sm text-slate-500">For approved rollout</div>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>Application review</span>
                <span className="font-semibold text-emerald-600">Verified</span>
              </div>
              <div className="mt-3 h-2.5 rounded-full bg-slate-200">
                <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>Private documents</span>
                <span className="font-semibold text-blue-600">Protected</span>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>Payment disclosure</span>
                <span className="font-semibold text-blue-600">Clear</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 rounded-[32px] bg-navy p-8 text-white md:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">Get started</p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight">Start building the support journey.</h3>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="btn-secondary !border-white/40 !bg-white/10 !text-white hover:!bg-white/20">
              Back home
            </Link>
            <Link href="/" className="btn-primary !bg-white !text-blue-700 hover:!bg-blue-50">
              Explore stories <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
