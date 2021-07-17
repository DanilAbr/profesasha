import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='ru-RU' >
        <Head>
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
