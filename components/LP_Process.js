import styles from "../styles/LP_Process.module.sass"

const LP_Process = () => {
  return (
    <section className={styles.section} id="toteutus">
      <div className={styles.content}>
        <div className={styles.column}>
          <Images />
        </div>
        <div className={styles.column}>
          <h4 className={styles.topHeader}>Prosessi</h4>
          <h3 className={styles.middleHeader}>
            Virtaviivainen toteutusprosessi nopeuttaa tuotteen julkaisua. Voit
            tulla pöytään ideat valmiina tai antaa Digiaallon hoitaa kaiken.
          </h3>
          <h4 className={styles.bottomHeader}>
            Tehostetun Verkkosivun Toteutus
          </h4>
          <div className={styles.textBlocks}>
            <TextBlock
              miniheader="Aloitetaan"
              header="Kartoitus"
              text="Digiaalto hahmoittaa verkkosivusi tavoitteet ja ominaisuudet ja mikä on sinun sivusi kannattavin kohderyhmä. Palveluhankinnat tehdään heti sopimuksen allekirjoitettua."
            />
            <TextBlock
              miniheader="Vaihe 2"
              header="Suunnittelu"
              text="Keskitytään sisältöön. Digiaalto tutkii kilpailijoitasi, kerää ja kirjoittaa tekstisisältöä ja muuta sopivaa lähdemateriaalia sivuihisi."
            />
            <TextBlock
              miniheader="Vaihe 3"
              header="Design"
              text="Lähdemateriaalit yhdistetään rautalankamalliin josta tulee graaffinen representaatio verkkosivusta. Mallia hiotaan kunnes se vastaa odotuksia ja sinä olet hyväksynyt sen."
            />
            <TextBlock
              miniheader="Vaihe 4"
              header="Kehitys"
              text="Verkkosivu luodaan noudattaen parhaita käytäntöjä ja moderneja web-standardeja. Projektiin integroidaan kehittynyttä web-app teknologiaa."
            />
            <TextBlock
              miniheader="Valmista!"
              header="Julkaisu"
              text="Kaikki sivun ominaisuudet testatan vielä viimesein kerran ja domain osoitetaan palvelimelle. Asiakaspalvelulinjat pysyvät auki."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LP_Process

const TextBlock = ({ miniheader, header, text }) => {
  return (
    <div className={styles.textBlock}>
      <span className={styles.blockMiniheader}>
        {miniheader}
        <span className={styles.emDash}></span>
      </span>
      <h4 className={styles.blockHeader}>{header}</h4>
      <p className={styles.blockText}>{text}</p>
    </div>
  )
}

const Images = () => {
  return [...Array(5)].map((value, index) => (
    <img src={`process/${index + 1}.svg`} key={index} />
  ))
}
