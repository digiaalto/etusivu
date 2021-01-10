import styles from "./CompanyLogoSlider.module.sass"
import Image from "next/image"

const logoPath = "/images/logos/"
const firstRowSources = [
  "svg1.svg",
  "svg2.svg",
  "svg3.svg",
  "svg4.svg",
  "svg5.svg",
  "svg6.svg",
  "svg7.svg",
  "svg8.svg",
  "svg9.svg",
  "svg10.svg",
  "svg11.svg",
]
const secondRowSources = [
  "svg12.svg",
  "svg13.svg",
  "svg14.svg",
  "svg15.svg",
  "svg16.svg",
  "svg17.svg",
  "svg18.svg",
  "svg19.svg",
  "svg20.svg",
  "svg21.svg",
  "svg22.svg",
]

const CompanyLogoSlider = () => {
  return (
    <section className={styles.section}>
      <span className={styles.bgHeader}>Kuka käyttää Nextiä?</span>
      <div className={styles.slider}>
        <Slider logoSources={firstRowSources} />
        <div className={styles.spacer} />
        <Slider logoSources={secondRowSources} />
      </div>
    </section>
  )
}

export default CompanyLogoSlider

const Slider = (props) => {
  return (
    <div className={styles.row}>
      <SliderInner {...props} />
      <SliderInner {...props} />
    </div>
  )
}

const SliderInner = ({ logoSources }) => {
  return (
    <div className={styles.rowInner}>
      {logoSources.map((source) => {
        return (
          <div className={styles.logo} key={source}>
            <Image
              src={`${logoPath}${source}`}
              layout="intrinsic"
              width={150}
              height={50}
            />
          </div>
        )
      })}
    </div>
  )
}
