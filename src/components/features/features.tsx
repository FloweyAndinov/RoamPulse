import classNames from 'classnames';
import styles from './features.module.scss';

import {Carousel} from 'react-bootstrap'

import Carousel3D from 'react-spring-3d-carousel';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const slides = [
    {
      key: "key1",
      content: <img src="https://picsum.photos/800/800/?random" alt="1" />
    },
    {
      key: "key2",
      content: <img src="https://picsum.photos/800/800/?random" alt="2" />
    },
    {
      key: "key3",
      content: <img src="https://picsum.photos/600/800/?random" alt="3" />
    }
  ];

  

export const Features = () => {
    return (
    <div className={classNames(styles.root)} id="features" style={{height : '50vh', width : '50vw'}}>
       
       <h1 className={styles.title}>Features</h1>
       {/* <Carousel className={classNames(styles.carousel , "py-5")}>
        <Carousel.Item>
            LALALALLA
        </Carousel.Item>

        <Carousel.Item>
            HAHAHHAHAHAH
        </Carousel.Item>
       </Carousel> */}

    <Carousel3D slides={slides} showNavigation />
        
    </div>
    )
};
function uuidv4() {
    return ('Function not implemented.');
}

