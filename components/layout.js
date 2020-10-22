import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import Footer from "../components/footer"
import Nav from "../components/navigation"

const Layout = ({ title, children, infobar = null }) => {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex,follow" />
        <meta name="googlebot" content="noindex,follow" />
        <title>{title}</title>
      </Head>
      {infobar}
      <Nav />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

Layout.defaultProps = {
  title: "Verkkosivut jotka löytyvät | Digiaalto.fi",
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.arrayOf(PropTypes.object).isRequired,
  ]),
}

export default Layout
