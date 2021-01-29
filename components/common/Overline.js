import styles from "./Overline.module.sass"

const Overline = ({ text, center, margin }) => {
  return (
    <span
      className={`${styles.overline} ${center && styles.center} 
		${margin && styles.margin}`}
    >
      {text}
    </span>
  )
}

export default Overline
