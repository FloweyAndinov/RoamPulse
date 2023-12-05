import classNames from 'classnames';
import styles from './header.module.scss';
import logo from "../../assets/logo.png"
import bg from "../../assets/headerbg2.png"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const Header = () => {

    const scrollToFeatures = () => {
        const featuresElement = document.getElementById('features');
        featuresElement?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
    <div className={classNames(styles.root)} style={{ backgroundImage : `url(${bg})`}} id="header">
        <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.logoimg}/>
        </div>
        <h1 className={styles.herotitle}>RoamPulse</h1>
        <h2 className={styles.herotitle2}>The Best Travel Assistant</h2>
        <div>
          
        <button className={classNames(styles.seemorebutton)} onClick={scrollToFeatures}>
            Click to see more!
        </button>
        </div>
    </div>
    )
};
