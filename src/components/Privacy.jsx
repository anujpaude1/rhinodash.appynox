import './Privacy.css';

const Privacy = () => {

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `Welcome to Rhino Dash! 
      This Privacy Policy describes how Appynox ("we", "our", "us") collects, uses, shares, and protects your data 
      when you play Rhino Dash : a 2D side-scrolling wildlife adventure game set in Sauraha, Chitwan, Nepal. 
      By installing or using the app, you acknowledge that you have read and understood this Privacy Policy.`,
      color: '#F36B26'
    },
    {
      id: 'data-collection',
      title: 'Information We Collect',
      content: 'We do not collect any personal data or information from users.',
      color: '#D9A441'
    },
    {
      id: 'data-usage',
      title: 'How We Use the Data',
      content: 'Since we do not collect any data, there are no uses of data.',
      color: '#235347'
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing and Transfer',
      content: `Since we do not collect any data, there is no data to share or transfer.`,
      color: '#F36B26'
    },
    {
      id: 'third-party',
      title: 'Third-Party Services and SDKs',
      content: 'Rhino Dash does not integrate third-party tools for data collection, analytics, or advertising.',
      color: '#D9A441'
    },
    {
      id: 'consent',
      title: 'User Consent and Choices',
      content: `Since we do not collect data or display ads, no consent is required.`,
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
      content: `Since we do not collect any data, there is no data storage or retention.`,
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
      content: `Rhino Dash does not display any ads.`,
      color: '#F36B26'
    },
    {
      id: 'user-rights',
      title: 'Your Rights and Control',
      content: 'Since we do not collect any data, there are no data-related rights or controls.',
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
      contact: 'business@appynox.com',
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
