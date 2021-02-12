import Link from "next/link"
import PropTypes from "prop-types"
import ButtonStyler from "./ButtonStyler"
import { Link as LinkScroll } from "react-scroll"

const LinkButton = (props) => {
  const { external } = props

  return (
    <ButtonStyler {...props}>
      {external ? <ExternalLink {...props} /> : <InternalLink {...props} />}
    </ButtonStyler>
  )
}

const InternalLink = (props) => {
  const { text, href, smooth } = props
  return smooth ? (
    <LinkScroll to={href} smooth={true}>
      {text}
    </LinkScroll>
  ) : (
    <Link href={href}>
      <a>{text}</a>
    </Link>
  )
}
const ExternalLink = (props) => {
  const { text, href } = props
  return (
    <a href={href} rel="noreferrer noopener" target="_blank">
      {text}
    </a>
  )
}

export default LinkButton

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

LinkButton.defaultProps = {
  text: "Default text",
  href: "/",
}
