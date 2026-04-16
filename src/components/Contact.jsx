import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      _subject: "New Message from Portfolio Website!"
    };

    try {
      await fetch("https://formsubmit.co/ajax/saanvichaudhary46@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      setIsSuccess(true);
      e.target.reset();
      setTimeout(() => setIsSuccess(false), 4000);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ 
      padding: '10rem 0', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Abstract background blur drop */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        backgroundColor: 'var(--accent)',
        opacity: 0.1,
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass"
          style={{ 
            width: '100%', 
            maxWidth: '600px', 
            padding: '4rem', 
            borderRadius: '24px',
            textAlign: 'center'
          }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 400 }}>Get in Touch</h2>
          <p style={{ color: 'var(--text-main)', opacity: 0.8, marginBottom: '3rem', fontWeight: 300, fontSize: '1.1rem' }}>
            Interested in collaboration or just want to say hi? Drop a message.
          </p>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
            <div>
              <input type="text" name="name" placeholder="Name" required
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  borderRadius: '12px', 
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                  color: 'var(--text-main)',
                  fontFamily: 'inherit',
                  outline: 'none',
                  transition: 'var(--transition)'
                }} 
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px var(--accent)'}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              />
            </div>
            <div>
              <input type="email" name="email" placeholder="Email" required
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  borderRadius: '12px', 
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                  color: 'var(--text-main)',
                  fontFamily: 'inherit',
                  outline: 'none',
                  transition: 'var(--transition)'
                }} 
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px var(--accent)'}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              />
            </div>
            <div>
              <textarea name="message" rows="4" placeholder="Message" required
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  borderRadius: '12px', 
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                  color: 'var(--text-main)',
                  fontFamily: 'inherit',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'var(--transition)'
                }} 
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px var(--accent)'}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              />
            </div>

            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '1rem',
                backgroundColor: isSuccess ? '#48bb78' : 'var(--primary)',
                color: 'var(--bg-primary)',
                borderRadius: '12px',
                fontWeight: 500,
                fontSize: '1rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                border: 'none',
                marginTop: '1rem',
                transition: 'background-color 0.3s'
              }}
            >
              {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent!' : 'Send Message'}
            </motion.button>
          </form>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
