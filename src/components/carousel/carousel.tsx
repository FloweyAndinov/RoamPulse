import classNames from 'classnames';
import styles from './carousel.module.scss';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import { useState, useEffect, useRef } from 'react';
import Carousel3D from 'react-spring-3d-carousel';
import { config } from "react-spring";
import Card from '../card/card';
import { Link } from 'react-router-dom';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const Carousel = (props : any) => {

  const [lastIndex, setLastIndex] = useState(0);
  
  const lastIndexRef = useRef(lastIndex);

  useEffect(() => {
    lastIndexRef.current = lastIndex;
  }, [lastIndex]);
  
  const table = props.cards.map((element : any, index : any) => {
    return { 
      ...element, 
      onClick: () => {
        if (index === lastIndexRef.current) {
          window.location.href = "/#features";
        }
        else {
          setLastIndex(index); 
          setGoToSlide(index);
        }
      }
    };
  });

  
      const [offsetRadius, setOffsetRadius] = useState(2);
      const [showArrows, setShowArrows] = useState(false);
      const [goToSlide, setGoToSlide] = useState(0);
      const [cards] = useState(table);

        useEffect(() => {
            setOffsetRadius(props.offset);
             setShowArrows(props.showArrows);
         },
          [props.offset, props.showArrows]);


    return (
    <div style={{ width: props.width, height: props.height, margin: props.margin}}>
      
        <Carousel3D
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
        

    </div>
    )
};
