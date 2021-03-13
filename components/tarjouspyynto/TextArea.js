import styles from "./TextArea.module.sass"
import TextareaAutosize from "react-textarea-autosize"
import Label from "./Label"

const size = {
  minRows: 8,
  maxRows: 12,
}

const TextArea = (props) => {
  const { name, label, refs } = props
  return (
    <div className={styles.textArea}>
      <Label name={name} label={label} />
      <TextareaAutosize
        name={name}
        ref={refs}
        id={name}
        {...size}
        className={styles.input}
      />
    </div>
  )
}

export default TextArea
