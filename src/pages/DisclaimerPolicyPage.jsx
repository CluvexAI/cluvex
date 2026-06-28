import { useEffect } from 'react';
import './PrivacyPolicyPage.css'; // Reusing the premium styles from Privacy Policy

export default function DisclaimerPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-header">
        <div className="container">
          <h1 className="privacy-title">Disclaimer Policy</h1>
          <p className="privacy-meta">Effective Date: June 28, 2026 | Last Updated: June 28, 2026</p>
        </div>
      </div>
      
      <div className="privacy-content-wrapper section-padding">
        <div className="container">
          <div className="privacy-content">
            <p>This Disclaimer Policy ("Disclaimer") governs your use of the website, products, software, applications, SaaS platforms, digital marketing services, consulting services, and all other offerings provided by <strong>Cluvex Digital Solutions</strong> ("Cluvex", "Company", "we", "our", or "us").</p>
            <p>By accessing our website or using any of our products or services, you acknowledge that you have read, understood, and agreed to this Disclaimer.</p>

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

            <h2>General Information</h2>
            <p>The information published on our website is provided for general informational and educational purposes only.</p>
            <p>While we strive to keep all information accurate, current, and complete, Cluvex Digital Solutions makes no representations or warranties of any kind regarding the accuracy, reliability, completeness, suitability, or availability of any information, products, services, graphics, software, or related content.</p>
            <p>Any reliance you place on such information is strictly at your own risk.</p>

            <hr />

            <h2>No Professional Advice</h2>
            <p>The content available on our website, blogs, videos, documentation, webinars, tutorials, and digital resources should not be considered legal, financial, tax, accounting, investment, cybersecurity, or other professional advice.</p>
            <p>You should seek advice from qualified professionals before making business, legal, financial, or technical decisions.</p>

            <hr />

            <h2>Digital Marketing Disclaimer</h2>
            <p>Cluvex Digital Solutions provides digital marketing, SEO, PPC, social media marketing, and related services based on industry best practices.</p>
            <p>However, we <strong>do not guarantee</strong>:</p>
            <ul>
              <li>Specific Google rankings</li>
              <li>Search engine indexing</li>
              <li>Website traffic levels</li>
              <li>Lead generation volume</li>
              <li>Sales or revenue growth</li>
              <li>Return on advertising spend (ROAS)</li>
              <li>Social media engagement</li>
              <li>Business success</li>
            </ul>
            <p>Results depend on numerous factors outside our control, including competition, market conditions, search engine algorithm updates, advertising platforms, and customer behavior.</p>

            <hr />

            <h2>Website & Software Development Disclaimer</h2>
            <p>We make every effort to deliver reliable and high-quality websites, web applications, mobile applications, SaaS products, APIs, and software solutions.</p>
            <p>However, we cannot guarantee that our software or websites will be:</p>
            <ul>
              <li>Completely error-free</li>
              <li>Free from bugs or vulnerabilities</li>
              <li>Compatible with every browser, device, or third-party system</li>
              <li>Uninterrupted or continuously available</li>
            </ul>
            <p>Clients are responsible for testing and approving deliverables before production use.</p>

            <hr />

            <h2>SaaS Services Disclaimer</h2>
            <p>Our Software-as-a-Service (SaaS) platforms are provided on an <strong>"as is"</strong> and <strong>"as available"</strong> basis.</p>
            <p>Although we work to maintain high availability, we do not guarantee uninterrupted access due to:</p>
            <ul>
              <li>Scheduled maintenance</li>
              <li>Software updates</li>
              <li>Internet connectivity issues</li>
              <li>Third-party provider outages</li>
              <li>Force majeure events</li>
              <li>Technical failures beyond our reasonable control</li>
            </ul>

            <hr />

            <h2>AI Services Disclaimer</h2>
            <p>Cluvex Digital Solutions may provide AI-powered tools, AI agents, automation systems, chatbots, content generation, and machine learning solutions.</p>
            <p>Artificial intelligence may occasionally generate inaccurate, incomplete, outdated, or unexpected outputs.</p>
            <p>Users are responsible for reviewing, validating, and approving AI-generated content before relying on or publishing it.</p>
            <p>We are not responsible for decisions made solely based on AI-generated outputs.</p>

            <hr />

            <h2>Cloud Services Disclaimer</h2>
            <p>Cloud infrastructure, hosting services, and deployment solutions may rely on third-party providers.</p>
            <p>We are not liable for outages, downtime, security incidents, service interruptions, pricing changes, or technical issues caused by cloud providers or external infrastructure.</p>

            <hr />

            <h2>Third-Party Services</h2>
            <p>Our products and services may integrate with third-party platforms, including:</p>
            <ul>
              <li>Payment gateways</li>
              <li>Cloud hosting providers</li>
              <li>Domain registrars</li>
              <li>Email service providers</li>
              <li>CRM platforms</li>
              <li>Analytics tools</li>
              <li>AI providers</li>
              <li>APIs</li>
              <li>Social media platforms</li>
            </ul>
            <p>We do not control or guarantee the availability, accuracy, security, or policies of these third-party services.</p>
            <p>Your use of such services is subject to their respective terms and privacy policies.</p>

            <hr />

            <h2>External Links Disclaimer</h2>
            <p>Our website may contain links to external websites operated by third parties.</p>
            <p>These links are provided solely for your convenience.</p>
            <p>Cluvex Digital Solutions does not endorse or assume responsibility for the content, products, services, security, or privacy practices of any external website.</p>

            <hr />

            <h2>Intellectual Property</h2>
            <p>All trademarks, logos, graphics, software, source code, designs, documentation, branding, and content displayed on this website are the intellectual property of Cluvex Digital Solutions or their respective owners.</p>
            <p>Unauthorized copying, reproduction, distribution, modification, or commercial use is prohibited without prior written permission.</p>

            <hr />

            <h2>Limitation of Liability</h2>
            <p>To the fullest extent permitted by applicable law, Cluvex Digital Solutions shall not be liable for any direct, indirect, incidental, consequential, special, exemplary, or punitive damages arising from:</p>
            <ul>
              <li>Use or inability to use our website or Services</li>
              <li>Software errors or interruptions</li>
              <li>Data loss</li>
              <li>Business interruption</li>
              <li>Loss of profits or revenue</li>
              <li>Cybersecurity incidents</li>
              <li>Third-party service failures</li>
              <li>AI-generated content</li>
              <li>Decisions made based on information provided through our Services</li>
            </ul>
            <p>Our total liability for any claim shall not exceed the amount paid by you for the specific product or service giving rise to the claim.</p>

            <hr />

            <h2>User Responsibility</h2>
            <p>You are solely responsible for:</p>
            <ul>
              <li>Verifying the accuracy of information before relying on it</li>
              <li>Maintaining backups of your own data</li>
              <li>Securing your account credentials</li>
              <li>Ensuring compliance with applicable laws</li>
              <li>Properly configuring and maintaining systems under your control</li>
            </ul>

            <hr />

            <h2>No Warranty</h2>
            <p>Unless expressly stated in a separate written agreement, all products and services are provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties of any kind, whether express, implied, statutory, or otherwise.</p>
            <p>This includes, but is not limited to, implied warranties of:</p>
            <ul>
              <li>Merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Availability</li>
              <li>Performance</li>
              <li>Security</li>
            </ul>

            <hr />

            <h2>Changes to This Disclaimer</h2>
            <p>We reserve the right to modify or update this Disclaimer at any time without prior notice.</p>
            <p>Changes become effective immediately upon publication on our website.</p>
            <p>Your continued use of our website or Services after any updates constitutes acceptance of the revised Disclaimer.</p>

            <hr />

            <h2>Governing Law</h2>
            <p>This Disclaimer shall be governed by and interpreted in accordance with the laws of <strong>India</strong>.</p>
            <p>Any disputes arising from this Disclaimer shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Kolkata, West Bengal, India</strong>.</p>

            <hr />

            <h2>Contact Us</h2>
            <p>If you have any questions regarding this Disclaimer Policy, please contact:</p>
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
