import React from "react";

export const metadata = {
  title: "Jazz Kidjo",
  description: "A Jazz Kidjo Application",
};

const page = () => {
  return (
    <>
      <section className="max-w-[90%] mx-auto p-6 xs:p-4 text-gray-700 leading-relaxed">
        <h1 className="text-3xl xs:text-xl font-bold mb-8 mt-4 text-skyBlue text-center">
          Jazz Kidjo – Terms of Service (Pakistan)
        </h1>

        <p className="mb-4">
          Welcome to <strong>Jazz Kidjo</strong>, a fun and educational digital
          entertainment platform designed especially for kids, offering safe,
          engaging, and interactive content. By subscribing to or using our
          services, you agree to these Terms of Service (“Terms”). If you do not
          agree, you may discontinue use at any time.
        </p>

        {/* 1. Acceptance of Terms */}
        <div className="space-y-2 mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            1. Acceptance of Terms
          </h2>
          <p>
            By subscribing or using the Service, you confirm that you have read
            and accepted these Terms, forming a binding agreement between you
            (“User”, “you”) and Kidjo, in partnership with Jazz (“we”, “our”,
            “us”).
          </p>
          <p>
            We may update or modify these Terms periodically to reflect service
            improvements or regulatory requirements. Any material changes will
            be communicated in advance, and continued use will signify your
            acceptance of the revised Terms.
          </p>
        </div>

        {/* 2. Eligibility & Access */}
        <div className="space-y-2 mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            2. Eligibility & Access
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              The Service is available to all Jazz prepaid and postpaid
              customers within Pakistan.
            </li>
            <li>
              Users must have an active Jazz SIM/MSISDN to subscribe and access
              the Service.
            </li>
            <li>
              The Service is intended for parents and guardians subscribing on
              behalf of children.
            </li>
            <li>
              You are responsible for ensuring that all subscription details are
              accurate and that your device and balance allow uninterrupted
              service.
            </li>
          </ul>
        </div>

        {/* 3. Subscription & Charging */}
        <div className="space-y-2 mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            3. Subscription & Charging
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              By subscribing, you agree to be charged according to your selected
              plan (Daily or Monthly).
            </li>
            <li>
              Charging begins immediately upon subscription, based on the
              applicable package rate.
            </li>
            <li>
              The Service renews automatically at the end of each billing period
              unless unsubscribed before renewal.
            </li>
            <li>
              For prepaid users, subscription fees are deducted from the
              available balance; for postpaid users, charges appear on the
              monthly bill.
            </li>
          </ul>
        </div>

        {/* 4. Validity & Auto-Renewal */}
        <div className="space-y-2 mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            4. Validity & Auto-Renewal
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Daily Package: Valid for 24 hours from the time of activation.</li>
            <li>Weekly Package: Valid for 7 days from the time of activation.</li>
            <li>Monthly Package: Valid for 30 days from the time of activation.</li>
            <li>
              Subscriptions auto-renew if sufficient balance is available at the
              time of renewal.
            </li>
          </ul>
        </div>

        {/* 5. Unsubscription */}
        <div className="space-y-2 mb-6">
          <h2 className="text-lg font-semibold text-gray-800">5. Unsubscription</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              You may unsubscribe anytime through the standard Jazz
              unsubscription process.
            </li>
            <li>
              Once unsubscribed, access to premium features will stop after the
              current validity period.
            </li>
            <li>
              No refunds are applicable for any remaining days after
              unsubscription.
            </li>
          </ul>
        </div>

        {/* 6. Service Use & Responsibility */}
        <div className="space-y-2 mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            6. Service Use & Responsibility
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              The Service is provided on an “as is” and “as available” basis.
            </li>
            <li>You agree to use it solely for personal and lawful purposes.</li>
            <li>
              It is your responsibility to ensure sufficient mobile balance for
              recurring charges.
            </li>
            <li>
              You must not attempt to misuse, copy, or redistribute Service
              content.
            </li>
          </ul>
        </div>

        {/* 7. Payments & Refund Policy */}
        <div className="space-y-2 mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            7. Payments & Refund Policy
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              All payments are processed securely through Jazz Direct Carrier
              Billing (DCB).
            </li>
            <li>
              All charges are final and non-refundable, except in cases of
              verified billing discrepancies.
            </li>
            <li>
              If you experience a billing issue or double charge, please contact
              our support team for assistance.
            </li>
          </ul>
        </div>

        {/* 8. Intellectual Property */}
        <div className="space-y-2 mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            8. Intellectual Property
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              All Kidjo content, including videos, graphics, and design
              elements, is owned or licensed by Kidjo.
            </li>
            <li>
              Unauthorized reproduction, modification, or distribution is
              strictly prohibited.
            </li>
            <li>
              You receive a limited, non-transferable right to access content
              for personal use only.
            </li>
          </ul>
        </div>

        {/* 9. Service Updates & Changes */}
        <div className="space-y-2 mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            9. Service Updates & Changes
          </h2>
          <p>
            We may occasionally enhance or modify features, pricing, or
            subscription plans to improve your experience. Any significant
            updates will be communicated via SMS or official Jazz channels.
          </p>
        </div>

        {/* 10. Limitation of Liability */}
        <div className="space-y-2 mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            10. Limitation of Liability
          </h2>
          <p>
            While we strive to provide a reliable experience, occasional
            interruptions may occur due to maintenance or network factors.
            Neither Jazz nor Kidjo shall be liable for any indirect or
            incidental losses arising from the use or unavailability of the
            Service.
          </p>
        </div>

        {/* 11. Governing Law */}
        <div className="space-y-2 mb-6">
          <h2 className="text-lg font-semibold text-gray-800">11. Governing Law</h2>
          <p>
            These Terms are governed by and interpreted in accordance with the
            laws of the Islamic Republic of Pakistan. Any disputes shall first
            be resolved amicably between the user and Jazz/Kidjo.
          </p>
        </div>

        {/* 12. Customer Support */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-800">
            12. Customer Support
          </h2>
          <p>
            For help with subscriptions, billing, or technical queries, please
            contact our Customer Care team at{" "}
            <a
              href="mailto:customercare@switch.com.pk"
              className="text-blue-600 underline"
            >
              customercare@switch.com.pk
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
