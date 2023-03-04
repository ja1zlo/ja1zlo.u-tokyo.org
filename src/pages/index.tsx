import Link from 'next/link';
import style from './index.module.scss';

const Index: React.FC = () => (
  <article id={style.article}>
    <div id={style.content}>
      <section id={style.main}>
        <nav>
          <ul>
            <li><Link href="/fornewcomer">新入生の方へ</Link></li>
            <li><a href="equipment.html">設備概要</a> / <a href="member.html">メンバー</a></li>
            <li>
              コンテスト
              <ul>
                <li><a href="allja1/index.html">ALL JA1</a></li>
              </ul>
            </li>
            <li>
              ソフトウェア
              <ul>
                <li><a href="http://www.zlog.org/">ZLOG</a></li>
                <li><a href="CWerproject.html">CWer&apos;s project</a></li>
                <li><a href="https://nextzlog.dev">無線部開発班</a></li>
              </ul>
            </li>
            <li><a href="history.html">活動記録</a></li>
            <li><a href="socho.html">総長賞受賞</a></li>
            <li>
              Twitter
              <ul>
                <li><a href="https://twitter.com/JA1ZLO">@JA1ZLO</a>　</li>
                <li><a href="https://twitter.com/nextzlog">@nextzlog</a>　</li>
              </ul>
            </li>
            <li><a href="link.html">リンク</a>　</li>
          </ul>
        </nav>
      </section>
      {/* <a href="equipment.html"><img src="photo/topmenu_background.jpg" width="200" height="350"  alt="学生会館リニューアル" /></a> */}

      <section id={style.side}>
        <section>
          <h2>広報</h2>
          <p>
            <b><a href="https://www.fbnews.jp/202212/musennosekai/">電子Webマガジン 「月刊FBニュース」 にて当クラブが紹介されました</a></b><br />
            <br />
            <b><a href="http://ja1zlo.u-tokyo.org/allja1/34rule.html">第34回ALLJA1コンテスト規約</a></b><br />
            <b><a href="https://allja1.org">ALLJA1の書類提出はこちら</a></b><br />
            <b><a href="http://ja1zlo.u-tokyo.org/rt/rt1.html">第１回リアルタイムコンテスト パブリックコメント募集中</a></b><br />
          </p>
        </section>
        <section>
          <h2>見学希望の方へ</h2>
          <p>
            年間を通じて部員を募集しています(他大学OK)<br />
            見学も可能です。お気軽に<a href="mailto:zlo.utokyo@gmail.com">ご連絡</a>下さい!
          </p>
        </section>
      </section>
    </div>
    <p style={ {textAlignLast: 'right'} }>
    <small>Since 2004/3/22</small>
    </p>
  </article>

);

export default Index;
