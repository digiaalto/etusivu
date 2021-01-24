import PropTypes from "prop-types"
import styles from "./Checkbox.module.sass"
import Label from "./Label"

const TypeSelection = (props) => {
  return (
    <div className={styles.wrapper}>
      <Column>
        <Input {...props} />
        <Row>
          <Label {...props} />
          <Info {...props} />
        </Row>
      </Column>
    </div>
  )
}

const Input = ({ name, refs, defaultChecked, onChange }) => (
  <input
    type="checkbox"
    name={name}
    ref={refs}
    onChange={onChange}
    id={name}
    className={styles.checkbox}
    defaultChecked={defaultChecked}
  />
)
const Info = ({ name, info }) => (
  <label htmlFor={name} className={styles.infoLabel}>
    {info}
  </label>
)

const Column = ({ children }) => <div className={styles.column}>{children}</div>
const Row = ({ children }) => <div className={styles.row}>{children}</div>

export default TypeSelection

TypeSelection.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  refs: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}
