import React, { useContext } from "react"
import Link from "next/link"

const buttonCtx = React.createContext({})
/**
 *
 * @params {{href: string, text: string, icon: object, customStyle: object}}
 */

const Button = (props) => {
  function selectCorrectButtonType() {
    if (!props.outside) {
      return <InnerButton />
    } else {
      return <OutsideButton />
    }
  }

  return (
    <buttonCtx.Provider value={props}>
      {selectCorrectButtonType()}
    </buttonCtx.Provider>
  )
}

export default Button

const InnerButton = () => {
  const value = useContext(buttonCtx)
  return (
    <Link href={value.href}>
      <a>
        {value.icon && value.icon} {value.text}
      </a>
    </Link>
  )
}

const OutsideButton = () => {
  const value = useContext(buttonCtx)
  return (
    <a href={value.href}>
      {value.icon && value.icon} {value.text}
    </a>
  )
}
