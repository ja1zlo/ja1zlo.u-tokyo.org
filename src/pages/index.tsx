import Title from "components/title";
import Link from "next/link";
import style from "./index.module.scss";

const Index: React.FC = () => (
  <article id={style.article}>
    <Title title="" />
    <div id={style.content}>
      <section id={style.main}>
        <h1>東大無線部 JA1ZLO Web</h1>
        <nav>
          <ul>
            <li>
              <Link href="/fornewcomer">新入生の方へ</Link>
            </li>
            <li>
              <Link href="/equipment">設備概要</Link>
            </li>
            <li>
              <Link href="/member">メンバー</Link>
            </li>
            <li>
              イベント・コンテスト等
              <ul>
                <li>
                  <a href="/allja1/index.html">ALL JA1コンテスト</a>
                </li>
                <li>
                  <a href="/komafes74/">駒場祭</a>
                </li>
              </ul>
            </li>
            <li>
              ハードウェア・ソフトウェア
              <ul>
                <li>
                  <a href="http://www.zlog.org/">ZLOG</a>
                </li>
                <li>
                  <a href="/hard_softwares">
                    その他のハードウェア・ソフトウェア
                  </a>
                </li>
                <li>
                  <a href="https://nextzlog.dev">無線部開発班</a>
                </li>
              </ul>
            </li>
            <li>
              受賞
              <ul>
                <li>
                  <a href="/socho">総長賞</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              リンク
              <ul>
                <li>
                  Twitter: <a href="https://twitter.com/JA1ZLO">@JA1ZLO</a>,{" "}
                  <a href="https://twitter.com/nextzlog">@nextzlog</a>
                </li>
                <li>
                  通販: <a href="https://ja1zlo.base.shop">BASE</a>,{" "}
                  <a href="https://ja1zlo.booth.pm">BOOTH</a>　
                </li>
                <li>
                  <a href="/link.html">他大学無線部</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>

      <section id={style.side}>
        <section>
          <h2>広報</h2>
          <p>
            <b>
              オリジナル作品の通信販売開始しました！{" "}
              <a href="https://ja1zlo.base.shop/">BASE</a>,{" "}
              <a href="https://ja1zlo.booth.pm/">BOOTH</a> から購入できます
            </b>
          </p>
          <p>
            <b>
              <a href="https://www.fbnews.jp/202212/musennosekai/">
                Webマガジン 「月刊FBニュース」 にて当クラブが紹介されました
              </a>
            </b>
          </p>
          <p>
            <b>
              <a href="/allja1/35rule.html">第35回ALLJA1コンテスト規約</a>
            </b>
            <br />
            <b>
              <a href="https://allja1.org">ALLJA1の書類提出はこちら</a>
            </b>
            <br />
            <b>
              <a href="/rt/rt1.html">
                第１回リアルタイムコンテスト パブリックコメント募集中
              </a>
            </b>
            <br />
          </p>
        </section>
        <section>
          <h2>見学希望の方へ</h2>
          <p>
            年間を通じて部員を募集しています(他大学OK)
            <br />
            見学も可能です。お気軽に
            <a href="mailto:zlo.utokyo@gmail.com">ご連絡</a>下さい!
          </p>
        </section>
      </section>
    </div>
    <p style={{ textAlignLast: "right", paddingRight: "1em" }}>
      <small>Since 2004/3/22</small>
    </p>
  </article>
);

export default Index;
