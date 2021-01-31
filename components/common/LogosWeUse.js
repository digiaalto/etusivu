import styles from "./LogosWeUse.module.sass"
import { SiNextDotJs, SiReact, SiNetlify } from "react-icons/si"

const LogosWeUse = () => {
  return (
    <div className={styles.wrap}>
      <LinkWrap href="https://nextjs.org/" hoverText="Next.js">
        <SiNextDotJs />
      </LinkWrap>
      <LinkWrap href="https://reactjs.org/" hoverText="React">
        <SiReact />
      </LinkWrap>
      <LinkWrap href="https://www.netlify.com/" hoverText="Netlify">
        <SiNetlify />
      </LinkWrap>
    </div>
  )
}

const LinkWrap = ({ href, children, hoverText }) => (
  <a href={href} rel="noopener noreferrer" target="_blank">
    {children}
    <span className={styles.hoverText}>{hoverText}</span>
  </a>
)

export default LogosWeUse
