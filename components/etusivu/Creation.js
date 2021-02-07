import styles from "./Creation.module.sass"
import Suunnittelu from "./Suunnittelu"
import Kehitys from "./Kehitys"
import Takuu from "./Takuu"

const Creation = (props) => {
  const { suunnitteluRef, kehitysRef, takuuRef } = props.refs
  return (
    <div className={styles.container}>
      <Suunnittelu refs={suunnitteluRef} />
      <Kehitys refs={kehitysRef} />
      <Takuu refs={takuuRef} />
    </div>
  )
}

export default Creation
