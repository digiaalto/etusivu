import React, { useState } from "react"
import SEO from "../common/SEO"
import Topbar from "../common/Topbar"
import Navigation from "../common/Navigation"
import Menu from "../common/Menu"
import Footer from "../common/Footer"
import CoordinateTracker from "@/common/CoordinateTracker"

const DefaultLayout = (props) => {
  const { topbar, sectionRefs, children } = props
  const [overlayVisible, setOverlayVisible] = useState(false)
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 })

  const toggleOverlay = (bool) => {
    if (!bool && !overlayVisible) return
    setOverlayVisible(!overlayVisible)
  }

  const updateCoordinates = (e) => {
    const { pageX, pageY } = e
    setMouseCoordinates({ x: pageX, y: pageY })
  }

  return (
    <div onMouseMove={updateCoordinates}>
      <SEO {...props} />
      {topbar && <Topbar toggleOverlay={toggleOverlay} />}
      <Navigation topbar={topbar} />
      <CoordinateTracker coordinates={mouseCoordinates} />
      <Menu
        menuOpen={overlayVisible}
        toggleOverlay={toggleOverlay}
        sectionRefs={sectionRefs}
      />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
