import styles from "./Selection.module.sass"
import Select from "react-select"
import Label from "./Label"

const Selection = (props) => {
  const { label, name, refs, required } = props
  return (
    <div className={styles.selection}>
      <Label label={`${label}${required ? " *" : ""}`} />
      <Select {...props} ref={refs} id={name} className={styles.input} />
    </div>
  )
}

export default Selection
