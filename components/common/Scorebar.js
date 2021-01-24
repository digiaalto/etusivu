import styles from "./Scorebar.module.sass"
import ScoreWidget from "./ScoreWidget"
import ReactTooltip from "react-tooltip"
import React from "react"

const mobileCfg = {
  size: 80,
  strokeWidth: 10,
}
const desktopCfg = {
  size: 120,
  strokeWidth: 15,
}
/**
 *
 * Have to track ismounted for tooltip to not throw errors.
 */

class Scorebar extends React.Component {
  constructor(props) {
    super(props)
    this.onHover = props.onHover
    this.progress = props.progress
    this.customClass = props.customClass
    this.isMobile = props.isMobile
    this.config = props.isMobile ? mobileCfg : desktopCfg
    this.state = { isMounted: false }
  }

  render() {
    return (
      <div
        className={`${this.customClass ? this.customClass : styles.container}`}
      >
        <ScoreWidget
          {...this.config}
          progress={this.progress.suorituskyky}
          label="Suorituskyky"
        />
        <ScoreWidget
          {...this.config}
          progress={this.progress.esteettomyys}
          label="Esteettömyys"
        />
        <ScoreWidget
          {...this.config}
          progress={this.progress.parhaatKaytannot}
          label="Parhaat käytännöt"
        />
        <ScoreWidget
          {...this.config}
          progress={this.progress.seo}
          label="SEO"
        />
      </div>
    )
  }
}

export default Scorebar
