import styles from "./Creation.module.sass"
import Suunnittelu from "./Suunnittelu"
import Kehitys from "./Kehitys"
import Palvelu from "./Palvelu"

const Creation = (props) => {
  const { suunnitteluRef, kehitysRef, palveluRef } = props.refs
  return (
    <div className={styles.container}>
      <Suunnittelu refs={suunnitteluRef} />
      <Kehitys refs={kehitysRef} />
      <Palvelu refs={palveluRef} />
    </div>
  )
}

export default Creation
