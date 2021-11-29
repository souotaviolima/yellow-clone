import React, { useEffect, useState } from 'react'
import Head from 'next/head'

type Seo = {
  title: String
  links: any
  openGraph: any
}

const Heads = ({ data }: any) => {
  const [getSeo, setSeo] = useState<Seo>(data)
  return (
    <Head>
      <title>{getSeo && getSeo.title}</title>

      {getSeo &&
        getSeo.links.map((lk, key) =>
          lk.sizes ? (
            <link rel={lk.rel} href={lk.href} sizes={lk.sizes} />
          ) : (
            <link rel={lk.rel} href={lk.href} />
          )
        )}
      {getSeo &&
        getSeo.openGraph.map((og: any, key: number) => (
          <React.Fragment>
            <meta key={key} name={og.name} content={og.content} />
            {og.images &&
              og.images.map((img, key) => (
                <React.Fragment>
                  <meta property="og:image" content={img.url} />
                  <meta property="og:image:type" content={img.width} />
                  <meta property="og:image:width" content={img.width} />
                  <meta property="og:image:height" content={img.height} />
                </React.Fragment>
              ))}
          </React.Fragment>
        ))}
      <link
        rel="stylesheet"
        id="elementor-post-3354-css"
        href="/assets/css/styles/post-3354.css?ver=1615484385"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-3372-css"
        href="/assets/css/styles/post-3372.css?ver=1616767691"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-3387-css"
        href="/assets/css/styles/post-3387.css?ver=1615494558"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="wp-block-library-css"
        href="/assets/css/styles/styles.min.css?ver=5.7.3"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="wp-block-library-theme-css"
        href="/assets/css/styles/theme.min.css?ver=5.7.3"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="rs-plugin-settings-css"
        href="/assets/css/styles/settings.css?ver=5.3.1.5"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="simple-line-icons-css"
        href="/assets/css/styles/simple-line-icons.min.css?ver=2.4.0"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="magnific-popup-css"
        href="/assets/css/styles/magnific-popup.min.css?ver=1.0.0"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="slick-css"
        href="/assets/css/styles/slick.min.css?ver=1.6.0"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="oceanwp-style-css"
        href="/assets/css/styles/style.min.css?ver=2.0.8"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-icons-css"
        href="/assets/css/styles/elementor-icons.min.css?ver=5.9.1"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-animations-css"
        href="/assets/css/styles/animations.min.css?ver=3.0.14"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-frontend-legacy-css"
        href="/assets/css/styles/frontend-legacy.min.css?ver=3.0.14"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-frontend-css"
        href="/assets/css/styles/frontends.min.css?ver=3.0.14"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-4560-css"
        href="/assets/css/styles/post-4560.css?ver=1615484289"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-4560-css"
        href="/assets/css/styles/post-3349.css?ver=1615484332"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-pro-css"
        href="/assets/css/styles/frontend.min.css?ver=3.0.8"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-global-css"
        href="/assets/css/styles/global.css?ver=1615484290"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-3325-css"
        href="/assets/css/styles/post-3325.css?ver=1615484382"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="oceanwp-custom-css"
        href="/assets/css/styles/custom-style.css?ver=5.7.3"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="google-fonts-1-css"
        href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CMontserrat%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&ver=5.7.3"
        type="text/css"
        media="all"
      />
    </Head>
  )
}

export default Heads
