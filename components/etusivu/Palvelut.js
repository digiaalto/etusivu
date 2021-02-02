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
          Toteutamme suomalaisten yrittäjien tavoitteita käytännöllisillä, aikaa
          säästävillä verkkopalveluilla.
        </h1>
      </HeadersWrap>
      <TextsWrapper>
        <p className={styles.headerDescription}>
          Suunnittelemme kestäviä verkkosivuja, mittavalla laatutestauksella.
          <Link href="/verkkosivut#uudet-verkkosivut">
            <a aria-label="Hybrid-sivustoja"> Hybrid-sivustomme </a>
          </Link>
          ovat ultratehokkaita, turvallisia, eivät vaadi ympärivuotista
          ylläpitoa, sekä pystyvät skaalautumaan automaattisesti ja
          kustannustehokkaasti.
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
