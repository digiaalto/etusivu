import React from "react"
import Head from "next/head"
import Footer from "../components/Footer"
import Infobar from "../components/infobar"

const Layout = ({ title, type, description, children, infobar }) => {
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
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
