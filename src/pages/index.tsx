import Title from "components/title";
import Link from "next/link";
import style from "./index.module.scss";

const Index: React.FC = () => (
  <article id={style.article}>
    <Title title="" />
    <div id={style.content}>
      <section id={style.main}>
        <nav>
          <ul>
            <li>
              <Link href="/fornewcomer">新入生の方へ</Link>
            </li>
            <li>
              <Link href="/equipment">設備概要</Link> /{" "}
              <Link href="/member">メンバー</Link>
            </li>
            <li>
              コンテスト
              <ul>
                <li>
                  <Link href="/allja1/index.html">ALL JA1</Link>
                </li>
              </ul>
            </li>
            <li>
              ソフトウェア
              <ul>
                <li>
                  <Link href="http://www.zlog.org/">ZLOG</Link>
                </li>
                <li>
                  <Link href="/CWerproject.html">CWer&apos;s project</Link>
                </li>
                <li>
                  <Link href="https://nextzlog.dev">無線部開発班</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/history.html">活動記録</Link>
            </li>
            <li>
              <Link href="/socho.html">総長賞受賞</Link>
            </li>
            <li>
              Twitter
              <ul>
                <li>
                  <Link href="https://twitter.com/JA1ZLO">@JA1ZLO</Link>　
                </li>
                <li>
                  <Link href="https://twitter.com/nextzlog">@nextzlog</Link>　
                </li>
              </ul>
            </li>
            <li>
              <Link href="/link.html">リンク</Link>　
            </li>
          </ul>
        </nav>
      </section>

      <section id={style.side}>
        <section>
          <h2>広報</h2>
          <p>
            <b>
              <a href="https://www.fbnews.jp/202212/musennosekai/">
                電子Webマガジン 「月刊FBニュース」 にて当クラブが紹介されました
              </a>
            </b>
            <br />
            <br />
            <b>
              <Link href="/allja1/34rule.html">第34回ALLJA1コンテスト規約</Link>
            </b>
            <br />
            <b>
              <a href="https://allja1.org">ALLJA1の書類提出はこちら</a>
            </b>
            <br />
            <b>
              <Link href="/rt/rt1.html">
                第１回リアルタイムコンテスト パブリックコメント募集中
              </Link>
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
