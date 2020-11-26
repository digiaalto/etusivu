import React from "react"
import Head from "next/head"
import DesktopNavigation from "./NavDesktop"

const Layout = ({ title, type, description, children, infobar = null }) => {
  const SEO = {
    title: title
      ? `${title} | Digiaalto.fi`
      : `Optimoidut verkkosivut nettiin vaivattomasti | Digiaalto.fi`, // 60
    type: type ? type : "website",
    description: description
      ? description
      : `Digiaalto rakentaa laatutestattuja verkkosivuja kiireiselle yrittäjälle. Modernilla tekniikalla optimoitu verkkokehitys ja suunnittelupalvelu. Avaimet käteen.`,
    image: "/brand/some-image.png",
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
      {infobar}
      <DesktopNavigation />
      <main>{children}</main>
    </React.Fragment>
  )
}

export default Layout
