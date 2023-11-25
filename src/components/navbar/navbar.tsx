import classNames from 'classnames';
import styles from './navbar.module.scss';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const Navbar = () => {
    return (
    <div className={styles.root}>

 <nav className="navbar navbar-light bg-light justify-content-between">
  <a className="navbar-brand pl-3 mx-5" >Navbar</a>
  <div className="d-flex justify-content-around">
    <div className={styles.navbtn}>
        Home
    </div>
    <div className={styles.navbtn}>
        Features
    </div>
    <div className={styles.navbtn}>
        Trending
    </div>
    <div className={styles.navbtn}>
        Pricing
    </div>
    <div className={styles.navbtn}>
        Contant
    </div>
  </div>
  
    <button className="btn btn-outline-success my-2 my-sm-0 mx-5" type="submit">Sign Up</button>
  
</nav>

    </div>
    )
};
