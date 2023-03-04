import Title from "components/title";
import { useState } from "react";
import styles from "./fornewcomer.module.scss";

const ForNewcomer = () => (
  <article className={styles.article}>
    <Title title="新入生の方へ" />
    <div style={{ textAlign: "center" }}>
      <img
        src="image/feelradio.gif"
        alt="電波を感じろ！"
        style={{ width: "90%" }}
      />
      <br />
      <br />
    </div>

    <section className={styles.shadowed_box}>
      <h3>☆入部をご希望の方へ☆</h3>
      新歓情報・初回部会についての連絡のため、
      <br />
      <a
        href="https://forms.gle/UGgrHVMPQYwStK5d6"
        target="_blank"
        rel="noreferrer"
      >
        <b>こちら</b>
      </a>
      のフォームより連絡先の登録にご協力お願いします。
      <br />
    </section>

    <p>
      <a
        href="https://ja1zlo.u-tokyo.org/lp/AboutContest.pdf"
        target="_blank"
        rel="noreferrer"
      >
        アマチュア無線紹介誌<b>「コンテストって何だ！」</b>
      </a>
      by JI0VWL
      <br />
      <small>過去の紹介誌です。</small>
    </p>

    <section className={styles.content}>
      <div>
        <section>
          <h2 className={styles.headline1}>アマチュア無線の紹介</h2>
          <small>
            一体何をするサークルなんだ？と思ったアナタ。まずは読んでみてください。
          </small>
        </section>

        <section>
          <h3 className={styles.headline2}>無線</h3>
          「アマチュア無線は、電波を用いて他の無線局と交信するのが主な目的です。」
          <br />
          <br />
          不特定多数の人と交信する楽しみは、今や携帯やインターネットでも体験できるのは事実。
          だからといって「携帯電話やインターネットの普及に伴って、アマチュア無線はある意味下火」というのは実は間違い！
          いや、現状としてはそのとおり！！
          でも携帯やインターネットは他人が用意したインフラに乗っかっているだけで、実は自分から何もアクションを起こしていないのでは？{" "}
          <br />
          対してアマチュア無線では交信するまでの過程も楽しめます。
          電波が出て行くまでの設備を自分で用意しメンテナンスしていかなくてはならないところが面白い！
          メーカーが作った製品を使うのもいいけど、自作するのもアリ。
          自分が設計し製作したアンプやアンテナを使って海外と交信できた感激、あなたも味わってみませんか？
        </section>

        <section>
          <h3 className={styles.headline2}>コンテスト</h3>
          しかし、交信が楽しいといってもさすがにそればかりだと飽きてきてしまうもの。
          しかしアマチュア無線には様々な楽しみ方があり、そのひとつにコンテストがあります。
          コンテストとはすなわちアマチュア無線の競技会です。一定時間電波を出しつづけ、どれだけ多くの無線局と交信できるかを競うもの。
          ときには24時間にも及ぶことがあり、それだけの時間交信を続けるためには、普段からの設備のメンテナンスやオペレートのテクニックなどの総合的な知識や技術が問われます。
          私たちのサークルはこの「コンテスト」を活動の中心のひとつとしています。
          <br />
          と書くと堅苦しいですが、いわばコンテストはアマチュア無線クラブにとってお祭り。
          その準備や当日の雰囲気は緊迫しつつも楽しいものです。
          当日、空いた時間で焼肉をしたり。これだけを楽しみにサークルに来る人もいるほど。
        </section>

        <section>
          <h3 className={styles.headline2}>免許と設備</h3>
          いちおうお約束なので無線局の紹介。分からない人は読み飛ばしてください。
          無線局の免許はふたつ。JA1ZLO（駒場），JA1YWX（本郷）です。
          <br />
          私たちのサークルは1.9MHz から28MHz
          までなら、アマチュア無線に許可されている最大出力1kW
          で運用することが出来ます(2002年4月に免許)。
          またアンテナも大学の無線局でも珍しい大型のアンテナを設置していて、いつでも世界と交信することが出来ます。
        </section>

        <section>
          <h3 className={styles.headline2}>人</h3>
          と、ここまで読んでいくと、アマチュア無線クラブは「理系だけの、それもばりばりの電気屋さんや機械屋さんしかいないサークルなの？」
          ってことになりますが、実際はそんなことはありません。確かにほとんどの構成員は理系の学部に所属していますが、中には文科系の人もいます。
          趣味や特技も無線だけにとどまらず、哲学屋さんもいるし、車いじりが好きだったり、デザインが趣味だったり、
          プロ並？のうどんを打てたりといろいろです。夏にはドライブしたり、バーベキューしにいったり、冬にはスキーにいったりと遊ぶことには事欠きません。
        </section>
      </div>
    </section>

    <section className={styles.content}>
      <h2 className={styles.headline1}>年間スケジュール</h2>
      <p>
        <small>
          例年のおおまかなスケジュールです。
          予定は大きく変更となる可能性があります。
        </small>
      </p>

      <section>
        <h3 className={styles.headline2}>
          <b>通年</b>
        </h3>
        <ul className={styles.list_sche_wrap}>
          <li className={styles.list_sche}>
            部会
            <br />
            <small>
              毎週火曜日18:30〜。イベントの準備をしたり、通常交信をしたり、ゆるりと活動しています。
            </small>
          </li>
        </ul>
      </section>

      <section>
        <h3 className={styles.headline2}>4〜6月</h3>
        <ul className={styles.list_sche_wrap}>
          <li className={styles.list_sche}>
            サークルオリエンテーション・新歓BBQ
          </li>
          <li className={styles.list_sche}>
            ALL JAコンテスト
            <br />
            <small>
              年間4つあるJARL主催コンテストの1つ。泊りがけで24時間、得点を競います。
            </small>
          </li>
          <li className={styles.list_sche}>
            関東社団大学間ミーティング
            <br />
            <small>
              関東のほかの大学のアマチュア無線部と交流できるイベントです。
            </small>
          </li>
          <li className={styles.list_sche}>
            ALL JA1コンテスト
            <br />
            <small>
              東大無線部主催のコンテスト。規約改訂や結果の集計も自分たちでやります。
            </small>
          </li>
        </ul>
      </section>

      <section>
        <h3 className={styles.headline2}>7〜9月</h3>
        <ul className={styles.list_sche_wrap}>
          <li className={styles.list_sche}>
            6m AND DOWNコンテスト
            <br />
            <small>
              JARL主催コンテストの1つ。高い周波数を用いるためテクニックが必要です。
            </small>
          </li>
          <li className={styles.list_sche}>
            フィールドデーコンテスト
            <br />
            <small>
              JARL主催コンテストの1つ。野外でテントとアンテナを張り参加します。
            </small>
          </li>
          <li className={styles.list_sche}>
            ハムフェア
            <br />
            <small>
              東京ビッグサイトで行われるアマチュア無線家の祭典。東大無線部も出展し、ALL
              JA1コンテストの表彰や部誌の展示などを行います。
            </small>
          </li>
        </ul>
      </section>

      <section>
        <h3 className={styles.headline2}>10〜12月</h3>
        <ul className={styles.list_sche_wrap}>
          <li className={styles.list_sche}>
            全市全郡コンテスト
            <br />
            <small>
              JARL主催コンテストの1つ。とくに規模が大きく、1年の集大成のつもりで望みます。
            </small>
          </li>
          <li className={styles.list_sche}>
            CQ WW DX CONTEST
            <br />
            <small>
              世界を舞台にしたコンテスト。地球の裏側と交信できた時の喜びは計り知れないものです。
            </small>
          </li>
          <li className={styles.list_sche}>
            駒場祭
            <br />
            <small>
              部員の電子工作の成果や、モールス練習体験などを展示します。
            </small>
          </li>
        </ul>
      </section>

      <section>
        <h3 className={styles.headline2}>1〜3月</h3>
        <ul className={styles.list_sche_wrap}>
          <li className={styles.list_sche}>
            移動運用（登山など）
            <br />
            <small>
              ハンディ機（いわゆる「トランシーバー」的な）を持って高いところを目指します。平地との電波の飛びの違いに驚きます。
            </small>
          </li>
          <li className={styles.list_sche}>
            次の新歓の準備
            <br />
          </li>
        </ul>
      </section>
    </section>

    <section id="gallery_content">
      <h2 className={styles.headline1}>ギャラリー（活動風景）</h2>
      <p>
        <small> クリックで拡大します（説明文付き）。</small>
      </p>
      <div className={styles.gallery}>
        <ImagePopup
          src="image/gallery_antenna1.jpg"
          alt=""
          comment="駒場キャンパス内の学生会館。屋上に建っているアンテナは東大無線部所有のものです。"
        />

        <ImagePopup
          src="image/gallery_antenna2.jpg"
          alt=""
          comment="学生会館屋上のアンテナ拡大。部室からローテータを用いて回転させることができます。"
        />

        <ImagePopup
          src="image/gallery_contest1.jpg"
          alt=""
          comment="コンテスト中の交信風景。テキパキさばくにはテクニックが必要ですが、すぐに慣れます。"
        />

        <ImagePopup
          src="image/gallery_transceiver1.jpg"
          alt=""
          comment="東大無線部所有の無線機（IC-9700）。これとアンテナを同軸ケーブルで繋いで交信します。"
        />

        <ImagePopup
          src="image/gallery_field1.jpg"
          alt=""
          comment="8月に行われるフィールドデーコンテストの一風景。野外にアンテナを設置して交信します。"
        />

        <ImagePopup
          src="image/gallery_field2.jpg"
          alt=""
          comment="8月に行われるフィールドデーコンテストの一風景。腹が減っては戦は出来ぬ、ですね。"
        />
      </div>
    </section>
  </article>
);

export default ForNewcomer;

interface ImagePopupProps {
  src: string;
  alt: string;
  comment: string;
}

const ImagePopup: React.FC<ImagePopupProps> = (props) => {
  const [opened, setOpen] = useState<boolean>(false);
  return (
    <div>
      <div className={styles.btn_open} onClick={() => setOpen((a) => !a)}>
        <img
          src={props.src}
          alt={props.comment}
          className={styles.gallery_image}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div
        className={styles.popup}
        style={{ display: opened ? "block" : "none" }}
        aria-hidden="true"
      >
        <div className={styles.popup_content}>
          <img src={props.src} alt={props.alt} className={styles.layer_img} />
          <br />▲{props.comment}
          <br />
        </div>
        <button
          type="button"
          className={styles.btn_close}
          onClick={() => setOpen(false)}
        >
          閉じる
        </button>
      </div>
    </div>
  );
};
