const page = () => {
  return (
    <div className=" max-w-4xl mx-auto  p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy — Vitalyze</h1>
      <p className="text-sm text-gray-500 mb-6">
        Effective Date: 10.11.2025
        <br />
        Last Updated: 10.11.2025
      </p>

      <p className="mb-6">
        Welcome to Vitalyze, part of VidhME Wellness Technologies LLC (“we”,
        “our”, or “us”). Your privacy is important to us. This Privacy Policy
        explains how we collect, use, store, and protect your information when
        you use our AI Health Assistant mobile application (“App”) and related
        services.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          1. Information We Collect
        </h2>
        <p>
          We collect only the information necessary to provide and improve our
          services:
        </p>

        <h3 className="text-lg font-medium mt-4">a. Personal Information</h3>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Name, email, contact details</li>
          <li>Age, gender, country (optional)</li>
          <li>Encrypted login credentials</li>
        </ul>

        <h3 className="text-lg font-medium mt-4">
          b. Health-Related Information
        </h3>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>User-inputted symptoms, habits, or wellness data</li>
          <li>Health metrics from wearables</li>
          <li>Uploaded medical images or reports (if applicable)</li>
        </ul>

        <h3 className="text-lg font-medium mt-4">c. Device & Technical Data</h3>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Device type, OS, app version</li>
          <li>IP address, location (if allowed)</li>
          <li>Usage analytics & crash logs</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Provide AI-based health insights</li>
          <li>Improve our algorithms</li>
          <li>Respond to support requests</li>
          <li>Ensure legal compliance & security</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          3. AI and Automated Processing
        </h2>
        <p>
          Our AI assistant provides general health information only and does not
          replace professional medical advice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
        <p>
          Your data is protected with AES-256 encryption, GDPR- and
          HIPAA-compliant cloud storage, and strict access controls.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          5. Data Storage & Transfers
        </h2>
        <p>
          Data may be stored in EU-based servers (GDPR) or HIPAA-compliant US
          data centers. We ensure all transfers meet GDPR Article 46 safeguards.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">6. Data Retention</h2>
        <p>
          We retain your data only as long as necessary. You may delete your
          account or request data removal at any time.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          7. Sharing of Information
        </h2>
        <p>
          We may share limited data with service providers, medical
          professionals (with consent), or regulators if required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">8. Your Rights</h2>
        <p>
          Under GDPR and HIPAA, you have the right to access, correct, delete,
          or restrict processing of your data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">9. Children’s Privacy</h2>
        <p>
          This app is not intended for users under 16. If a child’s data is
          discovered, we will delete it immediately.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          10. Changes to This Policy
        </h2>
        <p>
          We may update this policy periodically. Users will be notified of
          significant changes via the app or email.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">11. Contact Us</h2>
        <p>
          <strong>ActiveHealth Data Protection Officer</strong>
          <br />
          Email: hello@vitalyze.io
          <br />
          Website: www.vitalyze.io
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Compliance Summary</h2>
        <p>
          This Privacy Policy complies with EU GDPR, HIPAA, and App Store/Play
          Store data safety requirements.
        </p>
      </section>
    </div>
  );
};

export default page;
