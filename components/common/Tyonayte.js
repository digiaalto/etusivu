import styles from "./Tyonayte.module.sass"
import Image from "next/image"

const as16_9 = 0.5625 // Desktop ratio
const as9_16 = 1.777777777777778 // Mobile ratio

const Tyonayte = (props) => {
  const { imgData, inverted } = props

  return (
    <div className={styles.tyonayte}>
      <div className={styles.views}>
        <DesktopView imgData={imgData.desktop} />
        <MobileView imgData={imgData.mobile} />
      </div>
      <TyonayteText {...props} />
    </div>
  )
}

const MobileView = ({ imgData }) => {
  return (
    <div
      className={styles.mobileView}
      style={{
        width: `${imgData.width}px`,
        height: `${imgData.width * as9_16}px`,
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

const DesktopView = ({ imgData }) => {
  return (
    <div
      className={styles.desktopView}
      style={{
        width: `${imgData.width}px`,
        height: `${imgData.width * as16_9}px`,
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

const TyonayteText = ({ header, paragraphs, scoreSrc }) => {
  return (
    <div className={styles.textView}>
      <span className={styles.nayteHeader}>{header}</span>
      <div className={styles.paragraphs}>
        {paragraphs.map((p, index) => (
          <p className={styles.nayteParagraph} key={`${header}-${index}`}>
            {p}
          </p>
        ))}
      </div>
      <Score src={scoreSrc} />
    </div>
  )
}

const Score = ({ src }) => {
  return <Image src={src} width={288} height={81} className={styles.score} />
}

export default Tyonayte
