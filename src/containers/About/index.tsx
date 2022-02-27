import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

import { images } from '../../constants';

const abouts = [
  {
    title: 'Front-End Development',
    description: 'I\'m a good front-end web developer.',
    imageUrl: images.about01,
  },
  {
    title: 'Leadership',
    description: 'I inspire others to be batter than they already are.',
    imageUrl: images.about02,
  },
  {
    title: 'Highly Adaptable',
    description: 'It\'s a habit of mine to keep studying new technologies and tools to add to my belt.',
    imageUrl: images.about03,
  },
];

export default function About() {
  return (
    <>
      <h2 className="head-text">
        I know That
        <span>Good Design </span>
        <br />
        means
        <span> Good Business</span>
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
            <img src={about.imageUrl} alt={about.title} />
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
