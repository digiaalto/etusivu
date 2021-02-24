import styles from "./Palvelut.module.sass"
import Overline from "../common/Overline"
import PalvelutOminaisuudet from "./PalvelutOminaisuudet"
import { Link as LinkScroll } from "react-scroll"

const Palvelut = (props) => {
  const { refs } = props

  return (
    <section className={styles.section} id="palvelut" ref={refs}>
      <HeadersWrap>
        <Overline text="Parempaa palvelua." />
        <h1 className={styles.headerMain}>
          Tuomme uutta teknologiaa Piilaaksosta suomalaisten yritysten ja
          asiakkaiden helpotukseksi.
        </h1>
      </HeadersWrap>
      <TextsWrapper>
        <h2 className={styles.headerDescription}>
          Uskomme että verkkosivujen hallinnan kuuluu olla vaivatonta ja
          kannattavaa yrityksen näkökulmasta. Tämän takia kehittämämme sivustot
          ovat tavanomaisia palvelinsivuja pitkäikäisempiä, kestäviä ja
          suunnittellaan alusta loppuun toteuttamaan realistisia
          yritystavoitteita.
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
