import styles from "./Menu.module.sass"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { FiMenu } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import Overlay from "./Overlay"

const links = [
  {
    text: "Etusivu",
    href: "/",
  },
  {
    text: "Verkkosivut",
    href: "/verkkosivut",
  },
  {
    text: "Tarjouspyyntö",
    href: "/verkkosivut#tarjouspyynto",
  },
]

const Menu = (props) => {
  const { menuOpen, toggleOverlay, sectionRefs } = props
  const [visibleSection, setVisibleSection] = useState()

  useEffect(() => {
    if (sectionRefs) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY

        const selected = sectionRefs.find(({ ref }) => {
          const ele = ref.current
          if (ele) {
            const { offsetTop, offsetBottom } = getDimensions(ele)
            return (
              scrollPosition + 10 >= offsetTop &&
              scrollPosition <= offsetBottom - 10
            )
          }
        })

        if (selected && selected.section !== visibleSection)
          setVisibleSection(selected.section)
      }

      handleScroll()
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [visibleSection])

  function scrollTo(ele) {
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <React.Fragment>
      <MenuContainer>
        <MenuButton menuOpen={menuOpen} toggleOverlay={toggleOverlay} />
        <Tracker menuOpen={menuOpen}>
          {sectionRefs &&
            sectionRefs.map(({ section, ref, hoverText }) => (
              <TrackerItem
                selected={section === visibleSection}
                hoverText={hoverText}
                scrollTo={() => scrollTo(ref.current)}
                key={`section-dot-${section}`}
              />
            ))}
        </Tracker>
      </MenuContainer>
      <Overlay visible={menuOpen}>
        <LinkList links={links} toggleOverlay={toggleOverlay} />
      </Overlay>
    </React.Fragment>
  )
}

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect()
  const offsetTop = ele.offsetTop
  const offsetBottom = offsetTop + height

  return {
    height,
    offsetTop,
    offsetBottom,
  }
}

export default Menu

const MenuContainer = (props) => {
  const { children } = props
  return <div className={styles.menu}>{children}</div>
}

const MenuButton = (props) => {
  const { menuOpen, toggleOverlay } = props
  return (
    <button className={styles.menuButton} onClick={toggleOverlay} type="button">
      {menuOpen ? <AiOutlineClose /> : <FiMenu />}
    </button>
  )
}

const Tracker = (props) => {
  const { menuOpen, children } = props
  return (
    <div
      className={styles.tracker}
      style={menuOpen ? { pointerEvents: "none" } : null}
    >
      {children}
    </div>
  )
}

const TrackerItem = (props) => {
  const { selected, hoverText, scrollTo } = props
  return (
    <div className={styles.trackerItem}>
      <div
        className={`${styles.sectionDot} ${selected ? styles.selected : null}`}
        onClick={scrollTo}
      >
        <span className={styles.hoverText}>{hoverText}</span>
      </div>
    </div>
  )
}

const LinkList = (props) => {
  const { links, toggleOverlay } = props
  const router = useRouter()

  return (
    <ul className={styles.linkList}>
      {links.map((link, index) => (
        <a
          className={styles.link}
          key={`nav-link-${index}`}
          onClick={(e) => {
            toggleOverlay()
            router.push(link.href).then(() => window.scrollTo(0, 0))
          }}
        >
          {link.text}
        </a>
      ))}
    </ul>
  )
}
