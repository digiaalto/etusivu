import styles from "./MuutDigitoimistot.module.sass"
import Image from "next/image"

const MuutDigitoimistot = () => {
  return (
    <section className={styles.section} id="muut-digitoimistot">
      <div className={styles.column}>
        <h2 className={styles.header}>Muut digitoimistot.</h2>
        <div className="divider" />
        <p>
          Digitoimistoja on monia ja tekijöitä vielä enemmän. Jokainen lupaa
          tuloksia tuottavia palveluita ja tehokkaita sivuja, mutta rehellisesti
          sanottuna lähes kaikki meistä valmistaa samaa WordPress pohjaista
          sössöä.
        </p>
        <p>
          WordPressiä useasti markkinoidaan parhaana ratkaisuna asiakkaalle,
          mutta todellisuudessa sen käytöstä hyötyy enemmän myyntimies kuin
          asiakas itse.
        </p>
        <p>
          WordPress nimittäin helpoittaa kehitystyötä valtavasti
          valmisteemoilla, ladattavilla lisäosilla ja muilla oikopoluilla.
        </p>
        <p>
          Palkaksi tästä kehittäjälle suodusta palveluksesta asiakas saa hitaan,
          huonosti optimoidun kotisivun, jota kiusaa tietoturva-aukot ja
          jatkuvat ylläpitotoimet josta saa pulittaa vähän extraa.
        </p>
      </div>
      <div className={styles.column}>
        <Image
          src={"/images/wave.png"}
          layout="intrinsic"
          width={1006}
          height={612}
          className={styles.img}
          alt="Maalattu aalto"
        />
      </div>
    </section>
  )
}

export default MuutDigitoimistot
