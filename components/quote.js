import styles from "../styles/quote.module.sass"
import { MdFormatQuote } from "react-icons/md"

const sourceUrl = "https://youtu.be/mLjxXPHuIJo?t=76"

const Quote = () => {
  return (
    <section className={styles.section}>
      <div className={styles.flexWrapper}>
        <div className={styles.container}>
          <MdFormatQuote className={styles.quoteMark} />
          <p className={styles.quoteText}>
            Sivun latausnopeuden osoitetaan olevan tärkein tekijä käyttäjän
            mobiilikokemuksessa. Se on tärkeämpää kuin kuinka helppoa on löytää
            mitä etsii, se on tärkeämpää kuin sivuston käytön yksinkertaisuus ja
            mielenkiintoisesti, se on kolme kertaa tärkeämpi kuin miltä sivusto
            näyttää.
          </p>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.source}
          >
            ―Google I/O 2019
          </a>
          <MdFormatQuote className={styles.quoteMark} />
        </div>
      </div>
    </section>
  )
}

export default Quote
