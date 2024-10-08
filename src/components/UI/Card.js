import React from 'react';

import style from './Card.module.css';

const Card = (props) => {
  const classes = `${style.card} ${props.className}`;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
