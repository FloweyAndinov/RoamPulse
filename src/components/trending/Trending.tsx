import classnames from 'classnames'
import React, { useEffect, useRef } from 'react'
import styles from "src/components/trending/Tredning.module.scss"

interface Props {
    image : string
    title : string
    paragraph : string
}

const Trending = ({image , title , paragraph} : Props) => {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(window.location.hash)
    if (window.location.hash.includes(`#${title}`)) {
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
    }
  }, [title]);

  
  return (
    <div className={classnames(styles.container, "flex justify-content-center")} id={title} ref={ref}>
      
        <img src={image} alt="" />
        <div className={styles.title}>
          <h1>
            {title}
          </h1>
            <div className={styles.paragraph}>
            <p>
              {paragraph}
            </p>
            </div>
        </div>
    </div>
  )
}

export default Trending