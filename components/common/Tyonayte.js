import styles from "./Tyonayte.module.sass"
import Image from "next/image"

const as16_9 = 0.5625
const as9_16 = 1.777777777777778

const Tyonayte = (props) => {
  const { imgData, scoreSrc, header, paragraphs, inverted } = props

  return (
    <div className={`${styles.tyonayte} ${inverted && styles.inverted}`}>
      <div className={styles.views}>
        <Screens imgData={imgData.desktop} isMobile={false} />
        <Screens imgData={imgData.mobile} isMobile={true} />
      </div>
      <div className={styles.infoWrapper}>
        <h3 className={styles.nayteHeader}>{header}</h3>
        <div className={styles.paragraphs}>
          {paragraphs.map((p, index) => (
            <p className={styles.nayteParagraph} key={`${header}-${index}`}>
              {p}
            </p>
          ))}
        </div>
        <Score src={scoreSrc} />
      </div>
    </div>
  )
}

const Score = ({ src }) => {
  return <Image src={src} width={288} height={81} className={styles.score} />
}

const Screens = (props) => {
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

export default Tyonayte
