import Title from "components/title";
import Link from "next/link";
import styles from "./2.module.scss";

const ForNewcomer = () => (
  <article>
    <Title title="新歓立て看 解説" />
    <h1>立て看板の解説</h1>

    <section className={styles.sign_sidebyside}>
      <div className={styles.morse_text} role="figure">
        <p>
          -.-. --.-
          <br />
          -. . .--
          <br />
          -.-. ---
          <br />
          -- . .-. ...
        </p>
        <p>
          -.. .
          <br />
          .--- .-
          <br />
          .---- --..
          <br />
          .-.. ---
        </p>
        <p>
          .-- .
          <br />
          .-- .- -. -
          <br />
          -.-- --- ..-
        </p>
        <p>
          .--. ... .<br />
          -.-
        </p>
      </div>
      <div className={styles.alpha_text}>
        <p>
          CQ
          <br />
          NEW
          <br />
          CO
          <br />
          MERS
        </p>
        <p>
          DE
          <br />
          JA
          <br />
          1Z
          <br />
          LO
        </p>
        <p>
          WE
          <br />
          WANT
          <br />
          YOU
        </p>
        <p>
          PSE
          <br />K
        </p>
      </div>
    </section>

    <section>
      <h2>用語解説</h2>

      <dl>
        <dt>CQ</dt>
        <dd>各局、の意。特定の相手を指定しない呼び出し。</dd>
        <dt>DE</dt>
        <dd>こちらは。</dd>
        <dt>JA1ZLO</dt>
        <dd>
          東大無線部の無線局を識別する記号(コールサイン)。国の機関から指定を受けた唯一無二のもの。
        </dd>
        <dt>PSE</dt>
        <dd>PleaSEの略。よろしくお願いします、くらいの意味。</dd>
        <dt>K</dt>
        <dd>どうぞ。送信をやめて受信状態に入ることを意味する。</dd>
      </dl>
    </section>

    <p>
      <b>
        <Link href="/">無線部のサイトはこちら!</Link>
      </b>
    </p>
  </article>
);

export default ForNewcomer;
