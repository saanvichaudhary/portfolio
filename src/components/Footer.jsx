// import React from 'react';

// const Footer = () => {
//   return (
//     <footer style={{ 
//       padding: '2rem 0', 
//       borderTop: '1px solid var(--border-light)',
//       textAlign: 'center',
//       backgroundColor: 'var(--bg-secondary)',
//       color: 'var(--text-muted)',
//       fontSize: '0.9rem'
//     }}>
//       <div className="container">
//         <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
//         <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>Designed with minimal aesthetics & built with React.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '2rem 0 2rem 0',
      borderTop: '1px solid var(--border-light)',
      textAlign: 'center',
      backgroundColor: 'var(--bg-secondary)',
      color: 'var(--text-muted)'
    }}>
      <div className="container">

        {/* Outro Line */}
        {/* <p style={{
          fontSize: '1rem',
          fontStyle: 'italic',
          lineHeight: 1.6,
          opacity: 0.8,
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          I know you desperate for a change, let the pen glide <br />
          But the only real change come from inside
        </p> */}

        {/* <p style={{
          marginTop: '0.5rem',
          fontSize: '0.8rem',
          opacity: 0.6
        }}>
          — J. Cole
        </p> */}

        {/* Footer Info */}
        <div style={{ marginTop: '0.1rem', fontSize: '0.85rem' }}>
          <p>© {new Date().getFullYear()} Saanvi Chaudhary<br></br>All rights reserved.</p>
          <p style={{ marginTop: '0.4rem', fontSize: '0.75rem' }}>
            Designed with Figma & built with React and Node.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;