import classNames from 'classnames';
import styles from './our-journey.module.scss';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import line from "src/assets/journeyline.png"
import end from "src/assets/end.png"
import bg from "src/assets/our_journeybg.png"
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const OurJourney = () => {
    return (
    <div className={classNames(styles.root)} style={{backgroundImage : `url(${bg})`}}>

      <div className={styles.title}>
        <h1>Our Journey</h1>
      </div>
      <div className="mx-auto justify-content-between" style={{display : 'flex'}}>
        <div style={{width : '40em'}} className={classNames(styles.chapterleft)}>
            <h2 id={styles.brown}> The idea:</h2>
            <h3 style={{color : '#181818'}}> Founded in 2015, we started as a passion project for travel enthusiasts.</h3>
        </div>
        <div  style={{width : '30em'}} className={classNames()}>
        <img src={line} style={{width : '10em'}}></img>
        </div>

        <div  style={{width : '40em'}} className={classNames(styles.chapterright , "align-self-end")}>
        <h2 id={styles.purple}> 1M+ Users</h2>
            <h3> This many people allowed us to power the revolution in travelling experiences.</h3>
        </div>
      </div>

      <div className="mx-auto justify-content-between" style={{display : 'flex'}}>
        <div style={{width : '40em'}} className={classNames(styles.chapterleft , "align-self-end")}>
            <h2 id={styles.red}> The Revolution</h2>
            <h3> Never seen before features were introduced to our platform, giving you the advantage you needed.</h3>
        </div>
        <div  style={{width : '30em'}} className={classNames()}>
        <img src={end} style={{width : '10em'}}></img>
        </div>

        <div  style={{width : '40em'}} className={classNames(styles.chapterright , "align-self-end")}>
       
        </div>
      </div>

      

    </div>
    )
};
