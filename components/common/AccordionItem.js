import styles from "./AccordionItem.module.sass"
import { useState } from "react"
import { useSpring, animated } from "react-spring"
import { useMeasure } from "react-use"

const AccordionItem = (props) => {
  const { button, content } = props
  const [open, setOpen] = useState(false)
  const [bind, { height }] = useMeasure()

  const expandSpring = useSpring({
    height: open ? `${height}px` : "0px",
  })

  return (
    <div className={styles.item}>
      <button className={styles.button} onClick={() => setOpen(!open)}>
        {button}
      </button>
      <animated.div className={styles.contentWrapper} style={expandSpring}>
        <div className={styles.innerWrapper} ref={bind}>
          <p className={styles.paragraph} ref={bind}>
            {content}
          </p>
        </div>
      </animated.div>
    </div>
  )
}

export default AccordionItem
