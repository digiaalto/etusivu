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
          <span className={styles.topHeader}>Sivut helposti.</span>
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
              text="Homma lähtee käyntiin mahdollisimman tarkasti määrittelemällä projektin tavoitteet, brändin vahvuudet ja sivuston tärkeimmät kohderyhmät. Tehdään myös pieni taustatutkimusta kilpailijoihisi."
            />
            <Block
              miniheader="Vaihe 2, 5pv"
              header="Suunnittelu"
              text="Suunnitellaan käyttäjävirta, sivuston tietohierarkia ja aloitetaan kirjoittelemaan valittua kohderyhmää puhuttelevaa sisältöä brändisi omalla kielellä. Etsitään inspiraatiota."
            />
            <Block
              miniheader="Vaihe 3, 7pv"
              header="Design"
              text="Luodaan tyylikansio johon luodaan brändisi henki sopivalla estetiikalla. Valitaan typografia, väripaletti, elementit, kuvitus ja muut resurssit. Sommitellaan Figmaan lopullista sivustoa vastaava malli jota voi seurata kätevästi linkistä."
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
