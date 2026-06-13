export default function Home() {
  const faqs = [
    {
      q: 'Which analytics tools are supported?',
      a: 'Google Analytics 4, Mixpanel, Amplitude, and Stripe. More integrations ship monthly.'
    },
    {
      q: 'Can I use my own brand colors and logo?',
      a: 'Yes. Every template is fully customizable — upload your logo, set brand colors, and choose fonts.'
    },
    {
      q: 'How are the screenshots generated?',
      a: 'We render your metrics in a headless browser and export pixel-perfect PNG/PDF files ready for any deck.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          Investor Updates Made Easy
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
          Beautiful metric screenshots<br />
          <span className="text-[#58a6ff]">for investor decks</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect your analytics tools, pick a branded template, and export polished metric screenshots in seconds — no design skills needed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
          >
            Start Free Trial — $49/mo
          </a>
          <a
            href="#how-it-works"
            className="inline-block px-8 py-4 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            See How It Works
          </a>
        </div>
        {/* Social proof */}
        <p className="mt-8 text-sm text-[#8b949e]">Trusted by <span className="text-white font-semibold">200+</span> founders raising Series A &amp; B</p>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-12">From raw data to polished slides in 3 steps</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Connect your tools', desc: 'OAuth integrations with Google Analytics, Mixpanel, Amplitude, and Stripe. No API keys to manage.' },
            { step: '02', title: 'Pick a template', desc: 'Choose from investor-ready templates. Customize colors, logo, and fonts to match your brand.' },
            { step: '03', title: 'Export & share', desc: 'Download pixel-perfect PNG or PDF screenshots ready to drop into any investor deck or email.' }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-3xl font-black mb-3">{step}</div>
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple, transparent pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$49<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need for monthly investor updates</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited screenshot exports',
              'Google Analytics, Mixpanel, Amplitude, Stripe',
              'Custom branding & templates',
              'PNG + PDF export formats',
              'Priority email support'
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Now
          </a>
          <p className="mt-4 text-xs text-[#8b949e]">7-day free trial · Cancel anytime · No credit card required to start</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        <p>&copy; {new Date().getFullYear()} MetricShot. Built for founders who ship.</p>
      </footer>
    </main>
  )
}
