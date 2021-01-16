import styles from "./Label.module.sass"

const Label = ({ name, label }) => {
  return (
    <label htmlFor={name} className={styles.label}>
      {label}
    </label>
  )
}
export default Label
