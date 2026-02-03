export default function DisclaimerPage() {
  return (
    <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg border border-primary-200">
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
        Disclaimer
      </h1>
      <p className="text-secondary-DEFAULT mb-8">Last Updated: January 2025</p>

      <div className="space-y-8 text-primary-900 leading-relaxed">
        <p>
          The information provided on this website by Global Efficiency Network
          (GEN) is for general informational purposes only.
        </p>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            1. No Professional or Legal Advice
          </h2>
          <p>
            Content on this website does not constitute legal, financial,
            governmental, or professional advice. Users should consult qualified
            professionals before making decisions based on website information.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            2. No Guarantee of Outcomes
          </h2>
          <div className="bg-primary-50 border-l-4 border-primary-700 p-6 rounded-lg">
            <p className="font-semibold text-primary-900 mb-2">
              No Guarantee of Outcomes
            </p>
            <p className="text-primary-900">
              Participation in GEN programs, training, consulting, or
              experiential learning does not guarantee specific outcomes,
              institutional reforms, or performance results. Outcomes depend on
              multiple factors beyond GEN's control.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            3. Independence and Neutrality
          </h2>
          <p>
            GEN operates as an independent organization. References to
            government institutions, agencies, universities, or partners do not
            imply endorsement unless explicitly stated.
          </p>
          <p className="mt-4">
            GEN is non-political and does not engage in lobbying or advocacy
            activities.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            4. External Content
          </h2>
          <p>
            GEN is not responsible for the accuracy or reliability of external
            websites or third-party content linked from this site.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            5. Program Availability
          </h2>
          <p>
            Programs, schedules, locations, and offerings may change without
            notice.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            6. Limitation of Liability
          </h2>
          <p>
            GEN disclaims liability for any loss or damage arising from reliance
            on website content or participation in GEN activities, to the extent
            permitted by law.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
            7. Contact
          </h2>
          <p>
            For questions regarding this Disclaimer, contact:{" "}
            <a
              href="mailto:info@globalefficiencynetwork.org"
              className="text-accent-700 hover:underline"
            >
              info@globalefficiencynetwork.org
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
