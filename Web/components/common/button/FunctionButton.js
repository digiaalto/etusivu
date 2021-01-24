import PropTypes from "prop-types"
import ButtonStyler from "./ButtonStyler"

const FunctionButton = (props) => {
  const { text, func } = props
  return (
    <ButtonStyler {...props}>
      <button onClick={func}>{text}</button>
    </ButtonStyler>
  )
}

export default FunctionButton

FunctionButton.propTypes = {
  text: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
}

FunctionButton.defaultProps = {
  text: "Default text",
}
