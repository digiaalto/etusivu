import styles from "./Palvelut.module.sass"
import Overline from "../common/Overline"
import PalvelutOminaisuudet from "./PalvelutOminaisuudet"

const Palvelut = (props) => {
  const { refs } = props

  return (
    <section className={styles.section} id="palvelut" ref={refs}>
      <HeadersWrap>
        <Overline
          text="Suorituskykyistä ja modernia."
          customClass={styles.customOverline}
        />
        <h1 className={styles.headerMain}>
          Kutsumuksemme on tuoda uutta teknologiaa Piilaaksosta suomalaisten
          yritysten ja yritysasiakkaiden iloksi.
        </h1>
      </HeadersWrap>
      <TextsWrapper>
        <h2 className={styles.headerDescription}>
          Prosessimme sisältää kaikki laadukkaan verkkosivun rakennusvaiheet
          alusta loppuun. Edullisilla lisäpalveluilla autamme sivustoasi
          kasvamaan julkaisun jälkeenkin ja lupaamme, että hybrid-sivumme
          erottuvat omaan luokkaansa laadussa.
        </h2>
      </TextsWrapper>
      <PalvelutOminaisuudet />
    </section>
  )
}

const HeadersWrap = ({ children }) => (
  <div className={styles.headersWrap}>{children}</div>
)

const TextsWrapper = ({ children }) => (
  <div className={styles.paragraphsWrap}>{children}</div>
)

export default Palvelut
