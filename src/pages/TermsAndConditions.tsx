import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { useSEO } from '../utils/seo';

export default function TermsAndConditions() {
  useSEO({
    title: 'Terms & Conditions | WDR Austin Roofing',
    description: 'Terms and Conditions for WDR Austin Roofing Company & Water Damage Restoration. Read our terms of service before using our website.',
    canonical: '/terms-and-conditions',
  });

  return (
    <div className="bg-white">
      <PageHero
        height="35vh"
        eyebrow="Legal"
        title="Terms &amp; Conditions"
        subtitle="Last updated: May 15, 2025"
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />

        <div className="prose prose-slate max-w-none mt-10 space-y-10 text-[#475569]">

          <section>
            <h2 className="font-display text-2xl text-[#1e3a5f] mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using the WDR Austin Roofing website (austinroofingandwaterdamage.com), you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#1e3a5f] mb-4">2. Use of the Website</h2>
            <p className="leading-relaxed mb-4">You agree to use this website only for lawful purposes and in a manner that does not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Infringe on the rights of any third party.</li>
              <li>Transmit any unsolicited or unauthorized advertising or promotional material.</li>
              <li>Attempt to gain unauthorized access to any part of the website or its related systems.</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#1e3a5f] mb-4">3. Information Accuracy</h2>
            <p className="leading-relaxed">
              We strive to keep the information on this website accurate and up to date. However, we make no warranties or representations, express or implied, regarding the completeness, accuracy, or reliability of any content on this site. Pricing, availability, and service details are subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#1e3a5f] mb-4">4. Service Estimates</h2>
            <p className="leading-relaxed">
              Any estimates, quotes, or cost ranges provided through this website or its forms are for general informational purposes only and do not constitute a binding contract. Final pricing is determined after an on-site inspection by a WDR representative.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#1e3a5f] mb-4">5. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on this website — including text, images, logos, graphics, and code — is the property of WDR Austin Roofing Company &amp; Water Damage or its content suppliers and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or use any content without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#1e3a5f] mb-4">6. Third-Party Links</h2>
            <p className="leading-relaxed">
              This website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#1e3a5f] mb-4">7. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the fullest extent permitted by law, WDR Austin Roofing Company &amp; Water Damage shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, this website or its content.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#1e3a5f] mb-4">8. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Texas. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Travis County, Texas.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#1e3a5f] mb-4">9. Changes to These Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website after any changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#1e3a5f] mb-4">10. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about these Terms &amp; Conditions, please contact us:
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
