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
        <Card imagee="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagee="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagee="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagee="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagee="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagee="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagee="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      )
    }
  ];
    return (
    <div className={classNames(styles.root)} id="features" style={{ backgroundImage : `url(${bg})`}}>
       
       <h1 className={styles.title}>Features</h1>   

       <Carousel cards={cards} height="500px"
        width="30%"
        margin="10em auto 10em"
        offset={2}
        showArrows={false}/>
        
    </div>
    )
};


