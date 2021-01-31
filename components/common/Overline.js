import styles from "./Overline.module.sass"

const Overline = ({ text, customClass, customStyle }) => {
  return (
    <span
      className={`${styles.overline} ${customClass}`}
      style={customStyle && customStyle}
    >
      {text}
    </span>
  )
}

export default Overline
