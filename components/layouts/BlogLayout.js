import React, { useState } from "react"

import SEO from "../common/SEO"
import Topbar from "../common/Topbar"
import Navigation from "../common/Navigation"
import Menu from "../common/Menu"
import Footer from "../common/Footer"

const BlogLayout = (props) => {
  const { topbar, sectionRefs, children } = props
  const [overlayVisible, setOverlayVisible] = useState(false)

  const toggleOverlay = (bool) => {
    if (!bool && !overlayVisible) return
    setOverlayVisible(!overlayVisible)
  }

  return (
    <React.Fragment>
      <SEO {...props} />
      {topbar && <Topbar toggleOverlay={toggleOverlay} />}
      <Navigation topbar={topbar} stayTop={true} />
      <Menu
        menuOpen={overlayVisible}
        toggleOverlay={toggleOverlay}
        sectionRefs={sectionRefs}
      />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default BlogLayout
