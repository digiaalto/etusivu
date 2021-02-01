import styles from "./Palvelut.module.sass"
import Overline from "../common/Overline"
import Link from "next/link"
import Ominaisuudet from "./Ominaisuudet"

const Palvelut = (props) => {
  const { refs } = props

  return (
    <section className={styles.section} id="palvelut" ref={refs}>
      <HeadersWrap>
        <Overline text="Mitä teemme?" />
        <h1 className={styles.headerMain}>
          Suunnittelemme ja kehitämme kestäviä verkkosivuja, mittavalla
          laatutestauksella.
        </h1>
      </HeadersWrap>
      <TextsWrapper>
        <p className={styles.headerDescription}>
          Haluamme edistää suomalaisten yritysten verkkoläsnäoloa tuorreella
          teknologialla, millä pystymme parantamaan meidän kaikkien
          käyttäjäkokemusta verkossa.
          <Link href="/verkkosivut#uudet-verkkosivut">
            <a aria-label="Hybrid-sivustoja"> Hybrid-sivustomme </a>
          </Link>
          ovat ultratehokkaita, turvallisia, skaalautuvat automaattisesti,
          eivätkä tarvitse ympärivuotisia ylläpitotoimia.
        </p>
      </TextsWrapper>
      <Ominaisuudet />
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
