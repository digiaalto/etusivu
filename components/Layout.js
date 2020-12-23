import React, { useState } from "react"
import Head from "next/head"
import disableScroll from "disable-scroll"

import Topbar from "./Topbar"
import NavMenu from "./NavMenu"
import Footer from "./Footer"

const Layout = (props) => {
  const {
    title,
    type,
    description,
    topbar,
    footerHaastattelu,
    sectionRefs,
    children,
  } = props
  const [overlayVisible, setOverlayVisible] = useState(false)

  const SEO = {
    title: title
      ? `${title} | Digiaalto.fi`
      : `Kestävät kotisivut yritykselle helposti | Digiaalto.fi`, // 60 chars.
    type: type ? type : "website",
    description: description
      ? description
      : `Verkkokehittäjä Digiaalto rakentaa modernilla tavalla oikeasti tehokkaita ja laatutestattuja kotisivuja kiireisille yrittäjille. Kaikilla lisäpalveluilla.`, // max 160 chars.
    image: "https://www.digiaalto.fi/brand/some-image.png",
  }

  const toggleOverlay = () => {
    const newOverlayVisible = !overlayVisible
    if (newOverlayVisible) disableScroll.on()
    else disableScroll.off()
    setOverlayVisible(!overlayVisible)
  }

  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex,follow" />
        <meta name="googlebot" content="noindex,follow" />

        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="og:url" content="https://www.digiaalto.fi" />
        <meta name="og:type" content={SEO.type} />
        <meta name="og:title" content={SEO.title} />
        <meta name="og:image" content={SEO.image} />
      </Head>
      {topbar && <Topbar />}
      <NavMenu
        menuOpen={overlayVisible}
        toggleOverlay={toggleOverlay}
        sectionRefs={sectionRefs}
      />
      <main>{children}</main>
      <Footer haastattelu={footerHaastattelu} />
    </React.Fragment>
  )
}

export default Layout
