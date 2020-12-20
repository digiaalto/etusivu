import styles from "./LoadingBar.module.sass"

const LoadingBar = ({ percent }) => {
  return (
    <div className={styles.bar}>
      <div className={styles.innerBar} style={{ width: `${percent}%` }}></div>
    </div>
  )
}

export default LoadingBar
