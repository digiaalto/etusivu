import styles from "./Overline.module.sass"

const Overline = ({ text, customClass }) => {
  return <span className={`${styles.overline} ${customClass}`}>{text}</span>
}

export default Overline
