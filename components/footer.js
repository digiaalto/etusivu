import Socials from "../utils/socials"
import styles from "../styles/footer.module.sass"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h3 className={styles.title}>Digiaalto</h3>
        <div className={styles.copyrightContainer}>
          <span className={styles.copyrightSymbol}>©</span>{" "}
          <span>digiaalto.fi</span>
        </div>
        <div className={styles.contactContainer}>
          <h4 className={styles.contactHeader}>Yhteystiedot</h4>
          <a href="mailto:hei@digiaalto.fi">hei@digiaalto.fi</a>
          <div className={styles.socialsWrapper}>
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
