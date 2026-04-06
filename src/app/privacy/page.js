import React from "react";

export const metadata = {
  title: "Jazz Kidjo",
  description: "A Jazz Kidjo Application",
};

export default function Page() {
  return (
    <>
      <main className="max-w-[90%] mx-auto p-6 xs:p-4 text-gray-800 leading-relaxed">
        <h1 className="text-3xl xs:text-xl text-center font-bold text-skyBlue mb-8 mt-4">
          Jazz Kidjo – Privacy Policy (Pakistan)
        </h1>

        <p className="mb-4">
          At <strong>Jazz Kidjo</strong>, your family’s privacy and trust are our top priority.
          We are committed to handling your personal information responsibly, securely,
          and transparently. This Privacy Policy (“Policy”) explains how we collect, use,
          and protect your information when you use the Jazz Kidjo app and related services (“Service”).
        </p>

        <p className="mb-4">
          By using Jazz Kidjo, you agree to the terms of this Policy. If you do not agree,
          you may discontinue use of the Service at any time.
        </p>

        <h2 className="text-xl font-semibold mb-2">1. Consent and Policy Updates</h2>
        <p className="mb-4">
          By creating an account or using our Service, you consent to the collection and processing
          of your information as described here. We may update this Policy periodically to reflect
          improvements, legal requirements, or new features. Updated versions will be available on
          our platform, and we encourage you to review them from time to time.
        </p>

        <h2 className="text-xl font-semibold mb-2">2. Information We Collect and Why</h2>
        <p className="mb-4">
          We collect only the information necessary to provide a safe, personalized, and enjoyable
          experience for you and your children.
        </p>

        <h3 className="text-lg font-semibold mb-2">a. Personal Information</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Account Details</strong> – Name, mobile number, or email address used for registration and verification.
          </li>
          <li>
            <strong>Child Profile Information</strong> – Optional details (such as age range or preferences)
            used only to tailor content appropriately.
          </li>
          <li>
            <strong>Payment Information</strong> – If applicable, processed securely through Jazz’s billing system.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">b. Technical Information</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Device Data</strong> – Device type, operating system, network details, and app version,
            used to improve performance and compatibility.
          </li>
          <li>
            <strong>Usage Logs</strong> – Anonymous activity data (e.g., viewing time, error reports, timestamps)
            to help us enhance quality and troubleshoot issues.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">c. Optional Information</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Feedback or Surveys</strong> – We may invite you to share opinions or suggestions
            to help us improve the Service. Participation is always voluntary.
          </li>
        </ul>

        <p className="mb-4">We use this information to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Provide and improve the Service experience.</li>
          <li>Personalize content for children in a safe manner.</li>
          <li>Manage subscriptions, payments, and customer support.</li>
          <li>
            Ensure compliance with Pakistan Telecommunication Authority (PTA) guidelines and
            applicable privacy laws.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">3. App Permissions</h2>
        <p className="mb-4">
          Certain features may require limited phone permissions to function correctly:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>SMS Access</strong> – For one-time password (OTP) verification.</li>
          <li><strong>Storage Access</strong> – To download or save app content.</li>
          <li><strong>Internet Access</strong> – To stream or sync videos and lessons.</li>
        </ul>
        <p className="mb-4">
          All permissions are requested transparently, used only for their stated purpose,
          and can be managed through your device settings.
        </p>

        <h2 className="text-xl font-semibold mb-2">4. Cookies and Third-Party Services</h2>
        <p className="mb-4">
          Jazz Kidjo may use trusted third-party tools (e.g., analytics or hosting services)
          to maintain and improve app performance. These partners may use cookies or anonymous
          identifiers to help us understand usage trends. All partners are required to follow
          strict confidentiality and data-protection agreements and cannot use your data for
          unrelated purposes.
        </p>

        <h2 className="text-xl font-semibold mb-2">5. Data Protection and Security</h2>
        <p className="mb-4">
          We use industry-standard measures to protect your data from unauthorized access,
          misuse, or loss. While no system can guarantee complete security, we continuously
          update our safeguards to keep your data protected and secure.
        </p>

        <h2 className="text-xl font-semibold mb-2">6. Children’s Safety and Content</h2>
        <p className="mb-4">
          Jazz Kidjo is designed to provide family-friendly content in a secure digital space.
          Any personal details linked to child profiles are used only to personalize content
          and are never shared for advertising or marketing.
        </p>

        <h2 className="text-xl font-semibold mb-2">7. Sensitive Information</h2>
        <p className="mb-4">
          We do not collect or store sensitive personal information such as race, religion,
          health data, or political opinions. Please avoid sharing such details through the app.
        </p>

        <h2 className="text-xl font-semibold mb-2">8. Your Rights and Choices</h2>
        <p className="mb-4">You may:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Access or update your account information anytime.</li>
          <li>Delete your account or withdraw consent by contacting our support team.</li>
          <li>Request clarification about how your data is used.</li>
        </ul>
        <p className="mb-4">
          We respect your choices and aim to respond to all privacy-related requests promptly.
        </p>

        <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
        <p className="mb-4">
          This Policy is governed by and interpreted in accordance with the laws of the
          Islamic Republic of Pakistan, and complies with PTA data-privacy regulations.
        </p>

        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p>
          We value your trust and are here to assist with any questions or concerns about your privacy.
          For support or inquiries, please contact:{" "}
          <a
            href="mailto:customercare@switch.com.pk"
            className="text-blue-600 underline"
          >
            customercare@switch.com.pk
          </a>
        </p>
      </main>
    </>
  );
}
