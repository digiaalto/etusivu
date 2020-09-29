import styles from "../styles/quote.module.sass"
import { MdFormatQuote } from "react-icons/md"

const sourceUrl = "https://www.youtube.com/watch?v=mLjxXPHuIJo"

const Quote = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <MdFormatQuote className={styles.quoteMark} />
        <p className={styles.quote}>
          The speed that it takes for a page to load is revealed to be the most
          important factor in a user's mobile experience. It's more important
          than how easy it is to find what they want and it's more important
          than the simplicity of using the site.
          <a
            className={styles.source}
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            ―Google I/O
          </a>
        </p>
        <MdFormatQuote className={styles.quoteMark} />
      </div>
    </section>
  )
}

export default Quote
