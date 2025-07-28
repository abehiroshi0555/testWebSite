const questions = [
  { q: "素早く動けるキャラが好きですか？",     points: {yes: "speed", no: "power"} },
  { q: "一撃の火力よりも手数（コンボ）を重視しますか？", points: {yes: "tech", no: "power"} },
  { q: "テクニカルな操作（難しいコンボや入力）を練習してでも使いこなしたいですか？", points: {yes: "tech", no: "balance"} },
  { q: "重量級のキャラで相手をふっとばすのが好きですか？", points: {yes: "power", no: "speed"} },
  { q: "自分は“安全に立ち回る”より“攻める”方が好きだと思いますか？", points: {yes: "speed", no: "balance"} },
  { q: "キャラの性能が極端なほうが楽しいですか？（速すぎる・重すぎるなど）", points: {yes: "power", no: "balance"} },
];

const results = {
  sonic: {
    name: "ソニック（スピード型）",
    desc: "素早い動きで相手を翻弄！スピード重視のあなたにピッタリ！",
    img: "images/sonic.png"
  },
  fox: {
    name: "フォックス（テクニック型）",
    desc: "テクニカルな操作で華麗に勝ちたいあなたにおすすめ！",
    img: "images/fox.png"
  },
  ganon: {
    name: "ガノンドルフ（パワー型）",
    desc: "一撃必殺！重い攻撃で敵を吹っ飛ばすのが快感なあなたに！",
    img: "images/ganon.png"
  },
  mario: {
    name: "マリオ（オールラウンド型）",
    desc: "どんな状況にも対応できるバランス派！",
    img: "images/mario.png"
  }
};

// ポイント加算
function getResult(score) {
  // 得点集計
  // speed, tech, power, balance
  // 決定ロジック
  if (score.speed >= 2 && score.speed >= score.tech && score.speed >= score.power && score.speed >= score.balance) {
    return "sonic";
  }
  if (score.tech >= 2 && score.tech >= score.speed && score.tech >= score.power && score.tech >= score.balance) {
    return "fox";
  }
  if (score.power >= 2 && score.power >= score.tech && score.power >= score.speed && score.power >= score.balance) {
    return "ganon";
  }
  // 同点などバランス型はマリオ
  return "mario";
}

// 描画
const app = document.getElementById("content");
let qIndex = 0;
let score = {speed:0, tech:0, power:0, balance:0};

function showQuestion() {
  if (qIndex >= questions.length) return showResult();
  const q = questions[qIndex];
  app.innerHTML = `
    <div class="question">${q.q}</div>
    <div class="btns">
      <button id="yesBtn">YES</button>
      <button id="noBtn">NO</button>
    </div>
    <div style="text-align:center; color:#bbb;">${qIndex+1} / ${questions.length}</div>
  `;
  document.getElementById('yesBtn').onclick = () => answer('yes');
  document.getElementById('noBtn').onclick = () => answer('no');
}

function answer(ans) {
  const point = questions[qIndex].points[ans];
  score[point]++;
  qIndex++;
  showQuestion();
}

function showResult() {
  const chara = getResult(score);
  const r = results[chara];
  app.innerHTML = `
    <div class="result">
      <img src="${r.img}" alt="${r.name}">
      <h2>${r.name}</h2>
      <p>${r.desc}</p>
      <button class="again" id="restartBtn">もう一度診断</button>
    </div>
  `;
  document.getElementById('restartBtn').onclick = restart;
}

function restart() {
  qIndex = 0;
  score = {speed:0, tech:0, power:0, balance:0};
  showQuestion();
}

// 初期化
showQuestion();
