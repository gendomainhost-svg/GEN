export default function PrivacyPage() {
  return (
    <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg border border-primary-200">
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
        Privacy Policy
      </h1>
      <p className="text-secondary-DEFAULT mb-8">Last Updated: January 2025</p>

      <div className="space-y-8 text-primary-900 leading-relaxed">
        <p>
          Global Efficiency Network (GEN) is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, and
          safeguard your information.
        </p>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">We may collect the following types of information:</p>
          
          <div className="ml-4">
            <h3 className="font-semibold text-lg mb-2">a. Information You Provide</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Name, email address, organization, job title</li>
              <li>
                Information submitted through inquiry forms or applications
              </li>
              <li>Communication content when you contact us</li>
            </ul>

            <h3 className="font-semibold text-lg mb-2 mt-4">
              b. Automatically Collected Information
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>IP address</li>
              <li>Browser type and device information</li>
              <li>Pages visited and usage data</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            2. How We Use Information
          </h2>
          <p>GEN uses collected information to:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
            <li>Respond to inquiries and requests</li>
            <li>Administer programs and services</li>
            <li>Improve website performance and content</li>
            <li>Communicate relevant updates or opportunities</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-4 font-semibold">
            We do not sell or rent personal data.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            3. Information Sharing
          </h2>
          <p>We may share information only:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
            <li>With trusted service providers supporting our operations</li>
            <li>When required by law or legal process</li>
            <li>With your consent</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            4. Data Security
          </h2>
          <p>
            GEN implements reasonable administrative and technical measures to
            protect personal information. However, no internet transmission is
            fully secure.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            5. International Users
          </h2>
          <div className="bg-accent-50 border-l-4 border-accent-700 p-6 rounded-lg my-4">
            <p className="font-semibold text-accent-900 mb-2">
              Important Notice for International Users
            </p>
            <p className="text-accent-900">
              If you access this website from outside the United States, you
              acknowledge that your information may be processed and stored in
              the U.S.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            6. Cookies
          </h2>
          <p>
            This website may use cookies to improve functionality and user
            experience. You may adjust cookie settings in your browser.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            7. Your Rights
          </h2>
          <p>
            You may request access, correction, or deletion of your personal
            information by contacting GEN.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            8. Updates to This Policy
          </h2>
          <p>
            GEN may update this Privacy Policy periodically. Changes will be
            posted on this page.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            9. Contact
          </h2>
          <p>
            For privacy inquiries, contact:{" "}
            <a
              href="mailto:geninquirer@gmail.com"
              className="text-accent-700 hover:underline"
            >
              geninquirer@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
