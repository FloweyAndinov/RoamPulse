import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './Contacts.module.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    window.location.href = '/';
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you. Fill out the form below to get in touch with us.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contacts;