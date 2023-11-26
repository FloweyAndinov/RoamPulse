import classNames from 'classnames';
import styles from './carousel.module.scss';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import { useState, useEffect } from 'react';
import Carousel3D from 'react-spring-3d-carousel';
import { config } from "react-spring";
import Card from '../card/card';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const Carousel = (props : any) => {

    const table = props.cards.map((element : any, index : any) => {
        return { ...element, onClick: () => setGoToSlide(index) };
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
        animationConfig={config.stiff}
      />
        

    </div>
    )
};
