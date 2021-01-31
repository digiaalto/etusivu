import styles from "./Hero.module.sass"
import { useState } from "react"
import { Fade } from "react-awesome-reveal"
import { animated, useSpring } from "react-spring"
import { ImArrowDown } from "react-icons/im"
import Link from "next/link"

const animCfg = {
  section: {
    direction: "up",
    triggerOnce: true,
  },
  content: {
    direction: "up",
    delay: 400,
    triggerOnce: true,
  },
}

const Hero = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="verkkosivut">
      <Fade {...animCfg.section}>
        <Background />
      </Fade>
      <Fade {...animCfg.content}>
        <div className={styles.headersWrap}>
          <h1 className={styles.header}>
            Älykäs kotisivu joka tukee liiketoimintaasi perusteellisesti.
          </h1>
          <h2 className={styles.description}>
            Yritystä ei kannata edustaa verkossa 20 vuotta vanhalla
            teknologialla.
          </h2>
          <Link href="/verkkosivut#vanhat-verkkosivut">
            <a className={styles.link}>
              <ImArrowDown />
            </a>
          </Link>
        </div>
      </Fade>
    </section>
  )
}

const Background = () => {
  const [rigid, setRigid] = useState(false)
  const [wobbly, setWobbly] = useState(false)
  const [slow, setSlow] = useState(false)

  const rigidSpring = useSpring({
    config: {
      mass: 1,
      friction: 10,
      tension: 100,
      easing: "ease-in",
    },
    to: { height: rigid ? "90%" : "50%" },
    from: { height: "30%" },
  })

  const wobblySpring = useSpring({
    config: {
      mass: 1,
      friction: 5,
      easing: "ease-out",
    },
    to: { height: wobbly ? "90%" : "60%" },
    from: { height: "30%" },
  })

  const slowSpring = useSpring({
    config: {
      mass: 1,
      friction: 50,
      tension: 100,
    },
    to: { height: slow ? "90%" : "70%" },
    from: { height: "30%" },
  })

  return (
    <div className={styles.background}>
      <animated.div
        className={styles.block}
        style={rigidSpring}
        onClick={() => setRigid(!rigid)}
      />
      <animated.div
        className={styles.block}
        style={wobblySpring}
        onClick={() => setWobbly(!wobbly)}
      />
      <animated.div
        className={styles.block}
        style={slowSpring}
        onClick={() => setSlow(!slow)}
      />
    </div>
  )
}

export default Hero
