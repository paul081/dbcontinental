import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              DB <span className="gold-text">CONTINENTAL</span>
            </Link>
            <p style={{ marginTop: '2rem', opacity: 0.6, fontSize: '0.9rem', maxWidth: '300px' }}>
              The definitive luxury destination for the modern connoisseur.
              Combining elite residences with the world's most exclusive social club.
            </p>
          </div>





          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li className="footer-link">📍 100 Golden Blvd, Metropolis</li>
              <li className="footer-link">📞 +1 (800) LUX-CLUB</li>
              <li className="footer-link">✉ concierge@dbcontinental.com</li>
            </ul>
            <div className="social-links" style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
              <span className="footer-link" style={{ cursor: 'pointer', fontSize: '1.2rem' }}>📷</span>
              <span className="footer-link" style={{ cursor: 'pointer', fontSize: '1.2rem' }}>🌐</span>
              <span className="footer-link" style={{ cursor: 'pointer', fontSize: '1.2rem' }}>🔗</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} DB Continental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
