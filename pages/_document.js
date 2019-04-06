import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/wkj1feu.css" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Crimson+Text:400,400i"
          />
        </Head>
        <body className="leading-normal font-sans text-black min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
