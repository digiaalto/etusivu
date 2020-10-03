import { Fragment } from "react"

const Overlay = ({ toggleSidebar, visible, zIndex = 1000 }) => {
  if (!visible) return null

  return (
    <Fragment>
      <div className="overlay" onClick={toggleSidebar}></div>
      <style jsx>
        {`
          .overlay {
            position: fixed;
            left: 0;
            top: 0;
            height: 100vh;
            width: 100vw;
            background-color: rgba(0, 0, 0, 0.3);
            z-index: ${zIndex};
            animation: fadeIn 0.33s;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </Fragment>
  )
}

export default Overlay
