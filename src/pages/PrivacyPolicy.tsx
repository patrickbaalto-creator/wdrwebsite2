import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { useSEO } from '../utils/seo';

export default function PrivacyPolicy() {
  useSEO({
    title: 'Privacy Policy | WDR Austin Roofing',
    description: 'Privacy Policy for WDR Austin Roofing Company & Water Damage Restoration. Learn how we collect, use, and protect your personal information.',
    canonical: '/privacy-policy',
  });

  return (
    <div className="bg-white">
      <PageHero
        height="35vh"
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: May 15, 2025"
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

        <div className="prose prose-slate max-w-none mt-10 space-y-10 text-[#475569]">

          <section>
            <h2 className="font-display text-2xl text-[#1e3a5f] mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed mb-4">
              When you use our website or contact us, we may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact information</strong> — your name, phone number, and email address when you fill out a contact or inspection request form.</li>
              <li><strong>Service details</strong> — information about your roofing or water damage restoration needs that you provide in messages or forms.</li>
              <li><strong>Usage data</strong> — standard web analytics data such as pages visited, time on site, and referring URLs, collected via cookies or similar technologies.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#1e3a5f] mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and schedule inspections or estimates.</li>
              <li>Provide roofing and water damage restoration services.</li>
              <li>Improve our website and customer experience.</li>
              <li>Send you service-related communications (we do not send marketing emails without your consent).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#1e3a5f] mb-4">3. How We Share Your Information</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website or conducting our business, provided those parties agree to keep your information confidential. We may also disclose information when required by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#1e3a5f] mb-4">4. Cookies</h2>
            <p className="leading-relaxed">
              Our website may use cookies to enhance your browsing experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you disable cookies, some parts of our site may not function properly.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#1e3a5f] mb-4">5. Third-Party Links</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party sites (such as Google Maps or review platforms). We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies separately.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#1e3a5f] mb-4">6. Data Security</h2>
            <p className="leading-relaxed">
              We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#1e3a5f] mb-4">7. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our website is not directed to children under the age of 13, and we do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#1e3a5f] mb-4">8. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of our website after changes constitutes your acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#1e3a5f] mb-4">9. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="mt-4 bg-[#f8fafc] border border-gray-100 rounded-xl p-6 space-y-1 text-sm">
              <p className="font-semibold text-[#1e3a5f]">WDR — Austin Roofing Company &amp; Water Damage</p>
              <p>9711 Beck Cir, Austin, TX 78758</p>
              <p><a href="tel:5128206505" className="text-[#f97316] hover:underline">(512) 820-6505</a></p>
              <p><a href="mailto:info@austinwdr.com" className="text-[#f97316] hover:underline">info@austinwdr.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
