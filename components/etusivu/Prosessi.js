import styles from "./Prosessi.module.sass"
import Link from "next/link"

// const animCfg = {
//   content: {
//     delay: 200,
//     duration: 1200,
//     triggerOnce: true,
//   },
// }

const Prosessi = (props) => {
  const { refs } = props

  return (
    <section className={styles.section} id="prosessi" ref={refs}>
      <div className={styles.content}>
        <div className={styles.column}>
          <Images />
        </div>
        <div className={styles.column}>
          <span className={styles.topHeader}>Miten?</span>
          <p className={styles.middleHeader}>
            Voit tulla pöytään ideat valmiina tai antaa Digiaallon hoitaa
            kaiken. Aloita{" "}
            <Link href="/#laheta-viesti">
              <a>lähettämällä viesti</a>
            </Link>{" "}
            tai tsekkaa alustava hinta-arvio{" "}
            <Link href="/verkkosivut#tarjouspyynto">
              <a>tarjouspyynnön</a>
            </Link>{" "}
            ohella.
          </p>
          <h4 className={styles.bottomHeader}>
            Tehostetun Verkkosivun Toteutus
          </h4>
          <div className={styles.textBlocks}>
            <Block
              miniheader="Vaihe 1, 1pv"
              header="Kartoitus"
              text="Kaikki lähtee käyntiin määrittelemällä projektin tavoitteet mahdollisimman tarkasti. Selvitetään brändin vahvuudet ja sivuston tärkeimmät kohderyhmät. Suoritetaan taustatutkimus yrityksesi toimialaan ja kilpailijoihin."
            />
            <Block
              miniheader="Vaihe 2, 5pv"
              header="Suunnittelu"
              text="Laaditaan käyttäjävirta, sivuston tietohierarkia ja kirjoitetaan alas kohderyhmää puhuttelevaa sisältöä sen perusteella mitä tiedämme heistä. Sisältö on brändin tarkoituksenmukaista vuorovaikutusta kohderyhmän kanssa."
            />
            <Block
              miniheader="Vaihe 3, 7pv"
              header="Design"
              text="Valitaan sivuston estetiikka ja haetaan inspiraatiota verkosta. Tehdään päätökset typografiasta, väripalettista, peruselementeistä, kuvituksista ja muista lähdemateriaaleista. Sommitellaan Figmaan lopullista sivustoa vastaava malli."
            />
            <Block
              miniheader="Vaihe 4, 10pv"
              header="Kehitys"
              text="Kehitysvaiheessa verkkokehittäjä tekee edellisen vaiheen mallista toimivan verkkosivun. Kehitys luonnistuu uusimpien standardien mukaisesti ja laatutestauksella varmistetaan optimaaliset valinnat pellin alla."
            />
            <Block
              miniheader="Valmista!"
              header="Julkaisu"
              text="Sivusto on valmis ja on aika julkaista työmme hedelmät. Toimitamme sinulle kuvaohjeet jokaiseen integroituun palveluun ja tietenkin asiakaspalvelulinjat pysyvät auki."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prosessi

const Block = ({ miniheader, header, text, customParagraph }) => {
  return (
    <div className={styles.block}>
      <span className={styles.blockMiniheader}>
        {miniheader}
        <span className={styles.emDash}></span>
      </span>
      <h4 className={styles.blockHeader}>{header}</h4>
      {customParagraph ? (
        customParagraph
      ) : (
        <p className={styles.blockParagraph}>{text}</p>
      )}
    </div>
  )
}

const Images = () => {
  return [...Array(5)].map((value, index) => (
    <img
      src={`/process/${index + 1}.svg`}
      alt={`Kehitysprosessi pallo ${index + 1}`}
      key={index}
    />
  ))
}
