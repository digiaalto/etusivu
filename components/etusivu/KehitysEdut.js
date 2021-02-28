import styles from "./KehitysEdut.module.sass"
import { useState } from "react"
import { useTransition, animated } from "react-spring"
import { BsLightningFill } from "react-icons/bs"
import { FaShieldAlt } from "react-icons/fa"
import { RiLineChartFill } from "react-icons/ri"
import { GiTwoCoins } from "react-icons/gi"

const edut = [
  ({ style }) => (
    <animated.div className={styles.content} style={{ ...style }}>
      <h3 className={styles.header}>Tehokkuus</h3>
      <p>
        Siinä missä tavanomaiset Wordpress-sivut joudutaan rakentamaan joka
        kerta kun vierailija lataa sivun, hybrid-sivumme ovat generoitu
        etukäteen pilvestä, ja lähetetty asiakkaan laitteelle suorituskykyisesti
        ilman viiveitä. Linkit esiladataan jolloin käyttäjä ei koe
        navigoidessaan latausaikoja.
      </p>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div className={styles.content} style={{ ...style }}>
      <h3 className={styles.header}>Turvallisuus</h3>
      <p>
        Kun palvelinpuolen prosessit erotetaan kolmannen osapuolen palveluiden
        sovellusliittymiksi, ja verkkosivuista rakennetaan staattinen
        kokonaisuus on hyökkäyspinta-alat heti minimoituja ja DDoS mahdotonta.
      </p>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div className={styles.content} style={{ ...style }}>
      <h3 className={styles.header}>Skaalautuvuus</h3>
      <p>
        Pystytkö kuvittelemaan tilanteen jossa verkkosivullesi ilmestyy tuhansia
        käyttäjiä? Mitä jos tuotteesi viralisoituu, palvelunne saa
        kansainvälistä huomiota, tai markkinointikamppanja onnistuukin odotettua
        paremmin? Sivumme hyödyntävät Amazonin tehokasta julkaisuverkkoa jotta
        sinun ei tarvitse pelätä, että asiakastasi tervehtisi toimimaton
        yrityssivu.
      </p>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div className={styles.content} style={{ ...style }}>
      <h3 className={styles.header}>Kustannustehokkuus</h3>
      <p>
        Enään ei tarvitse puhua web-hotelleista, servereistä tai palvelimista
        ollenkaan. Voimme abstraktoida kaikki tarpeet niihin erikoistuneille
        kolmansille osapuolille jotka hoitavat ylläpidon ja toimivat
        uskomattoman kustannustehokkaasti. Suomen mittakaavalla nämä palvelut
        tarjoavat niin anteliaat maksurajat, että voimme käyttää niitä
        veloituksetta tai muutamalla eurolla kuussa.
      </p>
    </animated.div>
  ),
]

const KehitysEdut = () => {
  const [index, setIndex] = useState(0)
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(-50%, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-150%, 0, 0)" },
  })

  return (
    <div className={styles.container}>
      <div className={styles.iconRow}>
        <BsLightningFill
          className={`${styles.etuIcon} ${styles.tehokkuusIcon} ${
            index === 0 && styles.selected
          }`}
          onClick={() => setIndex(0)}
        />
        <FaShieldAlt
          className={`${styles.etuIcon} ${styles.turvallisuusIcon} ${
            index === 1 && styles.selected
          }`}
          onClick={() => setIndex(1)}
        />
        <RiLineChartFill
          className={`${styles.etuIcon} ${styles.skaalautuvuusIcon} ${
            index === 2 && styles.selected
          }`}
          onClick={() => setIndex(2)}
        />
        <GiTwoCoins
          className={`${styles.etuIcon} ${styles.kustannustehokkuusIcon} ${
            index === 3 && styles.selected
          }`}
          onClick={() => setIndex(3)}
        />
      </div>
      <div className={styles.contentWrap}>
        {transitions.map(({ item, props, key }) => {
          const Etu = edut[item]
          return <Etu key={key} style={props} />
        })}
      </div>
    </div>
  )
}

export default KehitysEdut
