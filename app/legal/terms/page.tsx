export default function TermsPage() {
  return (
    <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg border border-primary-200">
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
        Terms of Use
      </h1>
      <p className="text-secondary-DEFAULT mb-8">Last Updated: January 2025</p>

      <div className="space-y-8 text-primary-900 leading-relaxed">
        <p>
          Welcome to the website of Global Efficiency Network (GEN) ("GEN," "we,"
          "our," or "us"). By accessing or using this website, you agree to
          comply with and be bound by these Terms of Use. If you do not agree,
          please do not use this website.
        </p>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            1. Use of Website
          </h2>
          <p className="mb-4">
            This website is provided for informational and professional purposes
            only. You may use the website solely for lawful purposes and in
            accordance with these Terms.
          </p>
          <p>You agree not to:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
            <li>Use the website for any unlawful or fraudulent purpose</li>
            <li>
              Attempt to gain unauthorized access to any part of the website
            </li>
            <li>Interfere with the website's operation or security</li>
            <li>
              Copy, distribute, or modify website content without authorization
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            2. Intellectual Property
          </h2>
          <p>
            All content on this website—including text, graphics, logos, program
            descriptions, and materials—is the property of Global Efficiency
            Network or its licensors and is protected under applicable
            intellectual property laws.
          </p>
          <p className="mt-4">
            No content may be reproduced, distributed, or used for commercial
            purposes without prior written permission from GEN.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            3. Programs and Services
          </h2>
          <p>
            Information about GEN's programs, consulting services, and offerings
            is provided for general informational purposes. Participation in any
            program is subject to eligibility criteria, application review, and
            formal agreement terms.
          </p>
          <p className="mt-4">
            GEN reserves the right to modify, suspend, or discontinue any
            program or service at its discretion.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            4. Third-Party Links
          </h2>
          <p>
            This website may contain links to third-party websites. GEN does not
            control and is not responsible for the content, policies, or
            practices of any third-party sites.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            5. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, Global Efficiency Network
            shall not be liable for any direct, indirect, incidental, or
            consequential damages arising from your use of this website or
            reliance on its content.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            6. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the State of Alabama, United States, without regard to
            conflict-of-law principles.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            7. Changes to Terms
          </h2>
          <p>
            GEN reserves the right to update these Terms at any time. Continued
            use of the website after changes constitutes acceptance of the
            revised Terms.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            8. Contact
          </h2>
          <p>
            For questions regarding these Terms, contact:{" "}
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
