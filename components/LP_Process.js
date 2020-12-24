import styles from "../styles/LP_Process.module.sass"

const LP_Process = (props) => {
  const { refs } = props

  return (
    <section className={styles.section} id="prosessi" ref={refs}>
      <div className={styles.content}>
        <div className={styles.column}>
          <Images />
        </div>
        <div className={styles.column}>
          <span className={styles.topHeader}>Prosessi</span>
          <h3 className={styles.middleHeader}>
            Voit tulla pöytään ideat valmiina tai antaa Digiaallon hoitaa
            kaiken.
          </h3>
          <h4 className={styles.bottomHeader}>
            Tehostetun Verkkosivun Toteutus
          </h4>
          <div className={styles.textBlocks}>
            <TextBlock
              miniheader="Aloitetaan, 2pv"
              header="Kartoitus"
              text="Kaikki alkaa yhteydenotosta. Valmistaudu antamaan perustietoja yrityksestäsi. Vapaaehtoisesti voit kertoa myös brändistä, kohderyhmästä ja projektista."
            />
            <TextBlock
              miniheader="Vaihe 2, 5pv"
              header="Suunnittelu"
              text="Antamasi taustatiedot käydään läpi ja tutkimuksen jälkeen suunnitellaan sisältö ja käyttäjäystävällinen tietohierarkia ja sivukartta."
            />
            <TextBlock
              miniheader="Vaihe 3, 7pv"
              header="Design"
              text="Luodaan brändiisi sopiva tyylikokoelma ja graafinen representaatio sivusta mihin sovelletaan sisältö ja tyylielementit. Tätä mallia hiotaan kunnes olet tyytyväinen."
            />
            <TextBlock
              miniheader="Vaihe 4, 10pv"
              header="Kehitys"
              text="Koodaus alkaa. Kotisivu valmistetaan mallista ja tekniset päätökset tehdään tapauskohtaisesti ja hakukoneiden suosimien standardien mukaisesti."
            />
            <TextBlock
              miniheader="Valmista!"
              header="Julkaisu"
              text="Onneksi olkoon, yrityssivusi on valmis ja toimii itsenäisesti tästä päivästä eteenpäin!"
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
    <img
      src={`/process/${index + 1}.svg`}
      alt={`Kehitysprosessi pallo ${index + 1}`}
      key={index}
    />
  ))
}
