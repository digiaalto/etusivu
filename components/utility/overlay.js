import { Fragment } from "react"

const Overlay = (props) => {
  const { visible, toggle, children, zIndex = 99990 } = props
  if (!visible) return null

  return (
    <Fragment>
      <div className="overlay" onClick={toggle}>
        {children}
      </div>
      <style jsx>
        {`
          .overlay {
            position: fixed;
            left: 0;
            top: 0;
            height: 100vh;
            width: 100vw;
            background-color: #323232;
            z-index: ${zIndex};
            animation: overlayAnimation 0.33s 1;
            cursor: pointer;
          }

          @keyframes overlayAnimation {
            from {
              opacity: 0
              transform: translateY(-100vh);
            }
            to {
              opacity: 1
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Fragment>
  )
}

export default Overlay
