import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 id="about-title" className="head-text">
        Reasons
        <span> Why </span>
        <br />
        You should
        <span> Hire Me</span>
      </h2>
      <div className={styles.app__profiles}>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className={styles.app__profile_item}
            // eslint-disable-next-line react/no-array-index-key
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__darkGraybg',
);
