import { Html, Head, Main, NextScript } from "next/document";

// 메타태그, 폰트 등 전체적인 html 태그 관리 하는데 사용하면 됨
export default function Document() {
  return (
    <Html lang="kr">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
