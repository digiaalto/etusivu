import React from "react"
import LazyLoad from "react-lazyload"
import styles from "../styles/waves.module.sass"

const Waves = ({ children }) => {
  return (
    <LazyLoad>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="aalto.jpg"
        className={styles.waves}
      >
        <source data-src="aalto.webm" type="video/webm" src="aalto.webm" />
        <source data-src="aalto.mp4" type="video/mp4" src="aalto.mp4" />
      </video>
      {children}
    </LazyLoad>
  )
}

export default Waves
