import classNames from 'classnames';
import styles from './features.module.scss';

import { useState, useEffect } from "react";
import { config } from "react-spring";

import { v4 as uuidv4 } from 'uuid';


import bg from "../../assets/featuresbg.png"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import Card from '../card/card';
import {Carousel} from '../carousel/carousel';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export default function Features () {

  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card img="https://ik.imgkit.net/3vlqs5axxjf/PCWW/uploadedImages/Articles/News/2023/June/LIH%20generative%20ai%20map%20interface.jpg" title="AI Maps" description="We help you choose your destination." />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card img="https://www.reviewme.com/wp-content/uploads/2019/07/reviews.png" title="Reviews"  description="Hear what the others say." />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card img="https://support-cdn.route4me.com/2020/09/5f32c0a0-route-optimization-for-the-shortest-route.jpg" title="Route Optimization" description="Find the most efficient route to your destination." />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card img="https://www.enneproject.eu/wp-content/uploads/2020/11/integration-5192458_1920-1024x724.jpg" title="Social Integration" description="Share your journey with friends on social media." />
      )
    }
  ];
    return (
    <div className={classNames(styles.root)} id="features" style={{ backgroundImage : `url(${bg})`}}>
       
       <h1 className={styles.title}>Features</h1>   

       <Carousel cards={cards} height="30vw"
        width="50%"
        margin="10em auto 10em"
        offset={2}
        showArrows={false}/>
        
    </div>
    )
};


