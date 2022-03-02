/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import styles from './styles.module.scss';

function Testimonial() {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(testimonialsQuery).then((data) => {
      setTestimonials(data);
    });
    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const test = testimonials[currentIndex];

  return (
    <>
      <h2 className="head-text">
        What people say
        <span> about me</span>
      </h2>
      {testimonials.length && (
        <>
          <div
            className={`${styles.app__testimonial_item} app__flex`}
          >
            {/* <img
              src={urlFor(test.imgUrl)}
              alt="testimonial"
            /> */}
            <div className={styles.app__testimonial_content}>
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
                <h6 className="p-text">{test.source}</h6>
              </div>
            </div>
          </div>
          <div className={`${styles.app__testimonial_btns} app__flex`}>
            <div
              className="app__flex"
              onClick={() => handleClick(currentIndex === 0
                ? testimonials.length - 1 : currentIndex - 1)}
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() => handleClick(
                currentIndex === testimonials.length - 1
                  ? 0 : currentIndex + 1,
              )}
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className={`${styles.app__testimonial_brands} app__flex`}>
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            // eslint-disable-next-line no-underscore-dangle
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
