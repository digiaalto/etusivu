import styles from "./PriceWidget.module.sass"
import { useState } from "react"
import { animated, useSpring, config } from "react-spring"

const PriceWidget = ({ price, hideIfDesktop }) => {
  const [currentPrice, setCurrentPrice] = useState(0)

  const spring = useSpring({
    ...config.gentle,
    from: { number: currentPrice },
    to: { number: price },
    onRest: () => {
      if (price !== currentPrice) setCurrentPrice(price)
    },
  })

  return (
    <div
      className={`${styles.widget} ${hideIfDesktop && styles.hideIfDesktop}`}
    >
      <animated.span>
        {spring.number.interpolate((val) => `${Math.floor(val)}€`)}
      </animated.span>
      <span className={styles.alv}>+ alv</span>
    </div>
  )
}

export default PriceWidget
