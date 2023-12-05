import classNames from 'classnames';
import styles from './card.module.scss';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

import React, { useState } from "react";
import { useSpring, animated } from "react-spring";


interface CardProps {
  img: string;
  title : string;
  description: string;
}


const Card = ({ img, title , description } : CardProps) => {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });

  return (
    <animated.div
      className={styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
    <div style={{backgroundColor : 'white'}}>
      <img src={img} alt="" className={styles.img}/>
      <h2>
        {title}
      </h2>
      <p className={styles.par}>
        {description}
      </p>
      <div className={styles.btnn}>
      </div>
    </div>
    </animated.div>
  );
}

export default Card;

