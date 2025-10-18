import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            <img src="/assets/logo.png" alt="Rhino Dash Logo" />
            Rhino Dash
          </a>
          <div className="nav-links">
            <a href="/" className="nav-link active">Home</a>
            <a href="/privacy-policy" className="nav-link">Privacy</a>
          </div>
        </div>
      </nav>

      <main className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="highlight">Rhino Dash</span>
            </h1>
            <p className="hero-subtitle">
              Charge through the wilds of Nepal in this thrilling 2D side-scrolling adventure! Race as a majestic rhino through stunning Chitwan landscapes, avoiding obstacles and collecting power-ups. Experience the heart-pounding excitement of wildlife conservation with every dash and jump!
            </p>
            <div className="hero-cta">
              <a href="#download" className="cta-button primary">
                Download Now
              </a>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Home;