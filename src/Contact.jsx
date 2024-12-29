import React, { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import "./Contact.css";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // fi time senye w nos
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  //hay l function mosta3male ktir bte5od l input l 3am yenkatab w bet8ayro elo la7ala, w eza fi error kamen betzidon

  //Capture Input Changes:

  // When something is typed into a form field, it captures:

  // The field's name (like "username" or "email")
  // The new value that was just typed

  // Update Form Data:

  // It takes the existing form data and updates just the changed field
  // Imagine it like a photocopier that makes a copy of your current form, but changes only one specific line

  // Visualization:
  // Old Form Data     Input Change     New Form Data
  // {                   username:      {
  //   email: "a@b.com"  → "johndoe"     email: "a@b.com"
  //   username: ""                      username: "johndoe"
  // }                                  }
  // Error Clearing:

  // If there was a previous error for this specific field, it clears that error
  // It's like an automatic eraser that removes error messages as you start typing correctly
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-wrapper">
        <h2>Contact Us</h2>

        {submitted ? (
          <div className="success-message">
            Thank you for your message! We'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? "error" : ""}
              />
              {errors.subject && (
                <p className="error-message">{errors.subject}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "error" : ""}
              />
              {errors.message && (
                <p className="error-message">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? (
                <span className="button-content">
                  <Loader2 className="spinner" />
                  Sending...
                </span>
              ) : (
                <span className="button-content">
                  <Send />
                  Send Message
                </span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
