import React from "react";

export const metadata = {
  title: "Zong Ersaal",
  description: "Ersaal Zong Terms and Conditions",
};

const page = () => {
  return (
    <section className="mx-auto max-w-[90%] p-6 leading-relaxed text-gray-700 xs:p-4">
      <h1 className="mt-4 mb-8 text-center text-3xl font-bold text-[#8DC518] xs:text-xl">
        Ersaal Hub – Terms and Conditions
      </h1>

      <div className="mb-6 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">
          1. Acceptance of Terms
        </h2>
        <p>
          By downloading, installing, or using the Ersaal Hub application, you
          acknowledge that you have read, understood, and agree to be bound by
          these Terms and Conditions. If you do not agree with any part of
          these terms, you must discontinue the use of the application
          immediately.
        </p>
      </div>

      <div className="mb-6 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">
          2. Availability and Use in Pakistan
        </h2>
        <p>
          Ersaal Hub is designed and made available for users exclusively
          within Pakistan. Access to the application is provided through local
          telecom operators. By using Ersaal Hub, you confirm that you are a
          lawful resident of Pakistan and that you have valid access to mobile
          network services from a local telecommunications provider.
        </p>
      </div>

      <div className="mb-6 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">
          3. Privacy and Data Security
        </h2>
        <p>
          Your privacy is important to us. Ersaal Hub is committed to
          protecting your personal information. Please review our Privacy
          Policy, which explains how your data is collected, processed, stored,
          and protected.
        </p>
      </div>

      <div className="mb-6 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">
          4. Responsible Use of the Application
        </h2>
        <p>
          By using Ersaal Hub, you agree to comply with all applicable laws and
          regulations of Pakistan. You must not use the application for any
          unlawful, harmful, or prohibited activity, including misuse of SMS
          services or unauthorized access to other users’ information.
        </p>
      </div>

      <div className="mb-6 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">
          5. Termination of Access
        </h2>
        <p>
          Ersaal Hub reserves the right to suspend or terminate your access to
          the application at any time— with or without prior notice—if you
          violate these Terms and Conditions or if we determine that such
          action is necessary for security, legal, or operational reasons.
        </p>
      </div>

      <div className="mb-6 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">
          6. Disclaimer of Warranties
        </h2>
        <p>
          Ersaal Hub is provided “as is”, without any warranties of any kind,
          whether expressed or implied. We do not guarantee uninterrupted
          operation, accuracy, or reliability of the application. Ersaal Hub
          will not be responsible for any loss, interruption, or damage
          resulting from your use of the application.
        </p>
      </div>

      <div className="mb-6 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">
          7. Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by law, Ersaal Hub shall not be
          liable for any direct, indirect, incidental, special, or
          consequential damages arising from your use or inability to use the
          application.
        </p>
      </div>

      <div className="mb-6 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">8. SMS Charges</h2>
        <p>
          Ersaal Hub does not charge users for sending or receiving SMS
          messages through the application. SMS charges, if any, will solely be
          applied by your respective mobile network operator according to their
          standard SMS tariff.
        </p>
      </div>

      <div className="mb-6 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">
          9. Amendments to Terms and Conditions
        </h2>
        <p>
          Ersaal Hub may update or modify these Terms and Conditions at any
          time. It is your responsibility to review the Terms periodically to
          stay informed of any changes. Continued use of the application after
          updates indicates your acceptance of the revised terms.
        </p>
      </div>

      <div className="mb-6 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">
          10. Contact Information
        </h2>
        <p>
          If you have any questions, concerns, or require clarification
          regarding these Terms and Conditions, you may contact us at:
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:customercare@switch.com.pk"
            className="text-blue-600 underline"
          >
            customercare@switch.com.pk
          </a>
        </p>
      </div>

      <p>
        By using Ersaal Hub, you confirm that you have read, understood, and
        agreed to these Terms and Conditions. If you do not agree with any part
        of these terms, you should stop using the application immediately.
      </p>
    </section>
  );
};

export default page;
