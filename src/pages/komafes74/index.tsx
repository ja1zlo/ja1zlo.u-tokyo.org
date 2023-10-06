import Title from "components/title";
import styles from "./index.module.scss";

const KomafesPage = () => (
  <article id={styles.article}>
    <Title title="わかる! 無線通信" />
    <p>第74回駒場祭企画</p>
    <h1 id={styles.title}>わかる! 無線通信</h1>
    <span id={styles.title_sub}>Wakaru! Wireless Communications</span>
    <p>
      東大無線部は
      <a
        style={{ textDecoration: "underline" }}
        href="https://www.komabasai.net/74/visitor/"
      >
        第74回 駒場祭
      </a>
      に出展いたします!
    </p>
    <dl>
      <dt>日程</dt>
      <dd>2023/11/24(金) - 2023/11/26(日)</dd>

      <dt>展示教室</dt>
      <dd>13号館 1311教室</dd>

      <dt>場所</dt>
      <dd>東京大学 駒場キャンパス</dd>
    </dl>
    <h2>展示ハイライト</h2>
    <h3>交信体験</h3>
    <p>
      本来は従事者免許が必要なアマチュア無線ですが、免許をお持ちでない方も、部員の立会いのもとで交信を体験いただくことができます。
      <br />
      実際に日本全国のアマチュア無線局と交信することができます!
      <br />
      <small>
        本企画は
        <a href="https://www.tele.soumu.go.jp/j/sys/others/ama_experience/leaflet/index.htm">
          交信体験制度
        </a>
        を利用しています。
      </small>
    </p>
    <h3>アマチュア無線の紹介</h3>
    <p>
      アマチュア無線について、その歴史や現在の状況、またアマチュア無線の魅力について紹介します。
    </p>
    <h3>部活動紹介</h3>
    <p>
      普段の部員の活動として行われる、アマチュア無線のほか電子工作やソフトウェア開発などについて紹介します。
    </p>
    <h3>Coming soon...</h3>
    <h2>展示紹介ポスター</h2>
    <div>
      <img id={styles.poster} src="/komafes74/poster.png" alt="" />
    </div>
  </article>
);

export default KomafesPage;
