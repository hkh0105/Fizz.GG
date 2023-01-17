import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render() {
    return (
      <Html lang='ko'>
        <Head>
          <link href='/Fizz.png' rel='apple-touch-icon' />
          <link href='/Fizz.ico' rel='icon' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
