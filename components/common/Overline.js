import styles from "./Overline.module.sass"

const Overline = ({ text }) => {
  return <span className={styles.overline}>{text}</span>
}

export default Overline
