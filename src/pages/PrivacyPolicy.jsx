import { Helmet } from "react-helmet";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Privacy Policy | Iftikhar Corporation</title>

        <meta
          name="description"
          content="Privacy Policy of Iftikhar Corporation - a garment manufacturing company specializing in knitting, stitching, dyeing, weaving, and fabric production in Pakistan."
        />

        <meta
          name="keywords"
          content="privacy policy garment manufacturer, textile company Pakistan, knitting stitching dyeing, fabric manufacturing, Iftikhar Corporation privacy"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://yourwebsite.com/privacy-policy" />

        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | Iftikhar Corporation" />
        <meta
          property="og:description"
          content="Learn how Iftikhar Corporation collects, uses, and protects your personal and business information."
        />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "publisher": {
              "@type": "Organization",
              "name": "Iftikhar Corporation"
            }
          }
          `}
        </script>
      </Helmet>
      <section className="policy-section">
  <div className="policy-container">

    <h1>Privacy Policy</h1>
    <p className="intro">
      At <strong>Iftikhar Corporation</strong>, we specialize in premium garment manufacturing, including knitting, weaving, dyeing, and stitching. 
      We provide end to end apparel solutions from fabric sourcing to finished garments such as hoodies, t-shirts, polos, and bottoms.
      <br /><br />
      Just as we maintain strict quality standards in our production process, we are equally committed to protecting your personal information. 
      This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website or services.
    </p>

    {/* SUMMARY */}
    <h2>At a Glance: Summary of Key Points</h2>
    <ul>
      <li>We collect your name, email, business details, order requirements, and technical data.</li>
      <li>We use your data to process manufacturing orders and improve our services.</li>
      <li>We never sell your personal data.</li>
      <li>We only share data with essential service providers.</li>
      <li>You have full rights to access, update, or delete your data.</li>
      <li>Contact us anytime at <strong>ictextilelimited@gmail.com</strong>.</li>
    </ul>

    {/* SECTION 1 */}
    <h2>1. Introduction</h2>
    <p>
      Iftikhar Corporation is a global garment manufacturing company providing high quality apparel production services.
      Our expertise includes knitting, weaving, dyeing, cutting, stitching, and finishing garments based on client requirements.
      <br /><br />
      This Privacy Policy applies to all users of our website and clients who engage with our manufacturing services.
      By using our website, you agree to the practices described in this policy.
    </p>

    {/* SECTION 2 */}
    <h2>2. Information We Collect</h2>
    <p>
      We collect information necessary to deliver our services efficiently and maintain business operations.
    </p>

    <p><strong>a) Information You Provide</strong></p>
    <ul>
      <li>Name, email address, phone number, and business details</li>
      <li>Custom order details (designs, fabrics, sizes, quantities)</li>
      <li>Billing and payment information</li>
    </ul>

    <p><strong>b) Automatically Collected Data</strong></p>
    <ul>
      <li>IP address, browser type, and device information</li>
      <li>Website usage behavior and interaction data</li>
      <li>General location (country/region)</li>
    </ul>

    <p><strong>c) Third Party Data</strong></p>
    <ul>
      <li>Payment confirmations from secure processors</li>
      <li>Hosting and analytics provider data</li>
    </ul>

    {/* SECTION 3 */}
    <h2>3. How We Use Your Information</h2>
    <p>
      Your information is used strictly for business and operational purposes:
    </p>
    <ul>
      <li>To process and manage garment manufacturing orders</li>
      <li>To communicate regarding quotes, production, and delivery</li>
      <li>To improve website performance and user experience</li>
      <li>To maintain security and prevent fraud</li>
      <li>To comply with legal and financial regulations</li>
      <li>To send updates or marketing (only with your consent)</li>
    </ul>

    {/* SECTION 4 */}
    <h2>4. Sharing of Information</h2>
    <p>
      We respect your privacy and never sell your personal data.
      Your information is shared only in the following cases:
    </p>
    <ul>
      <li>With payment processors and hosting providers</li>
      <li>With logistics or production partners (if required)</li>
      <li>When required by law or legal authorities</li>
    </ul>

    {/* SECTION 5 */}
    <h2>5. Your Privacy Rights</h2>
    <p>
      You have full control over your personal data:
    </p>
    <ul>
      <li>Access the data we hold about you</li>
      <li>Request corrections to inaccurate information</li>
      <li>Request deletion of your data</li>
      <li>Withdraw consent at any time</li>
      <li>Opt out of marketing communications</li>
    </ul>

    {/* SECTION 6 */}
    <h2>6. Data Security</h2>
    <p>
      We implement strict security measures including encryption, secure servers, and restricted access.
      While we strive to protect your data, no online system is completely secure.
    </p>

    {/* SECTION 7 */}
    <h2>7. Data Retention</h2>
    <p>
      We retain data only as long as necessary:
    </p>
    <ul>
      <li>Order data: retained for operational purposes</li>
      <li>Financial records: kept up to 7 years (legal requirement)</li>
      <li>Technical data: stored temporarily for analytics</li>
    </ul>

    {/* SECTION 8 */}
    <h2>8. Cookies & Tracking</h2>
    <p>
      We use cookies to enhance user experience and analyze website traffic.
      You can manage cookies through your browser settings.
    </p>

    {/* SECTION 9 */}
    <h2>9. Children's Privacy</h2>
    <p>
      Our services are intended for businesses and individuals above 16 years of age.
      We do not knowingly collect data from children.
    </p>

    {/* SECTION 10 */}
    <h2>10. International Data Transfers</h2>
    <p>
      As a global manufacturer, your data may be processed in different countries.
      We ensure proper safeguards are in place to protect your information.
    </p>

    {/* SECTION 11 */}
    <h2>11. Updates to This Policy</h2>
    <p>
      We may update this policy from time to time. Changes will be posted on this page with an updated date.
    </p>

    {/* SECTION 12 */}
    <h2>12. Contact Us</h2>
    <p>
      If you have any questions regarding this Privacy Policy:
      <br /><br />
      <strong>Email:</strong> ictextilelimited@gmail.com
    </p>

  </div>
</section>
</>
  );
}