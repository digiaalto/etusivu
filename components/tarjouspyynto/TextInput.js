import styles from "./TextInput.module.sass"
import { Label } from "./index"

const TextInput = ({ name, label, refs, error, required }) => {
  return (
    <div className={styles.wrapper}>
      <Label name={name} label={`${label} ${required ? "*" : ""}`} />
      <input
        type="text"
        name={name}
        id={name}
        ref={refs}
        className={styles.input}
      />
      {error && printErrors(error)}
    </div>
  )
}

function printErrors(error) {
  return <span className={styles.error}>{error.message}</span>
}

export default TextInput
