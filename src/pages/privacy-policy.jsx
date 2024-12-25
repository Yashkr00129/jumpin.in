import { Container } from '@/components/Container'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Container>
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-6 text-center text-3xl font-bold">
            Privacy Policy
          </h1>
          <p className="mb-4 text-center text-lg">Effective Date: [Date]</p>

          <p className="mb-6 text-base">
            At <strong>[App Name]</strong>, we are committed to protecting your
            privacy and ensuring that your personal information is handled in a
            safe and responsible manner. This Privacy Policy outlines how we
            collect, use, and protect your data when you use our ride-sharing
            services.
          </p>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
              1. Information We Collect
            </h2>
            <p className="mb-4 text-base">
              We collect various types of information to provide and improve our
              services:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Personal Information:</strong> When you sign up, we may
                collect your name, email address, phone number, and payment
                details to facilitate ride bookings.
              </li>
              <li>
                <strong>Location Information:</strong> To provide accurate ride
                matching and real-time tracking, we collect your GPS location
                when using our app.
              </li>
              <li>
                <strong>Payment Information:</strong> We collect payment details
                for processing transactions related to your ride bookings.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
              2. How We Use Your Information
            </h2>
            <p className="mb-4 text-base">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Providing Services:</strong> To facilitate ride-sharing,
                process bookings, and deliver your rides efficiently.
              </li>
              <li>
                <strong>Communication:</strong> To send ride-related
                notifications, updates, and customer support messages.
              </li>
              <li>
                <strong>Improving Services:</strong> To enhance app
                functionality, fix bugs, and provide better user experiences.
              </li>
              <li>
                <strong>Security:</strong> To ensure the security of the app and
                protect against fraud and unauthorized activities.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
              3. Data Sharing and Disclosure
            </h2>
            <p className="mb-4 text-base">
              We do not sell your personal information to third parties.
              However, we may share your data under the following circumstances:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>With Service Providers:</strong> We may share your
                information with third-party service providers to help us
                provide our services (e.g., payment processing, cloud storage).
              </li>
              <li>
                <strong>Legal Compliance:</strong> If required by law, we may
                disclose your personal information to comply with legal
                obligations, prevent fraud, or protect our rights.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
              4. Your Choices and Rights
            </h2>
            <p className="mb-4 text-base">You have the right to:</p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Access:</strong> Request a copy of the personal data we
                hold about you.
              </li>
              <li>
                <strong>Update:</strong> Correct or update your personal
                information.
              </li>
              <li>
                <strong>Delete:</strong> Request the deletion of your personal
                information, subject to legal and contractual requirements.
              </li>
              <li>
                <strong>Opt-out of Marketing:</strong> You can opt out of
                receiving marketing communications at any time.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">5. Data Security</h2>
            <p className="mb-4 text-base">
              We use industry-standard security measures to protect your
              personal data, including encryption and secure servers. However,
              no method of transmission over the internet or electronic storage
              is 100% secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
              6. Third-Party Links
            </h2>
            <p className="mb-4 text-base">
              Our app may contain links to third-party websites or services. We
              are not responsible for the privacy practices of these third
              parties, and we encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
              7. Children’s Privacy
            </h2>
            <p className="mb-4 text-base">
              Our services are not intended for children under the age of 13. We
              do not knowingly collect personal information from children. If we
              learn that we have inadvertently collected data from a child under
              13, we will take steps to delete the information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
              8. Changes to This Privacy Policy
            </h2>
            <p className="mb-4 text-base">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date. We
              encourage you to review this policy periodically to stay informed
              about how we protect your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">9. Contact Us</h2>
            <p className="mb-4 text-base">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p className="mb-4 text-base">
              <strong>[App Name]</strong>
            </p>
            <p className="mb-4 text-base">
              <strong>Email Address:</strong> [Email Address]
            </p>
            <p className="mb-4 text-base">
              <strong>Phone Number:</strong> [Phone Number]
            </p>
            <p className="mb-4 text-base">
              <strong>Physical Address:</strong> [Physical Address]
            </p>
          </section>
        </div>
      </Container>
    </>
  )
}
