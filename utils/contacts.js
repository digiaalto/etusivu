import React from "react"
import { MdEmail, MdLocalPhone } from "react-icons/md"

const Contacts = ({ invertedColors, withText }) => {
  const iconStyle = {
    display: "block",
    fontSize: "1.5rem",
  }
  if (invertedColors) iconStyle.color = "#eee"

  return (
    <div className="container">
      <a href="mailto:hei@digiaalto.fi">
        <MdEmail style={iconStyle} />
        {withText && " hei@digiaalto.fi"}
      </a>
      <a href="tel:+358505543395">
        <MdLocalPhone style={iconStyle} />
        {withText && " +358505543395"}
      </a>
      <style jsx>
        {`
          .container {
            display: flex;
            gap: 0.1rem;
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

Contacts.defaultProps = {
  invertedColors: false,
  withText: false,
}

export default Contacts
