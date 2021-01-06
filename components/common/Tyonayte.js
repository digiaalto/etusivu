import styles from "./Tyonayte.module.sass"
import Image from "next/image"

const as16_9 = 0.5625
const as9_16 = 1.777777777777778

const Tyonaute = (props) => {
  const { imgData, palette, scoreSrc, header, paragraphs, inverted } = props

  return (
    <div className={`${styles.tyonayte} ${inverted && styles.inverted}`}>
      <div className={styles.views}>
        <NayteView
          imgData={imgData.desktop}
          palette={palette}
          isMobile={false}
        />
        <NayteView imgData={imgData.mobile} palette={palette} isMobile={true} />
      </div>
      <div className={styles.infos}>
        <h3 className={styles.nayteHeader}>{header}</h3>
        <Palette palette={palette} />
        <div className={styles.paragraphs}>
          {paragraphs.map((p, index) => (
            <p className={styles.nayteParagraph} key={`${header}-${index}`}>
              {p}
            </p>
          ))}
        </div>

        <Image
          src={scoreSrc}
          width={288}
          height={81}
          className={styles.score}
        />
      </div>
    </div>
  )
}

const NayteView = (props) => {
  const { imgData, isMobile } = props
  return (
    <div
      className={isMobile ? styles.mobileView : styles.desktopView}
      style={{
        width: `${imgData.width}px`,
        height: `${imgData.width * (isMobile ? as9_16 : as16_9)}px`,
      }}
    >
      <Image
        src={imgData.src}
        width={imgData.width}
        height={imgData.height}
        alt={imgData.alt}
      />
    </div>
  )
}

const Palette = (props) => {
  const { palette } = props
  return (
    <div className={styles.palette}>
      {palette.map((color, index) => (
        <span
          className={styles.paletteBall}
          style={{ backgroundColor: color }}
          key={`${color}-${index}`}
        />
      ))}
    </div>
  )
}
export default Tyonaute
