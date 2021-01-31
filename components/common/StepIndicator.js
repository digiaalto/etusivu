import styles from "./StepIndicator.module.sass"

const StepIndicator = (props) => {
  const { overline, header, first, second, third, cc } = props
  // TODO: better class detection???
  const string = first ? "1" : second ? "2" : third ? "3" : "0"
  const bgColor = first
    ? styles.first
    : second
    ? styles.second
    : third
    ? styles.third
    : null
  const overlineBg = first
    ? styles.overline1
    : second
    ? styles.overline2
    : third
    ? styles.overline3
    : null
  const lineBg = first
    ? styles.line1
    : second
    ? styles.line2
    : third
    ? styles.line3
    : null
  return (
    <div className={`${styles.indicator} ${cc}`}>
      <div className={`${styles.line} ${lineBg}`} />
      <span className={`${styles.sphere} ${bgColor}`}>{string}</span>
      <span className={`${styles.overline} ${overlineBg}`}>{overline}</span>
      <h1 className={styles.headerMain}>{header}</h1>
    </div>
  )
}

export default StepIndicator
