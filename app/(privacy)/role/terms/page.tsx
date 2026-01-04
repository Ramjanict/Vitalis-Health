const page = () => {
  return (
    <div className="max-w-4xl mx-auto  p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-2">Terms & Conditions — Vitalyze</h1>
      <p className="text-sm text-gray-500 mb-6">Effective Date: 10.11.2025</p>

      <p className="mb-6">
        These Terms & Conditions supplement our Terms of Use and provide
        additional detail about acceptable use, user content, and dispute
        resolution.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">1. Acceptable Use</h2>
        <p>
          Users must not use the App to transmit harmful, illegal, or infringing
          content. You are solely responsible for any content you provide.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          2. User-Generated Content
        </h2>
        <p>
          By submitting content (e.g., symptoms, notes, images), you grant us a
          non-exclusive, worldwide, royalty-free license to use and analyze that
          content to provide and improve our services, subject to the Privacy
          Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">3. Prohibited Conduct</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Attempting to interfere with the App’s operation</li>
          <li>
            Accessing or using the App in ways that violate law or rights of
            others
          </li>
          <li>Reverse engineering, decompiling, or bypassing security</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">4. Dispute Resolution</h2>
        <p>
          Any disputes arising out of or relating to these Terms will be
          governed by the laws of the UAE and resolved in a competent court in
          the UAE, unless otherwise agreed in writing.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">5. Changes</h2>
        <p>
          We may update these Terms & Conditions from time to time. Material
          changes will be communicated through the App or email.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Contact</h2>
        <p>
          For questions regarding these Terms & Conditions, contact:
          hello@vitalyze.io
        </p>
      </section>
    </div>
  );
};

export default page;
