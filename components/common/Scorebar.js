import styles from "./Scorebar.module.sass"
import ScoreWidget from "./ScoreWidget"
import React from "react"
import { Fade } from "react-awesome-reveal"
import { delayedFadeCascade } from "../../vars"

class Scorebar extends React.Component {
  constructor(props) {
    super(props)
    this.progress = props.progress
    this.customClass = props.customClass
    this.config = {
      size: 80,
      strokeWidth: 10,
    }
  }

  render() {
    return (
      <div className={`${styles.container} ${this.customClass}`}>
        <Fade {...delayedFadeCascade}>
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
            label="Käytännöt"
          />
          <ScoreWidget
            {...this.config}
            progress={this.progress.seo}
            label="SEO"
          />
        </Fade>
      </div>
    )
  }
}

export default Scorebar
