import styles from "./Hero.module.sass"
import Link from "next/link"
import { animated, useSpring } from "react-spring"
import { ImArrowDown } from "react-icons/im"

const Hero = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="verkkosivut">
      <Background />
      <div className={styles.headersWrap}>
        <h1 className={styles.header}>Verkkosivut paremmalla tekniikalla.</h1>
        <h2 className={styles.description}>
          Valmistamme helppokäyttöisiä, sisältörikkaita verkkosivuja yrittäjille
          jotka välittävä asiakkaidensa kokemuksesta.
        </h2>
        <Link href="/verkkosivut#vanhat-verkkosivut">
          <a className={styles.link} aria-label="Linkki alempaan osioon">
            <ImArrowDown />
          </a>
        </Link>
      </div>
    </section>
  )
}

const Background = () => {
  const delay = 700
  const from = "30%"
  const to = "90%"

  let springProps = {
    config: {
      mass: 1,
      friction: 7,
    },
    delay: delay,
    from: { height: from },
    to: { height: to },
  }

  return (
    <div className={styles.background}>
      <animated.div className={styles.block} style={useSpring(springProps)} />
      <animated.div
        className={styles.block}
        style={useSpring({ ...springProps, delay: delay * 1.5 })}
      />
      <animated.div
        className={styles.block}
        style={useSpring({ ...springProps, delay: delay * 2 })}
      />
    </div>
  )
}

export default Hero
