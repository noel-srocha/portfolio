/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

interface NavigationDotsProps {
  active: string;
}

export default function NavigationDots({ active }: NavigationDotsProps) {
  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          // eslint-disable-next-line react/no-array-index-key
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#0077b6' } : { }}
        />
      ))}
    </div>
  );
}
