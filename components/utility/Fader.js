import { Transition } from "react-transition-group"

const duration = 333

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

const Fader = ({
  inProp,
  children,
  enteredCallback = null,
  exitedCallback = null,
}) => {
  return (
    <Transition
      in={inProp}
      timeout={duration}
      onEntered={enteredCallback ? enteredCallback : () => null}
      onExited={exitedCallback ? exitedCallback : () => null}
    >
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}

export default Fader
