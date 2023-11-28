import classNames from 'classnames';
import styles from './community-reactions.module.scss';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import { Carousel } from 'react-bootstrap';
import ivan from "src/assets/ivan.png"
import alex from "src/assets/alex.png"

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const CommunityReactions = () => {
    return (
    <div className={classNames(styles.root)}>
        <div className={styles.title}>
        <h1>Community Reactions</h1>
        </div>
        <div>
            <Carousel>
                <Carousel.Item>
                    <div style={{marginBottom : '10rem'}}>
                        <div className={styles.carouselImage}>
                            <img  src={ivan} alt=""/>
                        </div>
                        <div>
                        <h1>Иван Иванов</h1>
                        </div>
                        <div>
                        <h2>insert mnenie tuk insert mnenie tuk insert mnenie tuk insert mnenie tuk</h2>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div style={{marginBottom : '10rem'}}> 
                        <div className={styles.carouselImage}>
                            <img  src={alex} alt="" />
                        </div>
                        <div>
                        <h1>Алекс Стоянов</h1>
                        </div>
                        <div>
                        <h2>insert mnenie tuk insert mnenie tuk insert mnenie tuk insert mnenie tuk</h2>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    </div>
    )
};
