import styles from "./Prosessi.module.sass"
import { BsLightningFill } from "react-icons/bs"
import { Fade } from "react-awesome-reveal"

const animCfg = {
  content: {
    delay: 200,
    duration: 1200,
    triggerOnce: true,
  },
}

const Prosessi = (props) => {
  const { refs } = props

  return (
    <section className={styles.section} id="prosessi" ref={refs}>
      <Fade {...animCfg.content}>
        <div className={styles.content}>
          <div className={styles.column}>
            <Images />
          </div>
          <div className={styles.column}>
            <span className={styles.topHeader}>
              <span className={styles.headerIcon}>
                <BsLightningFill />
              </span>
              Prosessi
            </span>
            <p className={styles.middleHeader}>
              Voit tulla pöytään ideat valmiina tai antaa Digiaallon hoitaa
              kaiken.
            </p>
            <h4 className={styles.bottomHeader}>
              Tehostetun Verkkosivun Toteutus
            </h4>
            <div className={styles.textBlocks}>
              <Block
                miniheader="Vaihe 1, 1pv"
                header="Kartoitus"
                text="Ota yhteyttä lähettämällä viesti tai täyttämällä tarjouspyyntö. Määritetään sivuston tavoitteet, brändin vahvuus ja sivuston kohderyhmä. Digiaalto tutkii toimialaasi ja kilpailijoitasi."
              />
              <Block
                miniheader="Vaihe 2, 5pv"
                header="Suunnittelu"
                text="Suunnitellaan käyttäjävirta, sivuston tietohierarkia ja lähdetään kirjoittamaan valittua kohderyhmää puhuttelevaa sisältöä brändisi omalla kielellä."
              />
              <Block
                miniheader="Vaihe 3, 7pv"
                header="Design"
                text="Valitaan brändisi mukainen typografia ja väripaletti. Figmaan sommitellaan lopullista sivustoa vastaava malli. Pystyt seuraamaan töitä linkistä."
              />
              <Block
                miniheader="Vaihe 4, 10pv"
                header="Kehitys"
                text="Kehitysvaiheessa hyväksytty malli realisoidaan oikeaksi sivustoksi. Kehitys luonnistuu uusimpien standardien mukaisesti ja laatutestauksella varmistetaan oikeat päätökset pellin alla."
              />
              <Block
                miniheader="Valmista!"
                header="Julkaisu"
                text="Sivusto on valmis ja on aika julkaista työmme hedelmät. Toimitamme sinulle kuvaohjeet jokaiseen integroituun ohjelmaan ja asiakaspalvelulinjat pysyvät auki tulevaisuudessakin."
              />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default Prosessi

const Block = ({ miniheader, header, text }) => {
  return (
    <div className={styles.block}>
      <span className={styles.blockMiniheader}>
        {miniheader}
        <span className={styles.emDash}></span>
      </span>
      <h4 className={styles.blockHeader}>{header}</h4>
      <p className={styles.blockParagraph}>{text}</p>
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
