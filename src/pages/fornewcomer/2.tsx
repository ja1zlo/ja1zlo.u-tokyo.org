import React from "react";
import Title from "components/title";
import Link from "next/link";
import styles from "./2.module.scss";
import Image from "next/image";

import ImagePaddle from "./paddle.webp";
import ImageStraight from "./straight.webp";

const ForNewcomer = () => (
  <article>
    <Title title="新歓立て看 解説" />
    <h1>立て看板の解説</h1>

    <section className={styles.sign_wrapper}>
      <div className={styles.morse_sign}>
        {(
          [
            [
              [
                ["C", "-.-."],
                ["Q", "--.-"],
              ],
              [
                ["N", "-."],
                ["E", "."],
                ["W", ".--"],
              ],
              [
                ["C", "-.-."],
                ["O", "---"],
              ],
              [
                ["M", "--"],
                ["E", "."],
                ["R", ".-."],
                ["S", "..."],
              ],
            ],
            [
              [
                ["D", "-.."],
                ["E", "."],
              ],
              [
                ["J", ".---"],
                ["A", ".-"],
              ],
              [
                ["1", ".---"],
                ["Z", "--.."],
              ],
              [
                ["L", ".-.."],
                ["O", "---"],
              ],
            ],
            [
              [
                ["W", ".--"],
                ["E", "."],
              ],
              [
                ["W", ".--"],
                ["A", ".-"],
                ["N", "-."],
                ["T", "-"],
              ],
              [
                ["Y", "-.--"],
                ["O", "---"],
                ["U", "..-"],
              ],
            ],
            [
              [
                ["P", ".--."],
                ["S", "..."],
                ["E", "."],
              ],
              [["K", "-.-"]],
            ],
          ] as [string, string][][][]
        ).map((paragraph, i) => (
          <p key={i}>
            {paragraph.map((line, j) => (
              <React.Fragment key={j}>
                {line.map(([char, morse], k) => (
                  <span key={k}>
                    <ruby>
                      {morse}
                      <rt>{char}</rt>
                    </ruby>{" "}
                  </span>
                ))}
                <br />
              </React.Fragment>
            ))}
          </p>
        ))}
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

    <section>
      <h2>モールス符号について</h2>
      <p>
        モールス符号は、電信のために開発された符号で、長短の点を組み合わせて文字や記号を表現するものです。
        アマチュア無線では、音声の通信も行いますが、モールス符号を使った通信も現役で行われており、
        東京大学アマチュア無線クラブにおいても、モールス符号を使った通信が行われています。
      </p>

      <p>
        モールス信号は音声信号と比べ弱い信号でも聞き取ることができるため、より遠くの無線局との通信が可能になります。
        過去にはヨーロッパやアメリカなどとも交信を行いました。
      </p>

      <p>
        モールス符号は電鍵と呼ばれる装置を使って送信します。
        以下の写真は、東大無線部が所有する電鍵です。
      </p>
      <div className={styles.keyer_images}>
        <Image src={ImagePaddle} alt="パドル型電鍵" />
        <Image src={ImageStraight} alt="縦振り型電鍵" />
      </div>
    </section>

    <p>
      <b>
        <Link href="/">無線部のサイトはこちら!</Link>
      </b>
    </p>
  </article>
);

export default ForNewcomer;
