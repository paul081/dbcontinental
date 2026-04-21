import { motion } from 'framer-motion';

const services = [
  {
    title: 'Professional DJ',
    description: 'Immerse yourself in curated soundscapes by world-class DJs.',
    image: '/assets/dj.jpeg'
  },
  {
    title: 'Elite Bartender',
    description: 'Crafted cocktails and premium spirits served by expert mixologists.',
    image: '/assets/bartender.jpeg'
  },
  {
    title: 'professional Security',
    description: 'Discreet and professional security ensuring a safe, exclusive environment.',
    image: '/assets/security.jpeg'
  },
  {
    title: 'special Barbecue',
    description: 'Exquisite culinary experiences with our premium outdoor grilling service.',
    image: '/assets/barbecue.jpeg'
  }
];

const Club = () => {
  return (
    <div className="club-page">
      <header className="page-header">
        <div className="container">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hero-subtitle"
          >
            The Realm of Night
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="page-title"
          >
            The <span className="gold-text">Club</span>
          </motion.h1>
          <p className="page-subtitle">Experience the extraordinary. Our private club offers a sensory escape into a world of curated sound and visual mastery.</p>
        </div>
      </header>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title text-center">Our Club <span className="gold-text">Service</span></h2>
          <div className="event-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="event-card"
              >
                <div className="event-image-wrapper">
                  <img src={service.image} alt={service.title} className="event-image" />
                </div>
                <div className="event-info">
                  <h3 className="event-title">{service.title}</h3>
                  <p className="event-desc">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="section-padding secondary-bg">
        <div className="container">
          <div className="form-container">
            <div className="form-content">
              <h2 className="section-title">Inquire About <span className="gold-text">Membership</span></h2>
              <p>Join the elite. Our membership is by invitation or application only. Start your journey below.</p>
              
              <form className="premium-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label>Service Interested In</label>
                  <select>
                    <option>General Membership</option>
                    <option>VIP Access</option>
                    <option>Corporate Partnership</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Your Message</label>
                  <textarea rows={4} placeholder="How can we assist you?"></textarea>
                </div>
                <button type="submit" className="premium-button w-full">Request Invitation</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Club;
