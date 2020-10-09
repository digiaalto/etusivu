import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai"

const Socials = ({ invertedColors = false }) => {
  const iconStyle = {
    display: "block",
    fontSize: "1.5rem",
  }
  if (invertedColors) iconStyle.color = "#eee"

  return (
    <div className="container">
      <a
        href="https://www.twitter.com/digiaalto"
        target="_blank"
        rel="noopener"
      >
        <AiFillTwitterCircle style={iconStyle} />
      </a>
      <a href="/" target="_blank">
        <AiFillFacebook style={iconStyle} />
      </a>
      <a href="/" target="_blank">
        <AiFillInstagram style={iconStyle} />
      </a>
      <style jsx>
        {`
          .container {
            display: flex;
            gap: 0.5rem;
          }

          .container a {
            align-self: center;
            vertical-align: middle;
            padding: 0.25rem;
          }
        `}
      </style>
    </div>
  )
}

export default Socials
