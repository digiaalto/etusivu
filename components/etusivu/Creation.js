import styles from "./Creation.module.sass"
import Suunnittelu from "./Suunnittelu"
import Kehitys from "./Kehitys"
import Julkaisu from "./Julkaisu"

const Creation = (props) => {
  const { suunnitteluRef, kehitysRef, julkaisuRef } = props.refs
  return (
    <div className={styles.container}>
      <Suunnittelu refs={suunnitteluRef} />
      <Kehitys refs={kehitysRef} />
      <Julkaisu refs={julkaisuRef} />
    </div>
  )
}

export default Creation
