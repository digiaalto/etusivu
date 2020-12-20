import React, { useState } from "react"
import Head from "next/head"
import Footer from "./Footer"
import Infobar from "./infobar"
import Menu from "./Menu"
import disableScroll from "disable-scroll"

const Layout = (props) => {
  const { title, type, description, infobar, children } = props
  const [overlayVisible, setOverlayVisible] = useState(false)

  const toggleOverlay = () => {
    const newOverlayVisible = !overlayVisible
    if (newOverlayVisible) disableScroll.on()
    else disableScroll.off()
    setOverlayVisible(!overlayVisible)
  }

  // Test 2

  const SEO = {
    title: title
      ? `${title} | Digiaalto.fi`
      : `Verkkosivut yritykselle nopeasti ja helposti | Digiaalto.fi`, // 60
    type: type ? type : "website",
    description: description
      ? description
      : `Digiaalto rakentaa laatutestattuja verkkosivuja kiireiselle yrittäjälle uudella tekniikalla. Osta tehokkaat ja optimoidut verkkosivut, saat avaimet käteen.`,
    image: "https://www.digiaalto.fi/brand/some-image.png",
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
      {infobar && <Infobar />}
      <Menu menuOpen={overlayVisible} toggleOverlay={toggleOverlay} />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
