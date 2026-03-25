import "../styles/home.css";

const Home = () => {
  return (
    <>
      {/* Welcome Section */}
      <h2 style={{ textAlign: "center" }}>WELCOME!</h2>
      <p style={{ textAlign: "center" }}>
        Get all your needs in few clicks
      </p>

      {/* Contact Us Section */}
      <section className="contact-section">
        <h2 style={{ textAlign: "center" }}>Contact Us</h2>
        <p style={{ textAlign: "center" }}>
          You can reach us via phone calls, email, or social platforms.
        </p>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left */}
          <div className="contact-item left">
            <p>📞</p>
            <a href="tel:+2347030784520">+234 703 078 4520</a>
            <br />
            <a href="tel:+2349016962468">+234 901 696 2468</a>
          </div>

          {/* Center */}
          <div className="contact-item center">
            <p>✉️</p>
            <a href="mailto:lifebarinua@gmail.com">
              lifebarinua@gmail.com
            </a>
          </div>

          {/* Right */}
          <div className="contact-item right">
            <p>🌐 Connect with us</p>
            <a
              href="https://web.facebook.com/lifebarinua"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <br />
            <a
              href="https://www.instagram.com/life_barinua"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/dum-barinua-9b5716191/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;