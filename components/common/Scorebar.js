import styles from "./Scorebar.module.sass"
import ScoreWidget from "./ScoreWidget"
import React from "react"

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
      </div>
    )
  }
}

export default Scorebar
