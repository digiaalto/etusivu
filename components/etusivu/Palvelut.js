import styles from "./Palvelut.module.sass"
import Overline from "../common/Overline"
import PalvelutOminaisuudet from "./PalvelutOminaisuudet"

const Palvelut = (props) => {
  const { refs } = props

  return (
    <section className={styles.section} id="palvelut" ref={refs}>
      <HeadersWrap>
        <Overline text="Parempaa palvelua." />
        <h1 className={styles.headerMain}>
          Uutta teknologiaa Piilaaksosta suomalaisten yritysten ja asiakkaiden
          iloksi.
        </h1>
      </HeadersWrap>
      <TextsWrapper>
        <h2 className={styles.headerDescription}>
          Kehitämme teille massasta erottuvan nettisivun jota on mukava käyttää,
          vaivaton ylläpitää ja helppo löytää. Suunnittelemme luotettavan
          yrityskumppanin joka toteuttaa asettamiamme tavoitteita kellon ympäri.
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
