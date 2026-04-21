import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alexander Sterling',
    role: 'CEO, Sterling Global',
    text: 'DB Continental is more than a residence; it is a statement of excellence. The attention to detail and the exclusive atmosphere are unmatched.',
    rating: 5
  },
  {
    name: 'Elena Rossi',
    role: 'Fashion Designer',
    text: 'The Club is my favorite escape. The design, the music, and the people create a cinematic experience every single night.',
    rating: 5
  },
  {
    name: 'Marcus Chen',
    role: 'Venture Capitalist',
    text: 'Seamless service and a minimalist aesthetic that clears the mind. Truly the finest living experience in the city.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="section-title text-center">Voices of <span className="gold-text">Exclusivity</span></h2>
        <div className="testimonial-grid">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="testimonial-card"
            >
              <div className="rating">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="gold-text" />
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <span className="author-name">{t.name}</span>
                <span className="author-role">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
