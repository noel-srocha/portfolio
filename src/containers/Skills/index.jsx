import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import styles from './styles.module.scss';

function Skills() {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const expQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(expQuery).then((data) => {
      setExperiences(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
      <div className={styles.app__skills_container}>
        <motion.div
          className={styles.app__skills_list}
        >
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className={`${styles.app__skills_item} app__flex`}
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className={styles.app__skills_exp}>
          {experiences?.map((experience) => (
            <motion.div
              className={styles.app__skills_exp_item}
              key={experience.year}
            >
              <div className={styles.app__skills_exp_year}>
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className={styles.app__skills_exp_works}>
                {experience.works.map((work) => (
                  <div key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className={styles.app__skills_exp_work}
                      data-tip={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <h5 className="p-text">{work.company}</h5>
                      <p className="p-text">{work.desc}</p>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__darkGraybg',
);
