import Head from "next/head"

const SEO = (props) => {
  const { title, description, keywords, author } = props

  const { ogSitename, ogTitle, ogDescription, ogType, ogImage, ogUrl } = props

  const { twitterTitle, twitterDescription, twitterImage, twitterCard } = props

  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />

      <meta charSet="UTF-8" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <meta name="robots" content="noindex,follow" />
      <meta name="googlebot" content="noindex,follow" /> */}

      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      <meta property="og:site_name" content={ogSitename} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />

      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta
        name="twitter:description"
        content={twitterDescription || ogDescription || description}
      />
      <meta name="twitter:image" content={twitterImage || ogImage} />
      <meta name="twitter:card" content={twitterCard} />
    </Head>
  )
}

export default SEO

SEO.defaultProps = {
  title: "Laatutestatut verkkosivut yritykselle tyytyväisyystakuulla", // 60 chars.
  description:
    "Suunnittelemme optimoidulla ohjelmistoarkkitehtuurilla massasta erottuvia verkkosivuja yrityksille ankaralla laatutestauksella ja 100% tyytyväisyystakuulla.", // 155-160
  keywords:
    "nettisivut yritykselle, verkkosivut yritykselle, verkkosivu yritykselle, nettisivut pk-yritykselle, yritykselle nettisivut, nettisivut, hyvät nettisivut, modernit nettisivut, nykyaikaiset nettisivut, laadukkaat nettisivut, laatutestatut nettisivut, optimoidut nettisivut, nopeat nettisivut, nätit nettisivut, kauniit nettusivut",
  author: "Digiaalto",

  ogSiteName: "Digiaalto.fi",
  ogType: "website",
  ogImage: "https://www.digiaalto.fi/brand/some-image.png", // 1200×630, 1.91:1, 1MB
  ogUrl: "https://digiaalto.fi",

  twitterCard: "summary_large_image",
}
