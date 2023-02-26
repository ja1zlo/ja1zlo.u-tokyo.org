import type { AppProps } from 'next/app'
import Link from 'next/link'

import 'styles/globals.scss'
import 'styles/mystyle.css'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <header>
      <Link id="toplogo" href="/">
        <img src="image/toplogo.gif" width="350" height="50" alt="東大無線部" />
      </Link>
      <div id="header_address">
        <p>〒153-8902 東京都目黒区駒場3-8-1 東京大学学生会館 310</p>
        <p>〒113-8654 東京都文京区本郷7-3-1 生協第二食堂3階2号室</p>
      </div>
      <img id="header_bar" src="image/head.gif" width="700" height="17" />
    </header>
    <main><Component {...pageProps} /></main>
    <footer>
      <div>
        <p>このサイトは、東京大学アマチュア無線部が管理しています。</p>
        <p>このサイトに関するお問い合わせは、
          <a href="mailto:zlo.utokyo@gmail.com">zlo.utokyo@gmail.com</a>
          へどうぞ</p>
        <p>それぞれのページに関するお問い合わせは、それぞれのページに表示されている問い合わせ先へどうぞ。</p>
        <p>All Rights Reserved, Copyright (c) 2002-2023 The University of Tokyo Amateur Radio Club</p>
      </div>
    </footer>
  </>);
}
