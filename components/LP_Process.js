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
              miniheader="Aloitetaan"
              header="Kartoitus"
              text="Kaikki alkaa yhteydenotosta. Valmistaudu antamaan perustietoja yrityksestäsi. Vapaaehtoisesti voit kertoa myös brändistäsi, haluamastasi verkkosivusta ja kohderyhmästä."
            />
            <TextBlock
              miniheader="Vaihe 2"
              header="Suunnittelu"
              text="Taustatiedot käydään läpi ja pienen alustavan tutkimuksen jälkeen Digiaalto suunnittelee ja määrittelee käyttäjäystävällisen tietohierarkian sivusta."
            />
            <TextBlock
              miniheader="Vaihe 3"
              header="Design"
              text="Laaditaan graafinen representaatio verkkosivustasi mistä selviää ulkoasun pääpiirteet. Ennen seuraavaa vaihetta tämä malli hyväksytetään sinulla."
            />
            <TextBlock
              miniheader="Vaihe 4"
              header="Kehitys"
              text="Kehitystyö tehdään edellisen mallin mittojen mukaisesti. Säännöllisellä laatutestauksella varmistetaan parhaat tekniset päätökset ja ylivoimainen hakukoneoptimointi."
            />
            <TextBlock
              miniheader="Valmista!"
              header="Julkaisu"
              text="Verkkosivu on valmis ja toimii itsenäisesti tästä päivästä eteenpäin. Sinulle toimitetaan ohjeet käyttöä varten sekä muihin mahdollisiin palveluihin."
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
