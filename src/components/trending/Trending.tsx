import classnames from 'classnames'
import React from 'react'
import styles from "src/components/trending/Tredning.module.scss"

interface Props {
    image : string
    title : string
    paragraph : string
}

const Trending = ({image , title , paragraph} : Props) => {
  return (
    <div className={classnames(styles.container, "flex justify-content-center")}>
      
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