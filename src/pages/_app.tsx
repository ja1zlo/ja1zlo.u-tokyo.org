import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";

import "styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div id="layout_wrapper">
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </Head>
        <header>
          <Link id="toplogo" href="/">
            <img
              src="/image/toplogo.svg"
              width="400"
              height="80"
              alt="東大無線部"
            />
          </Link>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
      <footer>
        <div>
          <p>このサイトは、東京大学アマチュア無線部が管理しています。</p>
          <p>
            このサイトに関するお問い合わせは、
            <a href="mailto:zlo.utokyo@gmail.com">zlo.utokyo@gmail.com</a>
            へどうぞ
          </p>
          <p>
            それぞれのページに関するお問い合わせは、それぞれのページに表示されている問い合わせ先へどうぞ。
          </p>
          <div>
            <p>〒153-8902 東京都目黒区駒場3-8-1 東京大学学生会館 310</p>
            <p>〒113-8654 東京都文京区本郷7-3-1 生協第二食堂3階2号室</p>
          </div>
          <p>
            All Rights Reserved, Copyright (c) 2002-2023 The University of Tokyo
            Amateur Radio Club
          </p>
        </div>
      </footer>
    </>
  );
}
