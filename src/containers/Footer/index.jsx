import React, { useState } from 'react';

import { client } from '../../client';
import { images } from '../../constants';
import { MotionWrap, AppWrap } from '../../wrapper';

import styles from './styles.module.scss';

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const { name, email, message } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const contact = {
      _type: 'contact',
      name,
      email,
      message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">
        Grab a drink and
        <span> let&apos;s talk</span>
      </h2>
      <div className={styles.app__footer_cards}>
        <div className={styles.app__footer_card}>
          <img src={images.email} alt="email" />
          <a
            href="mailto:manoelrocha.n93@gmail.com"
            className="p-text"
          >
            manoelrocha.n93@gmail.com
          </a>
        </div>
        <div className={styles.app__footer_card}>
          <img src={images.mobile} alt="mobile" />
          <a
            href="tel: +55 (079) 99870-1908"
            className="p-text"
          >
            +55 (079) 99870-1908
          </a>
        </div>
      </div>

      {!isFormSubmitted
        ? (
          <div className={`${styles.app__footer_form} app__flex`}>
            <div className="app__flex">
              <input
                type="text"
                className="p-text"
                placeholder="Your name..."
                value={name}
                onChange={handleChangeInput}
                name="name"
              />
              <input
                type="email"
                className="p-text"
                placeholder="Your email..."
                value={email}
                onChange={handleChangeInput}
                name="email"
              />
            </div>
            <div>
              <textarea
                name="message"
                className="p-text"
                placeholder="Your message..."
                value={message}
                onChange={handleChangeInput}
              />
            </div>
            <button
              type="button"
              className="p-text"
              onClick={handleSubmit}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        )
        : (
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, 'app__contact'),
  'contact',
  'app__darkGraybg',
);
