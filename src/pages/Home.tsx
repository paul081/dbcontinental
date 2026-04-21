import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

const heroVideos = [
  {
    src: '/assets/video1.mp4',
    tagline: 'Redefining the Art of Living',
    title: 'DB Continental',
    highlight: 'Experience Excellence.',
  }
];

const SLIDE_DURATION = 7000;

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startProgress = () => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);
    progressRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 0;
        return p + (100 / (SLIDE_DURATION / 100));
      });
    }, 100);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
    startProgress();
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % heroVideos.length);
      startProgress();
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    if (heroVideos.length > 1) {
      startProgress();
      intervalRef.current = setInterval(() => {
        setCurrent((c) => (c + 1) % heroVideos.length);
        startProgress();
      }, SLIDE_DURATION);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [heroVideos.length]);

  return (
    <div className="home-page">
      {/* Hero Section — Video Carousel */}
      <section className="hero">
        {/* Video layers */}
        {heroVideos.map((video, index) => (
          <video
            key={index}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`hero-video-bg hero-video-slide ${index === current ? 'active' : ''}`}
          >
            <source src={video.src} type="video/mp4" />
          </video>
        ))}

        {/* Dark overlay */}
        <div className="hero-overlay"></div>

        {/* Text overlay */}
        <div className="container hero-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="hero-text-block"
            >
              <span className="hero-subtitle">{heroVideos[current].tagline}</span>
              <h1 className="hero-title">
                {heroVideos[current].title} <br />
                <span className="gold-text">{heroVideos[current].highlight}</span>
              </h1>
              <Link to="/booking" className="premium-button">
                Book Your Experience
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        {heroVideos.length > 1 && (
          <div className="hero-controls">
            {heroVideos.map((_, index) => (
              <button
                key={index}
                className={`hero-dot ${index === current ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <span
                  className="hero-dot-fill"
                  style={{ width: index === current ? `${progress}%` : index < current ? '100%' : '0%' }}
                />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container">
          <div className="intro-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="intro-text"
            >
              <h2 className="section-title">A World of <span className="gold-text">Privilege</span></h2>
              <p>DB Continental represents the pinnacle of luxury, merging the vibrant energy of a world-class private club with the serene sophistication of elite residential living.</p>
              <p>Every detail is meticulously curated to provide an unparalleled experience for our distinguished guests and residents.</p>
              <div className="features">
                <div className="feature-item">
                  <Star className="gold-text" size={20} />
                  <span>24/7 Bespoke Concierge</span>
                </div>
                <div className="feature-item">
                  <Star className="gold-text" size={20} />
                  <span>Private Access Membership</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="intro-image"
            >
              <img src="/assets/image2.jpeg" alt="Luxury Living Room" className="rounded-img" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Preview Sections */}
      <section className="preview-container">
        <div className="preview-item club-preview">
          <div className="preview-overlay"></div>
          <div className="preview-content">
            <h3 className="preview-title">The Club</h3>
            <p>Where the night comes alive with cinematic elegance.</p>
            <Link to="/club" className="text-button">
              Explore Events <ChevronRight size={16} />
            </Link>
          </div>
        </div>
        <div className="preview-item apartments-preview">
          <div className="preview-overlay"></div>
          <div className="preview-content">
            <h3 className="preview-title">The Apartments</h3>
            <p>A sanctuary of minimalist design and comfort.</p>
            <Link to="/apartments" className="text-button">
              View Residences <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default Home;
