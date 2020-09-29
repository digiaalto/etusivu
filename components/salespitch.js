import styles from "../styles/salespitch.module.sass"

const SalesPitch = () => {
  return (
    <section className={styles.section} id="investoi-uuteen">
      <div className={styles.content}>
        <h2 className={styles.header}>Investoi Uuteen</h2>
        <img
          src="lighthouse-scores.png"
          alt="Impressive lighthouse scores"
          className={styles.scores}
        />
        <p>
          Kilpailu on kovaa verkkosivujen näkyvyydessä, mutta koskemattomia
          mahdollisuuksia erottua joukosta on vielä olemassa.
        </p>
        <p>
          Digiaalto panostaa verkkosivujen teknisteen toteutukseen joka
          noudattaa Googlen vaatimuksia ja suosituksia tarkemmin kuin muut,
          jolloin sinä verkkosivun omistajana hyödyt etuasemasta Googlen
          algoritmeissä.
        </p>
        <p>
          Selvitä paljonko omissa, tai kilpailijoittesi nettisivuissa on
          parantamisen varaa syöttämällä nettiosoite{" "}
          <a
            href="https://web.dev/measure/"
            target="_blank"
            rel="noopener noreferrer"
          >
            tähän testiin.
          </a>
        </p>
        <p>
          Nettisivut jotka onnistuvat teknillisesti eivät ole pelkästään
          hakukoneiden roboottien suosiossa, myös käyttäjät arvostavat salaman
          nopeaa latausaikaa, esteettömyyttä ja todistettua laatua.
        </p>
      </div>
      <div className={styles.highlight}>
        <h2>
          Digiaalto on erikoistunut auttamaan verkkosivusi laatumittauksen
          arvojen parantamisessa.
        </h2>
      </div>
    </section>
  )
}

export default SalesPitch

/**

  Digiaalto on erikoistunut staattisen verkkosivujen suunnitteluun ja
  kehittämiseen nopealla ja skaalautuvalla teknologia-stackillä, jolla
  saa kovat pisteet Googlen kehittämältä laatutestiltä. Wordpress
  perusmätöllä ei näihin tuloksiin päästä.

*/
