import styles from "../styles/toteutus.module.sass"

const Toteutus = () => {
  return (
    <section id="verkkosivun-toteutus" className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.header}>Verkkosivun Toteutus</h2>
        <Part
          header="1. Kartoitus"
          paragraphs={[
            `Kaikki lähtee käyntiin määrittelemällä verkkoprojektin parametrit mahdollisimman selkeästi.`,
            `Projektin tavoitteet, vaatimukset, ominaisuudet, palvelut ja kaikki henkilökohtaiset ideat otetaan huomioon ja kirjataan alas.`,
            `Lopuksi laadimme ja allekirjoitamme sopparin jossa pääkohdat on hahmotettu.`,
          ]}
        />
        <Part
          header="2. Suunnittelu"
          paragraphs={[
            `Seuraavaksi keskitymme sisältöön ja ulkoasuun.`,
            `Sisältö muodostuu kuvista, videoista, asiakasta puhuttelevasta tekstistä ja muista mahdollisista resursseista kuten palkinnoista ja kehuista.`,
            `Sinä tiedät oman yrityksesti toiminnan paremmin kuin kukaan muu, joten on suositeltavaa että otat pääosan tekstisisällön luonnissa.`,
            `Lyhyesti sanottuna sisältö muodostuu sinun brändisi ja kohderyhmäsi välisestä kanssakäymisestä, tai miten sinun tavoitteesi tulevat asiakkaasi tarpeita vastaan.`,
            `Suunnitelma on valmis kun olet hyväksynyt rautalankamallin josta selviää verkkosivusi alustava sommittelu.`,
          ]}
        />
        <Part
          header="3. Kehitys"
          paragraphs={[
            `Kehitys tapahtuu NextJS frameworkilla joka pyörii Facebookin kehittämän ReactJS alustan päällä. Nämä kaksi suosittua ohjelmaa takaavat että parhaat käytännöt toteutuvat.`,
            `Sivua kehittäessä, optimoin ja mahdollisesti editoin sisältöä jotta se asettuu sopivasti ja sulavasti verkkosivun kokonaiskuvaan. Myös ulkoasua hiotaan ja sovitut palvelut integroidaan web-applikaatioon.`,
            `Kehitystä voi seurata reaaliajassa salaisesta linkistä.`,
          ]}
        />
        <Part
          header="4. Julkaisu"
          paragraphs={[
            `Kehityksen jälkeen käynnistän testit ja varmistan että kaikki toimii. Osoitan domainin, eli sinun nettiosoitteen palvelimelle joka hostaa verkkosivujasi.`,
            `Kehityksen jälkeen käynnistän testit ja varmistan että kaikki toimii. Osoitan domainin, eli sinun nettiosoitteen palvelimelle joka hostaa verkkosivujasi.`,
            `Lähdekoodi kuulu sinulle ja se on varmuuskopioitu Github tilillesi jonka luovutan sinulle muiden palveluiden kirjautumistietojen kanssa.`,
            `Saat ohjeet asennettuihin palveluihin, kuten sisällönhallintaan ja sähköpostitileihin.`,
            `Lupaan vastata mahdollisiin kysymyksiin puhelimella tai sähköpostilla.`,
          ]}
        />
      </div>
    </section>
  )
}

export default Toteutus

const Part = ({ header, paragraphs }) => {
  return (
    <div className={styles.part}>
      <h3>{header}</h3>
      {paragraphs.map((paragraph, index) => (
        <p key={`${header}-${index}`}>{paragraph}</p>
      ))}
    </div>
  )
}
