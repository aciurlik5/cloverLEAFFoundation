import React, { useState } from 'react';
import styles from '../styles/EmailForm.module.css'

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    subject: '',
    name: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { to, subject, name, content } = emailData;
    const mailtoLink = `mailto:cloverleafsc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\n\nContent: ${content}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit}>
    <label  className={styles.emailFields}>
        <input type="text" name="name" value={emailData.name} onChange={handleChange} placeholder="Name (required)"required />
      </label>


      <label  className={styles.emailFields}>
        <input type="text" name="subject" value={emailData.subject} onChange={handleChange} placeholder="Subject (required)" required />
      </label>
   
      <br />
      <label className={styles.emailContent}>
        <textarea className={styles.emailContent} name="content" value={emailData.content} onChange={handleChange} placeholder="Content" required />
      </label>
      <br />
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
