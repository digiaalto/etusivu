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
              kaiken nykyisten web-standardien mukaisesti.
            </p>
            <h4 className={styles.bottomHeader}>
              Tehostetun Verkkosivun Toteutus
            </h4>
            <div className={styles.textBlocks}>
              <Block
                miniheader="Vaihe 1, 1pv"
                header="Kartoitus"
                text="Kaikki alkaa yhteydenotosta. Ole hyvä ja täytä kyselylomake tai ota yhteyttä tavanomaisesti. Kerro vähintään pakolliset taustatiedot yrityksestäsi ja itseästi."
              />
              <Block
                miniheader="Vaihe 2, 5pv"
                header="Suunnittelu"
                text="Suunnittelu lähtee käyntiin tutkimalla kilpailijoitasi ja yrityksesi toimialaa. Kehitetään paras tietohierarkia, sivukartta ja kirjoitetaan sisältö."
              />
              <Block
                miniheader="Vaihe 3, 7pv"
                header="Design"
                text="Jokaiseen sivustoon kuuluu oma tyyli joka on yhtenäinen yrityksen brändin kanssa. Luodaan tyylikansio johon lisätään mm. typografia, väripaletti, esimerkkejä, kuvia ja videoita. Kansiosta tehdään rautalankamalli."
              />
              <Block
                miniheader="Vaihe 4, 10pv"
                header="Kehitys"
                text="Edellisen vaiheen mallin hyväksynnän jälkeen alkaa itse koodaus. Kehitys tapahtuu huolellisesti, ajasta tinkimättä. Tekniset päätökset tehdään parhaiden standardien mukaisesti."
              />
              <Block
                miniheader="Valmista!"
                header="Julkaisu"
                text="Onneksi olkoon, yrityssivusi on valmis ja toimii itsenäisesti tästä päivästä eteenpäin!"
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
