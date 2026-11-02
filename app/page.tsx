import Link from 'next/link';
import { ArrowRight, BadgeCheck, ChevronRight, CircleDollarSign, HeartHandshake, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { Hero } from '@/components/hero';
import { SectionHeading } from '@/components/section-heading';

const featuredStories = [
  {
    name: 'Maria',
    location: 'Austin, TX',
    debt: '$12,400',
    raised: '$8,900',
    category: 'Medical debt',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
    story:
      'I’m rebuilding after an unexpected surgery and want to return to work with less stress.',
  },
  {
    name: 'Daniel',
    location: 'Denver, CO',
    debt: '$9,300',
    raised: '$5,200',
    category: 'Auto debt',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    story:
      'My car repair costs took over my budget. I’m focused on becoming stable again.',
  },
  {
    name: 'Ayesha',
    location: 'Chicago, IL',
    debt: '$18,700',
    raised: '$11,100',
    category: 'Credit card debt',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    story:
      'With a fresh start and support from my community, I can finally reset my financial footing.',
  },
];

const stats = [
  { label: 'Demo contributions', value: '$184K' },
  { label: 'People supported', value: '1,482' },
  { label: 'Debt relief funded', value: '$3.6M' },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Verified applicants',
    description:
      'Every profile is reviewed with identity and document checks before public discovery.',
  },
  {
    icon: HeartHandshake,
    title: 'Trusted support',
    description:
      'Donors contribute to real financial goals with transparent progress tracking.',
  },
  {
    icon: CircleDollarSign,
    title: 'Clear contribution flow',
    description:
      'Contributions are visible, auditable, and designed for compliant payment handling.',
  },
];

const testimonials = [
  {
    quote:
      'SwipeAway feels premium and trustworthy. It balances emotional storytelling with serious financial transparency.',
    author: 'Leah M.',
    role: 'Recurring donor',
  },
  {
    quote:
      'I was able to tell my story in a dignified way, and the verification process made me feel safe and respected.',
    author: 'Marcus R.',
    role: 'Applicant',
  },
  {
    quote:
      'It is the first platform I’ve seen that makes impact feel personal without sacrificing credibility.',
    author: 'Ari C.',
    role: 'Community partner',
  },
];

const faqs = [
  {
    q: 'Who can apply?',
    a: 'People facing genuine financial hardship can apply as long as they meet verification requirements and agree to platform disclosures.',
  },
  {
    q: 'Is the platform only for debt relief?',
    a: 'Yes. SwipeAway is focused on verified debt relief applications and transparent, purpose-driven contribution flows.',
  },
  {
    q: 'How are funds handled?',
    a: 'Contributions are routed through approved payment flows and only settled through verified creditor or debt-servicer payment structures.',
  },
  {
    q: 'Are stories public?',
    a: 'Only verified, consented profiles appear publicly, and personally sensitive information stays private.',
  },
];

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="container-shell py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
              <div className="text-3xl font-black tracking-tight text-navy">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="bg-slate-50 py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="How it works"
            title="A safer way to support debt relief."
            subtitle="SwipeAway helps people share verified financial need while enabling donors to contribute in a transparent, responsible, and credible way."
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }, index) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon size={25} />
                </div>
                <div className="mb-2 text-lg font-bold text-navy">
                  0{index + 1}. {title}
                </div>
                <p className="text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="container-shell py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Featured stories</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">Real people, verified journeys.</h2>
          </div>
          <Link href="/how-it-works" className="btn-secondary hidden md:inline-flex">
            View all stories
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredStories.map((story) => (
            <article key={story.name} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-card">
              <div className="h-56 overflow-hidden">
                <img src={story.image} alt={story.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-navy">{story.name}</h3>
                    <p className="text-sm text-slate-500">{story.location}</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-600">
                    Verified
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.1em] text-slate-400">
                  <span>{story.category}</span>
                  <span>{story.debt}</span>
                </div>

                <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                  <span>Raised</span>
                  <span className="font-semibold text-navy">{story.raised}</span>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-600">{story.story}</p>

                <button className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600">
                  Support {story.name} <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="testimonials" className="bg-slate-50 py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Testimonials"
            title="Clearly labeled demo feedback."
            subtitle="Sample feedback used to shape the product experience until real user data is available."
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.author} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
                <div className="flex items-center gap-1 text-blue-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-7 text-slate-700">“{item.quote}”</p>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <div className="font-semibold text-navy">{item.author}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="container-shell py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">Questions people ask before they support.</h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-navy">{faq.q}</h3>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell pb-20 pt-6">
        <div className="rounded-[32px] border border-blue-100 bg-gradient-to-r from-blue-500 to-blue-700 p-8 text-white shadow-soft md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Ready to make an impact?</p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight">Support a brighter financial future.</h3>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="btn-secondary !border-white/40 !bg-white/10 !text-white hover:!bg-white/20">
                Explore Stories
              </button>
              <button className="btn-primary !bg-white !text-blue-700 hover:!bg-blue-50">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
