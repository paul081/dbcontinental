import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const apartments = [
  {
    name: 'The Obsidian Suite',
    price: '$1,200',
    sqm: '120',
    guests: '2',
    image: '/assets/continental_apartment.png',
    features: ['Panoramic City View', 'Private Butler', 'Smart Home Tech']
  }
];

const Apartments = () => {
  return (
    <div className="apartments-page">
      <header className="page-header">
        <div className="container">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hero-subtitle"
          >
            Sanctuaries of Sophistication
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="page-title"
          >
            The <span className="gold-text">Residences</span>
          </motion.h1>
          <p className="page-subtitle">
            A collection of meticulously designed suites and penthouses,
            combining minimalist aesthetics with ultimate luxury.
          </p>
        </div>
      </header>


      {/* Image Gallery Grid */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title text-center">Gallery of <span className="gold-text">Excellence</span></h2>
          <div className="event-grid">
            <div className="event-card">
              <div className="event-image-wrapper h-full">
                <img src="/assets/image2.jpeg" alt="Living Room" className="event-image h-full w-full object-cover" />
              </div>
            </div>
            <div className="event-card">
              <div className="event-image-wrapper h-full">
                <img src="/assets/image1.jpeg" alt="Gourmet Kitchen" className="event-image h-full w-full object-cover" />
              </div>
            </div>
            <div className="event-card">
              <div className="event-image-wrapper h-full">
                <img src="/assets/WhatsApp Image 2026-04-21 at 7.11.47 AM (1).jpeg" alt="Master Bedroom" className="event-image h-full w-full object-cover" />
              </div>
            </div>
            <div className="event-card">
              <div className="event-image-wrapper h-full">
                <img src="/assets/WhatsApp Image 2026-04-21 at 7.11.47 AM (3).jpeg" alt="Exterior View" className="event-image h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container">
          <div className="map-wrapper">
            <div className="map-info">
              <h2>
                Ultra-Prime <span className="gold-text">Location</span>
              </h2>
              <p>
                Situated in the heart of the Golden District, DB Continental
                offers immediate access to the city's finest dining, shopping,
                and business hubs.
              </p>
            </div>
            <div className="map-placeholder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1713600000000!5m2!1sen!2s"
                className="google-map"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apartments;
