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
              <Link href="/equipment">設備概要</Link> /{" "}
              <Link href="/member">メンバー</Link>
            </li>
            <li>
              コンテスト
              <ul>
                <li>
                  <a href="/allja1/index.html">ALL JA1</a>
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
              <a href="/history.html">活動記録</a>
            </li>
            <li>
              <Link href="/socho">総長賞受賞</Link>
            </li>
            <li>
              Twitter
              <ul>
                <li>
                  <a href="https://twitter.com/JA1ZLO">@JA1ZLO</a>　
                </li>
                <li>
                  <a href="https://twitter.com/nextzlog">@nextzlog</a>　
                </li>
              </ul>
            </li>
            <li>
              <a href="/link.html">リンク</a>　
            </li>
          </ul>
        </nav>
      </section>

      <section id={style.side}>
        <section>
          <h2>広報</h2>
          <p>
            <b>
              <a href="/komafes74/">駒場祭展示 わかる! 無線通信 企画サイト</a>
            </b>
          </p>
          <p>
            <b>
              オリジナル作品の通信販売開始しました！{" "}
              <a href="https://ja1zlo.base.shop/">BASE</a>,{" "}
              <a href="https://ja1zlo.booth.pm/">BOOTH</a> から購入できます
            </b>
          </p>
          <p>
            <b>
              <a href="https://jarl-tokyo.org/wp2/top-page/comm00-2/comm00/informations/">
                JARL東京都支部主催「無線サイエンスセミナー」が6/11に東京大学で開催されます
              </a>
            </b>
          </p>
          <p>
            <b>
              <a href="https://www.fbnews.jp/202212/musennosekai/">
                電子Webマガジン 「月刊FBニュース」 にて当クラブが紹介されました
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
