import './Privacy.css';

const Privacy = () => {

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: '🛡️',
      content: 'Welcome to Rhino Dash! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data while you enjoy our 2D side-scrolling wildlife adventure game set in Sauraha, Chitwan, Nepal.',
      color: '#F36B26'
    },
    {
      id: 'data-collection',
      title: 'Data Collection',
      icon: '🔒',
      content: 'We collect minimal data necessary to improve your gaming experience:',
      list: [
        'Gameplay analytics (levels completed, time played)',
        'Crash reports and error logs',
        'Device information (operating system, screen resolution)',
        'No personal data is collected unless you voluntarily provide it'
      ],
      color: '#D9A441'
    },
    {
      id: 'third-party',
      title: 'Third-Party Services',
      icon: '🔗',
      content: 'Rhino Dash may use the following third-party services:',
      list: [
        'Google Play Services for in-app purchases and notifications',
        'Firebase Analytics for gameplay insights',
        'Ad networks for optional advertisements (if enabled)'
      ],
      color: '#235347'
    },
    {
      id: 'children-privacy',
      title: 'Children\'s Privacy',
      icon: '👶',
      content: 'Rhino Dash is designed for players of all ages. We comply with COPPA (Children\'s Online Privacy Protection Act) and similar regulations. We do not knowingly collect personal information from children under 13 without parental consent. If you are a parent and believe your child has provided us with personal information, please contact us immediately.',
      color: '#F36B26'
    },
    {
      id: 'user-rights',
      title: 'User Rights & Control',
      icon: '⚖️',
      content: 'You have the right to:',
      list: [
        'Request access to your data',
        'Request data deletion',
        'Opt out of data collection where possible',
        'Contact our support team for any privacy concerns'
      ],
      color: '#D9A441'
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: '📧',
      content: 'If you have any questions about this Privacy Policy or our data practices, please contact us:',
      contact: 'support@appynox.com',
      color: '#235347'
    }
  ];

  return (
    <div className="privacy-page">
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            <img src="/assets/logo.png" alt="Rhino Dash Logo" />
            Rhino Dash
          </a>
          <a href="/" className="nav-link">Home</a>
        </div>
      </nav>

      <main className="privacy-content">
        <div className="container">
          <header className="privacy-header">
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="privacy-subtitle">Last updated: October 2025</p>
          </header>

          <div className="privacy-sections">
            {sections.map((section, index) => (
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
                    <p>If you have any questions, please contact us at: <a href={`mailto:${section.contact}`} className="contact-link">{section.contact}</a></p>
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

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Rhino Dash. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;