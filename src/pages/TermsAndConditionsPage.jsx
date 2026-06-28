import { useEffect } from 'react';
import './PrivacyPolicyPage.css'; // Reusing the premium styles from Privacy Policy

export default function TermsAndConditionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-header">
        <div className="container">
          <h1 className="privacy-title">Terms and Conditions</h1>
          <p className="privacy-meta">Effective Date: June 28, 2026 | Last Updated: June 28, 2026</p>
        </div>
      </div>
      
      <div className="privacy-content-wrapper section-padding">
        <div className="container">
          <div className="privacy-content">
            <p>These Terms and Conditions ("Terms") constitute a legally binding agreement between <strong>Cluvex Digital Solutions</strong> ("Cluvex", "Company", "we", "our", or "us") and any individual, business, or organization ("you", "your", or "Customer") accessing or using our website, software, applications, SaaS products, digital marketing services, web development services, cloud solutions, AI services, consulting, or any other products and services offered by Cluvex Digital Solutions (collectively referred to as the "Services").</p>
            <p>By accessing our website or purchasing any of our Services, you acknowledge that you have read, understood, and agreed to these Terms and our Privacy Policy. If you do not agree with these Terms, you should not use our website or Services.</p>

            <hr />

            <h2>Company Information</h2>
            <p><strong>Cluvex Digital Solutions</strong></p>
            <p>
              16A, Swami Vivekananda Road<br />
              Budge Budge<br />
              Kolkata – 700137<br />
              West Bengal<br />
              India
            </p>
            <p><strong>Email:</strong> <a href="mailto:info@cluvex.com">info@cluvex.com</a></p>

            <hr />

            <h2>Services Covered</h2>
            <p>These Terms apply to all services and products provided by Cluvex Digital Solutions, including but not limited to:</p>
            <ul>
              <li>Digital Marketing Services</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Google Ads & PPC Management</li>
              <li>Social Media Marketing</li>
              <li>Website Design & Development</li>
              <li>Web Application Development</li>
              <li>Mobile Application Development</li>
              <li>SaaS Products</li>
              <li>AI Software & AI Agents</li>
              <li>Cloud Hosting & Cloud Solutions</li>
              <li>CRM Development</li>
              <li>Software Development</li>
              <li>Marketplace Platforms</li>
              <li>API Development & Integration</li>
              <li>Automation Services</li>
              <li>UI/UX Design</li>
              <li>Digital Products</li>
              <li>Technical Consulting</li>
              <li>Website Maintenance & Support</li>
            </ul>

            <hr />

            <h2>Eligibility</h2>
            <p>You must be at least <strong>18 years of age</strong> and legally capable of entering into binding contracts to use our Services.</p>
            <p>By using our Services, you confirm that you satisfy these eligibility requirements.</p>

            <hr />

            <h2>User Account</h2>
            <p>Certain Services require you to create an account.</p>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate and complete information.</li>
              <li>Keep your login credentials confidential.</li>
              <li>Be responsible for all activities performed through your account.</li>
              <li>Notify us immediately of any unauthorized access.</li>
            </ul>
            <p>We reserve the right to suspend or terminate accounts that contain false information or violate these Terms.</p>

            <hr />

            <h2>Orders and Payments</h2>
            <p>By purchasing any product or service from Cluvex Digital Solutions, you agree to:</p>
            <ul>
              <li>Pay all applicable fees and taxes.</li>
              <li>Provide accurate billing information.</li>
              <li>Authorize payment processing through our approved payment providers.</li>
            </ul>
            <p>All prices displayed are subject to change without prior notice.</p>
            <p>Unless otherwise agreed in writing, invoices are payable according to the payment terms specified in your quotation, proposal, or invoice.</p>
            <p>Failure to make timely payments may result in suspension or termination of Services.</p>

            <hr />

            <h2>Subscription Services</h2>
            <p>Some of our products are offered as recurring subscription services.</p>
            <p>By subscribing, you authorize recurring billing according to your selected subscription plan until cancelled.</p>
            <p>Subscription fees are generally non-refundable unless otherwise specified in writing.</p>

            <hr />

            <h2>Digital Products and SaaS Licenses</h2>
            <p>When purchasing software, SaaS products, templates, scripts, digital downloads, or licenses:</p>
            <ul>
              <li>You receive a limited, non-exclusive, non-transferable license to use the product.</li>
              <li>Ownership of the intellectual property remains with Cluvex Digital Solutions or its licensors.</li>
              <li>You may not copy, resell, sublicense, reverse engineer, distribute, or modify our software unless expressly permitted in writing.</li>
            </ul>

            <hr />

            <h2>Project Services</h2>
            <p>For website development, software development, digital marketing, and consulting projects:</p>
            <ul>
              <li>Project timelines depend on timely client feedback and delivery of required materials.</li>
              <li>Delays caused by the client may result in revised timelines and additional charges.</li>
              <li>Additional work requested outside the agreed scope may incur extra fees.</li>
              <li>Final deliverables will be provided after all outstanding payments have been received.</li>
            </ul>

            <hr />

            <h2>Client Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate project requirements.</li>
              <li>Supply required content, images, and credentials.</li>
              <li>Maintain lawful use of our Services.</li>
              <li>Not upload malicious code or illegal content.</li>
              <li>Cooperate during project execution.</li>
            </ul>

            <hr />

            <h2>Intellectual Property</h2>
            <p>All website content, source code, software, branding, logos, graphics, designs, documentation, AI models, and digital assets developed by Cluvex Digital Solutions remain our intellectual property unless otherwise agreed in writing.</p>
            <p>Clients retain ownership of content they provide.</p>
            <p>Custom-developed deliverables become the client's property only after full payment, unless the agreement states otherwise.</p>

            <hr />

            <h2>Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use our Services for unlawful activities.</li>
              <li>Attempt unauthorized access to our systems.</li>
              <li>Distribute malware or malicious software.</li>
              <li>Interfere with our servers or infrastructure.</li>
              <li>Infringe intellectual property rights.</li>
              <li>Violate applicable local, national, or international laws.</li>
            </ul>
            <p>Violation of this section may result in immediate suspension or termination of Services.</p>

            <hr />

            <h2>Third-Party Services</h2>
            <p>Our Services may integrate with third-party providers, including cloud hosting services, payment gateways, domain registrars, analytics tools, APIs, AI platforms, and communication services.</p>
            <p>We are not responsible for the availability, functionality, or policies of third-party services.</p>
            <p>Your use of such services is governed by their respective terms and privacy policies.</p>

            <hr />

            <h2>Refund Policy</h2>
            <p>Refund eligibility depends on the type of product or service purchased.</p>
            <p>Generally:</p>
            <ul>
              <li>Custom software development and web development fees are non-refundable once work has commenced.</li>
              <li>Digital products and downloadable software are non-refundable after delivery.</li>
              <li>SaaS subscription fees are non-refundable except where required by applicable law.</li>
              <li>Approved refunds will be processed using the original payment method within a reasonable period.</li>
            </ul>
            <p>Specific refund terms may be outlined in your service agreement or invoice.</p>

            <hr />

            <h2>Service Availability</h2>
            <p>While we strive to maintain uninterrupted access, we do not guarantee that our website or Services will always be available without interruption, delay, or technical issues.</p>
            <p>Scheduled maintenance, updates, or circumstances beyond our control may temporarily affect service availability.</p>

            <hr />

            <h2>Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Cluvex Digital Solutions shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of profits, business interruption, loss of data, or loss of goodwill arising from the use of our Services.</p>
            <p>Our total liability relating to any claim shall not exceed the amount actually paid by you for the specific Service giving rise to the claim.</p>

            <hr />

            <h2>Disclaimer</h2>
            <p>Our Services are provided on an "as is" and "as available" basis.</p>
            <p>We do not guarantee:</p>
            <ul>
              <li>Specific search engine rankings.</li>
              <li>Sales or revenue increases.</li>
              <li>Continuous website availability.</li>
              <li>Error-free software.</li>
              <li>Compatibility with all third-party platforms.</li>
              <li>Business success resulting from our Services.</li>
            </ul>

            <hr />

            <h2>Indemnification</h2>
            <p>You agree to indemnify and hold harmless Cluvex Digital Solutions, its owners, employees, contractors, and affiliates against claims, losses, damages, liabilities, and expenses arising from:</p>
            <ul>
              <li>Your misuse of our Services.</li>
              <li>Violation of these Terms.</li>
              <li>Violation of applicable laws.</li>
              <li>Infringement of third-party rights.</li>
            </ul>

            <hr />

            <h2>Force Majeure</h2>
            <p>Neither party shall be liable for delays or failures caused by events beyond reasonable control, including natural disasters, war, terrorism, government actions, internet outages, cyberattacks, pandemics, labor disputes, or failures of third-party infrastructure.</p>

            <hr />

            <h2>Termination</h2>
            <p>We reserve the right to suspend or terminate access to our Services at any time if:</p>
            <ul>
              <li>These Terms are violated.</li>
              <li>Payments remain outstanding.</li>
              <li>Fraudulent or illegal activity is suspected.</li>
              <li>Continued service poses security or legal risks.</li>
            </ul>
            <p>Termination does not relieve you of outstanding payment obligations.</p>

            <hr />

            <h2>Changes to These Terms</h2>
            <p>We may modify these Terms from time to time.</p>
            <p>Updated versions will be published on our website with the revised "Last Updated" date.</p>
            <p>Continued use of our Services after updates constitutes acceptance of the revised Terms.</p>

            <hr />

            <h2>Governing Law</h2>
            <p>These Terms shall be governed by and interpreted in accordance with the laws of <strong>India</strong>, without regard to conflict of law principles.</p>

            <hr />

            <h2>Jurisdiction</h2>
            <p>Any dispute arising out of or relating to these Terms or the Services shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Kolkata, West Bengal, India</strong>.</p>

            <hr />

            <h2>Contact Information</h2>
            <p>For any questions regarding these Terms and Conditions, please contact:</p>
            <p><strong>Cluvex Digital Solutions</strong></p>
            <p>
              16A, Swami Vivekananda Road<br />
              Budge Budge<br />
              Kolkata – 700137<br />
              West Bengal<br />
              India
            </p>
            <p><strong>Email:</strong> <a href="mailto:info@cluvex.com">info@cluvex.com</a></p>

          </div>
        </div>
      </div>
    </div>
  );
}
