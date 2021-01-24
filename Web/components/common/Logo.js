import styles from "./Logo.module.sass"
import Link from "next/link"

const Logo = (props) => {
  const { invert } = props
  return (
    <Link href="/">
      <a className={`${styles.logo} ${invert ? styles.invert : null}`}>
        Digiaalto
      </a>
    </Link>
  )
}

export default Logo
