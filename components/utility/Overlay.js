import { Fragment } from "react"

const Overlay = (props) => {
  const { visible, children, zIndex = 999 } = props
  if (!visible) return null

  return (
    <Fragment>
      <div className="overlay">{children}</div>
      <style jsx>
        {`
          .overlay {
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            left: 0;
            top: 0;
            background-color: #000000;
            z-index: ${zIndex};
            animation: overlayAnimation 0.33s 1;
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
