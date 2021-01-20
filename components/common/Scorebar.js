import styles from "./Scorebar.module.sass"
import ScoreWidget from "./ScoreWidget"

const mobileCfg = {
  size: 80,
  strokeWidth: 10,
}
const desktopCfg = {
  size: 120,
  strokeWidth: 15,
}

const Scorebar = (props) => {
  const { progress, customClass, isMobile } = props
  const config = isMobile ? mobileCfg : desktopCfg
  return (
    <div className={`${customClass ? customClass : styles.container}`}>
      <ScoreWidget
        {...config}
        progress={progress.suorituskyky}
        label="Suorituskyky"
      />
      <ScoreWidget
        {...config}
        progress={progress.esteettomyys}
        label="Esteettömyys"
      />
      <ScoreWidget
        {...config}
        progress={progress.parhaatKaytannot}
        label="Parhaat käytännöt"
      />
      <ScoreWidget {...config} progress={progress.seo} label="SEO" />
    </div>
  )
}

export default Scorebar
