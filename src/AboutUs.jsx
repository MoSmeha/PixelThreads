import React, { useState } from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Phone,
  MessageCircle,
} from "lucide-react";
import imagePath from "/images/PixelThreads.png";
import ContactForm from "./Contact";
import "./AboutUs.css";

const AboutUsPage = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="about-us-container">
      {/* Left Half - Image */}
      <div className="about-us-image-container">
        <img src={imagePath} alt="About Us" className="about-us-image" />
      </div>

      {/* Right Half - Content */}
      <div className="about-us-content-container">
        <h1 className="about-us-title">Pixel Threads</h1>

        <div className="about-us-goal-section">
          <h2 className="about-us-goal-title">Our Goal</h2>
          <p className="about-us-goal-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            magni dolores enim, ex sit minus eum. Voluptas magni, sunt
            praesentium dolores repudiandae vitae natus nobis neque id, officiis
            fuga placeat!
          </p>
        </div>

        {/* Social Media Links */}
        <div className="social-media-links">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a href="https://Phone.com" target="_blank" rel="noopener noreferrer">
            <Phone />
          </a>
        </div>

        {/* Contact Us Button */}
        <button
          onClick={() => setShowContactForm(true)}
          className="contact-us-button"
        >
          <MessageCircle />
          Contact Us
        </button>

        {/* Conditionally Render Contact Form */}
        {showContactForm && (
          <div className="contact-form-modal">
            <div className="contact-form-modal-content">
              <button
                onClick={() => setShowContactForm(false)}
                className="contact-form-close-button"
              >
                ✕
              </button>
              <ContactForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUsPage;
