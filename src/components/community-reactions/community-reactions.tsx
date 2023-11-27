import classNames from 'classnames';
import styles from './community-reactions.module.scss';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import { Carousel } from 'react-bootstrap';

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
                    Mamamata
                </Carousel.Item>
                <Carousel.Item>
                    Mamamata
                </Carousel.Item>
            </Carousel>
        </div>
    </div>
    )
};
