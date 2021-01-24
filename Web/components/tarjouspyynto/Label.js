import styles from "./Label.module.sass"

const Label = ({ name, label }) => (
  <label htmlFor={name} className={styles.label}>
    {label}
  </label>
)
export default Label
