import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class Doc extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head />
        <Main />
        <NextScript />
      </Html>
    )
  }
}
