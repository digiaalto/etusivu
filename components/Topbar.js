import styles from "../styles/Topbar.module.sass"
import React from "react"
import Link from "next/link"
import { MdEmail, MdLocalPhone } from "react-icons/md"
import { useRouter } from "next/router"

const Topbar = (props) => {
  const { toggleOverlay } = props
  const router = useRouter()

  return (
    <div className={styles.topbar}>
      <a href="mailto:hei@digiaalto.fi" className={styles.contactLink}>
        <MdEmail />
        <span className={styles.contactText}>hei@digiaalto.fi</span>
      </a>
      <div className={styles.divider} />
      <a href="tel:+358505543395" className={styles.contactLink}>
        <MdLocalPhone />
        <span className={styles.contactText}>050 5543 395</span>
      </a>
      <div className={styles.divider} />
      <Link href="/tilaus">
        <a
          href="/tilaus"
          className={styles.contactLink}
          onClick={(e) => {
            toggleOverlay(false)
            router.push("/tilaus").then(() => window.scrollTo(0, 0))
          }}
        >
          Tilaa verkkosivu →
        </a>
      </Link>
    </div>
  )
}

export default Topbar
