import { useState } from 'react';
import { motion } from 'framer-motion';


const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
  };

  if (submitted) {
    return (
      <div className="page-header section-padding">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="success-message"
          >
            <h1 className="page-title gold-text">Request Received</h1>
            <p className="page-subtitle">Our concierge will contact you within the next 2 hours to confirm your reservation and discuss any bespoke requirements.</p>
            <button onClick={() => setSubmitted(false)} className="premium-button" style={{ marginTop: '3rem' }}>Make Another Request</button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <header className="page-header">
        <div className="container">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hero-subtitle"
          >
            Bespoke Arrangements
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="page-title"
          >
            Secure Your <span className="gold-text">Escape</span>
          </motion.h1>
          <p className="page-subtitle">Please provide your details below. Our team handles every reservation with the highest level of discretion and care.</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="booking-grid">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="booking-info"
            >
              <h2 className="section-title">The <span className="gold-text">Process</span></h2>
              <ul className="process-list">
                <li>
                  <div className="process-step">01</div>
                  <div>
                    <h4>Initial Request</h4>
                    <p>Submit your preferred dates and guest count.</p>
                  </div>
                </li>
                <li>
                  <div className="process-step">02</div>
                  <div>
                    <h4>Concierge Review</h4>
                    <p>Our team verifies availability and reviews special requests.</p>
                  </div>
                </li>
                <li>
                  <div className="process-step">03</div>
                  <div>
                    <h4>Final Confirmation</h4>
                    <p>Secure payment and digital keys are provided.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="booking-form-wrapper"
            >
              <form className="premium-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" required placeholder="Luxury Traveler" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" required placeholder="concierge@travel.com" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Service Type</label>
                  <select required>
                    <option>Apartment Booking</option>
                    <option>Club VIP Table</option>
                    <option>Private Event Space</option>
                    <option>All-Inclusive Experience</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Arrival Date</label>
                    <input type="date" required />
                  </div>
                  <div className="form-group">
                    <label>Guests</label>
                    <input type="number" min="1" max="10" defaultValue="1" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Special Requirements</label>
                  <textarea rows={4} placeholder="e.g. Dietary preferences, private transport, champagne on arrival..."></textarea>
                </div>

                <div className="booking-summary">
                  <p>By clicking "Submit Request", you agree to our membership terms and privacy policy.</p>
                </div>

                <button type="submit" className="premium-button w-full">Submit Request</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
