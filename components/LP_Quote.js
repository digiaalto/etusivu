import styles from "../styles/LP_Quote.module.sass"

const sourceUrl = "https://youtu.be/mLjxXPHuIJo?t=76"

const LP_Quote = () => {
  return (
    <div className={styles.content}>
      <p className={styles.quote}>
        "Sivun latausnopeuden osoitetaan olevan tärkein tekijä käyttäjän
        mobiilikokemuksessa. Se on tärkeämpää kuin kuinka helppoa on löytää mitä
        etsii, se on tärkeämpää kuin sivuston käytön yksinkertaisuus ja
        mielenkiintoisesti, se on kolme kertaa tärkeämpi kuin miltä sivusto
        näyttää."
      </p>
      <a
        href={sourceUrl}
        target="_blank"
        rel="noreferrer noopener"
        className={styles.source}
      >
        —Google I/O (youtube)
      </a>
    </div>
  )
}

export default LP_Quote
