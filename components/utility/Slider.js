import React from "react"
import { Range } from "react-range"

const Slider = (props) => {
  const { name, values, onChange } = props

  return (
    <Range
      name={name}
      step={1}
      min={0}
      values={values}
      onChange={(values) => {
        onChange({ name: name, values: values })
      }}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "6px",
            width: "100%",
            backgroundColor: "#ccc",
            borderRadius: "4px",
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "24px",
            width: "24px",
            backgroundColor: "#2970b7",
            borderRadius: "4px",
          }}
        />
      )}
    />
  )
}

export default Slider
