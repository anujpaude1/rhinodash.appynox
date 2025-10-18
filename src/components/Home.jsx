import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <main className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="highlight">Rhino Dash</span>
            </h1>
            <p className="hero-subtitle">
              Dash through the wilds of Nepal in this thrilling 2D adventure! Run as a mighty rhino across vibrant Chitwan streets, dodge obstacles, collect power-ups, and feel the rush of wildlife conservation with every leap!

            </p>
            <div className="hero-cta">
              <a href="#download" className="cta-button primary">
                Download Now
              </a>
            </div>
          </div>
        </div>
      </main>

      <nav className="dock">
        <div className="dock-container">
          <a href="/" className="dock-item active">
            <span>Home</span>
          </a>
          <a href="/privacy" className="dock-item">
            <span>Privacy</span>
          </a>
        </div>
      </nav>

    </div>
  );
};

export default Home;