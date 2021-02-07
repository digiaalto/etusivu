import styles from "./Navigation.module.sass"
import { useEffect, useState } from "react"
import { useSpring, animated } from "react-spring"
import Link from "next/link"
import Logo from "./Logo"
import { debounce } from "../../utils/helpers"

const Navigation = () => {
  const [status, setStatus] = useState({
    inView: true,
    lastPosition: 0,
  })

  const inViewSpring = useSpring({
    from: { top: "-28px" },
    to: {
      top: status.inView ? "48px" : "-28px",
    },
  })

  const scrollHandler = debounce(
    (e) => {
      const currentPosition =
        document.body.scrollTop || document.documentElement.scrollTop

      const scrolledUp =
        currentPosition < status.lastPosition &&
        status.lastPosition - currentPosition

      setStatus({
        inView: scrolledUp,
        lastPosition: currentPosition,
      })
    },
    status.inView ? 50 : 20
  )

  useEffect(() => {
    if (!window || !document) return null
    window.addEventListener("scroll", scrollHandler)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [scrollHandler])

  return (
    <animated.nav role="navigation" className={styles.nav} style={inViewSpring}>
      <Logo />
      <ol className={styles.links}>
        <NavLink href={"/hinta"} text="Hinta" />
        <NavLink href={"/usein-kysyttya"} text="Usein kysyttyä" />
        <NavLink href={"/blogi"} text="Blogi" />
      </ol>
    </animated.nav>
  )
}

const NavLink = (props) => {
  const { href, text } = props
  return (
    <li>
      <Link href={href}>
        <a className={styles.link}>{text}</a>
      </Link>
    </li>
  )
}

export default Navigation
