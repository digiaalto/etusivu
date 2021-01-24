import styles from "./Creation.module.sass"
import Suunnittelu from "./Suunnittelu"

const Creation = (props) => {
  const { refs } = props
  return (
    <div className={styles.container} ref={refs}>
      <Suunnittelu />
      <Kehitys />
      <Julkaisu />
    </div>
  )
}

const Kehitys = () => {
  return null
}
const Julkaisu = () => {
  return null
}

export default Creation
