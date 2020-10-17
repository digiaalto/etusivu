import styles from "../styles/LP_Process.module.sass"

const LP_Process = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.column}>
          <Images />
        </div>
        <div className={styles.column}>
          <h2 className={styles.header}>Prosessi</h2>
          <p className={styles.processTldr}>
            Virtaviivainen toteutusprosessi nopeuttaa tuotteen julkaisua. Voit
            tulla pöytään ideat valmiina tai voimme löytää parhaat strategiat
            yhdessä.
          </p>
          <h2 className={styles.bigHeader}>Tehostetun Verkkosivun Toteutus</h2>
          <div className={styles.textBlocks}>
            <TextBlock
              miniheader="Aloitetaan"
              header="Kartoitus"
              text="Määrittelemme projektin parametrit. Hahmotamme verkkosivun tavoitteet ja ominaisuudet ja mille kohderyhmälle sivut valmistetaan. Palveluhankinnat tehdään heti sopimuksen allekirjoitettua."
            />
            <TextBlock
              miniheader="Vaihe 2"
              header="Suunnittelu"
              text="Keskitymme sisältöön ja ulkoasuun. Otat pääroolin tekstisisällön luonnissa samalla kun Digiaalto rakentaa sivukarttaa, tutkii kilpailijoitasi ja kerää muita lähdemateriaaleja."
            />
            <TextBlock
              miniheader="Vaihe 3"
              header="Design"
              text="Lähdemateriaalit yhdistetään rautalankamalliin josta tulee graaffinen representaatio verkkosivusta. Mallia hiotaan kunnes se vastaa odotuksia."
            />
            <TextBlock
              miniheader="Vaihe 4"
              header="Kehitys"
              text="Verkkosivu koodataan noudattaen parhaita käytäntöjä ja moderneja web-standardeja. Projektiin integroidaan samaa tekniikkaa jota teknologiajätit suosivat."
            />
            <TextBlock
              miniheader="Valmista!"
              header="Julkaisu"
              text="Kaikki sivun ominaisuudet testatan vielä viimesein kerran ja domain osoitetaan palvelimelle. Saat opastuksen palveluihin joita verkkosivu käyttää."
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
      <span className={styles.blockMiniheader}>{miniheader}</span>
      <span className={styles.blockHeader}>{header}</span>
      <p className={styles.blockText}>{text}</p>
    </div>
  )
}

const Images = () => {
  return [...Array(5)].map((value, index) => (
    <img src={`process/${index + 1}.svg`} key={index} />
  ))
}
