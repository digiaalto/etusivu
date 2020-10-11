import styles from "../styles/salespitch.module.sass"
import { Fade } from "react-awesome-reveal"
import Button from "./utility/button"

const SalesPitch = () => {
  return (
    <section className={styles.section} id="laatutestaus">
      <div className={styles.content}>
        <Fade fraction={1} direction="up" triggerOnce>
          <span className={`miniheader ${styles.miniheader}`}>
            Edelläkävijän nettisivut
          </span>
          <h2 className={`${styles.header} headerAfter`}>
            Hakukoneet arvostavat laatua
          </h2>
          <p>
            Google Lighthouse on verkkosivujen laatutesti jota Digiaalto käyttää
            verkkosivusi kehityksen yhteydessä.
          </p>
          <p>
            Lighthouse auditoi mm. nettisivun suorituskyvyn, saavutettavuuden ja
            hakukoneoptimoinnin. Lopuksi saat pistearvion ja selvityksen
            kohdista josisa esiintyi puutteita.
          </p>
          <p>
            Digiaalto on erikoistunut rakentamaan laatusivuja ilman puutteita ja
            vanhentuneista käytännöistä seuraavia vikoja. Hakukoneiden
            vaatimuksiin vastaaminen ja web-standardien seuranta johtaa
            menestyksekkääseen nettiläsnäoloon.
          </p>
          <p>
            Parhaat käytännöt eivät pelkästään vaikuta positiivisesti
            verkkosivusi parametreihin hakukoneiden algoritmeissä. Myös
            asiakkaiden käyttökokemus kohenee.
          </p>
          <p className="bold" style={{ marginBottom: "2rem" }}>
            Jos olet tiedonhaluinen, voit tarkistaa muutamassa sekunnissa onko
            sinun tai kilpailijasi verkkosivuissa parantamisen varaa.
          </p>
          <Button
            text="Arvioi verkkosivu"
            href="https://web.dev/measure/"
            outside
          />
        </Fade>
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
