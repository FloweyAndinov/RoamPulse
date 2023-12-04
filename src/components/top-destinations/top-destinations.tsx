import classNames from 'classnames';
import styles from './top-destinations.module.scss';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import parisimg from "src/assets/paris.jpg"
import darkparisimg from "src/assets/paris_darken.jpg"
import darkromeimg from "src/assets/rome.png"
import darksantoriniimg from "src/assets/santorini.png"
import darkkyotoing from "src/assets/kyoto.png"
import darkistanbulimg from "src/assets/istanbul.png"
import darksofiaimg from "src/assets/sofia.png"
import { useState } from 'react';
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */




import React from 'react'
import { Link } from 'react-router-dom';

const TopDestinations = () => {



  return (
    <div className={classNames(styles.root)} style={{ height: 'auto' }}>
    <div className={styles.title}>
        <h1>Top Destinations</h1>
    </div>

    <div className={classNames("container" , styles.container)} style={{}}>
<div className={classNames("row" , styles.row)}>

    <div className={classNames("col" , styles.col)} 
    style={{backgroundImage : `url(${darkparisimg})`}}
    >
      
     
    <h3 >Paris, France</h3>

    <div className={styles.seeMore}>
     <Link to="/trending"><button className='btn btn-outline-success'>
        See more!
      </button>
      </Link>
    </div>


    </div>
    <div className={classNames("col" , styles.col)} 
    style={{backgroundImage : `url(${darkromeimg})`}}
    >
   
    <h3>Rome, Italy</h3>

    <div className={styles.seeMore}>
    <Link to="/trending"><button className='btn btn-outline-success'>
        See more!
      </button>
      </Link>
    </div>

    
    </div>
    <div className={classNames("col" , styles.col)} 
    style={{backgroundImage : `url(${darksantoriniimg})`}}
    >
    
    <h3>Santorini, Greece</h3>

    <div className={styles.seeMore}>
    <Link to="/trending"><button className='btn btn-outline-success'>
        See more!
      </button>
      </Link>
    </div>


    </div>

</div>
<div className="row">
<div className={classNames("col" , styles.col)} 
    style={{backgroundImage : `url(${darkkyotoing})`}}
    >
    
    <h3>Kyoto, Japan</h3>

    <div className={styles.seeMore}>
    <Link to="/trending"><button className='btn btn-outline-success'>
        See more!
      </button>
      </Link>
    </div>


    </div>
    <div className={classNames("col" , styles.col)} 
    style={{backgroundImage : `url(${darkistanbulimg})`}}
    >
   
    <h3>Istanbul, Turkey</h3>

    <div className={styles.seeMore}>
    <Link to="/trending"><button className='btn btn-outline-success'>
        See more!
      </button>
      </Link>
    </div>


    </div>
    <div className={classNames("col" , styles.col)} 
    style={{backgroundImage : `url(${darksofiaimg})`}}
    >
    
    <h3>Sofia, Bulgaria</h3>


    <div className={styles.seeMore}>
    <Link to="/trending"><button className='btn btn-outline-success'>
        See more!
      </button>
      </Link>
    </div>
    </div>
   
</div>
</div>
</div>
  )
}

export default TopDestinations
