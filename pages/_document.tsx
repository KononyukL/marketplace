import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ua">
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          sizes="16x16"
          href="favicon-dark.ico"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="16x16"
          href="favicon.ico"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
