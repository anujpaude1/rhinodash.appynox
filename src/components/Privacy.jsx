import './Privacy.css';

const Privacy = () => {

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `Welcome to Rhino Dash! 
      This Privacy Policy describes how Appynox ("we", "our", "us") collects, uses, shares, and protects your data 
      when you play Rhino Dash — a 2D side-scrolling wildlife adventure game set in Sauraha, Chitwan, Nepal. 
      By installing or using the app, you acknowledge that you have read and understood this Privacy Policy.`,
      color: '#F36B26'
    },
    {
      id: 'data-collection',
      title: 'Information We Collect',
      content: 'We only collect minimal data necessary for gameplay functionality, analytics, and app improvements. Specifically, we may collect:',
      list: [
        'Gameplay data (levels completed, achievements, and session duration)',
        'Crash reports and diagnostic logs for bug fixing and stability improvement',
        'Device and technical information (device model, operating system version, language, and screen resolution)',
        'Advertising identifiers (if ads are enabled)',
        'No personally identifiable data (like name, email, or address) is collected unless voluntarily provided through contact or feedback forms.'
      ],
      color: '#D9A441'
    },
    {
      id: 'data-usage',
      title: 'How We Use the Data',
      content: 'We use collected data solely to enhance game performance, stability, and user experience. We use this data to:',
      list: [
        'Monitor gameplay trends and balance levels or difficulty',
        'Fix technical issues and crashes',
        'Serve relevant ads and track ad performance (if applicable)',
        'Improve app functionality, features, and performance'
      ],
      color: '#235347'
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing and Transfer',
      content: `We do not sell or rent your data to anyone. However, limited data may be shared automatically with trusted third-party service providers
      who assist us in analytics, crash reporting, or advertising. These providers process data only on our behalf and under strict confidentiality agreements.
      Data may be transferred to servers located outside your country, but it will always be handled with the same level of protection.`,
      color: '#F36B26'
    },
    {
      id: 'third-party',
      title: 'Third-Party Services and SDKs',
      content: 'Rhino Dash integrates third-party tools to enhance functionality. Each of these services has its own Privacy Policy:',
      list: [
        'Google Play Services – for authentication, achievements, and in-app purchases (https://policies.google.com/privacy)',
        'Firebase Analytics – to analyze user behavior and app performance (https://firebase.google.com/support/privacy)',
        'AdMob – for displaying ads and measuring ad performance (https://policies.google.com/technologies/ads)',
      ],
      color: '#D9A441'
    },
    {
      id: 'consent',
      title: 'User Consent and Choices',
      content: `Before using analytics or personalized ads, Rhino Dash may ask for your consent where required. 
      You can manage ad personalization directly from your Google account settings. 
      By continuing to use the app, you consent to data collection as described here.`,
      color: '#235347'
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: `We apply appropriate technical and organizational security measures to protect your information from unauthorized access,
      alteration, disclosure, or destruction. These include encrypted connections, secure storage, and limited access to personal data.`,
      color: '#F36B26'
    },
    {
      id: 'storage',
      title: 'Data Storage and Retention',
      content: `Collected data is stored securely either on your device or in encrypted cloud databases (managed by our analytics providers). 
      We retain data only as long as necessary for the purposes outlined in this policy or as required by law. Afterward, data is anonymized or permanently deleted.`,
      color: '#D9A441'
    },
    {
      id: 'children',
      title: 'Children’s Privacy',
      content: `Rhino Dash is designed for all age groups and complies with the Children’s Online Privacy Protection Act (COPPA) 
      and other relevant laws. We do not knowingly collect personal information from children under 13. 
      If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.`,
      color: '#235347'
    },
    {
      id: 'ads',
      title: 'Advertisements',
      content: `Rhino Dash may display ads via Google AdMob. Ads may be personalized or non-personalized depending on your consent settings. 
      You can disable personalized ads through your Google Account > Ads Settings. We ensure ads comply with family and content rating policies.`,
      color: '#F36B26'
    },
    {
      id: 'user-rights',
      title: 'Your Rights and Control',
      content: 'Depending on your region, you may have the following rights:',
      list: [
        'Access or request deletion of data we hold (where applicable)',
        'Withdraw consent for analytics or personalized ads',
        'Request correction of inaccurate information (if any personal data exists)',
        'Uninstall the app to revoke all local data collection'
      ],
      color: '#D9A441'
    },
    {
      id: 'updates',
      title: 'Changes to This Privacy Policy',
      content: `We may update this Privacy Policy periodically to reflect new features, regulatory requirements, or changes in data handling practices. 
      The updated version will always include the latest “Last Updated” date.`,
      color: '#235347'
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: 'If you have questions, concerns, or data-related requests, please contact us:',
      contact: 'support@appynox.com',
      color: '#F36B26'
    }
  ];

  return (
    <div className="privacy-page">
      <main className="privacy-content">
        <div className="container">
          <header className="privacy-header">
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="privacy-subtitle">Last updated: October 2025</p>
          </header>

          <div className="privacy-sections">
            {sections.map((section) => (
              <div key={section.id} className="privacy-section">
                <h2>{section.title}</h2>
                <p>{section.content}</p>

                {section.list && (
                  <ul>
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.contact && (
                  <div className="contact-section">
                    <p>📩 Contact: <a href={`mailto:${section.contact}`} className="contact-link">{section.contact}</a></p>
                  </div>
                )}
              </div>
            ))}

            <div className="privacy-section">
              <h2>Effective Date</h2>
              <p>Effective from October 2025</p>
            </div>
          </div>
        </div>
      </main>

      <nav className="dock">
        <div className="dock-container">
          <a href="/" className="dock-item">
            <span>Home</span>
          </a>
          <a href="/privacy" className="dock-item active">
            <span>Privacy</span>
          </a>
        </div>
      </nav>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Rhino Dash by Appynox. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
