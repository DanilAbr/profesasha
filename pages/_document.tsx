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
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <title>Александра Абрамова - преподаватель испанского языка</title>
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
