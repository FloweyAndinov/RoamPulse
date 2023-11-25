import classNames from 'classnames';
import styles from './new-component.module.scss';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const NewComponent = () => {
    return (
    <div className={classNames(styles.root)}>

        NewComponent

    </div>
    )
};
