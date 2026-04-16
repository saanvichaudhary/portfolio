// import React, { useRef, useState } from 'react';
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import campus from '../assets/campus vit.jpg';
// import hero from '../assets/hero.png';
// import hydrogel from '../assets/Hydrogel TENG Project.jpg';
// import lab from '../assets/lab work.jpg';
// import profile from '../assets/profile.png';
// import sensor from '../assets/sensor system setup.jpg';

// const About = () => {
//   const containerRef = useRef(null);
//   const dragConstraintsRef = useRef(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   const galleryY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
//   const images = [
//     { src: hydrogel, caption: 'Hydrogel TENG Project' },
//     { src: sensor, caption: 'Sensor System Setup' },
//     { src: lab, caption: 'Lab Work' },
//     { src: campus, caption: 'Campus – VIT Vellore' },
//     { src: hydrogel, caption: 'Hydrogel Project' },
//     { src: hydrogel, caption: 'Hydrogel Project' }
//   ];

//   // const images = [
//   //   { src: 'https://in.pinterest.com/pin/684969424618534122', caption: 'vi' },
//   //   { src: 'https://source.unsplash.com/random/400x500/?sensor,hardware', caption: 'Sensor System Setup' },
//   //   { src: 'https://source.unsplash.com/random/400x500/?laboratory', caption: 'Lab Work' },
//   //   { src: 'D:/portfolio website/src/assets/campus vit.jpg', caption: 'Campus – VIT Vellore' },
//   //   { src: 'https://source.unsplash.com/random/400x500/?notes,research', caption: 'Research Documentation' },
//   // ];

//   return (
//     <section id="about" ref={containerRef} style={{ padding: '8rem 0 4rem 0', position: 'relative', overflow: 'hidden' }}>
//       <div className="container" style={{
//         display: 'flex',
//         alignItems: 'flex-start',
//         gap: '6rem',
//         flexWrap: 'wrap'
//       }}>

//         {/* Left Text Box */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//           style={{ flex: '1 1 450px', zIndex: 10 }}
//         >
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1, duration: 0.8 }}
//             style={{ fontSize: '3rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary)', letterSpacing: '-0.03em' }}
//           >
//             About
//           </motion.h2>

//           <motion.h3
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             style={{ fontSize: '1.1rem', fontWeight: 400, color: 'var(--accent)', marginBottom: '2.5rem', letterSpacing: '0.02em' }}
//           >
//             Electronics & Biomedical Engineer | Machine Learning Engineer
//           </motion.h3>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: 1.8, maxWidth: '500px', fontWeight: 300, marginBottom: '3rem' }}
//           >
//             <p>
//               Saanvi Chaudhary is an Electronics and Communication Engineering student specializing in Biomedical Engineering at VIT Vellore. Her work focuses on intelligent systems at the intersection of nanoenergy, biosensing, and machine learning.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//             style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}
//           >
//             {[
//               "Nanoenergy & Wearable Sensors",
//               "Biomedical Signal Systems",
//               "Machine Learning & AI",
//               "Renewable Energy Systems"
//             ].map((label, i) => (
//               <span key={i} style={{
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 padding: '0.6rem 1.2rem',
//                 border: '1px solid var(--border-light)',
//                 borderRadius: '50px',
//                 fontSize: '0.85rem',
//                 color: 'var(--primary)',
//                 letterSpacing: '0.03em',
//                 width: 'fit-content'
//               }}>
//                 <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent)', borderRadius: '50%', marginRight: '8px' }} />
//                 {label}
//               </span>
//             ))}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.7, duration: 1 }}
//             style={{ marginTop: '4rem', fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}
//           >
//             Based in Vellore Institute of Technology, India
//           </motion.div>

//         </motion.div>

//         {/* Right Gallery */}
//         <motion.div
//           style={{ flex: '1 1 500px', y: galleryY, position: 'relative' }}
//           ref={dragConstraintsRef}
//         >
//           <motion.div
//             drag="x"
//             dragConstraints={dragConstraintsRef}
//             style={{
//               display: 'flex',
//               gap: '2rem',
//               cursor: 'grab',
//               paddingRight: '20vw', // Extra scroll space
//             }}
//             whileTap={{ cursor: 'grabbing' }}
//           >
//             {images.map((img, idx) => (
//               <motion.div
//                 key={idx}
//                 onHoverStart={() => setHoveredIndex(idx)}
//                 onHoverEnd={() => setHoveredIndex(null)}
//                 whileHover={{ scale: 1.02, rotate: (idx % 2 === 0 ? 1 : -1) }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//                 style={{
//                   flexShrink: 0,
//                   width: '320px',
//                   aspectRatio: '3/4',
//                   position: 'relative',
//                   borderRadius: '20px',
//                   overflow: 'hidden',
//                   boxShadow: 'var(--shadow-subtle)',
//                 }}
//               >
//                 <div style={{
//                   width: '100%',
//                   height: '100%',
//                   backgroundImage: `url(${img.src})`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   filter: 'grayscale(15%) sepia(10%) contrast(1.05)',
//                   transition: 'transform 0.4s ease',
//                   transform: hoveredIndex === idx ? 'scale(1.05)' : 'scale(1)'
//                 }} />

//                 {/* Embedded image grain */}
//                 <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")', opacity: 0.15, pointerEvents: 'none' }} />

//                 <AnimatePresence>
//                   {hoveredIndex === idx && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 10 }}
//                       style={{
//                         position: 'absolute',
//                         bottom: '1.5rem',
//                         left: '1.5rem',
//                         right: '1.5rem',
//                         padding: '0.8rem 1rem',
//                         backgroundColor: 'rgba(245, 241, 234, 0.85)',
//                         backdropFilter: 'blur(8px)',
//                         borderRadius: '12px',
//                         fontSize: '0.8rem',
//                         fontWeight: 500,
//                         color: 'var(--primary)',
//                         letterSpacing: '0.02em',
//                         pointerEvents: 'none'
//                       }}
//                     >
//                       {img.caption}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Subtle drag prompt */}
//           <div style={{ position: 'absolute', bottom: '-3rem', right: '0', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', fontStyle: 'italic' }}>
//             [ Drag to explore ]
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default About;




import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pfp1 from '../assets/pfp2.jpeg';
import me from '../assets/me1.jpg';
import engg from '../assets/engg_day.png';
import icnan1 from '../assets/icnan1.jpg';
import iot1 from '../assets/iot award.jpg';
import iot2 from '../assets/iot award2.jpg';
import socpros from '../assets/socpros.jpeg';


/* ── Fading crossfade gallery ── */
const FadingGallery = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <AnimatePresence mode="crossfade">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'absolute', inset: 0 }}
        >
          {/* Photo */}
          <div style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${images[current].src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(15%) sepia(10%) contrast(1.06) brightness(0.97)',
          }} />

          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            padding: '2rem 1.4rem 1.2rem',
            background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)',
          }}>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              style={{
                margin: 0,
                fontSize: '0.78rem',
                color: 'rgba(255,255,255,0.85)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontWeight: 400,
              }}
            >
              {images[current].caption}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        display: 'flex',
        gap: '6px',
        zIndex: 10,
      }}>
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? '18px' : '6px',
              height: '6px',
              borderRadius: '50px',
              backgroundColor: i === current ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.35)',
              transition: 'all 0.4s ease',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
};

/* ── Main About component ── */
const About = () => {
  const containerRef = useRef(null);

  const images = [
    { src: me, caption: 'SocPros2025' },
    { src: socpros, caption: 'SocPros2025' },
    { src: pfp1, caption: 'ICNAN 2025' },
    { src: iot1, caption: 'Best IoT Project of the Year Award' },
    { src: icnan1, caption: 'ICNAN 2025' },
    { src: engg, caption: 'Engineers Day' },
    { src: iot2, caption: 'SENSE Department' },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      style={{ padding: '8rem 0 4rem 0', position: 'relative', overflow: 'hidden' }}
    >
      <div className="container" style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '5rem',
        flexWrap: 'wrap',
      }}>

        {/* ── Left Text ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="about-left-col"
          style={{ flex: '1 1 420px', zIndex: 10 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            style={{
              fontSize: '3rem',
              fontWeight: 600,
              marginBottom: '0.5rem',
              color: 'var(--primary)',
              letterSpacing: '-0.03em',
            }}
          >
            About
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontSize: '1.1rem',
              fontWeight: 400,
              color: 'var(--accent)',
              marginBottom: '2.5rem',
              letterSpacing: '0.02em',
            }}
          >
            Electronics & Biomedical Engineer | AI & Machine Learning
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-main)',
              lineHeight: 1.8,
              maxWidth: '500px',
              fontWeight: 300,
              marginBottom: '3rem',
            }}
          >
            <p>
              I am an Electronics and Communication Engineering
              student specializing in Biomedical Engineering at VIT Vellore. My
              work focuses on intelligent systems at the intersection of
              nanoenergy, biosensing, and machine learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="about-skills-wrapper"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}
          >
            {[
              "Nanoenergy & Wearable Sensors",
              "Biomedical Signal Systems",
              "Machine Learning & AI",
              "Renewable Energy Systems",
            ].map((label, i) => (
              <span key={i} style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.6rem 1.2rem',
                border: '1px solid var(--border-light)',
                borderRadius: '50px',
                fontSize: '0.85rem',
                color: 'var(--primary)',
                letterSpacing: '0.03em',
                width: 'fit-content',
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: 'var(--accent)',
                  borderRadius: '50%',
                  marginRight: '8px',
                }} />
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 1 }}
            style={{
              marginTop: '4rem',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Based in Vellore Institute of Technology, India
          </motion.div>
        </motion.div>

        {/* ── Right: Fade transition gallery ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            flex: '1 1 340px',
            position: 'relative',
            aspectRatio: '2/3',
            borderRadius: '24px',
            overflow: 'hidden',
            maxHeight: '600px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.10)',
            alignSelf: 'center',
            zIndex: 10000,
          }}
        >
          <FadingGallery images={images} />
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container {
            flex-direction: column;
          }
          .about-left-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .about-skills-wrapper {
            align-items: center;
          }
          #about .container > div:last-child {
            width: 100%;
            max-width: 320px;
            height: 480px !important;
            margin: 2rem auto 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default About;