import classNames from 'classnames';
import styles from './features.module.scss';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const Features = () => {
    return (
    <div className={classNames(styles.root)} id="features">
       
       <h1 className={styles.title}>Features</h1>
        
    </div>
    )
};
