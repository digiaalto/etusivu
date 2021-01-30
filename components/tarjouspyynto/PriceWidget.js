import styles from "./PriceWidget.module.sass"
import { useState } from "react"
import { animated, useSpring, config } from "react-spring"

const PriceWidget = ({ price, hideIfDesktop }) => {
  const [currentPrice, setCurrentPrice] = useState(0)

  const spring = useSpring({
    ...config.gentle,
    to: { number: price },
    from: { number: currentPrice },
    onRest: () => {
      if (price !== currentPrice) setCurrentPrice(price)
    },
  })

  return (
    <div
      className={`${styles.widget} ${hideIfDesktop && styles.hideIfDesktop}`}
    >
      <span className={styles.price}>
        <animated.span>
          {spring.number.interpolate((val) => `${Math.floor(val)}€`)}
        </animated.span>
        <span className={styles.alv}>+ alv</span>
      </span>
    </div>
  )
}

export default PriceWidget
